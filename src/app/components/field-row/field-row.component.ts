import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-row',
  templateUrl: './field-row.component.html',
  styleUrls: ['./field-row.component.scss']
})
export class FieldRowComponent implements OnInit {

  private _name = '';
  @Input()  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  get name(): string { return this._name; }

  constructor() { }

  ngOnInit() {
  }

}
