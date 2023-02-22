import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { RegistrationModel } from "src/app/shared/models/registration-model";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-registartion",
  templateUrl: "./registartion.component.html",
  styleUrls: ["./registartion.component.scss"],
})
export class RegistartionComponent implements OnInit, OnDestroy {
  registerForm!: FormGroup;
  previewForm!: FormGroup;
  completeForm!: FormGroup;
  submitted = false;
  isLinear: boolean = true;
  private subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      state: ["", Validators.required],
      confirmemail: ["", [Validators.required, Validators.email]],
      subscribenotification: [true],
    });

    this.previewForm = this.formBuilder.group({
      prefirstName: [""],
    });

    this.completeForm = this.formBuilder.group({
      dummy: [""],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (
      this.registerForm.get("email").value !=
      this.registerForm.get("confirmemail").value
    ) {
      alert("Info!! :-)\n\n" + "confrim email are different.");
      return;
    }
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert("Info!! :-)\n\n" + "Some required Infromation is missing.");
      return;
    }
  }

  onSave() {
    const saveRegistartionSubscription = this.userService
      .saveRegistartion(this.registerForm.value)
      .subscribe({
        next: (data: RegistrationModel) => {
          if (data) {
            alert(
              "Info!! :-)\n\n" +
                JSON.stringify(this.registerForm.value, null, 4)
            );
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    this.subscription.add(saveRegistartionSubscription);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
