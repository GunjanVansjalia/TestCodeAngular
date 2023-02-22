import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public password = new FormControl();
  constructor() {}

  ngOnInit(): void {}

  loginclick() {
    if (
      this.password != null &&
      this.password != undefined &&
      this.password.value != "" &&
      this.password.value == "1234"
    ) {
      window.location.href = "./register";
    }
  }
}
