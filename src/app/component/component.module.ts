import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { CardProfileComponent } from "./card-profile/card-profile.component";
import { AnnouncementComponent } from "./announcement/announcement.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    NavComponent,
    CardProfileComponent,
    CardComponent,
    AnnouncementComponent,
  ],
  exports: [HeaderComponent, NavComponent],
})
export class ComponentModule {}
