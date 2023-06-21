import { BrdsqlService } from './../../service/brdsql.service';
<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 858dfcc29d4b6496759d5501306dedb6e92ad9ec

@Component({
  selector: 'app-plot-form',
  templateUrl: './plot-form.component.html',
  styleUrls: ['./plot-form.component.scss']
})
<<<<<<< HEAD
export class PlotFormComponent implements OnInit {

  alldata: any;
  // fmcode = "0000148033"

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  cpfarmerData?: any = [];
  yearid?: any = [];

  constructor(private brdsql: BrdsqlService,) { }

  ngOnInit(): void {
    this.getYearsData()
    // this.getCpdataFarmer()

  }
  // เรียกดูข้อมูลปีการผลิต
  async getYearsData() {
    await this.brdsql.getYears().subscribe({
      next: (year:any) => {
        this.yearid = year.recordset
        console.log('res :' ,this.yearid)

      }
    })
  }

  // เรียกดูข้อมูลแปลงอ้อยตามปัการผลิตและบัญชีชาวไร่
  async getCpdataFarmer(year:string ,fmcode:string) {
    // let year = "2324"
    // let fmcode = this.fmcode;
    await this.brdsql.getcpDataframer(year, fmcode).subscribe({
      next: (res: any) => {
        let data = res.recordset

        this.alldata = new MatTableDataSource(data);
        console.log('data',data);
        this.paginator.length = data.length;
        this.paginator.pageSize = 10;
        this.alldata.sort = this.sort;
        this.alldata.paginator = this.paginator;


        //console.log('Data form server : ', data)
=======
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
>>>>>>> 858dfcc29d4b6496759d5501306dedb6e92ad9ec
      }, complete() {
        // ถ้าสำเร็จ ตั้องการทำอะไร ใส่ไว้ตรงนี้
      }, error(err) {
        alert('เกิดความผิดพลาดในการเรียกข้อมูลจากเซริ์ฟเวอร์')
      },
    })

  }
<<<<<<< HEAD
  displayedColumns: string[] = ['intlandno', 'supzone', 'route', 'fmname', 'canetype', 'SUPNAME', 'icon'];

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.alldata.filter = filterValue.trim().toLowerCase();;
    if (this.alldata.paginator) {
      this.alldata.paginator.firstPage();
    }
  }
=======
>>>>>>> 858dfcc29d4b6496759d5501306dedb6e92ad9ec
}
