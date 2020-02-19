import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() width: number;
  @Input('etiquetas') captions: boolean;

  @Output() getAuthor = new EventEmitter();

  public author: any;

  constructor(){
    this.author = {
      nombre: 'Tomás López',
      web: 'localhost:4200',
      youtube: 'FrozenN'
    };
  }

  ngOnInit() {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.width
    });

    // Lanzar evento
    // this.getAuthor.emit(this.author);
  }

  launch(event){
    // console.log(event);
    this.getAuthor.emit(this.author);
  }

}
