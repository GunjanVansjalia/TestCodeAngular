import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { RegistrationModel } from "../models/registration-model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { registartion } from "../constant/api-constant";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private readonly apiUrl: string = environment.apiUrl;
  private readonly keyValue: string = environment.keyValue;

  constructor(private httpClient: HttpClient) {}

  /**
   * Get registration by id
   */
  public getRegistartionById(id: string): Observable<RegistrationModel | null> {
    const path = `${this.apiUrl}${registartion}/${id}`;
    let param = new HttpParams();
    param = param.append("key", this.keyValue);
    return this.httpClient
      .get<RegistrationModel>(path, { params: param })
      .pipe(map((data) => new RegistrationModel(data)));
  }

  /**
   * Save registration
   */
  public saveRegistartion(request: any): Observable<RegistrationModel | null> {
    const path = `${this.apiUrl}${registartion}`;
    let param = new HttpParams();
    param = param.append("key", this.keyValue);
    return this.httpClient
      .post<RegistrationModel>(path, request, { params: param })
      .pipe(map((data) => new RegistrationModel(data)));
  }

  /**
   * Delete registration
   */
  public deleteRegistartion(id: string): Observable<RegistrationModel | null> {
    const path = `${this.apiUrl}${registartion}/${id}`;
    let param = new HttpParams();
    param = param.append("key", this.keyValue);
    return this.httpClient
      .delete<RegistrationModel>(path, { params: param })
      .pipe(map((data) => new RegistrationModel(data)));
  }
}
