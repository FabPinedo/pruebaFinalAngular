import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,NgForm} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from 'src/app/Clases/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  titulo:string="Validacion de usuario"
  user:Usuario=  new Usuario();
  constructor(private route: Router) {}
  ngOnInit(): void {

  }
public validar(){

}
  login() : void {
    if(this.user.id== 'admin' && this.user.contrasena == 'admin'){
     this.route.navigate(["MostrarListado"]);
    }else {
      alert("Credenciales Invalidas");
    }

  }
}
