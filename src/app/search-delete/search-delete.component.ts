import { Component, OnInit } from '@angular/core';
import { ArticleRegistrationService } from '../article-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  articles :any;

  constructor(private articleService :ArticleRegistrationService) { }

  ngOnInit(): void {
    let resp = this.articleService.getArticles();
    resp.subscribe(data => this.articles = data);
    resp.subscribe(data => console.log(data));
  }

}
