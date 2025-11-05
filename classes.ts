enum statusModelo{
    Candidato,
    Modelo,
    Rejeitado
}
enum tiposOferta{
    Aluguel,
    Compra
}
class Modelo {
    nome: string;
    #chave_login: string;
    foto_base64: string;
    status: statusModelo;
    ofertas: any[];
    localizacao: [number, number];
    constructor(nome: string, foto: string, grausNorte:number, grausLeste: number){
        this.nome = nome
        this.foto_base64 = foto
        this.status = statusModelo.Candidato
        this.ofertas = []
        this.#chave_login = gerar_senha()
        this.localizacao = [grausNorte, grausLeste]
    }
}
class Oferta {
    tipo: tiposOferta;
    tempo_meses: number ;
    valor: number;
    comprador: string;
    constructor(comprador: string, tempo: number, valor:number, tipo: tiposOferta){
        this.comprador = comprador
        this.tempo_meses = tempo
        this.valor = valor
        this.tipo = tipo
    }
}
function gerar_senha(): string {
    let result = '';
    const minAscii = 48; 
    const maxAscii = 122; 

    for (let i = 0; i < 12; i++) {
        const randomAsciiCode = Math.floor(Math.random() * (maxAscii - minAscii + 1)) + minAscii;
        result += String.fromCharCode(randomAsciiCode);
    }
    return result;
}