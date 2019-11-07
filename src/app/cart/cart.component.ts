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
  tiente={tt:"USD",thongbao:null}
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
  if (this.tiente.tt==="USD") {
    this.tiente.thongbao=""
   
  }
  else{
    this.tiente.thongbao="Bank of America account holders can exchange foreign currency (no coins) for U.S. dollars at a full-service banking center. Add a currency to view the currency exchange rates for that country and find out how much your foreign currency is currently worth in U.S. dollars."
    
   
  }
    return this.tiente.thongbao;
}
}
