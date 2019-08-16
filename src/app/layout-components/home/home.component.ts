import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { SharedService } from '../../services/shared/shared.service';
import * as moment_timezone from 'moment-timezone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userTime:string;
  userCitySplit:any;
  userCity:string;
  userWeather:string;
  weatherResult:any;
  userTimezone:string;
  userWeatherIcon:string;
  @Output() selectedTab = new EventEmitter();
  tabIndex: number;
  constructor(private spinnerService: SpinnerService,private sharedService: SharedService) { }

  ngOnInit() { 
    this.getUserSpecificDetails();
  }

  getUserSpecificDetails(){
    this.userTimezone=moment_timezone.tz.guess();
    this.userTime=moment_timezone().tz(this.userTimezone).format('MMM DD YYYY hh:mm A')
    this.userCitySplit=this.userTimezone.split('/');
    this.userCity=this.userCitySplit[1].replace(/_/g, " ")
    this.sharedService.get('getUserWeather').subscribe(
      data => {
        console.log('Response receieved from Weather API : ' +JSON.stringify(data))
        this.weatherResult = data;
        this.userWeather = `${this.weatherResult.weather[0].main} , ${this.weatherResult.main.temp}`;
        this.userWeatherIcon= this.weatherResult.weather[0].icon;
    })
    console.log('userCity' +this.userCity)
  }

  changeBackground(event: any){
    console.log('event is ' +event.index)
    this.tabIndex = event.index;
    this.selectedTab.emit(this.tabIndex)
    console.log('event is emitted')
  }

}
