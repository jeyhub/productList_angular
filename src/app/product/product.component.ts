import { Component, OnInit } from '@angular/core';
import {Product} from "./product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor() { }
  title = "Products";
  filterText = "";
  products : Product[] = [
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook", imageUrl:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1768&q=80"},
    {id:2, name:"Keyboard", price:300, categoryId:2, description:"Logitech Mx Keys", imageUrl:"https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"},
    {id:3, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook", imageUrl:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"},
    {id:4, name:"Keyboard", price:300, categoryId:2, description:"Logitech Mx Keys", imageUrl:"https://images.unsplash.com/photo-1585314614250-d213876625e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80"},
    {id:5, name:"Keyboard", price:400, categoryId:2, description:"Logitech Mx Keys 2", imageUrl:"https://images.unsplash.com/photo-1627405085366-ee229985ecda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=806&q=80"}
  ]
  // products: any[] | undefined;
  ngOnInit(): void {
  }

}
