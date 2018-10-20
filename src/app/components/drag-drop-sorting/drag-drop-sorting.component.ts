import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag-drop-sorting',
  templateUrl: './drag-drop-sorting.component.html',
  styleUrls: ['./drag-drop-sorting.component.scss']
})
export class DragDropSortingComponent implements OnInit {
  result = '';

  movies = [
    'Episode I - The Phantom Menace',
    'Episode V - The Empire Strikes Back',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IV - A New Hope'
  ];


  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  onClicked() {
    console.log(this.movies);
    this.result = JSON.stringify(this.movies);
  }
}
