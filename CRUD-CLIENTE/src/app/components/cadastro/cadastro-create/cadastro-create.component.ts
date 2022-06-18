import { Cadastro } from './cadastro.model';
import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  cadastro: Cadastro = new Cadastro;

  constructor(private cadastroService: CadastroService,
    private router: Router) { }

  ngOnInit(): void {

  }

  async createCadastro() {
      await this.cadastroService.create(this.cadastro)
      this.cadastroService.showMenssage('Cliente cadastrado!')
      this.router.navigate(['/cadastro'])
  }

  cancel() {
    this.router.navigate(['/cadastro'])
  }

}
