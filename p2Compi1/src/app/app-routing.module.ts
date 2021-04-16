import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LisAnalizadorComponent } from './lis-analizador/lis-analizador.component';


const routes: Routes = [
  {path: 'pagina1', component: LisAnalizadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
