document.addEventListener('DOMContentLoaded', function () {
    console.log("Timeline JS caricato correttamente!");

    // Mappa delle icone per tipologia di evento
    const iconMap = {
        "default": "fa-calendar-day",
        "media": "fa-graduation-cap",
        "colloquio": "fa-comments",
        "pdf": "fa-hands-praying",
        "compiti": "fa-tasks",
        "notte": "fa-moon",
        "studio": "fa-book",
        "novena": "fa-star",
        "fiera": "fa-utensils",
        "cammin": "fa-hiking",
        "estivo": "fa-sun",
        "festa": "fa-calendar-check",
        "catechismo": "fa-cross",
        "vita": "fa-home",
        "ritiro": "fa-pray",
        "carro": "fa-truck",
        "lanternata": "fa-lightbulb",
        "messa": "fa-church",
        "pellegrinaggio": "fa-map-marked-alt",
        "carnevale": "fa-mask",
        "triduo": "fa-cross"
    };

    // Funzione per determinare l'icona in base al titolo
    const getEventIcon = (title) => {
        const lowerTitle = title.toLowerCase();
        for (const [key, icon] of Object.entries(iconMap)) {
            if (lowerTitle.includes(key)) {
                return icon;
            }
        }
        return iconMap.default;
    };

    const timelineEvents = [
        {
            date: "Settembre 2021",
            title: "Terza Media",
            description: "In terza media, iniziai a frequentare l'oratorio."
        }, {
            date: "Novembre 2021",
            title: "Primo colloquio",
            description: "A Novembre feci il mio primo colloquio con il Don. Il colloquio serviva per ai" +
                    "utarmi a gestire al meglio la scuola."
        },

        //Primo anno da animatore
        {
            date: "Settembre 2022",
            title: "PdF 2008 - Professione di Fede",
            description: "Prima superiore. Decisi di mettermi in gioco, fare la PdF e quindi, diventai a" +
                    "nimatore."
        }, {
            date: "Ottobre 2022",
            title: "Primi compiti in oratorio",
            description: "Ogni animatore è chiamato a scegliere uno o più compiti, durante la settimana," +
                    " per aiutare la comunità. Io, all'inizio, ero indeciso se aiutare nel gruppo f" +
                    "otocopie o se andare in bunker. Decisi di aiutare nelle fotocopie."
        }, {
            date: "Novembre 2022",
            title: "Notte dei Santi",
            description: "La Notte dei Santi è una serata, organizzata dalla <b>FOM</b> - Fondazione Ora" +
                    "tori Milanesi, in cui, i diversi oratori giocano facendo un tour in alcune chi" +
                    "ese della città di Milano."
        }, {
            date: "Novembre 2022",
            title: "Studio Insieme",
            description: "Lo Studio Insieme è un'iniziativa dedicata agli animatori per studiare insieme" +
                    ", il lunedì pomeriggio, con cena inclusa. Dopo la cena, si partecipa all'incon" +
                    "tro di catechismo."
        }, {
            date: "Dicembre 2022",
            title: "Novena di Natale",
            description: "Novena 'nove giorni' prima di Natale. Come oratorio, noi animatori siamo chiam" +
                    "ati a pensare ad alcune scenette (una ogni sera) che parlano del Vangelo del G" +
                    "iorno dal punto di vista di due o più bambini."
        },

        //Secondo anno da animatore
        {
            date: "Marzo 2023",
            title: "Fiera di S. Giuseppe",
            description: "La Fiera di San Giuseppe è la festa di Cernusco S/N dedicata al suo patrono. P" +
                    "er l'occasione, ogni anno, nel weekend di San Giuseppe, l'Oratorio, apre il sa" +
                    "lone, allestito come Ristorante, e ospita tra la cena di sabato e il pranzo de" +
                    "lla domenica circa 500+ persone.<br>È sempre un'esperienza di festa, di gioia " +
                    "e di impegno da parte di ciascun animatore."
        }, {
            date: "Marzo 2023",
            title: "CamminAdo",
            description: "La CamminAdo è stata una camminata a cui hanno partecipato molti oratori da tu" +
                    "tta Milano e provincia. Siamo partiti da Cernusco, abbiamo preso la metro per " +
                    "Gessate. Arrivati a Gessate, abbiamo iniziato la camminata. A Inzago abbiamo f" +
                    "atto una tappa in un oratorio che ci ha dati la merenda, e poi, siamo ripartit" +
                    "i e siamo arrivati a Treviglio.<br>È stata una bellissima esperienza in cui ho" +
                    " avuto la fortuna di conoscere nuove fastastiche persone."
        }, {
            date: "Giugno 2023",
            title: "Oratorio Estivo",
            description: "Giugno 2023. Primo oratorio estivo, tanti balli, tanti bambini (1000+), tanti " +
                    "animatori e tanta tanta gioia. All'inizio non sapevo come dovessi comportarmi " +
                    "ma decisi di impegnarmi al massimo comunque e di far vedere chi era e chi è Am" +
                    "brogio."
        }, {
            date: "Settembre 2023",
            title: "Festa degli Oratori",
            description: "Questa festa dura una settimana, dal lunedì precedente alla domenica stessa. D" +
                    "urante la settimana, l'oratorio, di pomeriggio, è aperto per giochi, balli e a" +
                    "nimazioni dedicate ai bambini; inoltre ci sono anche delle mostre mobili per i" +
                    " ragazzi e per gli adulti. Come ogni festa, anche questa, ha richiesto alcuni " +
                    "momenti di preparazione e noi animatori ci siamo impegnati al meglio. Di sabat" +
                    "o e domenica, come dnella festa di San Giuseppe, l'oratorio apre le porte dell" +
                    "a sua sala ristorante per tutti."
        }, {
            date: "Ottobre 2023",
            title: "Catechismo 4°",
            description: "Ottobre 2023. 1° Incontro settimanale del catechismo di 4° elementare."
        }, {
            date: "Ottobre 2023",
            title: "Catechismo 2°",
            description: "1° Incontro mensile del catechismo di 2° elementare."
        }, {
            date: "Novembre 2023",
            title: "1° Vita Comune",
            description: "Prima Vita Comune. Esperienza nuova, molte indecisioni. Durante la Vita Comune" +
                    ", gli animatori presenti, sono chiamati dormire, mangiare, pregare e studiare " +
                    "in oratorio. Dura dal lunedì sera, finito catechismo, a sabato mattina con le " +
                    "pulizie degli ambienti utilizzati."
        }, {
            date: "Novembre 2023",
            title: "Ritiro Spirituale di Avvento",
            description: "Weekend di spiritualità in preparazione al Natale. Durante questi due giorni"
        }, {
            date: "Dicembre 2023",
            title: "Carro di Babbo Natale",
            description: "Giri settimanali per le vie di Cernusco per animare il Natale."
        }, {
            date: "Dicembre 2023",
            title: "Novena di Natale",
            description: "Nove serate di preghiera e preparazione al Natale."
        }, {
            date: "Dicembre 2023",
            title: "Lanternata",
            description: "Processione con i bambini al Santuario di Santa Maria."
        }, {
            date: "Dicembre 2023",
            title: "Messa di Mezzanotte",
            description: "Celebrazione della Natività con concerto corale e auguri in oratorio."
        }, {
            date: "Dicembre 2023",
            title: "Ado&Vado Firenze",
            description: "Pellegrinaggio diocesano a Firenze per adolescenti."
        },

        //Terzo anno da animatore
        {
            date: "Gennaio 2024",
            title: "Cena e Riunione Animatori",
            description: "Incontro di inizio anno per pianificare le attività."
        }, {
            date: "Gennaio 2024",
            title: "Festa della Famiglia",
            description: "Spettacoli, pranzo comunitario e tombolata in oratorio."
        }, {
            date: "Febbraio 2024",
            title: "Carnevale",
            description: "Pomeriggio di giochi e animazione per bambini con parata in giro per la città."
        }, {
            date: "Febbraio 2024",
            title: "Vita Comune 2-3sup",
            description: "Ritiro spirituale per animatori di seconda e terza superiore."
        }, {
            date: "Marzo 2024",
            title: "Ritiro Spirituale di Quaresima a Mornese",
            description: "Momento forte di preghiera e condivisione."
        }, {
            date: "Marzo 2024",
            title: "Fiera di San Giuseppe",
            description: "Evento parrocchiale con stand e attività."
        }, {
            date: "Marzo 2024",
            title: "Processione delle Palme",
            description: "Celebrazione della Domenica delle Palme."
        }, {
            date: "Aprile 2024",
            title: "Triduo Pasquale",
            description: "Lavanda dei Piedi, Via Crucis e Veglia Pasquale."
        }, {
            date: "Maggio 2024",
            title: "Preparazione Oratorio Estivo",
            description: "Incontri settimanali per organizzare l'estate."
        }, {
            date: "Giugno 2024",
            title: "Oratorio Estivo",
            description: "Attività quotidiane per bambini e ragazzi."
        }, {
            date: "Luglio 2024",
            title: "Campeggio Adolescenti",
            description: "Esperienza estiva per animatori."
        }, {
            date: "Settembre 2024",
            title: "Festa dell'Oratorio (FdO)",
            description: "Giochi, spettacoli e celebrazioni per la comunità."
        }, {
            date: "Ottobre 2024",
            title: "Ordinazione Diaconale di Don Davide",
            description: "Celebrazione a Milano e pranzo festivo."
        }, {
            date: "Ottobre 2024",
            title: "Festa Patronale San Giuseppe",
            description: "Pranzo comunitario e animazione."
        }, {
            date: "Novembre 2024",
            title: "Vita Comune 2-3sup",
            description: "Secondo ritiro spirituale dell'anno."
        }, {
            date: "Novembre 2024",
            title: "Cena dei Santi",
            description: "Serata comunitaria per festeggiare Ognissanti."
        }, {
            date: "Dicembre 2024",
            title: "Ritiro Spirituale di Avvento a Mornese",
            description: "Weekend di preparazione al Natale."
        }, {
            date: "Dicembre 2024",
            title: "Novena e Messa di Natale",
            description: "Celebrazioni natalizie con i bambini."
        }, {
            date: "Dicembre 2024",
            title: "Ado&Vado",
            description: "Pellegrinaggio diocesano a Lubiana e Trieste."
        },

        //Quarto anno da animatore
        {
            date: "Gennaio 2025",
            title: "Cena e Incontro Animatori",
            description: "Avvio delle attività dopo le feste."
        }, {
            date: "Gennaio 2025",
            title: "Settimana dell'Educazione",
            description: "Formazione animatori con cena comunitaria."
        }, {
            date: "Gennaio 2025",
            title: "Messa con l'Arcivescovo",
            description: "Celebrazione in Duomo per gli oratori."
        }, {
            date: "Febbraio 2025",
            title: "Carnevale",
            description: "Festa in maschera con giochi per bambini."
        }, {
            date: "Marzo 2025",
            title: "Ritiro di Quaresima a Mornese",
            description: "Momento di preghiera in preparazione alla Pasqua."
        }, {
            date: "Marzo 2025",
            title: "Fiera di San Giuseppe",
            description: "Tradizionale festa patronale con ristorante oratoriano."
        }, {
            date: "Aprile 2025",
            title: "Giubileo Adolescenti",
            description: "Pellegrinaggio diocesano."
        }, {
            date: "Aprile 2025",
            title: "Triduo Pasquale",
            description: "Celebrazioni della Passione, Morte e Risurrezione."
        }
    ];

    const timeline = document.getElementById('timeline');

    // Raggruppa gli eventi per anno
    const eventsByYear = timelineEvents.reduce((acc, event) => {
        const year = event
            .date
            .split(' ')[1]; // Estrae l'anno dalla data
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(event);
        return acc;
    }, {});

    // Crea le sezioni per ogni anno
    Object
        .entries(eventsByYear)
        .forEach(([year, events]) => {
            // Aggiungi un header per l'anno
            const yearHeader = document.createElement('div');
            yearHeader.className = 'year-header';
            yearHeader.innerHTML = `
                <h2>${year}</h2>
                <div class="year-line"></div>
            `;
            timeline.appendChild(yearHeader);

            // Aggiungi gli eventi per quell'anno
            events.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = 'event';

                eventElement.innerHTML = `
                    <div class="event-date">${event.date}</div>
                    <div class="event-icon">
                        <i class="fas ${getEventIcon(
                    event.title
                )}"></i>
                    </div>
                    <div class="event-content">
                        <h3>${event.title}</h3>
                        <p>${event.description}</p>
                    </div>
                `;

                timeline.appendChild(eventElement);
            });
        });

    // Animazioni
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    document
        .querySelectorAll('.event, .year-header')
        .forEach(element => {
            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
            element.style.transition = "all 0.4s ease-out";
            observer.observe(element);
        });
});