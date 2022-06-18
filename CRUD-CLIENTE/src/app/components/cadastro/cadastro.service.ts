import { Cadastro } from './cadastro-create/cadastro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import axios, { AxiosError } from 'axios';



@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  //baseUrl = "http://localhost:5000/api/v1/Cliente"
  baseUrl = "https://crud-cliente-dotnet.herokuapp.com/api/v1/Cliente"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
    this.addInterceptors();
  }

  addInterceptors(){
    // Intercepta todas as requets
    axios.interceptors.response.use(
      // Se for sucesso não faz nada, só retorna o sucesso
      success => success,
      // Se for erro emite uma mensagem de erro
      (error: AxiosError) => {
        this.showMenssage(error.response?.data as string ?? 'Erro de comunicação')
        throw error;
      } 
    )
  }

  showMenssage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  async create(cadastro: Cadastro) {
    const resp = await axios.post<Cadastro>(this.baseUrl, cadastro)
    return resp;
  }

  async read() {
    const resp = await axios.get<Cadastro[]>(this.baseUrl)
    return resp;
  }

  async readBycpf(cpf: string) {
    const url = `${this.baseUrl}/${cpf}`
    const resp = await axios.get<Cadastro>(url)
    return resp;
  }

  async update(cadastro: Cadastro) {
    const url = `${this.baseUrl}`
    const resp = await axios.put<boolean>(url, cadastro)
    return resp
  }

  async delete(cpf: string) {
    const url = `${this.baseUrl}/${cpf}`
    const resp = await axios.delete<boolean>(url)
    return resp
  }

}


