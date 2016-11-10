import {Component} from "@angular/core";

@Component({
  selector: "my-picture",
  templateUrl: "./picture.component.html",
  styleUrls: ["./picture.component.css"]
})
export class PictureComponent {

  public myPictureUrl: string = "./images/boris_resized.jpg";
}
