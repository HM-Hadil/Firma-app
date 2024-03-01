import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/product';
import { FallahServiceService } from 'src/app/services/fallah-service.service';
@Component({
  selector: 'app-achat-by-id',
  templateUrl: './achat-by-id.component.html',
  styleUrls: ['./achat-by-id.component.css']
})
export class AchatByIdComponent {
  id:any;
  formData: FormGroup;
  constructor(private fb: FormBuilder,private route: ActivatedRoute,private service:FallahServiceService){

    this.formData = this.fb.group({
      name: [''],
      qntprod: [''],
      design: [''],
      prix: [''],
      categ: [''],
      date: [''],
      product_image: ['']
    });


  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadProductDetails();
    });
  }
  loadProductDetails(): void {
    this.service.getAchatstId(this.id).subscribe((data) => {
      // Populate each form control individually
      this.formData.controls['name'].setValue(data.name);
      this.formData.controls['qntprod'].setValue(data.qntprod);
      this.formData.controls['design'].setValue(data.design);
      this.formData.controls['prix'].setValue(data.prix);
      this.formData.controls['categ'].setValue(data.categ);
      this.formData.controls['product_image'].setValue(data.product_image);
    });
  }

}
