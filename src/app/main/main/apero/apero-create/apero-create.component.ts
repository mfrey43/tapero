import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {Apero} from '../apero.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-apero-create',
  templateUrl: './apero-create.component.html',
  styleUrls: ['./apero-create.component.scss']
})
export class AperoCreateComponent implements OnInit {

  public form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    date: new FormControl(new Date(), [Validators.required]),
  });

  constructor(private db: AngularFirestore, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    const apero: Apero = {
      title: this.form.get('title').value,
      date: this.form.get('date').value.toISOString(),
    };
    this.db.collection<Apero>('aperos').add(apero).then(() => {
      this.router.navigate(['main/apero']);
    });
  }

  abort() {
    this.router.navigate(['main/apero']);
  }
}
