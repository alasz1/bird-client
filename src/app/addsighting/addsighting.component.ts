import { Component, OnInit } from '@angular/core';
import { BirdService } from '../bird.service'
import { LocationService } from '../location.service'
import { Sighting } from '../bird'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsighting',
  templateUrl: './addsighting.component.html',
  styleUrls: ['./addsighting.component.css']
})
export class AddsightingComponent implements OnInit {

  constructor(private birdService: BirdService, private locationService: LocationService, private router: Router) { }

  ngOnInit() {
  }

  addSighting(species: string, rarity: string, notes: string, timestamp: number, datetime: string, coordinates: string) {

    // get timestamp & datetime
    timestamp = Date.now();
    let rawdate = new Date;
    let minutes = rawdate.getMinutes();
    let minutesStr = "";

    // add 0 if minutes are only one digit long
    if (minutes.toString().length < 2) {
      minutesStr = "0" + minutes.toString();
    }

    // concatenate date & time
    datetime = "" + rawdate.getDate() + "." + (rawdate.getMonth() + 1) + "." + rawdate.getFullYear() + ", " + rawdate.getHours() + ":" + minutesStr;
    console.log(datetime);

    // get geolocation

    // If promise has returned location
    this.locationService.getPosition().then(pos => {
      console.log(`Lng: ${pos.lng}, Lat: ${pos.lat}`);
      let coordinates = `Lat: ${pos.lat}, Lng: ${pos.lng}`;

      console.log(coordinates)

      let nb = new Sighting(timestamp, species, rarity, notes, timestamp, datetime, coordinates);
      this.birdService.addSighting(nb).subscribe((newsighting) => {
        console.dir(newsighting);
        this.router.navigateByUrl("/");
      });
    })

      // If no geolocation could be fetched
      .catch(error => {
        console.log(error.message)
        coordinates = "coordinates unavailable";

        let nb = new Sighting(timestamp, species, rarity, notes, timestamp, datetime, coordinates);
        this.birdService.addSighting(nb).subscribe((newsighting) => {
          console.dir(newsighting);
          this.router.navigateByUrl("/");
        });
      });
  }

}
