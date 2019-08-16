import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { HireDialogComponent } from 'src/app/common-components/hire-dialog/hire-dialog.component';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  dialogRef: MatDialogRef<HireDialogComponent>;
  constructor(private spinnerService: SpinnerService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openHireDialog(){
    this.dialogRef = this.dialog.open(HireDialogComponent, {
      disableClose: false
    });
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Hire Accepted')
      }
      this.dialogRef = null;
    });
  } 

}
