/* database do cardápio
cardapio[numeroDaSemana][diaDaSemana][numeroDaComida]
exemplo: cardapio[0][2][0] vai dar a comida do 1ª semana, 3º dia da semana e 1ª comida */
let cardapio =
[
    /* 1ª Semana */
    [
        /* Segunda */
        [
            "Salada de Alface",
            "Salada de Tomate",
            "Arroz Branco",
            "Feijão Carioca",
            "Frango Grelhado",
            "Lasanha de Abobrinha",
            "Suco de Uva",
            "Gelatina"
        ],
        /* Terça */
        [
            "Salada de Alface",
            "Salada de Abobrinha",
            "Arroz Branco",
            "Feijão Carioca",
            "Crepe de Queijo",
            "Panaché de Legumes",
            "Suco de Abacaxi",
            "Gelatina"
        ],
        /* Quarta */
        [
            "Salada de Alface",
            "Salada de Pepino",
            "Arroz Branco",
            "Feijão Preto",
            "Linguiça Toscana",
            "Vagem Grelhada",
            "Suco de Maçã",
            "Gelatina"
        ],
        /* Quinta */
        [
            "Salada de Alface",
            "Salada de Cenoura",
            "Arroz Branco",
            "Feijão Carioca",
            "Strogonoff",
            "Panqueca de Espinafre",
            "Suco de Limão",
            "Gelatina"
        ],
        /* Sexta */
        [
            "Salada de Alface",
            "Salada de Beterraba",
            "Arroz Branco",
            "Feijão Carioca",
            "Lasanha",
            "Espaguete de Legumes",
            "Suco de Laranja",
            "Gelatina"
        ]
    ],
    /* 2ª Semana */
    [
        /* Segunda */
        [
            "Salada de Alface",
            "Salada de Milho",
            "Arroz Branco",
            "Feijão Carioca",
            "Picadinho de Carne",
            "Sopa de Cenoura",
            "Suco de Maçã",
            "Gelatina"
        ],
        /* Terça */
        [
            "Salada de Alface",
            "Salada de Vagem",
            "Arroz Branco",
            "Feijão Carioca",
            "Frango Assado",
            "Polenta ao Molho",
            "Suco de Caqui",
            "Gelatina"
        ],
        /* Quarta */
        [
            "Salada de Alface",
            "Salada de Beterraba",
            "Arroz Branco",
            "Feijão Carioca",
            "Carne Louca",
            "Abobrinha Refogada",
            "Suco de Morango",
            "Gelatina"
        ],
        /* Quinta */
        [
            "Salada de Alface",
            "Salada de Tomate",
            "Arroz Branco",
            "Feijão Carioca",
            "Almôndegas",
            "Tender Vegano",
            "Suco de Abacaxi",
            "Gelatina"
        ],
        /* Sexta */
        [
            "Salada de Alface",
            "Salada de Brócolis",
            "Arroz Branco",
            "Feijão Preto",
            "Filé de Frango ",
            "Nhoque de Semolina",
            "Suco de Maçã",
            "Gelatina"
        ]
    ],
    /* 3ª Semana */
    [
        /* Segunda */
        [
            "Salada de Alface",
            "Salada de Pepino",
            "Arroz Branco",
            "Feijão Carioca",
            "Fricassê de Frango",
            "Carne de Soja",
            "Suco de Manga",
            "Gelatina"
        ],
        /* Terça */
        [
            "Salada de Alface",
            "Salada de Cenoura",
            "Arroz Branco",
            "Feijão Carioca",
            "Hamburguer",
            "Macarrão Fusilli",
            "Suco de Acerola",
            "Gelatina"
        ],
        /* Quarta */
        [
            "Salada de Alface",
            "Salada de Tomate",
            "Arroz Branco",
            "Feijão Preto",
            "Linguiça de Frango",
            "Viradinho de Couve",
            "Suco de Abacate",
            "Gelatina"
        ],
        /* Quinta */
        [
            "Salada de Alface",
            "Salada de Beterraba",
            "Arroz Branco",
            "Feijão Carioca",
            "Frango à Milanesa",
            "Yakisoba de Legumes",
            "Suco de Maçã",
            "Gelatina"
        ],
        /* Sexta */
        [
            "Salada de Alface",
            "Salada de Tomate",
            "Arroz Branco",
            "Feijão Carioca",
            "Carne Louca",
            "Abóbora Desfiada",
            "Suco de Laranja",
            "Gelatina"
        ]
    ],
    /* 4ª Semana */
    [
        /* Segunda */
        [
            "Salada de Alface",
            "Salada de Tomate",
            "Arroz Branco",
            "Feijão Carioca",
            "Strogonoff",
            "Batata Palha",
            "Suco de Maracujá",
            "Gelatina"
        ],
        /* Terça */
        [
            "Salada de Alface",
            "Salada de Milho",
            "Arroz Branco",
            "Feijão Carioca",
            "Carne Moída",
            "Risoto de Alho-Poró",
            "Suco de Limão",
            "Gelatina"
        ],
        /* Quarta */
        [
            "Salada de Alface",
            "Salada de Cenoura",
            "Arroz Branco",
            "Feijão Carioca",
            "Panqueca de Carne",
            "Brócolis ao Alho",
            "Suco de Kiwi",
            "Gelatina"
        ],
        /* Quinta */
        [
            "Salada de Alface",
            "Salada de Pepino",
            "Arroz Branco",
            "Feijão Carioca",
            "Frango Assado",
            "Strogonoff Vegano",
            "Suco de Acerola",
            "Gelatina"
        ],
        /* Sexta */
        [
            "Salada de Alface",
            "Salada de Beterraba",
            "Arroz Branco",
            "Feijão Carioca",
            "Nhoque de Abóbora",
            "Purê de Batata",
            "Suco de Manga",
            "Gelatina"
        ]
    ],
    /* 5ª Semana */
    [
        /* Segunda */
        [
            "Salada de Alface",
            "Salada de Cenoura",
            "Arroz Branco",
            "Feijão Preto",
            "Salsicha Americana",
            "Batata Sauté",
            "Suco de Limão",
            "Gelatina"
        ],
        /* Terça */
        [
            "Salada de Alface",
            "Salada de Tomate",
            "Arroz Branco",
            "Feijão Carioca",
            "Macarrão ao Molho Sugo",
            "Brócolis ao Alho",
            "Suco de Maçã",
            "Gelatina"
        ],
        /* Quarta */
        [
            "Salada de Alface",
            "Salada de Beterraba",
            "Arroz Branco",
            "Feijão Carioca",
            "Frango Assado",
            "Proteína de Soja",
            "Suco de Manga",
            "Gelatina"
        ],
        /* Quinta */
        [
            "Salada de Alface",
            "Salada de Pepino",
            "Arroz Branco",
            "Feijão Carioca",
            "Muffin de Carne",
            "Macarrão Fusilli",
            "Suco de Abacate",
            "Gelatina"
        ],
        /* Sexta */
        [
            "Salada de Alface",
            "Salada de Vinagrete",
            "Arroz Branco",
            "Feijão Carioca",
            "Frango Grelhado",
            "Couve-flor Gratinada",
            "Suco de Morango",
            "Gelatina"
        ]
    ]
]

