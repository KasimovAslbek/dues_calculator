// inputs

const kuchi = document.getElementById("ot_kuchi");
const yili = document.getElementById('yili');
const kimga = document.getElementById('kimga');


// const priceInput = document.getElementById('price-input');
// const quantityIput = document.getElementById('quantity-input');
// const vatInput = document.getElementById('vat-input');

// buttons

const successButton = document.getElementById('btn-success');
const resetButton = document.getElementById('btn-reset');

// Results

const finalCostInput = document.getElementById('dynamic__cost');
// const message = document.getElementById('cost_text')

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

    // total = subTotal + (subTotal * vat) / 100;
    
    // finalCostInput.textContent = total.toFixed(2)
    finalCostInput.textContent = boji.toLocaleString()
    // let msg = showMessage(total);
    let msg = showMessage(boji);
    // message.textContent = msg
    message.textContent = msg

}



// function showMessage(cost) {
//     if (cost < 100) {
//         return "Cost is Cheap";
//     } else if (cost >= 100 && cost < 500) {
//         return "Cost is medium";
//     }else if (cost >= 500 && cost < 1000) {
//         return "Cost is high";
//     } else if (cost >= 1000 && cost <= 5000) {
//         return "Cost is expensive";
//     } else {
//         return "cost is super expensive";
//     }
// }


function reset() {
    // kuchi.value = ""
    // yili.value = ""
    // kimga.value = ""
    finalCostInput.textContent = "_____________________"
    // message.textContent = ""
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