import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NewsFeedService } from 'src/app/news-feed.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

 selectedCategory = "sport";
 popularNews:any = [];

  constructor(private newsFeedService: NewsFeedService,
    private router: Router) {
    newsFeedService.getPopularNews().subscribe((results) => {
    console.log(results.articles);
    this.popularNews = results.articles;
    })
    newsFeedService.getArticleByCategory(this.selectedCategory).subscribe((results) => {
      console.log(results);
      });

   }

   getNewsDetails(selectedArticle: any){
    const navigationExtras: NavigationExtras = {
      queryParams:{
        'author': selectedArticle.author,
        'content': selectedArticle.content,
        'description': selectedArticle.description,
        'publishedAt': selectedArticle.publishedAt,
        'source': selectedArticle.source.name,
        'title': selectedArticle.title,
        'url': selectedArticle.url,
        'urlToImage': selectedArticle.urlToImage
      }
    }
    this.router.navigate(['/news-details'], navigationExtras)

   }

  ngOnInit() {
  }

}
