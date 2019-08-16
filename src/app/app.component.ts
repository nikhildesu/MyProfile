import { Component } from '@angular/core';
import { SpinnerService } from './services/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newAppsss';
  LOAD_SPINNER: boolean = false;
  backgroundImageName: string = "linear-gradient(0.3turn, #8ed7a1, #f4f0d4, #e0b0d8)";

  constructor(private spinnerService: SpinnerService) { }

   //Spinner component initiated
   ngOnInit() { 
    console.log('app comp loaded')
    this.spinnerService.status.subscribe((val: boolean) => {
      this.LOAD_SPINNER = val;
    });
  }

  changeNewBackground(tabIndexValue: any){
    console.log('event is received')
    console.log('User changed tab to ' +tabIndexValue)
    if(tabIndexValue == 0){
    this.backgroundImageName = "linear-gradient(0.3turn, #8ed7a1, #f4f0d4, #e0b0d8)"
    } else if(tabIndexValue == 1){
      this.backgroundImageName = "linear-gradient(0.2turn, #f4f0d4, #c8edf9, #ffffff)"
    } else if(tabIndexValue == 2){
      this.backgroundImageName = "linear-gradient(0.65turn, #f5d6b5, #ebf8e1, #9cccdd4f)"
    } else if(tabIndexValue == 3){
      this.backgroundImageName = "linear-gradient(0.35turn, #f0af80, #ffffff, #9cccdd4f)"
    } else if(tabIndexValue == 4){
      this.backgroundImageName = "linear-gradient(0.6turn, #4abae2, #ffffff, #abdecd)"
    }
  }
}
