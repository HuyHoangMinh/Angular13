import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public taiKhoan = 'Minh Duc';
  public age = 41;
  public traiCay=['Táo','Xoài'];
  constructor() { }

  ngOnInit(): void {
    console.log('Trái Cây = ',this.traiCay);
  }
public resetName():void{
  this.taiKhoan = '';
};
}
