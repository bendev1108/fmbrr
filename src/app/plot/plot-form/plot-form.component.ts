import { BrdsqlService } from './../../service/brdsql.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plot-form',
  templateUrl: './plot-form.component.html',
  styleUrls: ['./plot-form.component.scss']
})
export class PlotFormComponent implements OnInit{
cpfarmerData?: any = [];


  constructor(
    private brdsql: BrdsqlService,
  ) { }

  ngOnInit(): void {
    this.getCpdataFarmer()

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
      }, error(err) {
        alert('เกิดความผิดพลาดในการเรียกข้อมูลจากเซริ์ฟเวอร์')
      },
    })

  }
}
