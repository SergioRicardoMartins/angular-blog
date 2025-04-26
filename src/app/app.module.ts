import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SmallCardComponent,
    MenuTitleComponent,
    MenuBarComponent,
    BigCardComponent,
    HomeComponent

  ]
})
export class AppModule { }
