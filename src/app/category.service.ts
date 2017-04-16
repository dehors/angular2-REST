import { Injectable } 		from '@angular/core';
import { Http, Response } 	from '@angular/http';
import { Observable }     	from 'rxjs/Observable';  

import { Config } 	from './app.constants';
import { Method } 	from './app.methods';

@Injectable()
export class CategoryService {

  private endpoint_url: string;
    constructor(private http : Http, private _config : Config, private _method : Method) {
      this.endpoint_url = _config.OwnServerWithApiUrl + 'categories';
    }
  
  //HTTP methods
  getAll(): Observable<Response> {
    return this.http
      .get(this.endpoint_url,{headers: this._method.getHeaders()});
  }

  getShow(id): Observable<Response>{
  	return this.http
  		.get(this.endpoint_url+'/'+id,{headers: this._method.getHeaders()});
  }
}
