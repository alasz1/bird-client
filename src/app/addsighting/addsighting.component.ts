import { Component, OnInit } from '@angular/core';
import { BirdService } from '../bird.service'
import { LocationService } from '../location.service'
import { Sighting } from '../bird'
import { ActivatedRoute, Router } from '@angular/router';
import { getLocaleDateFormat, formatDate, DatePipe, getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-addsighting',
  templateUrl: './addsighting.component.html',
  styleUrls: ['./addsighting.component.css']
})
export class AddsightingComponent implements OnInit {
  // bird: Bird[];


  constructor(private birdService: BirdService, private locationService: LocationService, private router:Router) { }

  ngOnInit() {
  }

  addSighting(species:string, rarity:string, notes:string, timestamp:number, datetime:string, coordinates:string){

    // get timestamp & datetime
    timestamp = Date.now();
    let rawdate = new Date;
    datetime = ""+rawdate.getDate()+"."+(rawdate.getMonth()+1) +"."+rawdate.getFullYear()+", "+rawdate.getHours()+":"+rawdate.getMinutes();
    console.log(datetime);

    // get geolocation
   
    // If promise has returned location
    this.locationService.getPosition().then(pos => 
      {
         console.log(`Lng: ${pos.lng}, Lat: ${pos.lat}`);
         let coordinates = `Lng: ${pos.lng}, Lat: ${pos.lat}`;
      

    console.log(coordinates)

   
    let nb = new Sighting(null,species,rarity,notes,timestamp,datetime,coordinates);
    this.birdService.addSighting(nb).subscribe((newsighting)=>{
    console.dir(newsighting);
    this.router.navigateByUrl("/");
  });
  })
  
  // If no geolocation could be fetched
  .catch(error => 
    {
      coordinates = error.message;
      console.log(coordinates)

      let nb = new Sighting(null,species,rarity,notes,timestamp,datetime,coordinates);
      this.birdService.addSighting(nb).subscribe((newsighting)=>{
      console.dir(newsighting);
      this.router.navigateByUrl("/");
    });
    });
}

}
