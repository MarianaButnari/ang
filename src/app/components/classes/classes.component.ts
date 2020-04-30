import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  errorMesage: string;
  constructor(private route: ActivatedRoute ) { }
  ngOnInit() {
    this.errorMesage = this.route.snapshot.data.message;
  }

}
