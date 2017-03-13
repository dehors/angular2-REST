 import { Injectable } from '@angular/core';
 
 @Injectable()
 export class Config {
     public OwnServer: string = "http://localhost:8080/CECNA/public/api/";
     public ApiUrl: string = "v1/";
     public OwnServerWithApiUrl = this.OwnServer + this.ApiUrl;
 }