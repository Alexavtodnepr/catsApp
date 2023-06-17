import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CatsApiService } from 'src/app/services/cats-api.service';
import { Select, Store } from '@ngxs/store';
import { CatState } from 'src/app/store/catArray.state';
import { Observable } from 'rxjs';
import { AddCats } from 'src/app/store/catArray.action';
import { ICat } from 'src/app/models/cat';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  catsImages!: ICat[];
  constructor(
    private catsServ: CatsApiService,
    private cd: ChangeDetectorRef,
    private store: Store,
  ) {}

  public ngOnInit() {
    this.store.select(CatState).subscribe(cats => {
      this.catsImages = cats.cats;
      this.cd.markForCheck();
    });
  }
}
