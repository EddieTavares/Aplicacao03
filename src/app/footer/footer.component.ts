import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  imgFace:string = "./assets/face.png";
  imgInsta:string = "./assets/insta.png";
  imgYoutube:string = "./assets/youtube.png";

  constructor() { }

  ngOnInit(): void {
  }

}
