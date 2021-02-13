import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CookieBannerService {
  constructor(private http: HttpClient) {}

  getCookieBannerContent(): Observable<any> {
    return this.http.get(
      "https://fast-lowlands-95849.herokuapp.com/api/common/getBanner"
    );
  }
}
