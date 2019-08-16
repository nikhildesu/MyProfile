import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ContactDetails } from '../../models/contactDetails';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-hire-dialog',
  templateUrl: './hire-dialog.component.html',
  styleUrls: ['./hire-dialog.component.css']
})
export class HireDialogComponent implements OnInit {
  contactData : ContactDetails = new ContactDetails();
  constructor(public dialogRef: MatDialogRef<HireDialogComponent>,public sharedService : SharedService) { }

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
