import { Component, Input, OnInit } from '@angular/core';
import * as Inicial from '../app.component'

@Component({
  selector: 'app-lis-analizador',
  templateUrl: './lis-analizador.component.html',
  styleUrls: ['./lis-analizador.component.css']
})
export class LisAnalizadorComponent implements OnInit {

  @Input() informacion;
  constructor() { 
    
  }
  
  ngOnInit(): void {
  }
 

}
