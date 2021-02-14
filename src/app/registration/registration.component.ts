import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleRegistrationService } from '../article-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  article :Article = new Article(0, "", "");
  message :any;

  constructor(private articleService :ArticleRegistrationService) { }

  ngOnInit(): void {
  }

  public registerNow(){
    let resp = this.articleService.doRegistration(this.article);
    resp.subscribe(data => this.message = data);
  }

}
