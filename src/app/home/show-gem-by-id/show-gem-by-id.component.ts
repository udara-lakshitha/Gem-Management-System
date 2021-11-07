import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SharedService } from 'src/app/service/shared.service';
import { Gem } from 'src/app/gem';

@Component({
  selector: 'app-show-gem-by-id',
  templateUrl: './show-gem-by-id.component.html',
  styleUrls: ['./show-gem-by-id.component.css']
})
export class ShowGemByIdComponent implements OnInit {

  
  gem: any;

 
  
  constructor(
    private service: SharedService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

 
  

  ngOnInit(): void {
    this.getGem();
  }

  getGem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getGemById(id)
      .subscribe(gem => this.gem = gem);
  }

  goBack(): void {
    this.location.back();
  }

}
