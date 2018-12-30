import { Component, OnInit } from '@angular/core';
import {AperoService} from '../apero.service';
import {DocumentSnapshot} from '@angular/fire/firestore';
import {Apero} from '../apero.model';

@Component({
  selector: 'app-apero-view',
  templateUrl: './apero-view.component.html',
  styleUrls: ['./apero-view.component.scss']
})
export class AperoViewComponent implements OnInit {

  constructor(public aperoService: AperoService) {

  }

  ngOnInit() {
  }

  remove(apero: DocumentSnapshot<Apero>) {
    this.aperoService.deleteApero(apero);
  }
}
