const drumPad = document.querySelectorAll(".drum-pad");

drumPad.forEach(pad => {
    pad.addEventListener('click', () => playDrum(pad))
})

function playDrum(pad) {
    const drumAudio = document.getElementById(pad.dataset.pad)
   drumAudio.currentTime = 0
    drumAudio.play()
    pad.classList.add('hover')
    drumAudio.addEventListener('ended', () => {
        pad.classList.remove('hover')
    })
}


const keyPad = [ 'Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
const smallPad = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c',]

window.addEventListener('keydown', e => {
    const pad = e.key
    const keyPadIndex = keyPad.indexOf(pad)

   if (keyPadIndex > -1) playDrum(drumPad[keyPadIndex])
   if (e.repeat) return

   const smallPadIndex = smallPad.indexOf(pad)
   if (smallPadIndex > -1) playDrum(drumPad[smallPadIndex])

   if (keyPadIndex > -1) displayNameq(drumPad[keyPadIndex])
   if (keyPadIndex > 0) displayNamew(drumPad[keyPadIndex])
   if (keyPadIndex > 1) displayNamee(drumPad[keyPadIndex])
   if (keyPadIndex > 2) displayNamea(drumPad[keyPadIndex])
   if (keyPadIndex > 3) displayNames(drumPad[keyPadIndex])
   if (keyPadIndex > 4) displayNamed(drumPad[keyPadIndex])
   if (keyPadIndex > 5) displayNamez(drumPad[keyPadIndex])
   if (keyPadIndex > 6) displayNamex(drumPad[keyPadIndex])
   if (keyPadIndex > 7) displayNamec(drumPad[keyPadIndex])

   if (smallPadIndex > -1) displayNameq(drumPad[smallPadIndex])
   if (smallPadIndex > 0) displayNamew(drumPad[smallPadIndex])
   if (smallPadIndex > 1) displayNamee(drumPad[smallPadIndex])
   if (smallPadIndex > 2) displayNamea(drumPad[smallPadIndex])
   if (smallPadIndex > 3) displayNames(drumPad[smallPadIndex])
   if (smallPadIndex > 4) displayNamed(drumPad[smallPadIndex])
   if (smallPadIndex > 5) displayNamez(drumPad[smallPadIndex])
   if (smallPadIndex > 6) displayNamex(drumPad[smallPadIndex])
   if (smallPadIndex > 7) displayNamec(drumPad[smallPadIndex])
})


const display = document.getElementById('display')
const qPad = document.getElementById('q-pad')
const wPad = document.getElementById('w-pad')
const ePad = document.getElementById('e-pad')
const aPad = document.getElementById('a-pad')
const sPad = document.getElementById('s-pad')
const dPad = document.getElementById('d-pad')
const zPad = document.getElementById('z-pad')
const xPad = document.getElementById('x-pad')
const cPad = document.getElementById('c-pad')
 


    qPad.addEventListener('click', displayNameq)
     function displayNameq() {
        display.innerText = 'Heater'
    }
    
    wPad.addEventListener('click', displayNamew)
     function displayNamew(){
        display.innerText = 'Heater 2'
    }

    ePad.addEventListener('click', displayNamee)
     function displayNamee(){
        display.innerText = 'Heater 3'
    }

    aPad.addEventListener('click', displayNamea)
     function displayNamea(){
        display.innerText = 'Heater 4'
    }

    sPad.addEventListener('click', displayNames)
     function displayNames(){
        display.innerText = 'Heater 5'
    }

    dPad.addEventListener('click', displayNamed)
     function displayNamed(){
        display.innerText = 'Heater 6'
    }

    zPad.addEventListener('click', displayNamez) 
    function displayNamez(){
        display.innerText = 'Heater 7'
    }

    xPad.addEventListener('click', displayNamex) 
    function displayNamex(){
        display.innerText = 'Heater 8'
    }

    cPad.addEventListener('click', displayNamec)
     function displayNamec(){
        display.innerText = 'Heater 9'
    } 



