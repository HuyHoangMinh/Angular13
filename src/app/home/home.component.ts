import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public taiKhoan = 'Minh Duc';
  public age = 41;
  public traiCay=['Táo','Xoài','Nho','Cam'];
  public traiCay2=[
    {ten:'Mận',gia:12, giamgia : 0},
    {ten:'Cóc',gia:10, giamgia :5}
  ];
  public cities = [
    {city:'Chọn Tỉnh/TP',district:["Chọn Quận/Huyện"]},
      {city:'An Giang', district: ["Thành phố Long Xuyên","Thành phố Châu Đốc","Thị xã Tân Châu","Huyện An Phú","Huyện Châu Phú","Huyện Châu Thành","Huyện Chợ Mới","Huyện Phú Tân","Huyện Thoại Sơn","Huyện Tịnh Biên","Huyện Tri Tôn"]},
      {city:'TP.HCM', district: ["Quận 1","Quận 2","Quận 3","Quận 4","Quận 5","Quận 6","Quận 7","Quận 8","Quận 9","Quận 10","Quận 11","Quận 12","Quận Bình Tân","Quận Bình Thạnh","Quận Gò Vấp","Quận Phú Nhuận","Quận Tân Bình","Quận Tân Phú","Quận Thủ Đức","Huyện Bình Chánh","Huyện Cần Giờ","Huyện Củ Chi","Huyện Hóc Môn","Huyện Nhà Bè"]},
    {city:'Bà Rịa - Vũng Tàu',district:["Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ","Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"]}
    ];
    public districts:string[]=["Chọn Quận/Huyện"];
  constructor() { }

  ngOnInit(): void {
    console.log('Trái Cây = ',this.traiCay);
  }
  public resetName():void{
    this.taiKhoan = '';
  };
  public changeCity(event:any):void{
    const city = event.target.value;
    if (!city)
      return;
  // cach 1
   /* const search = this.cities.filter((data) => data.city === city);
   if(search && search.length>0) 
     this.districts=search[0].district; */
  
   // Cach 2
    this.districts = this.cities.find(data=>data.city===city)?.district||[];
  };
}
