import { Routes } from '@angular/router';
import { ParcelComponent } from './parcel/parcel.component';
import { BusesComponent } from './buses/buses.component';
import { DetailsComponent } from './details/details.component';


export const routes: Routes = [
    {path:"",component:ParcelComponent},
    {path:"buses",component:BusesComponent},
    {path:"details/:id",component:DetailsComponent}
];
