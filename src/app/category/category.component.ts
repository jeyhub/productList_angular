import { Component, OnInit } from '@angular/core';
import {Category} from "./category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title="Category list";
  categories: Category[] = [
    {id:1, name:"Electronic"},
    {id:2, name:"Computer"},
    {id:3, name:"Contact"},
    {id:4, name:"Music"},
    {id:5, name:"Drinks and food"},
  ]

  ngOnInit(): void {
  }

}
