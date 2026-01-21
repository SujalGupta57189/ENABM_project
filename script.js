function scrollToMoods() {
  document.getElementById("moods").scrollIntoView({ behavior: "smooth" });
}

const moods = {
  focus: {
    title: "🎧 deep focus",
    desc: "quiet space. clean caffeine.",
    drinks: ["espresso", "americano"]
  },
  study: {
    title: "🧠 solo sunday",
    desc: "calm, slow, comfortable.",
    drinks: ["latte", "flat white"]
  },
  dates: {
    title: "💕 coffee dates",
    desc: "warm, aesthetic, slow sipping.",
    drinks: ["mocha", "cappuccino"]
  },
  night: {
    title: "🌙 midnight cravings",
    desc: "late nights, low stimulation.",
    drinks: ["chocolate milk", "decaf latte"]
  }
};

function showMood(key) {
  const mood = moods[key];

  document.getElementById("moodTitle").innerText = mood.title;
  document.getElementById("moodDesc").innerText = mood.desc;

  const list = document.getElementById("moodDrinks");
  list.innerHTML = "";
  mood.drinks.forEach(d => {
    const li = document.createElement("li");
    li.innerText = d;
    list.appendChild(li);
  });

  document.getElementById("moodOutput").style.display = "block";
}

/* Reservation form – no backend yet */
document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("reservation request received ☕\nwe’ll get back to you soon.");
  e.target.reset();
});
