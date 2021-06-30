import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../../Clases/empresa';
import { EmpresaService } from '../../Servicios/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  info:string="Creacion de nuevos datos de empresa "
  empresa:Empresa=  new Empresa();
  constructor(private EmpresaServicio:EmpresaService,
    private route: Router){}
  ngOnInit(): void {
    ;

  }
  public crear(){

    console.log(this.empresa)
    this.EmpresaServicio.crearEmpresa(this.empresa).subscribe(
      response=>this.route.navigate(["mostrarListado"])
    )

  }

}
