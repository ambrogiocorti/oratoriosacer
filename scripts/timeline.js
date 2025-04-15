console.log("Timeline JS caricato correttamente!");
document.addEventListener('DOMContentLoaded', function() {
    const timelineEvents = [
        {
            date: "Gennaio 2023",
            title: "Campo Invernale",
            description: "Un weekend indimenticabile tra le montagne, con momenti di spiritualità, giochi di squadra e riflessioni condivise.",
            icon: "fa-mountain"
        },
        {
            date: "Marzo 2023",
            title: "Festa di Primavera",
            description: "Giornata all'insegna del divertimento con giochi, laboratori creativi e merenda comunitaria.",
            icon: "fa-seedling"
        },
        {
            date: "Maggio 2023",
            title: "Torneo di Quartiere",
            description: "Tre giorni di sport e aggregazione con partite emozionanti e premiazioni finali.",
            icon: "fa-trophy"
        },
        {
            date: "Luglio 2023",
            title: "Grest Estivo",
            description: "20 giorni di attività, giochi d'acqua, laboratori manuali e gite sul territorio.",
            icon: "fa-sun"
        },
        {
            date: "Dicembre 2023",
            title: "Natale Solidale",
            description: "Raccolta di generi alimentari e spettacolo natalizio preparato dai ragazzi.",
            icon: "fa-gift"
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
