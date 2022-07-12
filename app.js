// inputs

const kuchi = document.getElementById("ot_kuchi");
const yili = document.getElementById('yili');
const kimga = document.getElementById('kimga');


// buttons

const successButton = document.getElementById('btn-success');
const resetButton = document.getElementById('btn-reset');

// Results

const finalCostInput = document.getElementById('dynamic__cost');
const message = document.getElementById('cost_text')

function calculateTotalCost() {

    // let price, qty, vat, subTotal, total;
    let otKuchi, ishYili, sotdiKimga, boji;
    // price = Number(priceInput.value);
    // qty   = Number(quantityIput.value);
    // vat   = Number(vatInput.value);
    // subTotal = price * qty;
    otKuchi = kuchi.value;
    ishYili   = yili.value;
    sotdiKimga   = kimga.value;
    bhm = 300000;

    if (otKuchi === '59' && ishYili === '2' && sotdiKimga === "begona") {
        boji = bhm * 4; 
    } else if (otKuchi === '109' && ishYili === '2' && sotdiKimga === "begona") {
        boji = bhm * 6; 
    }else if (otKuchi === '110' && ishYili === '2' && sotdiKimga === "begona") {
        boji = bhm * 10; 
    }
    
    else if (otKuchi === '59' && ishYili === '6' && sotdiKimga === "begona") {
        boji = bhm * 3;    
    }  else if (otKuchi === '109' && ishYili === '6' && sotdiKimga === "begona") {
        boji = bhm * 4; 
    }else if (otKuchi === '110' && ishYili === '6' && sotdiKimga === "begona") {
        boji = bhm * 8; 
    } 
    else if (otKuchi === '59' && ishYili === '7' && sotdiKimga === "begona") {
        boji = bhm * 2;    
    }  else if (otKuchi === '109' && ishYili === '7' && sotdiKimga === "begona") {
        boji = bhm * 3; 
    }else if (otKuchi === '110' && ishYili === '7' && sotdiKimga === "begona") {
        boji = bhm * 5; 
    } 

    else if (otKuchi === '59' && ishYili === '2' && sotdiKimga === "qarindosh") {
        boji = bhm * 4 / 2 ; 
    } else if (otKuchi === '109' && ishYili === '2' && sotdiKimga === "qarindosh") {
        boji = bhm * 6 / 2 ; 
    }else if (otKuchi === '110' && ishYili === '2' && sotdiKimga === "qarindosh") {
        boji = bhm * 10 / 2 ; 
    }
    
    else if (otKuchi === '59' && ishYili === '6' && sotdiKimga === "qarindosh") {
        boji = bhm * 3 / 2 ;    
    }  else if (otKuchi === '109' && ishYili === '6' && sotdiKimga === "qarindosh") {
        boji = bhm * 4 / 2 ; 
    }else if (otKuchi === '110' && ishYili === '6' && sotdiKimga === "qarindosh") {
        boji = bhm * 8 / 2 ; 
    } 
    else if (otKuchi === '59' && ishYili === '7' && sotdiKimga === "qarindosh") {
        boji = bhm * 2 / 2 ;    
    }  else if (otKuchi === '109' && ishYili === '7' && sotdiKimga === "qarindosh") {
        boji = bhm * 3 / 2 ; 
    }else if (otKuchi === '110' && ishYili === '7' && sotdiKimga === "qarindosh") {
        boji = bhm * 5 / 2 ; 
    } 

    else if (otKuchi === '59' && ishYili === '2' && sotdiKimga === "kredit") {
        boji = bhm * 4 / 10 ; 
    } else if (otKuchi === '109' && ishYili === '2' && sotdiKimga === "kredit") {
        boji = bhm * 6 / 10 ; 
    }else if (otKuchi === '110' && ishYili === '2' && sotdiKimga === "kredit") {
        boji = bhm * 10 / 10 ; 
    }
    
    else if (otKuchi === '59' && ishYili === '6' && sotdiKimga === "kredit") {
        boji = bhm * 3 / 10 ;    
    }  else if (otKuchi === '109' && ishYili === '6' && sotdiKimga === "kredit") {
        boji = bhm * 4 / 10 ; 
    }else if (otKuchi === '110' && ishYili === '6' && sotdiKimga === "kredit") {
        boji = bhm * 8 / 10 ; 
    } 
    else if (otKuchi === '59' && ishYili === '7' && sotdiKimga === "kredit") {
        boji = bhm * 2 / 10 ;    
    }  else if (otKuchi === '109' && ishYili === '7' && sotdiKimga === "kredit") {
        boji = bhm * 3 / 10 ; 
    }else if (otKuchi === '110' && ishYili === '7' && sotdiKimga === "kredit") {
        boji = bhm * 5 / 10 ; 
    } 

    finalCostInput.textContent = boji.toLocaleString()
    let msg = showMessage(boji);
    message.textContent = msg

}



