import { ServicoEstado } from './../servicos/servico.estado';
import { Component } from '@angular/core';
import { Estado } from '../entidades/estado';


@Component({
    selector : 'vetor-component',
    templateUrl: 'vetores.component.html',
    styleUrls : ['vetores.component.css']

})
export class VetoresComponent{
    //tipos de vetores
    // nomes : string[] = ['Marcos', 'Maria', 'Joao'];
    // nomes2 : Array<string> = ['Reginaldo', 'Murilo', 'Mayara'];
    // nomes3 = new Array<string>('Marcos', 'Maria', 'Joao');
    // nomes4 = new Array<string>(15);
    // listaNomes = new Array<string>();
    // nome: string = '';

    

    constructor(public servico : ServicoEstado){
        this.servico = servico;
    }
        // //para inserir na lista
        // this.nomes.push('káká');
        // //eliminando o marcos
        // this.nomes.splice(0,1);


        // //estruturas de for
        // for(let nome of this.nomes){
        //     console.log(nome);
        // }
        // for(let i=0; i<this.nomes2.length; i++){
        //     console.log(this.nomes2[i])
        // }
    
    adicionar() : void {
       
           this.servico.adicionar();
        
    }
    excluir(i:number) : void {
        //indice / parametro    
        this.servico.excluir(i);
    }
    alterar(i:number) : void {
      
        this.servico.alterar(i);
    }
        
    // adicionar() : void {
    //     if (this.nome != '') {
    //         this.listaNomes.push(this.nome);
    //         this.nome = '';
    //     }
        
    // }
    // excluir(i:number) : void {
    //     //indice / parametro    
    //     this.listaNomes.splice(i,1);
    // }

    // alterar(i:number) : void {
    //     this.nome = this.listaNomes[i];
    //     this.listaNomes.splice(i,1);
    // }

}