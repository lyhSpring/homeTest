import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { RouterModule, Routes } from "@angular/router";
//import { MdSliderModule } from "@angular2-material/slider";
//import { MdCoreModule,OVERLAY_PROVIDERS,MdUniqueSelectionDispatcher} from "@angular2-material/core"
//import { MdButtonModule } from "@angular2-material/button"
//import { MdCardModule } from "@angular2-material/card"
//import { MdRadioModule} from "@angular2-material/radio"
//import { MdCheckboxModule} from "@angular2-material/checkbox"
//import { MdTooltipModule} from "@angular2-material/tooltip"

const appRoutes:Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home',component:HomeComponent },
  { path:'about', component:AboutComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    // MdCoreModule,
    // MdCardModule,
    // MdButtonModule,
    // MdRadioModule,
    // MdCheckboxModule,
    // MdTooltipModule,
    // MdSliderModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
