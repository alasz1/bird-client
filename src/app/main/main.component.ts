import { Component, OnInit } from '@angular/core';
import { BirdService } from '../bird.service'
import { Sighting } from '../bird'
import { AppRoutingModule } from '../app-routing.module';
import { TooltipPosition } from '@angular/material';
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

  getAllSightings(): void {

    // read data from localstorage
    let birdData = JSON.parse(localStorage.getItem("birdData"));
    console.log("birdData retrieved from localstorage: ", birdData)

    if (birdData) {
    this.bird = birdData;
    }

    // read data from server
    this.birdService.getSightings().subscribe(bird => {
      this.bird = bird;
      console.log("birdData retrieved from server: ", bird)
      
      // localstorage here!
      // console.log(this.bird[1])

      // this.bird.forEach(birdEntry => {
      //   console.log(birdEntry);
      //   localStorage.setItem(JSON.stringify(birdEntry.id), birdEntry.species);
      // });

      // send data to localstorage
      localStorage.setItem("birdData", JSON.stringify(this.bird));

      // read data from localstorage
      // let birdData = JSON.parse(localStorage.getItem("birdData"));
      // console.log("birdData: ", birdData)
    });
  }

}
