import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { PostwallComponent } from "./components/postwall/postwall.component";
import { HomeComponent } from "./components/home/home.component";
import { DashbordComponent } from "./driver/dashbord/dashbord.component";
import { CreatePostComponent } from "./driver/create-post/create-post.component";
import { DriverhomeComponent } from "./driver/driverhome/driverhome.component";
import { UserGuard } from "./user.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "postwall", component: PostwallComponent },
  { path: "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
