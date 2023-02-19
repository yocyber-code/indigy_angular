import { Component } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  mode = -1;
  isEdit = false;
  editIndex = -1;
  editData = {
    id: '',
    name: '',
    tel: '',
    position: 'โปรแกรมเมอร์',
  };
  blankdata = {
    id: '',
    name: '',
    tel: '',
    position: 'โปรแกรมเมอร์',
  };
  datas = [
    {
      id: '111231',
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
      phone = phone.slice(0, 12);
    }
    console.log(phone);

    this.editData.tel = phone;
  }
  onConfirm() {
    if (this.mode === 0) {
      this.datas = [...this.datas, this.editData]
    } else if (this.mode === 1) {
      this.datas = [
        ...this.datas.slice(0, this.editIndex),
        {...this.editData},
        ...this.datas.slice(this.editIndex + 1, this.datas.length),
      ]
    }
    this.isEdit = false
  }
  onNew(){
    this.mode = 0
    this.isEdit = true
    this.editData = { ...this.blankdata }
  }
  onEdit(data:any, index:number) {
    this.mode = 1
    this.editIndex = index
    this.isEdit = true
    this.editData = { ...data }
  }
  onDelete(index:number) {
    if (confirm('ต้องการจะลบใช่ไหม')) {
      if (index !== -1) {
        this.datas = this.datas.slice(0, index).concat(this.datas.slice(index + 1));
      }
      if (this.datas.length === 0) {
        this.datas = []
      }
    }
  }
}
