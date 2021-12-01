import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() {
    // this.data = {}
  }

  @Input() data!:News

  ngOnInit(): void {
  }

}
