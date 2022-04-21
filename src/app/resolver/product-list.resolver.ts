import { ProductListModel } from './../models/product-list.model';
import { Glasses } from './../models/glasses.model';
import { catchError, map } from 'rxjs/operators';
import { RavespecsServiceService } from './../services/ravespecs-service.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductListResolver implements Resolve<any> {

  constructor(private raveSpecsService: RavespecsServiceService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductListModel> {
    return this.raveSpecsService.getRaveSpecs().pipe(map(resp =>{
      console.log(resp);
      return resp;
      }),catchError(err => {
        return of(err);
      })
    );
  }

  handleError() {

  }
}


