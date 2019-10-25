//Находим и удаляем все соседние эл-ты
function deleteNeighbor(arr, element, x, y) {
    if ( arr[x-1] ){
        if ( arr[x-1][y]  === element){
            arr[x-1][y] = 0;
            deleteNeighbor( arr, element, x-1, y);
        }
    }
    if ( arr[x+1] ){
        if ( arr[x+1][y]  === element ){
            arr[x+1][y] = 0;
            deleteNeighbor( arr, element, x+1, y);
        }
    }

    if ( arr[x][y-1]  === element){
        arr[x][y-1] = 0;
        deleteNeighbor( arr, element, x, y-1);
    }
    if ( arr[x][y+1]  === element ){
        arr[x][y+1] = 0;
        deleteNeighbor( arr, element, x, y+1);
    }
}

function deleteGroup( arrGroup, x, y){
    let elemDelete = arrGroup[x][y];
    deleteNeighbor(arrGroup, elemDelete, x, y);
    console.log(arrGroup);
    return arrGroup;
}
//Поле
let arrGroup = [
    [1,2,3,3,3,4],
    [1,5,5,3,3,4],
    [1,5,2,2,3,4],
    [1,2,3,4,3,4],
    [1,2,3,3,3,4],
    [1,2,3,3,3,4],
    [1,2,3,3,3,4],
    [1,5,5,3,3,4],
    [1,5,2,2,3,4],
    [1,2,3,4,4,4]
];

deleteGroup( arrGroup, 0, 5)
