import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'principal', component: PrincipalComponent},
  {path:'sobre', component: SobreComponent},
  {path:'contato', component: ContatoComponent},
  {path:'tabela', component: TabelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
