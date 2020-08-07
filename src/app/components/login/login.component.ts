import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from "src/app/product.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  obj: any;
  cuser: any;

  constructor(
    private products: ProductService,
    private router: Router,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      email: ["", [Validators.required]],
      pwd: ["", [Validators.required]]
    });
  }
  submit() {
    let hint = 0;
    this.products.getformData().subscribe(res => {
      let demo = JSON.stringify(res);
      this.obj = JSON.parse(demo);
      for (let i = 0; i < this.obj.length; i++) {
        console.log(this.obj[i].email);
        if (
          this.loginForm.value.email == this.obj[i].email &&
          this.loginForm.value.pwd == this.obj[i].pwd
        ) {
          hint = 1;
          this.cuser = {
            id: this.obj[i].id,
            email: this.obj[i].email,
            pwd: this.obj[i].pwd,
            username: this.obj[i].username,
            address: this.obj[i].address,
            profile: this.obj[i].profile
          };

          this.products.saveCuser(this.cuser).subscribe();
          if (this.obj[i].profile == "driver") {
            this.router.navigate(["driver"]);
          }
          if (this.obj[i].profile == "user") {
            this.router.navigate(["home"]);
          }
        }
      }
      if (hint == 0) {
        alert("invalid uszer");
      }
    });
  }
  saveCuser() {
    this.products.saveCuser(this.cuser).subscribe();
  }
}