var i,j,k;

const agora = new Date();

var mes = agora.getMonth();
var ano = agora.getFullYear();
var dia = agora.getDate();
var diaDaSemana = agora.getDay();

var primeiroDiaDoMes = new Date(ano, mes, 1);
var ultimoDiaDoMes = new Date(ano, mes+1, 0);

var semanaDoCardapio = Math.ceil( (dia-1-diaDaSemana)/7 ) + 1;

// quickfix; se mês começar no sábado e não tiver esse if() o mês buga
if(primeiroDiaDoMes.getDay() == 6) {
    semanaDoCardapio--;
}

// retorna primeiro dia útil do mês; usamos isso no dia da semana
function fixarPrimeiroDiaUtilDoMes(ano, mes) {
    var primeiroDiaUtilDoMes = new Date(ano, mes, 1); 
    while(true) {
        if(primeiroDiaDoMes.getDay() == 0 /* se for domingo */) {
            primeiroDiaUtilDoMes = new Date(ano, mes, primeiroDiaDoMes.getDate() + 1);
        } else if (primeiroDiaDoMes.getDay() == 6 /* se for sábado */) {
            primeiroDiaUtilDoMes = new Date(ano, mes, primeiroDiaDoMes.getDate() + 2);
        }

        return primeiroDiaUtilDoMes;
    }
}

