import { Glasses } from './models/glasses.model';
import { RavespecsServiceService } from './services/ravespecs-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'ResolverJsonServer';
  raveSpecs$: Observable<Glasses[]> | undefined;

  constructor(private raveSpecsService: RavespecsServiceService){
  }

  ngOnInit(){
    this.raveSpecs$ = this.raveSpecsService.getRaveSpecs();
    console.log('RavesSpecs :', this.raveSpecs$);
  }

  
  }


