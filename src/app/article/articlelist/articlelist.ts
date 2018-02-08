import { Component, OnInit } from '@angular/core';

import { DefaultService } from '../../_services/default_service';
import { Article } from '../../_model/article';

@Component({
  templateUrl: 'articlelist.html',
  styleUrls: ['articlelist.css']
})

export class ArticleListComponent {
  private columnDefs: any[];
  private checked: false;
  constructor(private defaultService: DefaultService) {
    this.columnDefs = [
      {
        headerName: "Id",
        field: "id",
        width: 80
      },
      {
        headerName: "FirstName",
        field: "firstName",
        width: 80
      },
      {
        headerName: "LastName",
        field: "lastName",
        width: 80
      },
      {
        headerName: "City",
        field: "city",
        width: 80
      },
      {
        headerName: "State",
        field: "state",
        width: 80
      },
      {
        headerName: "PostalCode",
        field: "postalCode",
        width: 80
      },
      {
        headerName: "AddressLine1",
        field: "addressLine1",
        width: 80
      },
      {
        headerName: "AddressLine2",
        field: "addressLine2",
        width: 80
      },
      {
        headerName: "DonationAmount",
        field: "donationAmount",
        width: 80
      },
      {
        headerName: "Content",
        field: "content",
        width: 80
      },
      {
        headerName: "Img",
        field: "img",
        width: 80
      },
      {
        headerName: "MailId",
        field: "mailId",
        width: 80
      },
      {
        headerName: "Phone",
        field: "phone",
        width: 80
      },
      {
        headerName: "RepresentativeId",
        field: "representativeId",
        width: 80
      },
      {
        headerName: "LikesCount",
        field: "likesCount",
        width: 80
      },
      {
        headerName: "ShareCount",
        field: "shareCount",
        width: 80
      },
      {
        headerName: "Dob",
        field: "dob",
        width: 80
      }
    ];
  }
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
