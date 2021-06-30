import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/Clases/empresa';
import { EmpresaService } from 'src/app/Servicios/empresa.service';
import { RouterModule, Routes,ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-empresa-eliminar',
  templateUrl: './empresa-eliminar.component.html',
  styleUrls: ['./empresa-eliminar.component.css']
})
export class EmpresaEliminarComponent implements OnInit {
  info:string="Validacion de usuario"
  empresa:Empresa=  new Empresa();
  constructor(private EmpresaServicio:EmpresaService,
    private activatedRoute: ActivatedRoute,private route: Router) { }

  ngOnInit(): void {
  }
  public eliminar(codigo:string){
    alert("Borrara estos datos ");

    this.EmpresaServicio.eliminarEmpresa(codigo).subscribe(response=>this.route.navigate(["mostrarListado"]))


  }


}