var primeiroDiaUtilDoMes = fixarPrimeiroDiaUtilDoMes(ano, mes);

// caso a data seja 5/3 fique 05/03 por exemplo; padroniza espaçamento horizontal
function zeroAntesDaData(n) {
    if(n < 10) {
        return "0" + n;
    } else {
        return n;
    }
}

// calcula e adiciona datas no cardapio
function adicionarDatasAutomaticamente(primeiroDiaUtilDoMes, ultimoDiaDoMes, mes) {
    var diaDaSemana_do_primeiroDiaUtilDoMes = primeiroDiaUtilDoMes.getDay();
    var dia = primeiroDiaUtilDoMes.getDate();

    ultimoDiaDoMes = ultimoDiaDoMes.getDate();

    while(dia < ultimoDiaDoMes) {
        // na primeira semana o primeiro dia util nem sempre comeca na segunda, por isso tem esse for() antes e o i começa em 1 no for() depois desse

        for(j = primeiroDiaUtilDoMes.getDay()-1; j < 5; j++, dia++) {
            document.getElementById("data0"+ j).innerHTML = zeroAntesDaData(dia) + "/" + zeroAntesDaData(mes);
        }

        dia += 2;
        for(i = 1; i < 5; i++, j = 0) { // primeiro fixa o id dos dias na 2º semana (semana[1]), dps 2ª semana (semana[1]), etc 
            for(j = 0; j < 5 && dia < ultimoDiaDoMes+1; j++, dia++) { // primeiro fixa o id de segunda, dps terça, etc
                document.getElementById("data" + i + j).innerHTML = zeroAntesDaData(dia) + "/" + zeroAntesDaData(mes+1); // dia01 => 1ª semana[0], terça[1]; dia34 => 4ª semana[3], quinta[4], etc
            }

            dia += 2;
        }
    }
}

adicionarDatasAutomaticamente(primeiroDiaUtilDoMes, ultimoDiaDoMes, mes);

// coloca borda nos dias que não são hoje
function notHighlightHoje() {
    $('.segunda, .terca, .quarta, .quinta, .sexta').addClass('notToday');
}

notHighlightHoje();

// destaca o dia de hoje
function highlightHoje(semanaDoCardapio, diaDaSemana) {
    if(diaDaSemana == 1) {
        $('#semana' + semanaDoCardapio + ' .segunda').attr('id', 'today');
    } else if(diaDaSemana == 2) {
        $('#semana' + semanaDoCardapio + ' .terca').attr('id', 'today');
    } else if(diaDaSemana == 3) {
        $('#semana' + semanaDoCardapio + ' .quarta').attr('id', 'today');
    } else if(diaDaSemana == 4) {
        $('#semana' + semanaDoCardapio + ' .quinta').attr('id', 'today');
    } else /* if(diaDaSemana == 5) */ {
        $('#semana' + semanaDoCardapio + ' .sexta').attr('id', 'today');
    }

    $('#today').removeClass("notToday");
}

highlightHoje(semanaDoCardapio, diaDaSemana);

// insere os dados do .json (vetor cardapio[i][j][k]) nos <span>'s com id correspondente
function dadosDoCardapio() {
    for(i = 0; i < 5; i++) {
        for(j = 0; j < 5; j++) {
            for(k = 0; k < 8; k++) {
                document.getElementById("cardapio" + i + j + k).innerHTML = cardapio[i][j][k];
            }
        }
    }
}

dadosDoCardapio();

