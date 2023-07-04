import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/core/members.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: String = 'Sagamu Union';
  id = '17622029';

  events: any[] = [];

  constructor(private ms: MembersService) { }

  ngOnInit() {
    this.ms.getJson()
      .subscribe(data => {
        this.events = data['events'];
      })
  }

}
