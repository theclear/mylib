import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDp-7_oVwEHHQGSnja22JRFlH1zgCaF-Hc",
      authDomain: "http-client-demo-seb.firebaseapp.com",
      databaseURL: "https://http-client-demo-seb.firebaseio.com",
      projectId: "http-client-demo-seb",
      storageBucket: "http-client-demo-seb.appspot.com",
      messagingSenderId: "58878318832",
      appId: "1:58878318832:web:5ffc2970c959fb67"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
