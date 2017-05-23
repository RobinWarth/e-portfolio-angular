import { Component, OnInit } from '@angular/core';
import { DhbwService } from '../dhbw.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {

  constructor(public dhbw: DhbwService) { }

  ngOnInit() {
  }

}
