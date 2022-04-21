import { CustomError } from './../models/custom-error.model';
import { Glasses } from './../models/glasses.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Scavenger } from '@wishtack/rx-scavenger';

@Injectable({
  providedIn: 'root'
})
export class KaleidosServiceService {
  private _scavenger = new Scavenger(this);

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  private readonly kaleidosURL = 'http://localhost:8085/api/fom/kaleidos';
  constructor(private httpClient: HttpClient) { }

  getKaleidos(): Observable<any> {
    return this.httpClient.get<Glasses[]>(this.kaleidosURL, { responseType: "json" }).pipe(
      catchError( err => this.handleError(err)),
      finalize(()=> {
        console.log('Get glasses finished');
      }),
      this._scavenger.collectByKey('count')) 
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
