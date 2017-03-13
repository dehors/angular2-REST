 import { Injectable } from '@angular/core';
 import { Headers, RequestOptions } from '@angular/http';
 
 @Injectable()
 export class Method {
     public getHeaders(){
         let headers = new Headers();
         headers.append('Content-Type', 'application/json');
         headers.append('Accept', 'application/json');
         return headers;
     }
 }
