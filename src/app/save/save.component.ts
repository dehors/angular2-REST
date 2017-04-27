import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CategoryService }   from '../category.service';
import { Category }          from '../category';

@Component({
	selector: 'app-save',
	templateUrl: './save.component.html',
	styleUrls: ['./save.component.css'],
	encapsulation: ViewEncapsulation.Native
})
export class SaveComponent implements OnInit {
	category: Object = {};
	errorsArray: string[] = [];

	constructor(private categoryService : CategoryService) { }

	ngOnInit() {
	}

	save(category: Category){
		this.categoryService
		.save(category)
		.subscribe(data => {
			console.log(data.json());
		},
		error => {
			this.errorsArray = error.json();
		},
		() => {
			console.log('success');
			// 'onCompleted' callback.
			// No errors, route to new page here
		}
		);
	}

}
