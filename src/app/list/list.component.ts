import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'Lista de categorias';
  categories: string[] = [];
  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.categoryService
      .getAll()
      .subscribe(data => {
        this.categories = data.json().data;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('success');
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    );
  }

}
