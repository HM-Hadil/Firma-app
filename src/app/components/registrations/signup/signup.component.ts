import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { FallahServiceService } from 'src/app/services/fallah-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importez FormBuilder, FormGroup et Validators
import { Fallah } from 'src/app/models/Fallah';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formData: FormGroup;


 constructor(private renderer: Renderer2, private elementRef: ElementRef,private service:AuthService,private formBuilder: FormBuilder,  private router: Router
  ){
  this.formData = this.formBuilder.group({
    user: this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }),

    name: ['', Validators.required],
    prenom: ['', Validators.required],
    numero: [''],
    cin: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    date_nais: ['', Validators.required],
    address: [''],
    profile_image: [''],
    code_dts: ['']
  });

}
  ngOnInit(): void {



  }





  onSubmit(): void {

    if (this.formData.valid) {
      const formDataValue: Fallah = this.formData.value;
      console.log('Form value  !', formDataValue);

      this.service.register_falleh(formDataValue).subscribe(
        response => {
          console.log('Inscription réussie !', response);
          this.router.navigate(['/login']);

        },
        error => {
          console.error('Erreur lors de l\'inscription :', error);
        }
      );
    }
  }





}
