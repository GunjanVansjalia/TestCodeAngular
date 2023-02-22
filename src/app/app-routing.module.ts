import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./core/header/header.component";
import { LoginComponent } from "./core/login/login.component";
import { RegistartionComponent } from "./core/registartion/registartion.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegistartionComponent,
  },
  {
    path: "core",
    loadChildren: () => import("./core/core.module").then((m) => m.CoreModule),
  },
  {
    path: "shared",
    loadChildren: () =>
      import("./shared/shared.module").then((m) => m.SharedModule),
  },
  {
    path: "feature",
    loadChildren: () =>
      import("./feature/feature.module").then((m) => m.FeatureModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
