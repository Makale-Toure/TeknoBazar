import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bandeau',
  templateUrl: './bandeau.component.html',
  styleUrls: ['./bandeau.component.css']
})
export class BandeauComponent implements OnInit {
  @Input() imageURL :string="";
  @Input() texte:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
