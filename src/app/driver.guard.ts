import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

@Injectable({
  providedIn: "root"
})
export class DriverGuard implements CanActivate {
  obj: any;
  constructor(private products: ProductService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.products.getCuser().subscribe(res => {
      let demo = JSON.stringify(res);
      this.obj = JSON.parse(demo);
    });

    if (this.obj.profile == "user") {
      alert("cant go");
      return false;
    }
    if (this.obj.profile == "driver") {
      return true;
    }
  }
}
