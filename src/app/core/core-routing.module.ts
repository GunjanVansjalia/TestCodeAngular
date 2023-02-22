import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistartionComponent } from "./registartion/registartion.component";

const routes: Routes = [
  {
    path: "register",
    component: RegistartionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
