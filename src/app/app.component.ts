import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  editData = {
    id: '',
    name: '',
    tel: '',
    position: '',
  };
  datas = [
    {
      id: '110036',
      name: 'สมชายใจดี',
      tel: '023-123-4125',
      position: 'โปรแกรมเมอร์',
    },
  ];

  onTelChange(event: any) {
    let phone = event.target.value;

    if (!/^\d+$/.test(phone.charAt(phone.length - 1))) {
      phone = phone.slice(0, phone.length - 1);
    } else if (phone.charAt(phone.length - 1) === '-') {
      phone = phone.slice(0, phone.length - 2);
    } else if (
      (phone.length === 3 || phone.length === 7) &&
      phone.charAt(phone.length - 1) != '-'
    ) {
      phone += '-';
    }
    if (phone.length > 12) {
      phone = phone.slice(0, phone.length - 1);
    }

    this.editData.tel = phone;
  }
}
