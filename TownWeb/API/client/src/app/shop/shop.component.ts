import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search',{static:true}) searchTerm:ElementRef;
  product: IProduct[];
  brands : IBrand[];
  types: IType[];
  totalCount : number;
  shopParams = new ShopParams();
  sortOptions = [
    {name: 'Alphabatical',value:'name'},
    {name:'Price: Low-High',value:'priceAsc'},
    {name: 'Price: High-Low',value:'priceDec'}
  ];

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.getProducts();
    this.getBrands();
    this.getTypes();
    
    
  }
  getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe(response=>{
      this.product = response.data;
      this.shopParams.pageNumber = response.pageIndex;
      this.shopParams.pageSize = response.pageSize;
      this.totalCount =response.count;
    }, error=>{
      console.log(error);
    });
  }
  getBrands(){
    this.shopService.getBrands().subscribe(response=>{
      this.brands = [{id:0, name:'All'},...response]
    }, error=>{
      console.log(error);
    });
  }
  getTypes(){
    this.shopService.getTypes().subscribe(response=>{
      this.types = [{id:0, name:'All'},...response]
    }, error=>{
      console.log(error);
    });
  }
  onBrandSelected(brandId:number){
    this.shopParams.brandId =brandId;
    this.getProducts();
  }

  onTypeSelected(typeId:number){
    this.shopParams.typeId = typeId;
    this.getProducts();
  }
  onSortSelected(sort:string){
    this.shopParams.sort=sort;
    this.getProducts();
  }
  onPageChanged(event:any){
    this.shopParams.pageNumber =event.page;
    this.getProducts();
  }
  onSearch(){
    this.shopParams.search = this.searchTerm.nativeElement.value;
    this.getProducts();
  }
  onReset(){
    this.searchTerm.nativeElement.value ='';
    this.shopParams = new ShopParams();
    this.getProducts();
  }
}
