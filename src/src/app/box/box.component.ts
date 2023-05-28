/*

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() texte: string = '';
  @Input() texte2: string = '';
  @Input() texte3: string = '';
  @Input() imageURL: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}



