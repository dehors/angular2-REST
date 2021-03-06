import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CategoryService }   from '../category.service';
import { Category }          from '../category';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
	category: Category;
	errorsArray: string[] = [];

	constructor(private categoryService : CategoryService,private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.categoryService
		.getShow(+this.route.snapshot.params['id'])
		.subscribe(data => {
			this.category = data.json().data.attributes;
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

	update(category: Category){
		this.categoryService
		.update(category)
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