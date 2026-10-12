
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

// Keep track of the currently selected category.
let activeCategory = "All";

// Search events as the student types.
const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("input", function() {
    filterEvents();
});

// Listen for clicks on the category buttons.
const filterButtons = document.querySelectorAll("[data-filter]");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        activeCategory = button.dataset.filter;

        // Visually identify the selected category.
        filterButtons.forEach(function(otherButton) {
            otherButton.classList.remove("active");
        });

        button.classList.add("active");

        filterEvents();
    });
});

// Filter by the selected organiser.
const organiserFilter = document.querySelector("#organiserFilter");

organiserFilter.addEventListener("change", function() {
    filterEvents();
});

// Combine the search, category and organiser filters.
function filterEvents() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedOrganiser = organiserFilter.value;

    const filteredEvents = events.filter(function(event) {
        const matchesCategory =
            activeCategory === "All" ||
            event.category === activeCategory;

        const matchesOrganiser =
            selectedOrganiser === "All" ||
            event.organiser === selectedOrganiser;

        const searchableText =
            `${event.title} ${event.organiser} ${event.category} ${event.location} ${event.description}`
                .toLowerCase();

        const matchesSearch = searchableText.includes(searchTerm);

        return matchesCategory && matchesOrganiser && matchesSearch;
    });

    renderEvents(filteredEvents);
}


const signupForm = document.querySelector("#signupForm");
const formMessage = document.querySelector("#formMessage");

signupForm.addEventListener("submit", function(event) {
    // Stop the browser from reloading the page.
    event.preventDefault();

    const name = document.querySelector("#studentName").value.trim();
    const email = document.querySelector("#studentEmail").value.trim();
    const interest = document.querySelector("#interest").value;

    // Check that the student has entered the required details.
    if (name.length < 2) {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email.";
        return;
    }

    if (interest === "") {
        formMessage.textContent = "Please select an event interest.";
        return;
    }

    // Display a confirmation message.
    formMessage.textContent =
        `Thanks, ${name}! Your interest in ${interest} has been recorded for this demo.`;

    signupForm.reset();
});
