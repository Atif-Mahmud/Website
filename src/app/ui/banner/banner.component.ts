import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  announcement: String = 'I\'ve updated my CV, have a look!';

  constructor() { }

  ngOnInit() {
  }

}
