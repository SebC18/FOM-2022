import { Glasses } from './models/glasses.model';
import { RavespecsServiceService } from './services/ravespecs-service.service';
import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { KaleidosServiceService } from './services/kaleidos-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'ResolverJsonServer';



  constructor(){
  }

  ngOnInit(){
    
  }

  
  }


