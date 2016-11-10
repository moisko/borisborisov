import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {AboutMeComponent} from "./aboutme/aboutme.component";
import {FollowMeComponent} from "./followme/followme.component";
import {ExperienceComponent} from "./experience/experience.component";
import {AbilitiesComponent} from "./abilities/abilities.component";
import {ProjectsComponent} from "./projects/projects.component";
import {LanguagesComponent} from "./languages/languages.component";
import {PictureComponent} from "./picture/picture.component";
import {StarComponent} from "./star/star.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    FollowMeComponent,
    ExperienceComponent,
    AbilitiesComponent,
    ProjectsComponent,
    LanguagesComponent,
    PictureComponent,
    StarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
