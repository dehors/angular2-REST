import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { CategoryService }   from '../category.service';
import { Category }          from '../category';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'Lista de categorias';
  categories: string[] = [];
  constructor(private categoryService : CategoryService,private router: Router) { }

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

  onSelect(category: Category){
    this.router.navigate(['/list', category.id]);
  }

}
