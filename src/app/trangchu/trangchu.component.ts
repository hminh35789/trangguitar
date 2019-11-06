import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../DAL/product.service';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  
 cid:number;
  constructor(private http:HttpClient) { }
url ='./assets/guitar.json';
products:any;
  ngOnInit() {
    this.getAllProduct().subscribe(data=>{
      this.products=data;
    })
     
    
  }
  getAllProduct()
  {
    return this.http.get(this.url)
  }
}
