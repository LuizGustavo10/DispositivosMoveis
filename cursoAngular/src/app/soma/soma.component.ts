import { Component } from '@angular/core';

@Component({
    selector: 'soma-component',
    templateUrl: 'soma.component.html',
    styleUrls: ['soma.component.css']
})
export class SomaComponent{
    numero1 : number = 0;
    numero2 : number = 0;
    numero3 : number = 0;
    numero4 : number = 0;

    somar() :  void {
        let total = this.numero1 + this.numero2; 
        alert(total);
    }

    par() : void {
        let resultado = '';
        if(Number(this.numero3) % 2 == 0){
           resultado = 'par';
        }else{
            resultado = 'impar';
        }
        alert(resultado);
    }

    positivo() : void{
        let resultado = '';
        if(Number(this.numero4) > 0){
            resultado = 'positivo';
        }else if(Number(this.numero4) < 0){
            resultado = 'negativo';
        }else{
            resultado = 'numero neutro, 0';
        }
        alert(resultado);
    }

}