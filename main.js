function count_num(arr,item){
    return arr.filter((value,index,arr)=>value===item).length;
}

console.log(count_num([1,3,7,1,4],1));