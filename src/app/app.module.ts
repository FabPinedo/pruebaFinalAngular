import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './component/empresa/empresa.component';
import { EmpresaListadoComponent } from './component/empresa-listado/empresa-listado.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { EmpresaService } from './Servicios/empresa.service';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './component/inicio/inicio.component';
import { FormsModule, Validators } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { EmpresaEliminarComponent } from './component/empresa-eliminar/empresa-eliminar.component';
import { HomeComponent } from './component/home.component';
import { ModificarEmpresaComponent } from './component/modificar-empresa/modificar-empresa.component';
const appRoutes = [
  { path: '', component: InicioComponent,  pathMatch: 'full'},
  { path: 'home', component: HomeComponent,
      children: [
        { path: 'crearEmpresa', component: EmpresaComponent },
        { path: 'eliminarEmpresa', component: EmpresaEliminarComponent},
        { path: 'mostrarListado', component: EmpresaListadoComponent , children:[

        ]},
        { path: 'modificarEmpresa', component: ModificarEmpresaComponent},
        { path: 'modificarEmpresa/:cod_empresa', component: ModificarEmpresaComponent}

      ]
    }



];


@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    EmpresaListadoComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    EmpresaEliminarComponent,
    HomeComponent,
    ModificarEmpresaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
