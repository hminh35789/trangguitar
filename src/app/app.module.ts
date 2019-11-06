import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DetailComponent } from './detail/detail.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { GuimailComponent } from './guimail/guimail.component';
@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    DetailComponent,
    CartComponent,
    GuimailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,HttpClientModule,RouterModule.forRoot([
      {path:'', component:TrangchuComponent},
      {path:'detail/:cid', component:TrangchuComponent},
      {path:'products/:pid', component:DetailComponent},
      {path:'cart', component:CartComponent},
      {path:'mail', component:GuimailComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
