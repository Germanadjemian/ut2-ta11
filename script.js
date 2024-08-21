function duplicate(array){
    elementos=[]
    duplicados = []
    array.forEach(element => {
        if(elementos.includes(element)){
            if(!duplicados.includes(element)){
                duplicados.push(element);
            }
        }
        else{
            elementos.push(element);
        }
    });
    return duplicados.length;
}
const ejemplo = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7] 
console.log(duplicate(ejemplo));