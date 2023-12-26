import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../devices.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [GoogleMapsModule,CommonModule,FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  trackerId = 0
  startingDate:any
  endingDate:any
  details:any;
  title:any;
  startMarker:any
  destinationMarker:any
  waypoints:any
  mapOption:any
  constructor(private route: ActivatedRoute,private deviceService:DevicesService){
   this.trackerId = route.snapshot.params["id"]
  }
  dateRange = {
    start:'2023-12-23',
    end:'2023-12-26'
  }
  refreshDetails(){
    // this.title = 'John Chuma'
    this.findParcelDetails(this.startingDate,this.endingDate)
  }
  ngOnInit(): void {
    this.findParcelDetails(this.startingDate,this.endingDate)
  }

findParcelDetails(startingDate:any,endingDate:any){
  this.deviceService.getDestinations().then((data)=>{
    this.startMarker = {lat: data.tracking.start_location.coordinates[1],lng: data.tracking.start_location.coordinates[0]}
    this.endingDate = {lat: data.tracking.destination_location.coordinates[1],lng: data.tracking.destination_location.coordinates[0]}
  })
  this.deviceService.getDeviceTraceHistory(this.trackerId,this.dateRange.start,this.dateRange.end).then((data)=>{
    this.details = data;

    this.waypoints = data.features.map((item:any)=>{
     return {"lat":item.properties.latitude,"lng":item.properties.longitude}
    })
    this.mapOption={center:{lat: this.waypoints[0]["lat"], lng: this.waypoints[0]["lng"] },
    zoom : 15 }
    this.startMarker = {lat: this.waypoints[0]["lat"], lng: this.waypoints[0]["lng"] }
    this.destinationMarker = {lat: this.waypoints[this.waypoints.length-1]["lat"], lng: this.waypoints[this.waypoints.length-1]["lng"] }
   })
}
}
