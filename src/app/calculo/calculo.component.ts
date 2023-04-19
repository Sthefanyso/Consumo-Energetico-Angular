import { Component } from '@angular/core';
import { NgbTimepickerI18nDefault } from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker-i18n';
import { basePlacements } from '@popperjs/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent {
      numResidentes!: number;
      numComodos!: number;
      quantdTV!: number;
      quantComp!: number;
      valorTarifa!: number;
      Estimativa: number = 0;
      valorConta: number = 0;
      convert: number = 0;
      mes: number = 0;
      maquinaLavar: boolean = false;
      maquinaSecar: boolean = false;
      maqLavar: number = 0;
      maqSecar: number = 0;


    calcular(){
      
      let banho = this.numResidentes * 533.33; // 1/6*3200 = 533,33wh - um banho de 10min por dia, com um chuveiro elétrico de 3200w, valor para uma pessoa. Multiplicar pelo número de residentes.
      let lampada = this.numComodos * 360; // 60*6= 10.800wh - uma lâmpada de 60w ligada 6h por dia. Multiplicar pelo número de cômodos.
      let televisao = this.quantdTV * 180; // 90*2 = 180wh - uma televisão de 90w ligada 2h por dia. 
      let computador = this.quantComp * 800; // 400*2 = 800wh - um computador de 400w ligado 2h por dia.
 

     if(this.maquinaLavar == true){
      this.maqLavar = 7.2; // uma máquina de lavar 600w ligada por 1h por 12 dias = 7.2kWh - valor já convertido.
     }
     else{
      this.maqLavar = 0;
     }
     if(this.maquinaSecar == true){
      this.maqSecar = 36; // uma máquina de secar de 3000w ligada por 1h por 12 dias = 36kWh - valor já convertido.
     }
     else{
      this.maqSecar = 0;
     }

     this.convert = (banho + lampada + televisao + computador) / 1000; // soma consumos em Wh para dividir por 1000 e transformar em kWh.
     this.mes = (this.convert * 30) + (this.maqSecar + this.maqLavar); // quantidade de kWh multiplicada por 30 dias (mês) somado ao consumo de máquina de lavar e secar (de uso inferior ao longo do mês).

      this.Estimativa = this.mes;
      this.Estimativa = parseFloat(this.Estimativa.toFixed(2));
      this.valorConta = this.mes * this.valorTarifa;
      this.valorConta = parseFloat(this.valorConta.toFixed(2));
    }
}
