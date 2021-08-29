import { TemplateRef, ɵConsole } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataI } from 'src/app/modal/data';
import { raI } from 'src/app/modal/ra';
import { ServicesService } from 'src/app/services.service';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private api: ServicesService,
  ) { }
  Registro:any;
  data:DataI;
  position:Number;
  dia:string;
  hora1:string;
  hora2:string;
  temperatura:string;
  humidity:string;
  fecha:string;


  ngOnInit(): void {
       this.position=2
       this.dia="29 august 21"
       this.hora1="14"
       this.hora2="25"
       this.temperatura='0'
       this.humidity='0'
       this.fecha='---'
       this.api.Ultimodato().subscribe(
        (data) => {
     

        let arr = data.hora.split(','); 
        this.fecha=arr[0]
        this.hora1=arr[1]
        this.hora2=arr[2]
        
        this.temperatura=data.temperatura
        this.humidity=data.humedad
        
      },
      (err)=>{
        console.log(err.message)
      }
  
      )
      this.api.record().subscribe(
        (data) => {
     
          this.Registro = data;
      
         

      },
      (err)=>{
        console.log(err.message)
      }
  
      )

  }

  Proyecto(){
    this.position=1
  }
  Actual(){
    this.position=2
  }
  Records(){
    this.position=3
  }
}

