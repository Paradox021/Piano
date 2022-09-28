import * as Tone from 'tone'
import {createRoot} from 'react-dom/client'

const synth = new Tone.Synth().toDestination();
let notes = ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4','f#4', 'g4','g#4', 'a4', 'a#4', 'b4', 'c5']

let notesKeys = {'s':'c4', 'd':'d4', 'f':'e4', 'g':'f4', 'h':'g4', 'j':'a4', 'k':'b4', 'l':'c5', 'e':'c#4', 'r':'d#4', 'y':'f#4','u':'g#4','i':'a#4'}

// Siempre así
const root = createRoot(document.getElementById('root'))
root.render(<PianoKeys/>)


function playNote(event) {
    synth.triggerAttackRelease(notesKeys[event.key], "8n")
}

document.getElementById("body").addEventListener('keypress', playNote)

// Componente react
function PianoKeys(){
    return notes.map(note => <button onClick={() => synth.triggerAttackRelease(note, "8n")} id={note} class={(note.length===2?'white':'black')+' '+note.charAt(0+'s')}></button>);
}



