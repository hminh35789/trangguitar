import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductService} from '../DAL/product.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product:any;
  listproduct:any;
  feature;
  constructor(private rout:ActivatedRoute,private ps:ProductService,    private cart: CartService) { }
  url ='./assets/guitar.json';
 
    ngOnInit() {
      const pid=+this.rout.snapshot.paramMap.get('pid');
      this.ps.getAllProduct().subscribe(p=>{
        this.listproduct=p;
        this.product=this.listproduct.find(x=>x.id===pid);
        this.feature=this.product.newfeature;
        console.log(this.feature);
      })
       
     
    }
    // addToCart() {
    //   let appProduct=Object.assign(this.product,{'quantity':1});
    //   window.alert('Your product has been added to the cart!');
    //   this.cart.addToCart(appProduct);
    // }
    addToCart(product) {
      window.alert('Your product has been added to the cart!');
      this.cart.addToCart(product);
    }
  }
  