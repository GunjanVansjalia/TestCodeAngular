import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { FooterComponent } from "./components/footer/footer.component";
import { TitleComponent } from "./components/title/title.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [FooterComponent, TitleComponent],
  imports: [CommonModule, SharedRoutingModule, HttpClientModule],
  exports: [FooterComponent, TitleComponent],
})
export class SharedModule {}
