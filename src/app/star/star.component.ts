import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html'
})
export class StarComponent implements OnInit {

  @Input() cell: number;
  @Input() rating: number;

  public color: string = 'black';

  ngOnInit(): void {
    if (this.cell < this.rating) {
      this.color = 'green';
    }
  }
}
