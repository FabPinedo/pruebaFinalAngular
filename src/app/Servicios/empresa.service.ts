import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from '../Clases/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private baseUrl = "http://localhost:8080/api/empresa";
  private cabezera= new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient) { }

  getEmpresa(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(`${this.baseUrl}`);
  }


  crearEmpresa(empresa:Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.baseUrl,empresa,{headers:this.cabezera})
  }
  obtenerEmpresa(cod_Empresa: string):Observable<Empresa>{
    return this.http.get<Empresa>(`${this.baseUrl}/${cod_Empresa}`)
  }
  modificarEmpresa(empresa:Empresa):Observable<Empresa>{
    return this.http.put<Empresa>(`${this.baseUrl}/${empresa.cod_Empresa}`,empresa,{headers:this.cabezera})
  }
  eliminarEmpresa(cod_empresa: string):Observable<Empresa>{
    return this.http.delete<Empresa>(`${this.baseUrl}/${cod_empresa}`)
  }
}
