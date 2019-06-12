import { Component, OnInit } from '@angular/core';
import { BirdService } from '../bird.service'
import { Sighting } from '../bird'
import { getPreviousOrParentTNode } from '@angular/core/src/render3/state';
import {MainComponent} from '../main/main.component';
import { ActivatedRoute, Router } from '@angular/router';
//import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-editsighting',
  templateUrl: './editsighting.component.html',
  styleUrls: ['./editsighting.component.css']
})
export class EditsightingComponent implements OnInit {

  sighting: Sighting;
  

  constructor(private birdService: BirdService,private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params=>{
      let id:number=params['id'];
      this.birdService.getSighting(id).subscribe((sighting:Sighting)=>{
      this.sighting=sighting;
      console.log(this.sighting)
      })
    })
  }

  update(){
    console.dir(this.sighting);
    this.birdService.updateSighting(this.sighting).subscribe((sighting:Sighting)=>{
    this.router.navigateByUrl("/");    
    })
  }

  delete(){
    this.birdService.deleteSighting(this.sighting.id).subscribe(()=>{
    this.router.navigateByUrl("/");
    })
  }

  goBack(){
    this.router.navigateByUrl("/");
  }
  
}
