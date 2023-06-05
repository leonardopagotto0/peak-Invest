import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';

interface User {
  name: string;
  photo: string;
}

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {
  user?:User = undefined;
  userId?: number;
  
  constructor(private http: HttpClient) {}

  searchUser() {
    console.log(this.userId);
    
    this.http.get<User>(`${environment.apiUrl}/api/users/${this.userId}`)
    .subscribe(
      user => this.user = user,
      error => {
        alert('Erro ao buscar usuário, verifique endereço da api');
        this.user = undefined;
      }  
    )
  }
}
