import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { Component } from '@angular/core';
import * as Analizador from './as/analizador'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p2Compi1';

  lisrDat='';
  errores='';
  tipo : string;
  arreglo = [];
  /*constructor() { 
  }*/

  // mymodule.js
 
  compilarArchivo(dat:string) : void {
   
  let parser = Analizador.parser
  //var parser = Analizar.parse
  this.arreglo = parser.parse(dat);
  
   //this.arreglo = Analizador.ARREGLO;
   console.log('TAMAÑO DE ARREGLO\n\n '+this.tipo)
   this.errores = '\n\n ' + dat;

 }
}
