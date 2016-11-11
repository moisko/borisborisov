import {Component, Input} from '@angular/core';

@Component({
  selector: "star",
  templateUrl: "./star.component.html"
})
export class StarComponent {

  @Input() cell: number;
  @Input() rating: number;

  public colorStar(): string {
    let color = "black";
    if (this.cell < this.rating) {
      color = "green";
    }
    return color;
  }
}
