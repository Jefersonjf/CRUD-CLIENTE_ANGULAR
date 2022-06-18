import { CadastroCreateComponent } from './components/cadastro/cadastro-create/cadastro-create.component';
import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { CadastroCrudComponent } from "./views/cadastro-crud/cadastro-crud.component";
import { CadastroUpdateComponent } from './components/cadastro/cadastro-update/cadastro-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "cadastro",
    component: CadastroCrudComponent,
  },
  {
    path: "cadastro/create",
    component: CadastroCreateComponent
  },
  {
    path: "cadastros/update/:cpf",
    component: CadastroUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
