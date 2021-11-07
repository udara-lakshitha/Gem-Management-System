import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AdminserviceService } from 'src/app/service/adminservice.service';

@Component({
  selector: 'app-addlink',
  templateUrl: './addlink.component.html',
  styleUrls: ['./addlink.component.scss']
})
export class AddlinkComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public dataItem:any,public service : AdminserviceService) { }

  ngOnInit(): void {
  }

}
