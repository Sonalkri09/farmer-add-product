import { Component } from '@angular/core';
import { Product } from './product';
import { ProService} from './pro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProService],
})
export class AppComponent {

  public kkdFarmId: any="KKDFARM1000";
  public imageUrl:any;

 public description: any;
public price: any;
public bulkPrice: any;
public quantity: any;
public productName: any;
public availability: boolean;

 product : Product ={
 
  kkdFarmId: "kkdFarmId",
  imageUrl: "imageUrl",
  productName: "productName",
  description: "red",
  price: 10,
  bulkOrderPrice: 8,
  quantity: 100,
  availability: false
  }

 constructor(private pro: ProService){

 }

 selectChangeHandler (event: any){
   this.productName=event.target.value;
 }


  check(){
    alert(this.productName);
    alert(this.availability);
    alert(this.description);
    alert(this.price);
    alert(this.bulkPrice);
    alert(this.quantity);
    

   this.product.description=this.description;
   this.product.price=this.price;
   this.product.bulkOrderPrice=this.bulkPrice;
   this.product.quantity=this.quantity;
   this.product.productName=this.productName;
   this.product.availability=this.availability;
   this.product.imageUrl="";

   this.pro.update(this.kkdFarmId, this.product)
    .subscribe((res)=>{
      console.log("-----------------gghvfghh--------0---");
      console.log(res);
    },(error)=>{
    });
   




  }
}
