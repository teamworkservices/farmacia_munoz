import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  username: string = 'El usuario'

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
      
  }

  logOut(){
    alert("Cerrando sesion");
  }
}
