import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { ImageListComponent } from "./image-list/image-list.component";

@NgModule({
  declarations: [AppComponent, SearchbarComponent, ImageListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
