import 'rxjs/add/operator/switchMap';

import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DefaultService } from '../../_services/default_service';
import { Article } from '../../_model/article';

@Component({
  templateUrl: './articledetail.html',
  styleUrls: ['./articledetail.css']
})

export class ArticleDetailComponent {
  options: FormGroup;

  article: any;
  flag: boolean;
  constructor(
    private defaultService: DefaultService,
    private route: ActivatedRoute,
    private location: Location, fb: FormBuilder
  ) {
    this.options = fb.group({
      'color': 'primary',
      'fontSize': [16, Validators.min(10)],
    });
  }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.defaultService.getPersonById(params['id']).then(
      function(response) {
        var temp: Article;
        var article = response.message;
        temp = new Article(article._id, article.firstName, article.lastName, article.city, article.state,
          article.postalCode, article.addressLine1, article.addressLine2, article.donationAmount,
          article.content, article.img, article.mailId, article.phone,
          article.representativeId, article.likesCount, article.shareCount, article.dob);
        return temp;
      }
    )).subscribe(article => this.article = article);
  }

  open(): void {
    var razrPayOptions = {
      "key": "rzp_test_IEjF0FvPW3jvgf",
      "amount": "200000", // 2000 paise = INR 20
      "name": this.article.getFullName(),
      "description": "Donation for upliftment of society",
      "image": "../../" + this.article.getImg(),
      "handler": function(response: any) {
        alert(response.razorpay_payment_id);
      },
      "prefill": {
        "name": this.article.getFullName(),
        "email": this.article.getMail()
      },
      "notes": {
        "address": "Hello World"
      },
      "theme": {
        "color": "#607D8B"
      }
    };
    // var rzp = new Razorpay(razrPayOptions); //this method is imported in index.html
    // rzp.open();
  }

  goBack(): void {
    this.location.back();
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }
}
