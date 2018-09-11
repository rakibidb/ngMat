import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

// 
clientes =[
  {name : 'Rakib'},
  {name: 'Sakib'}
];

// 
  userName: string = "";

  response: any;


  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

  search() {
    let searchById = this.http.get('http://localhost:8080/users/' + this.userName);
    searchById.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });

    let searchByName = this.http.get('http://localhost:8080/users/search/findByName?name=' + this.userName);
    searchByName.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });

    let searchByPhone = this.http.get('http://localhost:8080/users/search/findByPass?pass=' + this.userName);
    searchByPhone.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });

    let searchByAge = this.http.get('http://localhost:8080/users/search/findByAge?age=' + this.userName);
    searchByAge.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }
}