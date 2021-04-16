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
  tipo : String;
  constructor() { 
    var dar = (function(){
      return 'hola mundo';
    });
    
  }

  // mymodule.js



 
  compilarArchivo(dat:string) : void {
    this.errores = '';
   
  let parser = Analizador.parser
  //var parser = Analizar.parse
  this.tipo = parser.parse(dat);
  try {


    //this.arreglo = Analizador.ARREGLO;
 
    console.log('TAMAÑO DE ARREGLO\n\n '+ this.tipo)
    this.errores = '\n\n ' + this.tipo;
    
  } catch (error) {
    console.log('ERROR EN PARSER   ********'+error);
  }
 
 }
public myinfo  = 'no hay datos';
 
}

