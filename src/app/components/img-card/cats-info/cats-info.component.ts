import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { CatsApiService } from 'src/app/services/cats-api.service';

@Component({
  selector: 'app-cats-info',
  templateUrl: './cats-info.component.html',
  styleUrls: ['./cats-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatsInfoComponent implements OnInit {
  @Input() catId!: string;
  cat!: any;
  constructor(
    private catsServ: CatsApiService,
    private cd: ChangeDetectorRef,
  ) {}
  public ngOnInit() {
    this.catsServ.getInfoById(this.catId).subscribe(el => {
      this.cat = el;
      this.cd.markForCheck();
    });
  }
}
