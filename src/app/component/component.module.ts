import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { CardProfileComponent } from "./card-profile/card-profile.component";
import { AnnouncementComponent } from "./announcement/announcement.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    NavComponent,
    CardProfileComponent,
    AnnouncementComponent,
  ],
  exports: [HeaderComponent, NavComponent],
})
export class ComponentModule {}
