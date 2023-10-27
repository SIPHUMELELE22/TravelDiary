import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from 'src/app/news-feed.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

 selectedCategory = "general"
 popularNews:any = [];

 article: any;

  constructor(private newsFeedService: NewsFeedService) {
    newsFeedService.getPopularNews().subscribe((results) => {
    console.log(results.articles);
    this.popularNews = results.articles;
    })
    newsFeedService.getArticleByCategory(this.selectedCategory).subscribe((results) => {
      console.log(results);
      })
   }

  ngOnInit() {
  }

}
