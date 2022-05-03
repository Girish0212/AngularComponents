import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-query-card',
  templateUrl: './query-card.component.html',
  styleUrls: ['./query-card.component.css']


})
export class QueryCardComponent implements OnInit {
  
  totalLength: any;
  page: number = 1;


  constructor() { }
  ngOnInit(): void {
   this.totalLength=this.data.length
  }

  
  public data = [    
    {
    QueryTitle:"HTML and CSS",
    QueryContent:"How to use Html and css together to make the website responsive with the bootstrap?"
  },
  {
    QueryTitle:"HTML and CSS",
    QueryContent:"How to use Html and css together to make the website responsive with the bootstrap?"
  },
  {
    QueryTitle:"HTML and CSS",
    QueryContent:"How to use Html and css together to make the website responsive with the bootstrap?"
  },
  {
    QueryTitle:"HTML and CSS",
    QueryContent:"How to use Html and css together to make the website responsive with the bootstrap?"
  },
  {
    QueryTitle:"HTML and CSS",
    QueryContent:"How to use Html and css together to make the website responsive with the bootstrap?"
  },
  {
    QueryTitle:"HTML and CSS",
    QueryContent:"How to use Html and css together to make the website responsive with the bootstrap?"
  }, {
    QueryTitle:"HTML and CSS",
    QueryContent:"How to use Html and css together to make the website responsive with the bootstrap?"
  },
  {
    QueryTitle:"HTML and CSS",
    QueryContent:"How to use Html and css together to make the website responsive with the bootstrap?"
  },
  {
    QueryTitle:"HTML and CSS",
    QueryContent:"How to use Html and css together to make the website responsive with the bootstrap?"
  },
  {
    QueryTitle:"HTML and CSS",
    QueryContent:"How to use Html and css together to make the website responsive with the bootstrap?"
  },
  {
    QueryTitle:"HTML and CSS",
    QueryContent:"How to use Html and css together to make the website responsive with the bootstrap?"
  },
  {
    QueryTitle:"HTML and CSS",
    QueryContent:"How to Html and css together to make the website responsive with the bootstrap?"
  },];
  


}

