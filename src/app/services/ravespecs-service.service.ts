import { CustomError } from './../models/custom-error.model';
import { Glasses } from './../models/glasses.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Scavenger } from '@wishtack/rx-scavenger';

@Injectable({
  providedIn: 'root'
})
export class RavespecsServiceService {
  private _scavenger = new Scavenger(this);


  private readonly ravespecsURL = 'http://localhost:8085/api/fom/ravespecs';

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(private httpClient: HttpClient) { 
  }
 

  getRaveSpecs(): Observable<any> {
    return this.httpClient.get<Glasses[]>(this.ravespecsURL, { responseType: "json" }).pipe(
      this._scavenger.collect(), 
      catchError( err => this.handleError(err)));
  }

  private handleError(err: HttpErrorResponse): Observable<Error> {
    let error: CustomError;

    switch(err.status) {
      case 400:
        error = new CustomError('400', err.message);
        break;
      case 404:
        error = new CustomError('404', err.message);
        break;
      case 500:
        error = new CustomError('500', err.message);
        break;
      default:
        error = new CustomError('erreurDefault', err.message);
    }
    let handling: Observable<any> = EMPTY;
    
    if (error) handling = throwError(error);

    return handling;
  }

  ngOnDestroy(){
  }
}
