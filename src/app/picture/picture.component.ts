import {Component} from "@angular/core";

@Component({
  selector: "my-picture",
  templateUrl: "./picture.component.html",
  styleUrls: ["./picture.component.css"]
})
export class PictureComponent {

  readonly myPictureUrl: string;

  constructor() {
    this.myPictureUrl = "./images/boris_resized.jpg";
  }
}
