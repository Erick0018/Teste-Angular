export class Templates {
    id: number = 0;
    nome: String = "";
    foto: String = "";
    descricao1: String = "";
    descricao2: String = "";
    descricao3: String = "";
    salario: number = 0;

    constructor(id: number, nome: String, foto: String, descricao1: String, descricao2: String, descricao3: String, salario: number) {
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.descricao1 = descricao1;
        this.descricao2 = descricao2;
        this.descricao3 = descricao3;
        this.salario = salario;

    }



}

