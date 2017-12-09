let f = (Apple) => {
    return Apple; (Apricot)=>{
        return Apricot; (Avacado)=>{
            return Avacado; (Banana)=>{
                return Banana;
            }

        }
    }
}

console.log('Basket: ' + f(' Apple') + (' Apricot') + (' Avacado') + (' Banana') );
