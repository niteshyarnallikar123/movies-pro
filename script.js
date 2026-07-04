/* ==============================
   LOADER
============================== */


window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 500);

    }

});

/* ==============================
   SCROLL PROGRESS BAR
============================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

   if (progressBar) {
    progressBar.style.width = progress + "%";
}

});

/* ==============================
   TRENDING SLIDER
============================== */

const slider = document.getElementById("movieSlider");

const leftBtn = document.getElementById("leftBtn");

const rightBtn = document.getElementById("rightBtn");

if (leftBtn && rightBtn && slider) {

    rightBtn.onclick = () => {

        slider.scrollBy({

            left: 700,

            behavior: "smooth"

        });

    };

    leftBtn.onclick = () => {

        slider.scrollBy({

            left: -700,

            behavior: "smooth"

        });

    };

}


   


function searchMovie() {

    const movies = {

        "stranger things": {
            rating: "⭐ 8.9",
            genre: "Sci-Fi, Horror",
            year: "2016",
            duration: "4 Seasons",
            language: "English",
            description: "A group of kids uncover supernatural mysteries and secret government experiments.",
            image: "stranger things.jpg"
        },

        "money heist": {
            rating: "⭐ 8.7",
            genre: "Crime, Thriller",
            year: "2017",
            duration: "5 Seasons",
            language: "Spanish",
            description: "A criminal mastermind plans the biggest heist in history with a skilled team.",
            image: "movie3.jpg"
        },

        "dark": {
            rating: "⭐ 8.8",
            genre: "Sci-Fi, Mystery",
            year: "2017",
            duration: "3 Seasons",
            language: "German",
            description: "Four families discover time travel secrets in a mysterious German town.",
            image: "movie4.jpg"
        },

        "squid game": {
            rating: "⭐ 8.0",
            genre: "Drama, Thriller",
            year: "2021",
            duration: "2 Seasons",
            language: "Korean",
            description: "Hundreds of contestants risk their lives in deadly children's games for a huge cash prize.",
            image: "movie5.jpg"
        },

        "spider-man no way home": {
            rating: "⭐ 8.3",
            genre: "Action, Adventure",
            year: "2021",
            duration: "148 min",
            language: "English",
            description: "Peter Parker's identity is revealed and he asks Doctor Strange for help, unleashing the multiverse.",
            image: "movie7.jpg"
        },

        "thor love and thunder": {
            rating: "⭐ 6.8",
            genre: "Action, Comedy",
            year: "2022",
            duration: "119 min",
            language: "English",
            description: "Thor embarks on a quest for inner peace but must return to action when Gorr the God Butcher threatens all gods.",
            image: "movie8.jpg"
        },

        "doraemon": {
            rating: "⭐ 8.1",
            genre: "Animation, Family",
            year: "2022",
            duration: "96 min",
            language: "Japanese",
            description: "Doraemon and friends go on a magical adventure in the new demon world.",
            image: "movie9.jpg"
        },

        "avengers infinity war": {
            rating: "⭐ 8.4",
            genre: "Action, Adventure",
            year: "2018",
            duration: "149 min",
            language: "English",
            description: "The Avengers and their allies must stop Thanos from collecting all six Infinity Stones.",
            image: "movie10.jpg"
        },

        "captain marvel": {
            rating: "⭐ 6.8",
            genre: "Action, Sci-Fi",
            year: "2019",
            duration: "124 min",
            language: "English",
            description: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in a galactic war.",
            image: "movie11.jpg"
        },

        "jujutsu kaisen": {
            rating: "⭐ 8.7",
            genre: "Animation, Action",
            year: "2020",
            duration: "4 Seasons",
            language: "Japanese",
            description: "A boy swallows a cursed talisman and joins a secret organization of Jujutsu Sorcerers to kill a powerful Curse.",
            image: "movie12.jpg"
        },

        "wednesday": {
            rating: "⭐ 8.3",
            genre: "Mystery, Comedy",
            year: "2022",
            duration: "1 Season",
            language: "English",
            description: "Wednesday Addams investigates a murder mystery while navigating her new school.",
            image: "movie2.jpg"
        },

        "extraction": {
            rating: "⭐ 7.6",
            genre: "Action, Thriller",
            year: "2020",
            duration: "116 min",
            language: "English",
            description: "A black market mercenary is hired to rescue the kidnapped son of an imprisoned drug lord.",
            image: "movie6.jpg"
        }

    };  // ← this closing brace was MISSING before

    const aliases = {
        "spiderman": "spider-man no way home",
        "spider man": "spider-man no way home",
        "spiderman no way home": "spider-man no way home",
        "thor": "thor love and thunder",
        "infinity war": "avengers infinity war",
        "avengers": "avengers infinity war",
        "endgame": "avengers infinity war",
        "jjk": "jujutsu kaisen",
        "jujutsu": "jujutsu kaisen",
        "captain": "captain marvel"
    };

    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const resolvedInput = aliases[input] || input;
    const result = document.getElementById("searchResult");

    if (movies[resolvedInput]) {

        result.innerHTML = `
        <div class="search-card">
            <img src="${movies[resolvedInput].image}" width="250">
            <h2>${resolvedInput.toUpperCase()}</h2>
            <p><b>⭐ Rating:</b> ${movies[resolvedInput].rating}</p>
            <p><b>🎬 Genre:</b> ${movies[resolvedInput].genre}</p>
            <p><b>📅 Year:</b> ${movies[resolvedInput].year}</p>
            <p><b>⏱ Duration:</b> ${movies[resolvedInput].duration}</p>
            <p><b>🌐 Language:</b> ${movies[resolvedInput].language}</p>
            <p>${movies[resolvedInput].description}</p>
        </div>
        `;

    } else {

        result.innerHTML = `
        <div class="search-card">
            <h2 style="color:red;">❌ Movie Not Found</h2>
            <p style="color:white;">Sorry! This movie is not available in our collection.</p>
            <p style="color:lightgray;">Please try searching for another movie.</p>
        </div>
        `;
    }

    document.getElementById("searchResult").scrollIntoView({ behavior: "smooth", block: "center" });

}
/* ==============================
   LANGUAGE SELECT
============================== */

