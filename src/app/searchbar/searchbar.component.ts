import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.css"]
})
export class SearchbarComponent implements OnInit {
  userInput: string;

  @Output() dataEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  searchSubmit = event => {
    event.preventDefault();
    this.userInput = event.target[0].value;
    this.dataEvent.emit(event.target[0].value);
  };
}
