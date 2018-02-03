import { Component, OnInit } from '@angular/core';

import { DefaultService } from '../../_services/default_service';
import { Article } from '../../_model/article';

@Component({
  templateUrl: 'articlelist.html',
  styleUrls: ['articlelist.css']
})

export class ArticleListComponent {
  constructor(private defaultService: DefaultService) { }
  listOfArticle: Article[];
  listOfDummyArticle: Article[];

  getListOfPersonFromLocal(): void {
    this.defaultService.getListOfDummyArticle().then(listOfArticle => this.listOfDummyArticle = listOfArticle);
  }

  ngOnInit(): void {
    this.getListOfArticle();
  }

  getListOfArticle(): void {
    var listOfArticle: Article[] = [];
    this.defaultService.getListOfArticle().then(
      function(response) {
        console.log(response);
        for (var i = 0; i < response.message.length; i++) {
          var article = new Article(response.message[i]._id, response.message[i].firstName,
            response.message[i].lastName, response.message[i].city, response.message[i].state,
            response.message[i].postalCode, response.message[i].addressLine1, response.message[i].addressLine2,
            response.message[i].donationAmount, response.message[i].content, response.message[i].img,
            response.message[i].mailId, response.message[i].phone, response.message[i].representativeId,
            response.message[i].likesCount, response.message[i].shareCount, response.message[i].dob);
          listOfArticle.push(article);
        }
        return listOfArticle;
      }
    ).then(listOfArticle => this.listOfArticle = listOfArticle);
  }
}
