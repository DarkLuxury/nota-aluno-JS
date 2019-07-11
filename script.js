let nomeDoAluno = prompt ("Qual o seu nome?");
let materia = prompt ("De qual matéria você quer saber se foi aprovado?");
let nota = prompt ("Qual a sua nota nessa matéria?");
let media = 6

if (Number(nota) >= media) {
    prompt (`O aluno ${nomeDoAluno} foi aprovado em ${materia}`);
}

else if (Number(nota) >=5.5) {
    prompt ("O " + nomeDoAluno + " foi aprovado pelo sistema em " + materia);
}

else {
    prompt ("Infelizmente o " + nomeDoAluno + " não foi aprovado em " + materia);
}