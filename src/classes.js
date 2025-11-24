var statusModelo;
(function (statusModelo) {
    statusModelo[statusModelo["Candidato"] = 0] = "Candidato";
    statusModelo[statusModelo["Modelo"] = 1] = "Modelo";
    statusModelo[statusModelo["Rejeitado"] = 2] = "Rejeitado";
})(statusModelo || (statusModelo = {}));
var tiposOferta;
(function (tiposOferta) {
    tiposOferta[tiposOferta["Aluguel"] = 0] = "Aluguel";
    tiposOferta[tiposOferta["Compra"] = 1] = "Compra";
})(tiposOferta || (tiposOferta = {}));
var Modelo = /** @class */ (function () {
    function Modelo(nome, foto, grausNorte, grausLeste) {
        this.nome = nome;
        this.foto_base64 = foto;
        this.status = statusModelo.Candidato;
        this.ofertas = [];
        this.chave_login = gerar_senha();
        this.localizacao = [grausNorte, grausLeste];
    }
    return Modelo;
}());
var Oferta = /** @class */ (function () {
    function Oferta(comprador, tempo, valor, tipo) {
        this.comprador = comprador;
        this.tempo_meses = tempo;
        this.valor = valor;
        this.tipo = tipo;
    }
    return Oferta;
}());
function gerar_senha() {
    var result = '';
    var minAscii = 48;
    var maxAscii = 122;
    var bosta = ["\\", "'", "/", "`", '"', "?"]
    for (var i = 0; i < 12; i++) {
        var randomAsciiCode = Math.floor(Math.random() * (maxAscii - minAscii + 1)) + minAscii;
        if(randomAsciiCode in bosta){
            i--
            continue
        }
        result += String.fromCharCode(randomAsciiCode);
    }
    return result;
}
export {Modelo, Oferta}
