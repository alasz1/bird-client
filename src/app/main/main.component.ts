import { Component, OnInit } from '@angular/core';
import { BirdService } from '../bird.service'
import { Sighting } from '../bird'
import { AppRoutingModule } from '../app-routing.module';
import {TooltipPosition} from '@angular/material';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  bird: Sighting[];

  constructor(private birdService: BirdService) {
  }

  ngOnInit() {
    this.getAllSightings()
  }

  getAllSightings():void {
    this.birdService.getSightings().subscribe(bird => 
      this.bird = bird);
    }
  
}
