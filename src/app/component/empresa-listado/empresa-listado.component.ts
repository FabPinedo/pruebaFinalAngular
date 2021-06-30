import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/Clases/empresa';
import { EmpresaService } from 'src/app/Servicios/empresa.service';

@Component({
  selector: 'app-empresa-listado',
  templateUrl: './empresa-listado.component.html',
  styleUrls: ['./empresa-listado.component.css']
})
export class EmpresaListadoComponent implements OnInit {

  empresas: Empresa[]=[];
  constructor(private empresaServicio: EmpresaService) { }

  ngOnInit(): void {
    this.empresaServicio.getEmpresa().subscribe((data: Empresa[]) => {
      console.log(data);
      this.empresas = data;
    });
  }

}
