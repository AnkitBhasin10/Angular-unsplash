import { Component, OnInit, Input, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html",
  styleUrls: ["./image-list.component.css"]
})
export class ImageListComponent implements OnInit {
  @Input() imageList: any;

  constructor() {}

  ngOnInit() {}

  // applyStyles() {
  //   this.imageList.map(image => {
  //     const height = image.height;

  //     const Span = Math.ceil(height / 10);

  //     const Styles = { "grid-row-end": "span" + Span };
  //     return Styles;
  //   });
  // }
}
