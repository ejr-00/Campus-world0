
const events = [
    {
        id: 1,
        title: "Study Skills Workshop",
        organiser: "Passport",
        category: "Learning",
        date: "October 13",
        time: "4:00 PM",
        location: "Learning Commons",
        description: "Learn practical study techniques and improve how you prepare for assessments.",
        emoji: "📚"
    },
    {
        id: 2,
        title: "Career Toolkit Workshop",
        organiser: "Passport",
        category: "Career",
        date: "October 17",
        time: "11:00 AM",
        location: "Innovation Lab",
        description: "Explore CV writing, networking and ways to prepare for career opportunities.",
        emoji: "💼"
    },
    {
        id: 3,
        title: "Student Ideas Forum",
        organiser: "Student Council",
        category: "Learning",
        date: "October 15",
        time: "5:30 PM",
        location: "Seminar Room",
        description: "Share your ideas and discuss ways to improve student life on campus.",
        emoji: "💡"
    },
    {
        id: 4,
        title: "Courtyard Sessions",
        organiser: "Student Council",
        category: "Social",
        date: "October 16",
        time: "7:00 PM",
        location: "Main Courtyard",
        description: "Enjoy music, meet other students and unwind after a busy week.",
        emoji: "🎵"
    },
    {
        id: 5,
        title: "Culture Connect",
        organiser: "Student Council",
        category: "Culture",
        date: "October 17",
        time: "3:00 PM",
        location: "Student Centre",
        description: "Celebrate the different cultures, traditions and stories on campus.",
        emoji: "🌍"
    },
    {
        id: 6,
        title: "Move and Reset",
        organiser: "Campus Community",
        category: "Wellness",
        date: "October 18",
        time: "9:00 AM",
        location: "Sports Field",
        description: "Take a break, get moving and connect with the campus community.",
        emoji: "☀️"
    }
];

const eventGrid = document.querySelector("#eventGrid");

function renderEvents(eventList) {
    eventGrid.innerHTML = "";

    eventList.forEach(function(event) {
        const card = document.createElement("article");
        card.className = "event-card";

        card.innerHTML = `
            <div class="event-visual">${event.emoji}</div>

            <div class="event-content">
                <p>${event.category} · ${event.organiser}</p>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
            </div>
        `;

        eventGrid.appendChild(card);
    });

    document.querySelector("#resultsCount").textContent =
        `Showing ${eventList.length} events`;
}

renderEvents(events);
