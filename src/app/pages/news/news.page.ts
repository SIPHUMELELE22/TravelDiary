import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from 'src/app/news-feed.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  articles: any;

  constructor( private newsService: NewsFeedService) { }

  loadNews(){
    this.newsService.getNews("top-headlines?country=us").subscribe(news =>{
      this.articles = news;
      console.log(this.articles);
    });
    this.loadNews()
  }

  ngOnInit() {
  }

}
