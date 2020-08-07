import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from "src/app/product.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  Signupform: FormGroup;
  formData: any[];

  storage: any;

  constructor(
    private products: ProductService,
    private router: Router,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.products.getformData().subscribe(
      res => {
        let demo = JSON.stringify(res);
        this.formData = JSON.parse(demo);
      },
      err => console.log(err)
    );
    this.Signupform = this.builder.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required]],
      profile: ["", [Validators.required]],
      address: ["", [Validators.required]],
      pwd: ["", [Validators.required]]
    });
  }
  submit() {
    console.log(this.formData);
    if (this.formData == null) {
      this.formData = [];
    }
    this.formData = [
      ...this.formData,
      {
        id: Math.floor(Math.random() * 100),
        username: this.Signupform.value.username,
        email: this.Signupform.value.email,
        profile: this.Signupform.value.profile,
        address: this.Signupform.value.address,
        pwd: this.Signupform.value.pwd,
        request: [{ request: "default" }]
      }
    ];

    this.router.navigate(["login"]);
  }
  save() {
    this.products.saveformData(this.formData).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }
}
