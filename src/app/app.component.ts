import { Component } from '@angular/core';

import { CategoryService } from './category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'Lista de categorias';
  categories: string[] = [];
  constructor(private categoryService : CategoryService){
    
  }

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
