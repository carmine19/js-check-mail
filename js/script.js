// Creare un array con un insieme di indirizzi email.

let email = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com']
console.log('questo è l array iniziale ' + email);

// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).

let request_email = prompt('qual \'è il tuo indirizzo email?');
email.push(request_email);
console.log('questo è request email ' + request_email)


console.log(email)

for (let i = 0; i < email.length; i++) {

    let nomi_attuali = email[i];
    console.log('questo è nomi attuali ' + nomi_attuali)

    // Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)
    if(nomi_attuali.includes('pluto@gmail.com') || nomi_attuali.includes('pippo@gmail.com') || nomi_attuali.includes('paperino@gmail.com')) {
        document.getElementById('password').innerHTML= "sei nella lista"
        console.log('sei nella lista')
    }else {
        document.getElementById('password').innerHTML= " non sei nella lista"
        console.log('non sei nella lista')
    }

    // console.log(email[i])
}






