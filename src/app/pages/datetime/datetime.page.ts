import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
   fechaNacimiento: Date = new Date();
   customPickerOptions;
   customDate;
  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (e) => {
          console.log('Clicked Save!');
          console.log(e.day.value);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }
  cambioFecha(e) {
  console.log(e);
  console.log('Date', new Date(e.detail.value));
  }

}
