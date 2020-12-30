import { Component, OnInit } from '@angular/core';
import { ShowService } from '../shared/show.service';

@Component({
  selector: 'app-show-date',
  templateUrl: './show-date.component.html',
  styleUrls: ['./show-date.component.scss'],
})
export class ShowDateComponent  {
 public mydate: Date;
  constructor(private service: ShowService) { }

  onclick() {
    this.service.getApi().subscribe(
      (data: any) => {
        this.mydate = data.date;
        console.log(this.mydate);
      },
      () => { }
    );
  }
}
