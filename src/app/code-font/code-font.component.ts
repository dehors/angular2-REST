import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-font',
  templateUrl: './code-font.component.html',
  styleUrls: ['./code-font.component.css']
})
export class CodeFontComponent implements OnInit {
  title = "List of costumers";
  condition = true;
  costumers = ["Juan","Pedro","Maria","Alejandro"];
  constructor() { }

  ngOnInit() {
  }

}
