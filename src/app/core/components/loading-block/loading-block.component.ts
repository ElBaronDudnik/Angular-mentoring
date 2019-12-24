import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { ILoader } from './loading-block.interface';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.scss'],
})
export class LoadingBlockComponent implements OnInit, OnDestroy {
  show = false;

  private subscription!: Subscription;
  constructor(
    private loaderService: LoadingService
  ) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: ILoader) => {
        console.log(state);
        this.show = state.show;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
