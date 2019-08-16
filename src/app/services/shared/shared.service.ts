import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../../environments/environment.prod';
import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.getConfigs();
   }
  
   getConfigs(){
     this.apiUrl = environment.prd.apiEndpoint;
   }

   get(serviceUrl){
     console.log('GET REQUEST for GET URL - ' + this.apiUrl + serviceUrl)
     return this.httpClient.get<any>(this.apiUrl + serviceUrl)
      .catch(this.handleError)
   }

   post(serviceUrl, resource){
    console.log('POST REQUEST - JSON'  +JSON.stringify(resource) +'  for URL ' +this.apiUrl + serviceUrl )
     return this.httpClient.post<any>(this.apiUrl + serviceUrl, resource)
      .catch(this.handleError)
   }

   handleError(error: Response){
     console.log('Error occured')
     return Observable.throw(error);
     
   }
}
