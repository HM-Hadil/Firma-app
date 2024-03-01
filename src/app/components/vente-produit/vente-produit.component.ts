import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { product } from 'src/app/models/product';
import { FallahServiceService } from 'src/app/services/fallah-service.service';

@Component({
  selector: 'app-vente-produit',
  templateUrl: './vente-produit.component.html',
  styleUrls: ['./vente-produit.component.css']
})
export class VenteProduitComponent {
  formData!: FormGroup;

  constructor(private service:FallahServiceService,private formBuilder: FormBuilder,){
    this.formData = this.formBuilder.group({
      falleh: [''],
      name: ['', Validators.required],
      qnty_prod: ['', Validators.required],
      design: [''],
      prix: ['', Validators.required],
      categ: ['', Validators.required],
      date: [''],
      product_image: ['']
    });
  }


  onSubmit(): void {
    if (this.formData.valid) {
      const formDataValue: product = this.formData.value;
      console.log("data",formDataValue)
      this.service.createProduct(formDataValue).subscribe(
        response => {
          console.log('Product created successfully!', response);
          // Optionally, reset the form after submission
          this.formData.reset();
        },
        error => {
          console.error('Error creating product:', error);
        }
      );
    }
  }

}
