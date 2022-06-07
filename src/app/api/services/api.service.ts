/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Glasses1Body } from '../models/glasses-1-body';
import { GlassesBody } from '../models/glasses-body';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation glassesGet
   */
  static readonly GlassesGetPath = '/glasses';

  /**
   * Retrieve all the glasses from the MySQL Database
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `glassesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  glassesGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.GlassesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Retrieve all the glasses from the MySQL Database
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `glassesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  glassesGet(params?: {
  }): Observable<void> {

    return this.glassesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation glassesPost
   */
  static readonly GlassesPostPath = '/glasses';

  /**
   * Create a new glasses object and save it into the MySQL Database
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `glassesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  glassesPost$Response(params?: {
    body?: GlassesBody
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.GlassesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json; charset&#x3D;utf-8'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Create a new glasses object and save it into the MySQL Database
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `glassesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  glassesPost(params?: {
    body?: GlassesBody
  }): Observable<string> {

    return this.glassesPost$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation glasses1Put
   */
  static readonly Glasses1PutPath = '/glasses/1';

  /**
   * Update an existing glasses corresponding to the id passed after the '/' in the URL (glasses/1 will update glasses with the id '1').
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `glasses1Put()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  glasses1Put$Response(params?: {
    body?: Glasses1Body
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.Glasses1PutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json; charset&#x3D;utf-8'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Update an existing glasses corresponding to the id passed after the '/' in the URL (glasses/1 will update glasses with the id '1').
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `glasses1Put$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  glasses1Put(params?: {
    body?: Glasses1Body
  }): Observable<string> {

    return this.glasses1Put$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation glasses78Delete
   */
  static readonly Glasses78DeletePath = '/glasses/78';

  /**
   * Delete an existing glasses corresponding to the id passed after the '/' in the URL (glasses/1 will delete glasses with the id '1')
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `glasses78Delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  glasses78Delete$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.Glasses78DeletePath, 'delete');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json; charset&#x3D;utf-8'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Delete an existing glasses corresponding to the id passed after the '/' in the URL (glasses/1 will delete glasses with the id '1')
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `glasses78Delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  glasses78Delete(params?: {
  }): Observable<string> {

    return this.glasses78Delete$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
