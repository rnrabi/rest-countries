const checkLs = ()=>{
    const jsonString = localStorage.getItem('card');
    if(jsonString){
        const card = JSON.parse(jsonString);
        return card;
    }
    return [];
}

const saveCardLs = (card)=>{
    const cardStringgify = JSON.stringify(card);
    localStorage.setItem('card' , cardStringgify);
}

const addToLs = (id)=>{
    const card = checkLs();
    card.push(id);
    saveCardLs(card);
    // save card to local storage
}



export {checkLs , addToLs};