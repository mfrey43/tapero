import {Component, OnInit} from '@angular/core';
import {AperoService} from '../apero.service';
import {Router} from '@angular/router';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  public loading = false;
  public noApero = false;

  constructor(private aperoService: AperoService, private router: Router) {
  }

  ngOnInit() {
  }

  onTap() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.noApero = false;
    this.aperoService.getNextApero().pipe(delay(1000)).subscribe(apero => {
      this.loading = false;
      if (apero) {
        this.aperoService.selectApero(apero);
      } else {
        this.noApero = true;
      }
    });
  }
}
