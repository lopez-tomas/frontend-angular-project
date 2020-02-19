import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public github: string;

  constructor() {
    this.title = "Tomás López";
    this.subtitle = "Estudiante de Ing. en Informática y Autodidacta";
    this.github = "github.com/lopez-tomas";
   }

  ngOnInit() {
  }

}
