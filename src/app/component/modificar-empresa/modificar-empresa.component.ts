import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/Clases/empresa';
import { EmpresaService } from 'src/app/Servicios/empresa.service';
import { RouterModule, Routes,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-modificar-empresa',
  templateUrl: './modificar-empresa.component.html',
  styleUrls: ['./modificar-empresa.component.css']
})
export class ModificarEmpresaComponent implements OnInit {
  info:string="Modificacion de datos de empresa "
  empresa:Empresa=  new Empresa();

  constructor(private EmpresaServicio:EmpresaService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    console.log(this.empresa)
    this.cargarEmpresa()
  }

 cargarEmpresa():void {
      this.activatedRoute.params.subscribe(params=>{
        let cod_Empresa= params['cod_empresa']
        if(cod_Empresa){
          this.EmpresaServicio.obtenerEmpresa(cod_Empresa).subscribe((empresa)=> this.empresa=empresa)
        }
      })
      console.log(this.empresa)
    }

  public modificar(){

    console.log(this.empresa)
    this.EmpresaServicio.modificarEmpresa(this.empresa).subscribe(
      response=>this.route.navigate(["MostrarListado"])
    )

  }
}
