let notas1: number[] = [10, 7, 4, 7];
let notas2: number[] = [7, 5, 7, 2];
let media: number[] = []
let stats: string;


for(let i = 0 ; i < 4 ; i++) {

    media[i] = (notas1[i] + notas2[i]) / 2

    if(media[i] >= 6) {
        stats = 'Passou'
    } else {
        stats = 'Não passou'
    }
    console.log(`O aluno ${i+1} tirou de media final ${media[i]}. Ele ${stats} `);
}
