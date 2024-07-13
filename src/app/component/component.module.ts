import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";
import { CardProfileComponent } from "./card-profile/card-profile.component";
import { CardComponent } from "./card/card.component";
import { AnnouncementComponent } from "./announcement/announcement.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CardProfileComponent,
    CardComponent,
    AnnouncementComponent,
  ],
  exports: [HeaderComponent, NavComponent],
})
export class ComponentModule {}
