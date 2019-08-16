import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { ContactDetails } from '../../models/contactDetails';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactData : ContactDetails = new ContactDetails();

  constructor(public sharedService : SharedService) { } 

  ngOnInit() {
  }

  sendEmail(){ 
    console.log('Contact form request : ' +JSON.stringify(this.contactData))
    this.sharedService.post("sendEmail", this.contactData).subscribe(
      (data) => {
        console.log('email sent successfully')
      }
    )
  }



}
