import { Component,AfterViewInit ,Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink,RouterModule,ActivatedRoute } from '@angular/router';
import { mapData } from './shared/data';
import { GoogleMapsModule } from '@angular/google-maps';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,GoogleMapsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {
 routes = [
  {route:"Parcels",path:""},
  {route:"buses",path:["/buses"]},
]
selectedRoute:any = "";
route:ActivatedRoute = Inject(ActivatedRoute)

}



