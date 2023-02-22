import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeatureRoutingModule } from "./feature-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, FeatureRoutingModule, CoreModule],
})
export class FeatureModule {}
