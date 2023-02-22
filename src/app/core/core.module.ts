import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegistartionComponent } from "./registartion/registartion.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from "@angular/material/stepper";

@NgModule({
  declarations: [LoginComponent, RegistartionComponent, HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatStepperModule,
  ],
  exports: [LoginComponent, RegistartionComponent, HeaderComponent],
})
export class CoreModule {}
