import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  private baseURL: string = "https://api.unsplash.com";

  constructor(private http: HttpClient) {}

  fetchDataFromApi(value: string) {
    return this.http.get(this.baseURL + "/search/photos", {
      params: { query: value },
      headers: {
        Authorization:
          "Client-ID 06a04be2c86169cc9eea39805e65a945a7b77ae896d6365e303524c0f611c3c5"
      }
    });
  }
}
