import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-query-card',
  templateUrl: './query-card.component.html',
  styleUrls: ['./query-card.component.css']


})
export class QueryCardComponent implements OnInit {
  @Input() QueryTitle: string="HTML and CSS";
  @Input() QueryContent: string="How to use Html and css together to make the website responsive with the bootstrap?";
  constructor() { }
  ngOnInit(): void {
  }
 

}

