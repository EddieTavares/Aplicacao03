import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  img1:string = "../assets/adventure-1840310_960_720.webp";

  constructor() { }

  ngOnInit(): void {
  }

}
