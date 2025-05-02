console.log("Timeline JS caricato correttamente!");
document.addEventListener('DOMContentLoaded', function() {
    const timelineEvents = [
        {
            date: "Settembre 2021",
            title: "Terza Media",
            description: "In terza media, iniziai a frequentare l'oratorio."
        },
        {
            date: "Novembre 2021",
            title: "Primo colloquio",
            description: "A Novembre feci il mio primo colloquio con il Don. Il colloquio serviva per aiutarmi a gestire al meglio la scuola."
        },
        {
            date: "Settembre 2022",
            title: "PdF 2008 - Professione di Fede",
            description: "Prima superiore. Decisi di mettermi in gioco, fare la PdF e quindi, diventai animatore."
        },
        {
            date: "Ottobre 2022",
            title: "Primi compiti in oratorio",
            description: "Ogni animatore è chiamato a scegliere uno o più compiti, durante la settimana, per aiutare la comunità. Io, all'inizio, ero indeciso se aiutare nel gruppo fotocopie o se andare in bunker. Decisi di aiutare nelle fotocopie."
        },
        {
            date: "Novembre 2022",
            title: "Notte dei Santi",
            description: "La Notte dei Santi è una serata, organizzata dalla <b>FOM</b> - Fondazione Oratori Milanesi, in cui, i diversi oratori giocano facendo un tour in alcune chiese della città di Milano."
        },
        {
            date: "Novembre 2022",
            title: "Studio Insieme",
            description: "Lo Studio Insieme è un'iniziativa dedicata agli animatori per studiare insieme, il lunedì pomeriggio, con cena inclusa. Dopo la cena, si partecipa all'incontro di catechismo."
        },
        {
            date: "Dicembre 2022",
            title: "Novena di Natale",
            description: "Novena 'nove giorni' prima di Natale. Come oratorio, noi animatori siamo chiamati a pensare ad alcune scenette (una ogni sera) che parlano del Vangelo del Giorno dal punto di vista di due o più bambini."
        },
        {
            date: "Marzo 2023",
            title: "CamminAdo",
            description: "La CamminAdo è stata una camminata a cui hanno partecipato molti oratori da tutta Milano e provincia. Siamo partiti da Cernusco, abbiamo preso la metro per Gessate. Arrivati a Gessate, abbiamo iniziato la camminata. A Inzago abbiamo fatto una tappa in un oratorio che ci ha dati la merenda, e poi, siamo ripartiti e siamo arrivati a Treviglio.<br>È stata una bellissima esperienza in cui ho avuto la fortuna di conoscere nuove fastastiche persone."
        },
        {
            date: "Marzo 2023",
            title: "Fiera di S. Giuseppe",
            description: "La Fiera di San Giuseppe è la festa di Cernusco S/N dedicata al suo patrono. Per l'occasione, ogni anno, nel weekend di San Giuseppe, l'Oratorio, apre il salone, allestito come Ristorante, e ospita tra la cena di sabato e il pranzo della domenica circa 500+ persone.<br>È sempre un'esperienza di festa, di gioia e di impegno da parte di ciascun animatore."
        },
        {
            date: "Giugno 2023",
            title: "Oratorio Estivo",
            description: "Giugno 2023. Primo oratorio estivo, tanti balli, tanti bambini (1000+), tanti animatori e tanta tanta gioia. All'inizio non sapevo come dovessi comportarmi ma decisi di impegnarmi al massimo comunque e di far vedere chi era e chi è Ambrogio."
        },
        {
            date: "Settembre 2023",
            title: "Festa degli Oratori",
            description: "Questa festa dura una settimana, dal lunedì precedente alla domenica stessa. Durante la settimana, l'oratorio, di pomeriggio, è aperto per giochi, balli e animazioni dedicate ai bambini; inoltre ci sono anche delle mostre mobili per i ragazzi e per gli adulti. Come ogni festa, anche questa, ha richiesto alcuni momenti di preparazione e noi animatori ci siamo impegnati al meglio. Di sabato e domenica, come dnella festa di San Giuseppe, l'oratorio apre le porte della sua sala ristorante per tutti."
        },
        {
            date: "Ottobre 2023",
            title: "Catechismo 4°",
            description: "Ottobre 2023. 1° Incontro settimanale del catechismo di 4° elementare."
        },
        {
            date: "Ottobre 2023",
            title: "Catechismo 2°",
            description: "1° Incontro mensile del catechismo di 2° elementare."
        },
        {
            date: "Novembre 2023",
            title: "1° Vita Comune",
            description: "Prima Vita Comune. Esperienza nuova, molte indecisioni. Durante la Vita Comune, gli animatori presenti, sono chiamati dormire, mangiare, pregare e studiare in oratorio. Dura dal lunedì sera, finito catechismo, a sabato mattina con le pulizie degli ambienti utilizzati."
        },
        {
            date: "Settembre 2022",
            title: "PdF 2008 - Professione di Fede",
            description: "Prima superiore. Decisi di mettermi in gioco, fare la PdF e quindi, diventai animatore."
        },
        {
            date: "Settembre 2022",
            title: "PdF 2008 - Professione di Fede",
            description: "Prima superiore. Decisi di mettermi in gioco, fare la PdF e quindi, diventai animatore."
        },
        {
            date: "Settembre 2022",
            title: "PdF 2008 - Professione di Fede",
            description: "Prima superiore. Decisi di mettermi in gioco, fare la PdF e quindi, diventai animatore."
        },
        {
            date: "Settembre 2022",
            title: "PdF 2008 - Professione di Fede",
            description: "Prima superiore. Decisi di mettermi in gioco, fare la PdF e quindi, diventai animatore."
        }
    ];

    const timeline = document.getElementById('timeline');

    timelineEvents.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event';
        
        eventElement.innerHTML = `
            <div class="event-date">${event.date}</div>
            <div class="event-icon">
                <i class="fas ${event.icon}"></i>
            </div>
            <div class="event-content">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            </div>
        `;
        
        timeline.appendChild(eventElement);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    document.querySelectorAll('.event').forEach(event => {
        event.style.opacity = "0";
        event.style.transform = "translateY(20px)";
        event.style.transition = "all 0.4s ease-out";
        observer.observe(event);
    });
});
