import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  img1:string = "../assets/istockphoto-656332232-1024x1024.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
