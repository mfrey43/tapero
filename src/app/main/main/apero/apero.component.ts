import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {Apero} from './apero.model';

@Component({
  selector: 'app-apero',
  templateUrl: './apero.component.html',
  styleUrls: ['./apero.component.scss']
})
export class AperoComponent implements OnInit {

  items: Observable<Apero[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection<Apero>('aperos', ref => ref.orderBy('date', 'desc')).valueChanges();
  }

  ngOnInit(): void {
  }
}
