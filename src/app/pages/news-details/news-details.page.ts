import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {

  showFullContent: boolean = false;

  author: any;
  content: any;
  description: any;
  url: any;
  publishedAt: any;
  image: any;
  source: any;
  title: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.source = params['source'];
      this.author = params['author'];
      this.content = params['content'];
      this.description = params['description'];
      this.url = params['url'];
      this.publishedAt = params['publishedAt'];
      this.image = params['urlToImage'];
      this.title = params['title']
    });
}
showContent() {
  this.showFullContent = !this.showFullContent;
}
like(){
  
}
share(){

}
bookmark(){

}

}


