import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {Apero} from './apero.model';
import {AperoService} from './apero.service';

@Component({
  selector: 'app-apero',
  templateUrl: './apero.component.html',
  styleUrls: ['./apero.component.scss']
})
export class AperoComponent implements OnInit {

  items: Observable<DocumentChangeAction<Apero>[]>;

  constructor(angularFirestore: AngularFirestore, public aperoService: AperoService) {
    this.items = angularFirestore.collection<Apero>('aperos', ref => ref.orderBy('date', 'desc')).snapshotChanges();
  }

  ngOnInit(): void {
  }
}
