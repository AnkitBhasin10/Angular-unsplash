import { Component } from "@angular/core";
import { DataServiceService } from "./data-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  images = [];

  constructor(private dataService: DataServiceService) {}

  onUserInput = value => {
    this.dataService.fetchDataFromApi(value).subscribe((Response: any) => {
      this.images = Response.results;
    });
  };
}
