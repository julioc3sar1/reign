import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from 'src/app/services/hacker-news.service';
import { FormControl } from '@angular/forms';
import { News } from 'src/app/models/news'

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.scss']
})
export class HackerNewsComponent implements OnInit {

  constructor(
    public newsService: HackerNewsService
  ) {
  }

  loading:boolean = false
  filter = new FormControl('angular');
  items!:News[]

  filterNews(){
    this.items=[]
    const query = this.filter.value
    // console.log(this.filter.value)
    this.getNews(query,1)
  }

  getNews(query:string,page:number){
    this.loading = true
    this.newsService.getItems(this.filter.value,1).subscribe((data:any) => {
      console.log(data)
      this.items = data.hits
      this.loading = false
    })
  }
  
  ngOnInit(): void {
    this.filterNews()
  }

}