// REPLACE WITH THIS:
const language = document.getElementById("language");

const translations = {
    en: {
        home: "Home",
        movies: "Movies",
        webSeries: "WEB SERIES",
        myList: "My List",
        badge: "🔥 #1 Streaming Platform",
        heroTitle: "Unlimited Movies, TV Shows & More.",
        heroSub: "Watch anywhere. Cancel anytime. Enjoy unlimited entertainment.",
        watchNow: "▶ Watch Now",
        moreInfo: "More Info",
        placeholder: "Search movie..."
    },
    hi: {
        home: "होम",
        movies: "फ़िल्में",
        webSeries: "वेब सीरीज",
        myList: "मेरी सूची",
        badge: "🔥 #1 स्ट्रीमिंग प्लेटफ़ॉर्म",
        heroTitle: "असीमित फ़िल्में, टीवी शो और भी बहुत कुछ।",
        heroSub: "कहीं भी देखें। कभी भी रद्द करें। असीमित मनोरंजन का आनंद लें।",
        watchNow: "▶ अभी देखें",
        moreInfo: "अधिक जानकारी",
        placeholder: "फ़िल्म खोजें..."
    }
};

if (language) {
    language.addEventListener("change", function () {
        const lang = this.value;
        const t = translations[lang];

        // Nav links
        const navLinks = document.querySelectorAll(".nav-links li a");
        if (navLinks[0]) navLinks[0].textContent = t.home;
        if (navLinks[1]) navLinks[1].textContent = t.movies;
        if (navLinks[2]) navLinks[2].textContent = t.webSeries;
        if (navLinks[3]) navLinks[3].textContent = t.myList;

        // Hero section
        const badge = document.querySelector(".badge");
        const heroTitle = document.querySelector(".hero-content h1");
        const heroSub = document.querySelector(".hero-content p");
        const playBtn = document.querySelector(".play-btn");
        const infoBtn = document.querySelector(".info-btn");
        const searchInput = document.getElementById("searchInput");

        if (badge) badge.textContent = t.badge;
        if (heroTitle) heroTitle.textContent = t.heroTitle;
        if (heroSub) heroSub.textContent = t.heroSub;
        if (playBtn) playBtn.textContent = t.watchNow;
        if (infoBtn) infoBtn.textContent = t.moreInfo;
        if (searchInput) searchInput.placeholder = t.placeholder;
    });
}
/* ==============================
   SIGN IN BUTTON
============================== */

const signinBtn = document.getElementById("signinBtn");

if (signinBtn) {
    signinBtn.addEventListener("click", function () {
        alert("Sign In button clicked!");
    });
}

/* ==============================
   FAQ ACCORDION
============================== */
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;
        const icon = button.querySelector("span");

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.textContent = "+";
        } else {
            document.querySelectorAll(".faq-answer").forEach(item => {
                item.style.maxHeight = null;
            });

            document.querySelectorAll(".faq-question span").forEach(i => {
                i.textContent = "+";
            });

            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "×";
        }

    });

});   

/* ==============================
   BACK TO TOP BUTTON
============================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==============================
   NAVBAR BACKGROUND
============================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(0,0,0,0.95)";

    } else {

        navbar.style.background = "rgba(0,0,0,0.35)";

    }

});

/* ==============================
   SMOOTH HOVER EFFECT
============================== */

const cards = document.querySelectorAll(".movie-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.zIndex = "10";

    });

    card.addEventListener("mouseleave", () => {

        card.style.zIndex = "1";

    });

});


/* ==============================
   AUTO SCROLL TRENDING
============================== */

let autoSlide = setInterval(() => {

    if (slider) {

        if (

            slider.scrollLeft + slider.clientWidth >=

            slider.scrollWidth - 5

        ) {

            slider.scrollTo({

                left: 0,

                behavior: "smooth"

            });

        } else {

            slider.scrollBy({

                left: 250,

                behavior: "smooth"

            });

        }

    }

}, 4000);

if (slider) {

    slider.addEventListener("mouseenter", () => {

        clearInterval(autoSlide);

    });

    slider.addEventListener("mouseleave", () => {

        autoSlide = setInterval(() => {

            if (

                slider.scrollLeft + slider.clientWidth >=

                slider.scrollWidth - 5

            ) {

                slider.scrollTo({

                    left: 0,

                    behavior: "smooth"

                });

            } else {

                slider.scrollBy({

                    left: 250,

                    behavior: "smooth"

                });

            }

        }, 4000);

    });

}
/* ==============================
   HERO BUTTONS
============================== */

const playBtn = document.querySelector(".play-btn");
const infoBtn = document.querySelector(".info-btn");

if (playBtn) {
    playBtn.addEventListener("click", () => {
        // Scrolls to the Trending section — or change to any action you want
        document.querySelector(".trending").scrollIntoView({ behavior: "smooth" });
    });
}

if (infoBtn) {
    infoBtn.addEventListener("click", () => {
        // Scrolls to the Movies section — or show a modal, alert, etc.
        document.querySelector("#movies").scrollIntoView({ behavior: "smooth" });
    });
}
const btn = document.getElementById("searchBtn");

if (btn) {
    btn.addEventListener("click", searchMovie);
}
window.searchMovie = searchMovie;


/* ==============================
   END OF SCRIPT
============================== */
