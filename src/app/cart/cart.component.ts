import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { VirtualTimeScheduler } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  tiente={tt:null,thongbao:null}
  soluong=[];

  constructor(  private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
   
  }
clearCart(){
  this.items = this.cartService.clearCart();
  window.alert('Cleared!')
}
total(index){
  return this.items[index].price*this.soluong[index];
}
tien(){
  if (this.tiente.tt=="USD") {
    this.tiente.thongbao="dang chon usd"
  }
  else{
    this.tiente.thongbao="khong ho tro"
  }
  
}
}
