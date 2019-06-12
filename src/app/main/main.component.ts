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
    this.getAllSightings();
    
  }

  getAllSightings():void {
    this.birdService.getSightings().subscribe(bird => {
      this.bird = bird; 

        // localstorage here!
        console.log(this.bird[1])

        // this.bird.forEach(birdEntry => {
        //   console.log(birdEntry);
        //   localStorage.setItem(JSON.stringify(birdEntry.id), birdEntry.species);
        // });


          localStorage.setItem("birdData", JSON.stringify(this.bird));
        

        let a = JSON.parse(localStorage.getItem("birdData"));
        console.log("birdData: ", a)

      });
    }
  
}
