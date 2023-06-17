import { Component, AfterViewInit, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BrdsqlService } from '../service/brdsql.service';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})
export class PlotComponent implements AfterViewInit, OnInit {

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

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  ngAfterViewInit(): void {
    // const script = document.createElement('script');
    // script.src = 'assets/dist/js/pages/plot.js';
    // document.body.appendChild(script);
  }

}


export interface Recordset {
  itid: string;
  year: string;
  intlandno: string;
  fmcode: string;
  fmname: string;
  landvalue: number;
  canetype: string;
  CaneTypeName: string;
  status: string;
  Partcode: string;
  supzone: string;
  supcode: string;
  SUPNAME: string;
  groupCode: string;
  groupCode_m: string;
  centery: number;
  centerx: number;
  CaneYearName: any;
  newplot: string;
  route: number;
  route_id: string;
  Plottype: string;
  plotdesc: string;
  SeedCode: string;
  seedname: string;
  target_yield: any;
  target_cane: number;
  PlantDate: string;
  PlantDateTH: string;
  caneage: number;
  growed1: string;
  RepairingCane: any;
  Groove: number;
  hardSoilBlast: any;
  AmountNaturalFertilizer: number;
  AmountDolomite: number;
  AmountFertilizerRound: any;
  AmountFertilizerRound2: any;
  AmountFertilizerRound3: any;
  FertilizerRound: any;
  FertilizerRound2: any;
  FertilizerRound3: any;
  NaturalFertilizer: string;
  Dolomite: string;
  lastGerminationPercent: number;
  lastweed: string;
  lastupdate: string;
  Last_P: string;
  Ton: number;
  Assess: number;
  ton1: number;
  Assess1: number;
  ton2: number;
  Assess2: number;
  ton3: number;
  Assess3: number;
  ton4: number;
  Assess4: number;
  ton5: number;
  Assess5: number;
  ton6: number;
  Assess6: number;
  ton7: number;
  Assess7: number;
  Ton_b: any;
  Assess_b: any;
  qtype: any;
  qdesc: any;
  update_cut: any;
  period_cut: any;
  Cutseed: number;
  cutstatus: string;
  cutstatusDesc: string;
  cutstart: any;
  cutstop: any;
  canein: number;
  pc_canein: number;
  yieldEnd: number;
  ccs: number;
  canein_last_year: number;
  yield_last_year: number;
  credit_amount: number;
  money_amt: number;
  confirm_area: string;
  confirm_area_doc: string;
  insect_disease_by: any;
  is_Disease: any;
  is_Disease_doc: any;
  pc_Disease: number;
  is_Disease_imp: string;
  is_insect: any;
  is_insect_doc: any;
  pc_insect: number;
  is_insect_imp: string;
  is_Disease_insect: string;
  landname_fm: any;
  PlantDate_fm: any;
  GerminationPercent_fm: any;
  NaturalFertilizer_fm: any;
  NaturalFertilizerDate_fm: any;
  Dolomite_fm: any;
  DolomiteDate_fm: any;
  hardSoilBlast_fm: any;
  hardSoilBlastDate_fm: any;
  FertilizerRound1_fm: any;
  FertilizerRoundFormula1_fm: any;
  FertilizerRoundDate1_fm: any;
  FertilizerRound2_fm: any;
  FertilizerRoundFormula2_fm: any;
  FertilizerRoundDate2_fm: any;
  FertilizerRound3_fm: any;
  FertilizerRoundFormula3_fm: any;
  FertilizerRoundDate3_fm: any;
  liquidFertilizer_fm: any;
  liquidFertilizerDate_fm: any;
  seedName_fm: any;
  NaturalFertilizerMoney_fm: any;
  DolomiteMoney_fm: any;
  FertilizerMoney1_fm: any;
  FertilizerMoney2_fm: any;
  FertilizerMoney3_fm: any;
  liquidFertilizerMoney_fm: any;
  weed_fm: any;
  Disease_fm: any;
  Insect_fm: any;
  ton_fm: number;
  Assess_fm: number;
  AmountWatering_fm: any;
  comment_fm: any;
  picLink_fm: any;
  insert_date_fm: any;
  update_date_fm: any;
  groupcutFM: any;
  groupnameFM: any;
  caneleft: number;
  year_th: number;
  ton_lost: number;
  getFert3: string;
}

