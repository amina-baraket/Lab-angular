import { Component } from '@angular/core';
import { EventService } from 'src/Services/event.service';
import { MemberService } from 'src/Services/member.service';
import { PubService } from 'src/Services/pub.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
nb_Members:number=0;
nb_Events:number=0;

nb_pubs:number=0;
nb_tools:number=0;

tabNom: string[] = [];
tablieu: string[]=[] ;
tabEvt: number[]=[];

chartData: ChartDataset[] = [
  {
    label: '$ in millions',
    data: [ 1551, 1688, 1800, 1895, 2124, 2124 ]
  }
];
chartLabels: string[] =[];
chartOptions: ChartOptions = {};

chartDatapie: ChartDataset[] = [
  {
    label: 'Reparation',
    data: [ ]
  }
];
chartLabelspie: string[] = ["Teacher","Student"];
chartOptionspie: ChartOptions = {};

chartDatadoughnut: ChartDataset[] = [
  {
    label: 'Reparation',
    data: [ ]
  }
];
//chartLabelsdoughnut: string[] = ["Tunis","Sfax","Mahdia"];
chartLabelsdoughnut=this.tablieu;
chartOptionsdoughnut: ChartOptions = {};

// other code

nbSt:number=0;nbTch:number=0;
nbt=0;nbs=0;nbm=0;

constructor(private MS:MemberService,private PS:PubService,private EV:EventService){

  this.MS.GetAllMembers().subscribe((res)=>{
    this.nb_Members=res.length;
    for(let i=0;i<this.nb_Members;i++){
      if(res[i].type=="etudiant")this.nbSt++;
      else this.nbTch++;
    }
    this.chartDatapie=[
     { data:[this.nbTch,this.nbSt]}
    ];
    
   
    for (let i=0; i<this.nb_Members;i++) {
      this.tabNom.push(res[i].name);
      this.tabEvt.push(res[i].tabEvt.length)
   }
   this.chartLabels = this.tabNom;
   this.chartData = [
     {
       label: 'Index des membres',
       data: this.tabEvt,
     }
   ];
  })
  this.PS.GetAllPubs().subscribe((res)=>{
    this.nb_pubs=res.length
  })
  
  

  this.EV.GetAllEvents().subscribe((res)=>{

    this.tablieu=res.map(element=>element.lieu)
    this.chartLabelsdoughnut=[...new Set(this.tablieu)]
    console.log(this.tablieu)
    this.nb_Events=res.length;
    for(let i=0;i<this.nb_Events;i++){
      if(res[i].lieu=="sfax")this.nbs++;
      else if (res[i].lieu=="tunis")this.nbt++; 
      else this.nbm++;
    }
    this.chartDatadoughnut=[
   //  { data:[this.nbt,this.nbs,this.nbm]}
   { data:[this.nbt,this.nbs,this.nbm]}
    ]
  })

  


}



}