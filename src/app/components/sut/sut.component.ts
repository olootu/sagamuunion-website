import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sut',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sut.component.html',
  styleUrls: ['./sut.component.scss']
})
export class SutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
