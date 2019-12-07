function windowLoadKeyListener() {
   
    document.addEventListener('keyup', (event) => { // using event.key for graceful degradation from e.keyCode.
        let key = event.key || event.keyCode;
            if(key === 'Enter' || key === 13) {
            console.log('keypress listener still working.'); 
            document.getElementById('enter-button-instructions').style.opacity="0";
            document.getElementById('scrolltext').innerText="Success! Let's get started!";
            
        }
    });
}


window.onload = windowLoadKeyListener;

