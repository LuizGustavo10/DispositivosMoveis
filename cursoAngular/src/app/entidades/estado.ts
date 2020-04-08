
export class Estado {
    //tem que ser private !!!
    public nome : string;
    public sigla : string;

    getNome() : string {
        return this.nome;
    }
    setNome(nome:string) : void {
        this.nome = nome;
    }
    getSigla() : string{
        return this.sigla
    }
    setSigla(sigla:string) : void{
        this.sigla = sigla;
    }
}