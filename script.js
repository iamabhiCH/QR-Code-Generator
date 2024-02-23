qrinpt = document.getElementById('txt-input');
qrimg = document.getElementById('qr-img');
qrbtn = document.getElementById('qr-gen-button');

console.log(qrbtn, qrimg, qrinpt);

qrbtn.addEventListener('click', () => {

    const inputVal = qrinpt.value;
    console.log(inputVal);

    if(!inputVal){
        alert('Please enter the valid URL');
        return;
    }
    else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
        qrimg.alt = `QR Code for ${inputVal}`;
    }
});
