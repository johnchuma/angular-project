import { Component,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { mapData } from './shared/data';
import { GoogleMapsModule } from '@angular/google-maps';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,GoogleMapsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {
   data = mapData
   mapOption:google.maps.MapOptions ={center: { lat: mapData.route.currentLocation.lat, lng: mapData.route.currentLocation.lng },
                                      zoom : 8}
   startMarker = mapData.route.start
   destinationMarker = mapData.route.destination
   currentDestinationMarker = mapData.route.currentLocation;
   busIcon = "https://static.vecteezy.com/system/resources/previews/022/794/442/non_2x/free-yellow-bus-images-transparent-yellow-bus-image-with-transparent-background-free-png.png"

   busMarkerOptions:google.maps.MarkerOptions = {
    position:this.currentDestinationMarker,
     clickable:true,
     title:"Bus 1 ",
     icon:"assets/bus.png",

  }
  waypoints = mapData.route.waypoints

}



