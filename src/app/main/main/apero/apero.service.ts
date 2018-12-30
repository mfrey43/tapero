import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentChangeAction, DocumentSnapshot} from '@angular/fire/firestore';
import {Apero} from './apero.model';
import {firestore} from 'firebase/app';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AperoService {

  public selectedApero: DocumentSnapshot<Apero> = null;

  constructor(private angularFirestore: AngularFirestore, private router: Router, private store: Store<{}>) {
    angularFirestore.collection<Apero>('aperos').stateChanges().subscribe((changes: DocumentChangeAction<Apero>[]) => {
        changes.forEach(change => {
          store.dispatch({
            type: `[Apero] ${change.type}`,
            payload: {
              id: change.payload.doc.id,
              ...change.payload.doc.data()
            }
          });
        });
      }
    );
  }

  private static readonly getNextAperoQuery = ref => ref.where('date', '>', new Date().toISOString()).orderBy('date', 'asc').limit(1);

  getNextApero(): Observable<DocumentSnapshot<Apero>> {
    return this.angularFirestore.collection<Apero>('aperos', AperoService.getNextAperoQuery).get().pipe(map((snapshot: firestore.QuerySnapshot) => {
      if (snapshot.size > 0) {
        return <DocumentSnapshot<Apero>>snapshot.docs[0];
      } else {
        return null;
      }
    }));
  }

  selectApero(apero: DocumentSnapshot<Apero>) {
    this.selectedApero = apero;
    this.router.navigate(['/main/apero-view']);
  }

  deleteApero(apero: DocumentSnapshot<Apero>) {
    this.angularFirestore.doc(apero.ref).delete().then(() => {
      this.router.navigate(['/main/apero']);
    });
  }
}
