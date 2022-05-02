import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  @Input() ArticleTitle: string = "Web API"
  @Input() ArticleContent: string = "A web API is an application programming interface for either a web server or web browser. It is a web development concept usually limited to a client - side";
constructor() { }

ngOnInit(): void {
}

}
