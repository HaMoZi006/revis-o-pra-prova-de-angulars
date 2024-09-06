let matriz1:number [][] = [
    [4,6,9],
    [8,2,1],
    [5,9,0]
    ];

let matriz2:number [][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9] 
    ];

let matriz3: number[][] = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
    ];

    for(let i=0; i<3;i++){
        for(let j=0; j<3;j++){
            matriz3[i][j]= matriz1[i][j] +  matriz2[i][j]
        }
    }
console.log(matriz3)