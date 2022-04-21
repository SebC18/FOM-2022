import { Glasses } from './../../models/glasses.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KaleidosServiceService } from 'src/app/services/kaleidos-service.service';
import { RavespecsServiceService } from 'src/app/services/ravespecs-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private raveSpecsService: RavespecsServiceService, private kaleidosServiceService: KaleidosServiceService,
    private router: Router, private activatedRoute: ActivatedRoute) { }
  raveSpecs$: Observable<Glasses[]> | undefined;
  allGlasses$: Observable<Glasses[]> | undefined;
  ngOnInit(): void {
    this.raveSpecs$ = this.activatedRoute.data.pipe(map(data => 
      data.productList
      
      ));
    
    console.log(this.raveSpecs$);
    
  }

}