// mostra a semana atual ao carregar a página
function mostrarSemanaCorretaAoCarregarPagina(semanaDoCardapio) {
    $('#semana' + semanaDoCardapio).addClass("active");
}

mostrarSemanaCorretaAoCarregarPagina(semanaDoCardapio);

// se a semana começar numa quarta, esconde terça e segunda, etc
function escondeDiasDaSemanaNaPrimeiraSemana(primeiroDiaDoMes){
    if(primeiroDiaDoMes.getDay() > 1 /* se primeiro dia do mês for terça, quarta, quinta, sexta ou sábado, não tem segunda */ && primeiroDiaDoMes.getDay() != 6) {
        $('#semana1 .segunda').css("visibility", "hidden");
        if($(window).width() < 768) { // ifs são pra responsividade
            $('#semana1 .segunda').hide();
        }
        if(primeiroDiaDoMes.getDay() > 2 /* se primeiro dia do mês for quarta, quinta, sexta ou sábado, não tem segunda e terça */) {
            $('#semana1 .terca').css("visibility", "hidden");
            if($(window).width() < 768) { 
                $('#semana1 .terca').hide();
            }
            if(primeiroDiaDoMes.getDay() > 3 /* ... */) {
                $('#semana1 .quarta').css("visibility", "hidden");
                if($(window).width() < 768) {
                    $('#semana1 .quarta').hide();
                }
                if(primeiroDiaDoMes.getDay() == 5) {
                    $('#semana1 .quinta').css("visibility", "hidden");
                    if($(window).width() < 768) {
                        $('#semana1 .quinta').hide();
                    }
                }
            }
        }
    }
}

escondeDiasDaSemanaNaPrimeiraSemana(primeiroDiaDoMes);

function escondeDiasDaUltimaSemana( ) {
    var n = ultimoDiaDoMes.getDay();

    if(n < 5) {
        $('#semana5 .sexta').css("visibility", "hidden");
        if($(window).width() < 768) { // ifs pra responsividade
            $('#semana5 .sexta').hide();
        }
        if(n < 4) {
            $('#semana5 .quinta').css("visibility", "hidden");
            if($(window).width() < 768) {
                $('#semana5 .quinta').hide();
            }
            if(n < 3) {
                $('#semana5 .quarta').css("visibility", "hidden");
                if($(window).width() < 768) {
                    $('#semana5 .quarta').hide();
                }
                if(n == 1) {
                    $('#semana5 .terca').css("visibility", "hidden");
                    if($(window).width() < 768) {
                        $('#semana5 .terca').hide();
                    }
                }
            }
        }
    }

    var mes = ultimoDiaDoMes.getMonth();
    var ano = ultimoDiaDoMes.getFullYear();

    var primeiroDiaDoMes = new Date(ano, mes, 1);

    // se primeiro dia do mes for sabado e o mes menos de 31 dias, n vai ter 5ª semana
    if((primeiroDiaDoMes.getDay() == 6 || primeiroDiaDoMes.getDay() == 0) && ultimoDiaDoMes.getDate() < 31) {
        $('#semana5').removeClass("carousel-item");
        $('#semana5').css("visibility", "hidden");
        $('#semana5').hide();
    }

    // fev/2026
    if(primeiroDiaDoMes.getDay() == 0 && ultimoDiaDoMes.getDate() < 30) {
        $('#semana5').removeClass("carousel-item");
        $('#semana5').css("visibility", "hidden");
        $('#semana5').hide();
    }
}

escondeDiasDaUltimaSemana(ultimoDiaDoMes);

// converte dia da semana do .getDay para texto legível e compreensível
function diaDaSemana_numeroParaLiteral(diaDaSemana){
    if (i = 1) {
        return 'Segunda-feira';
    } else if(i = 2) {
        return 'Terça-feira';
    } else if(i = 3) {
        return 'Quarta-feira';
    } else if(i = 4) {
        return 'Quinta-feira';
    } else if(i = 5) {
        return 'Sexta-feira';
    } else {
        return 'Sábado ou Domingo';
    }
}
