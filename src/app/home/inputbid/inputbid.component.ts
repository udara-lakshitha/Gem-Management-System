import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-inputbid',
  templateUrl: './inputbid.component.html',
  styleUrls: ['./inputbid.component.scss']
})
export class InputbidComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public amount:any) { }

  ngOnInit(): void {
  }

}
