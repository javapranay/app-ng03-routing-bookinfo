import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleRegistrationService {

  constructor(private http :HttpClient) { }

  public doRegistration(article :Article){
    return this.http.post("http://localhost:8787/user/article", article, {responseType: 'text' as 'json'});
  }

  public getArticles(){
    return this.http.get("http://localhost:8787/user/articles");
  }

  public getArticleById(articleId :number){
    return this.http.get("http://localhost:8787/user/article/"+articleId);
  }

  public deleteArticle(articleId :number){
    return this.http.delete("http://localhost:8787/user/article/"+articleId)
  }
}
