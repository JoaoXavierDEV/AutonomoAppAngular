import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

export abstract class BaseService {

    //protected UrlServiceV1: string = "https://localhost:44383/api/v1/"; //projeto no visual studio
    
    //protected UrlServiceV1: string = "http://192.168.0.4/api/v1/"; // api hospedadda no IIS
    protected UrlServiceV1: string = "https://joaojfmx-001-site1.ctempurl.com/api/v1/"; 
    //protected UrlServiceV1: string = "https://devioapi.azurewebsites.net/api/v1/";

    protected ObterHeaderFormData() {
        return {
            headers: new HttpHeaders({
               // 'Content-Disposition': 'form-data; name="produto"',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.obterTokenUsuario()}`
            })
        };
    }

    protected ObterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    protected ObterAuthHeaderJson(){
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.obterTokenUsuario()}`
            })
        };
    }

    protected extractData(response: any) {
        return response.data || {};
    }

    public obterUsuario(){
        return JSON.parse(localStorage.getItem('app.user')!);
    }

    protected obterTokenUsuario(): string {
        return localStorage.getItem('app.token')!;
        //return "";
    }

    protected serviceError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {

            errMsg = `${error.status} - ${error.statusText || ''}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);
        return throwError(errMsg);
    }
}