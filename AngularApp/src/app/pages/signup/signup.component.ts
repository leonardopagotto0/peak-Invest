import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  plots?: number;
  value?: number;
  result?: number = 0;

  constructor(private http: HttpClient) {}
  
  executeCalculation() {

    if(!this.validateForm()) return;

    this.http.post<number>(`${environment.apiUrl}/api/currency`, {
      plots: this.plots,
      value: this.value
    }).subscribe(
      response => {
        this.result = response;
        console.log(response);
        
      },
      error => {
        alert('Erro ao calcular, verifique endereço da api');
        this.result = undefined;
      }
    )
  
  }

  isNumber(value: any): boolean {
    return !isNaN(Number(value));
  }

  validateForm(): boolean {
    if(!this.isNumber(this.plots) || !this.isNumber(this.value)) {
      if(!this.isNumber(this.plots)){
        document.getElementById('plots')?.classList.remove('input');
        document.getElementById('plots')?.classList.add('input-error');
      }
  
      if(!this.isNumber(this.value)){
        document.getElementById('values')?.classList.remove('input');
        document.getElementById('values')?.classList.add('input-error');
      }

      return false;
    }

    document.getElementById('plots')?.classList.remove('input-error');
    document.getElementById('plots')?.classList.add('input');
    document.getElementById('values')?.classList.remove('input-error');
    document.getElementById('values')?.classList.add('input');

    return true;
  }
}
