<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BrdsqlService } from '../service/brdsql.service';
=======
<<<<<<< HEAD
import {AfterViewInit, Component} from '@angular/core';
=======
import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},

];

/**
 * @title Table with filtering
 */
>>>>>>> 3fbea51366215eb16cd71b821a270da8cd7c6be3
>>>>>>> 858dfcc29d4b6496759d5501306dedb6e92ad9ec

@Component({
  selector: 'app-sugarcane-cue-groups',
  templateUrl: './sugarcane-cue-groups.component.html',
  styleUrls: ['./sugarcane-cue-groups.component.scss']
})
<<<<<<< HEAD
export class SugarcaneCueGroupsComponent implements OnInit {

  alldata: any;
  fmcode = "0000148033"

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  cpfarmerData?: any = [];

  constructor(private brdsql: BrdsqlService,) { }

  ngOnInit(): void {
    this.getCpdataFarmer()
  }

  // เรียกดูข้อมูลแปลงอ้อยตามปัการผลิตและบัญชีชาวไร่
  async getCpdataFarmer() {
    let year = "2324"
    let fmcode = this.fmcode;
    await this.brdsql.getcpDataframer(year, fmcode).subscribe({
      next: (res: any) => {
        let data = res.recordset

        this.alldata = new MatTableDataSource(data);
        console.log('data', data);
        this.paginator.length = data.length;
        this.paginator.pageSize = 10;
        this.alldata.sort = this.sort;
        this.alldata.paginator = this.paginator;


        //console.log('Data form server : ', data)
      }, complete() {
        // ถ้าสำเร็จ ตั้องการทำอะไร ใส่ไว้ตรงนี้
      }, error(_err: any) {
        alert('เกิดความผิดพลาดในการเรียกข้อมูลจากเซริ์ฟเวอร์')
      },
    })

  }
  displayedColumns: string[] = ['supzone', 'route', 'intlandno', 'fmname', 'canetype', 'landvalue', 'Assess', 'Ton', 'groupCode', 'canein', 'icon'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.alldata.filter = filterValue.trim().toLowerCase();;
    if (this.alldata.paginator) {
      this.alldata.paginator.firstPage();
    }
  }
=======
export class SugarcaneCueGroupsComponent implements AfterViewInit{
>>>>>>> 858dfcc29d4b6496759d5501306dedb6e92ad9ec

<<<<<<< HEAD
  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/scq-forms.js';
    document.body.appendChild(script);
  }
  
=======
  

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

>>>>>>> 3fbea51366215eb16cd71b821a270da8cd7c6be3
}
