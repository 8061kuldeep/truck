import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DriverRoutingModule } from "./driver-routing.module";
import { CreatePostComponent } from "./create-post/create-post.component";
import { DashbordComponent } from "./dashbord/dashbord.component";
import { DriverhomeComponent } from "./driverhome/driverhome.component";
import { HeaderModule } from "../header/header.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FindstayComponent } from "./findstay/findstay.component";
import { LoclanewsComponent } from './loclanews/loclanews.component';

@NgModule({
  declarations: [
    CreatePostComponent,
    DashbordComponent,
    DriverhomeComponent,
    FindstayComponent,
    LoclanewsComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ]
})
export class DriverModule {}
