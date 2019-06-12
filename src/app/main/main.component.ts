import { Component, OnInit } from '@angular/core';
import { BirdService } from '../bird.service'
import { Sighting } from '../bird'

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

      // send data to localstorage
      localStorage.setItem("birdData", JSON.stringify(this.bird));

    });
  }
}
