<<<<<<< HEAD
import { BrdsqlService } from './../../service/brdsql.service';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
=======
import { Component, AfterViewInit } from '@angular/core';
>>>>>>> 3fbea51366215eb16cd71b821a270da8cd7c6be3

@Component({
  selector: 'app-plot-detail',
  templateUrl: './plot-detail.component.html',
  styleUrls: ['./plot-detail.component.scss']
})
<<<<<<< HEAD
export class PlotDetailComponent implements AfterViewInit, OnInit{
  fmname: any;

  cpfarmerData?: any = [];

  constructor(private brdsql: BrdsqlService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCpdataFarmer()
    this.fmname = this.route.snapshot.paramMap.get('fname')

  }

  // เรียกดูข้อมูลแปลงอ้อยตามปัการผลิตและบัญชีชาวไร่
  async getCpdataFarmer() {
    let year = "2324"
    let fmcode = "0000148033"
    await this.brdsql.getcpDataframer(year, fmcode).subscribe({
      next: (res: any) => {
        this.cpfarmerData = res.recordset
        console.log('Data form server : ', res)
      }, complete() {
        // ถ้าสำเร็จ ตั้องการทำอะไร ใส่ไว้ตรงนี้
      }, error(_err: any): void {
        alert('เกิดความผิดพลาดในการเรียกข้อมูลจากเซริ์ฟเวอร์')
      },
    })

  }
=======
export class PlotDetailComponent implements AfterViewInit{
>>>>>>> 3fbea51366215eb16cd71b821a270da8cd7c6be3

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/plot-activity-next.js';
    document.body.appendChild(script);
  }
}
