import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreatePostComponent } from "./create-post/create-post.component";
import { DashbordComponent } from "./dashbord/dashbord.component";
import { DriverhomeComponent } from "./driverhome/driverhome.component";
import { DriverGuard } from "../driver.guard";
import { FindstayComponent } from "./findstay/findstay.component";
import { LoclanewsComponent } from "./loclanews/loclanews.component";

const routes: Routes = [
  {
    path: "driver",

    children: [
      {
        path: "dashbord",

        component: DashbordComponent
      },
      { path: "", component: DriverhomeComponent },
      { path: "createpost", component: CreatePostComponent },
      {
        path: "findstay",

        component: FindstayComponent
      },
      {
        path: "localnews",

        component: LoclanewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule {}
