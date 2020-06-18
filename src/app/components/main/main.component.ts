import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selectedFile: File = null;
constructor(private http: HttpClient) { }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
  }
  onUpload() {
// this.http.post()
  }



  ngOnInit(): void {
  }
}
