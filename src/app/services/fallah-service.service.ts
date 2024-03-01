import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environements/environment';
import { HttpClient } from '@angular/common/http';
import { Fallah } from '../models/Fallah';
import { product } from '../models/product';
import { Panier } from '../models/Panier';


@Injectable({
  providedIn: 'root'
})
export class FallahServiceService {


  constructor(private http: HttpClient) { }




      // falleeeeeeh service

        getfallehList(): Observable<Fallah[]> {
        return this.http.get(environment.api+'/falleh/regist/') as Observable<Fallah[]>;
        }


        updateFalleh(id: number, value: any): Observable<Object> {
          return this.http.put(environment.api+'/falleh_by_id/'+id + '/', value);
        }


        getFallehId(id: number): Observable<any> {
          return this.http.get(environment.api+'/falleh_by_id/'+id + '/');
        }

        deleteFalleh(id: number): Observable<any> {
          return this.http.delete(environment.api+'/falleh_by_id/'+id +'/'  , { responseType: 'text' });
        }






    //  product service

      getproductList(): Observable<product[]> {
        return this.http.get(environment.api+'/list_product/') as Observable<product[]>;
      }

      createProduct(formData: any): Observable<Object> {
        return this.http.post(environment.api+'/list_product/',formData);
       }



      updateProduct(id: number, value: any): Observable<Object> {
        return this.http.put(environment.api+'/product_by_id/'+id + '/', value);
      }


      getproductId(id: number): Observable<any> {
        return this.http.get(environment.api+'/product_by_id/'+id + '/');
      }

      deleteproduct(id: number): Observable<any> {
        return this.http.delete(environment.api+'/product_by_id/'+id +'/'  , { responseType: 'text' });
       }


      getProductbyIdFalleh(id: number): Observable<any> {
        return this.http.get(environment.api+'/Product_by_Falleh/'+id + '/');
      }







   //  Terreee service

          getTerretList(): Observable<any[]> {
            return this.http.get(environment.api+'/list_terre/') as Observable<any[]>;
          }


          updateTerret(id: number, value: any): Observable<Object> {
            return this.http.put(environment.api+'/terre_by_id/'+id + '/', value);
          }


          getTerretId(id: number): Observable<any> {
            return this.http.get(environment.api+'/terre_by_id/'+id + '/');
          }

          deleteTerret(id: number): Observable<any> {
            return this.http.delete(environment.api+'/terre_by_id/'+id +'/'  , { responseType: 'text' });
           }


          getTerretbyIdFelleh(id: number): Observable<any> {
            return this.http.get(environment.api+'/terre_by_falleh/'+id + '/');
          }








   //  Plant service

        getPlanttList(): Observable<any[]> {
          return this.http.get(environment.api+'/list_plant/') as Observable<any[]>;
        }


        updatePlantt(id: number, value: any): Observable<Object> {
          return this.http.put(environment.api+'/plant_by_id/'+id + '/', value);
        }


        getPlanttId(id: number): Observable<any> {
          return this.http.get(environment.api+'/plant_by_id/'+id + '/');
        }

        deletePlantt(id: number): Observable<any> {
          return this.http.delete(environment.api+'/plant_by_id/'+id +'/'  , { responseType: 'text' });
        }


        getPlanttbyIdTerre(id: number): Observable<any> {
          return this.http.get(environment.api+'/Plant_by_Terre/'+id + '/');
        }

               //  panier service

               getAchatstList(): Observable<Panier[]> {
                return this.http.get(environment.api+'/create_panier/') as Observable<any[]>;
              }
              postAchatst(id:any): Observable<Panier[]> {
                return this.http.post(environment.api+'/create_panier/',id) as Observable<any[]>;
              }


              getAchatstId(id: number): Observable<any> {
                return this.http.get(environment.api+'/panier_by_id/'+id + '/');
              }

              deleteAchats(id: number): Observable<any> {
                return this.http.delete(environment.api+'/panier_by_id/'+id +'/'  , { responseType: 'text' });
              }

              getAchatsbyIdFalleh(id: number): Observable<any> {
                return this.http.get(environment.api+'/Panier_by_Falleh/'+id + '/');
              }


}
