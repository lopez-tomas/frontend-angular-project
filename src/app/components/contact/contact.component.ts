import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number;
  public widthToSlider: any;
  public captions: boolean;
  public author: any;

  @ViewChild('textos', {static: true}) textos;

  constructor() {
    this.captions = true;
  }

  ngOnInit() {
    var header = $('header');
    header.css("background","rgba(0,255,0, 0.6)");

    $('#logo').click(function(e){
      e.preventDefault();
      header.css("background","rgba(255,0,0, 0.6)");
    });

    var opcion_clasica = document.querySelector('#texto').innerHTML;
    console.log(this.textos.nativeElement.textContent);
  }

  cargarSlider(){
    this.widthToSlider = this. widthSlider;
  }

  resetearSlider(){
    this.widthToSlider = false;
  }

  obtenerAutor(event){
    // console.log(event);
    this.author = event;
  }
}
