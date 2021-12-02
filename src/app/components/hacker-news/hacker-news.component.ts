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
  filter = new FormControl('');
  items:News[]=[]
  page!:number
  favorites:News[]=[]
  section:string = 'all'

  filterNews(){
    localStorage.setItem('news',this.filter.value)
    this.loading = true
    this.items=[]
    const query = this.filter.value
    // console.log(this.filter.value)
    this.getNews(query,0)
  }

  getNews(query:string,page:number,scroll:boolean=false){
    this.newsService.getItems(query,page).subscribe((data:any) => {
      console.log(data)
      this.page = data.page
      let hits = data.hits.filter((hit:any) => hit.story_url!=null)
      // console.log(hits)
      this.items = this.items.concat(hits)
      this.loading = false
    })
  }

  isFavorite(news:News){
    let item = null
    item = this.favorites.find(item => item.objectID === news.objectID)
    // console.log(item)
    if(item!=null){
      return true
    }else{
      return false
    }
  }

  markAsFavorite(news:News){
    this.favorites.push(news)
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  removeAsFavorite(news:News){
    this.favorites = this.favorites.filter(item => item.objectID!=news.objectID)
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
  
  onScrollDown(ev: any) {
    // this.loading = true
    // console.log("scrolled down!!", ev);
    // this.paginate
    this.getNews(this.filter.value,this.page+1)
  }
  
  ngOnInit(): void {
    const localFavorites = localStorage.getItem('favorites')
    const appFavorites = localFavorites!==null ? JSON.parse(localFavorites) : null
    // console.log(appFavorites)
    const news = localStorage.getItem('news')
    
    if(news != null){
      // localStorage.setItem('news','angular')
      this.filter.setValue(news)
    }else{
      this.filter.setValue('angular')
    }
    // console.log(appFavorites)
    if(Array.isArray(appFavorites) && appFavorites.length>0){
      this.favorites = appFavorites      
    }

    this.filterNews()
  }

}