function showMessage(cost) {
    
    let otKuchi, ishYili, sotdiKimga, boji;
   
    otKuchi = kuchi.value;
    ishYili   = yili.value;
    sotdiKimga   = kimga.value;

    if (otKuchi === '59' && ishYili === '2' && sotdiKimga === "begona") {
        return "bazaviy hisoblash miqdorining 4 baravari"; 
    } else if (otKuchi === '109' && ishYili === '2' && sotdiKimga === "begona") {
        return "bazaviy hisoblash miqdorining 6 baravari"; 
    }else if (otKuchi === '110' && ishYili === '2' && sotdiKimga === "begona") {
        return "bazaviy hisoblash miqdorining 10 baravari"; 
    }
    
    else if (otKuchi === '59' && ishYili === '6' && sotdiKimga === "begona") {
        return "bazaviy hisoblash miqdorining 3 baravari";    
    }  else if (otKuchi === '109' && ishYili === '6' && sotdiKimga === "begona") {
        return "bazaviy hisoblash miqdorining 4 baravari"; 
    }else if (otKuchi === '110' && ishYili === '6' && sotdiKimga === "begona") {
        return "bazaviy hisoblash miqdorining 8 baravari"; 
    } 
    else if (otKuchi === '59' && ishYili === '7' && sotdiKimga === "begona") {
        return "bazaviy hisoblash miqdorining 2 baravari";    
    }  else if (otKuchi === '109' && ishYili === '7' && sotdiKimga === "begona") {
        return "bazaviy hisoblash miqdorining 3 baravari"; 
    }else if (otKuchi === '110' && ishYili === '7' && sotdiKimga === "begona") {
        return "bazaviy hisoblash miqdorining 5 baravari"; 
    } 

    else if (otKuchi === '59' && ishYili === '2' && sotdiKimga === "qarindosh") {
        return "bazaviy hisoblash miqdorining 2 baravari" ; 
    } else if (otKuchi === '109' && ishYili === '2' && sotdiKimga === "qarindosh") {
        return "bazaviy hisoblash miqdorining 3 baravari" ; 
    }else if (otKuchi === '110' && ishYili === '2' && sotdiKimga === "qarindosh") {
        return "bazaviy hisoblash miqdorining 5 baravari"  ; 
    }
    
    else if (otKuchi === '59' && ishYili === '6' && sotdiKimga === "qarindosh") {
        return "bazaviy hisoblash miqdorining 1.5 baravari" ;    
    }  else if (otKuchi === '109' && ishYili === '6' && sotdiKimga === "qarindosh") {
        return "bazaviy hisoblash miqdorining 2 baravari" ; 
    }else if (otKuchi === '110' && ishYili === '6' && sotdiKimga === "qarindosh") {
        return "bazaviy hisoblash miqdorining 4 baravari" ; 
    } 
    else if (otKuchi === '59' && ishYili === '7' && sotdiKimga === "qarindosh") {
        return "bazaviy hisoblash miqdorining 1 baravari" ;    
    }  else if (otKuchi === '109' && ishYili === '7' && sotdiKimga === "qarindosh") {
        return "bazaviy hisoblash miqdorining 1.5 baravari" ; 
    }else if (otKuchi === '110' && ishYili === '7' && sotdiKimga === "qarindosh") {
        return "bazaviy hisoblash miqdorining 2.5 baravari" ; 
    } 

    else if (otKuchi === '59' && ishYili === '2' && sotdiKimga === "kredit") {
        return "bazaviy hisoblash miqdorining 40 foizi" ; 
    } else if (otKuchi === '109' && ishYili === '2' && sotdiKimga === "kredit") {
        return "bazaviy hisoblash miqdorining 60 foizi" ; 
    }else if (otKuchi === '110' && ishYili === '2' && sotdiKimga === "kredit") {
        return "bazaviy hisoblash miqdorining 1 baravari"  ; 
    }
    
    else if (otKuchi === '59' && ishYili === '6' && sotdiKimga === "kredit") {
        return "bazaviy hisoblash miqdorining 30 foizi" ;    
    }  else if (otKuchi === '109' && ishYili === '6' && sotdiKimga === "kredit") {
        return "bazaviy hisoblash miqdorining 40 foizi" ; 
    }else if (otKuchi === '110' && ishYili === '6' && sotdiKimga === "kredit") {
        return "bazaviy hisoblash miqdorining 80 foizi" ; 
    } 
    else if (otKuchi === '59' && ishYili === '7' && sotdiKimga === "kredit") {
        return "bazaviy hisoblash miqdorining 20 foizi" ;    
    }  else if (otKuchi === '109' && ishYili === '7' && sotdiKimga === "kredit") {
        return "bazaviy hisoblash miqdorining 30 foizi" ; 
    }else if (otKuchi === '110' && ishYili === '7' && sotdiKimga === "kredit") {
        return "bazaviy hisoblash miqdorining 50 foizi" ; 
    } 
}

function reset() {
 
    finalCostInput.textContent = "_____________________"
    message.textContent = ""
}




function handleEvent() {
    if(kuchi.value && yili.value && kimga.value) {
        calculateTotalCost()
    } else {
        alert('Give some valid inputs first and try again!');
        reset()
    }

}


successButton.addEventListener('click', handleEvent);
resetButton.addEventListener('click', reset)
