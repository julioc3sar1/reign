import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Input() favorite!:Boolean
  @Output() MarkAsFavorite = new EventEmitter<News>()
  @Output() RemoveAsFavorite = new EventEmitter<News>()

  handleFavorite(event:any){
    event.preventDefault()
    if(this.favorite){
      this.RemoveAsFavorite.emit(this.data)
    }else{
      this.MarkAsFavorite.emit(this.data)
    }
  }

  getTimeAgo(created:string){
    const date = new Date (created)
    const now = new Date(Date.now())
    let timeAgo=null
    const [d,m,y]=[date.getDay(),date.getMonth()+1,date.getFullYear()]
    if(y===now.getFullYear()){
      if(m===now.getMonth()+1){
        if(d===now.getDay()){
          return `${now.getHours() - date.getHours()} hours`
        }else{
          return `${now.getDay() - d} day`
        }
      }      
    }else{
      // si no es el mismo a#o
    }

    return timeAgo    
  }

  ngOnInit(): void {
  }

}
