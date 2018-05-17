import { Component } from "@angular/core";

@Component({ 
    selector:'pm-products',
    templateUrl:'./product-List.component.html'
})
export class productListComponent {
    PageTitle: string ="Product List!!!"
    products: any[] = [
        {
            "productId":1,
            "productName":"compact",
            "productCode":"001A",
            "availiable":"april 13 2018",
            "description":"Rose gold ivory",
            "price":30,
            "starRating": 5,
            "imageUrl" : ""
        }
    ]
}