import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'media-project';
  obj: object;

  renderGallery(json: object){
    this.obj = json
    console.log("app.component side object: ", this.obj)
  }
}
