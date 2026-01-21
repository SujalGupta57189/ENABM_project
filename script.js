function scrollToMoods() {
  document.getElementById("moods").scrollIntoView({ behavior: "smooth" });
}

/* MOOD LIGHT COLORS */
const moodLights = {
  focus: "rgba(120,180,255,0.35)",
  study: "rgba(180,220,200,0.35)",
  dates: "rgba(255,160,180,0.4)",
  energy: "rgba(255,210,120,0.45)",
  night: "rgba(120,120,180,0.35)",
  creative: "rgba(200,160,255,0.4)"
};

const moods = {
  focus: {
    title: "🎧 deep focus",
    desc: "zero noise. clean caffeine. main character energy.",
    drinks: ["espresso", "americano", "ristretto", "lungo"],
    caption: "in my deep focus era ☕🎧\nno noise. just caffeine.\n#deepfocus #caffeinewithme"
  },
  study: {
    title: "🧠 solo sunday",
    desc: "calm mind. long sitting. soft comfort.",
    drinks: ["caffè latte", "flat white", "raf coffee"],
    caption: "solo sunday, coffee & my thoughts ☁️☕\n#solosunday #coffievibes"
  },
  dates: {
    title: "💕 coffee dates",
    desc: "slow sips, eye contact, soft conversations.",
    drinks: ["mocha", "cappuccino", "vienna coffee"],
    caption: "coffee dates > everything 💕☕\nslow sips & soft talks\n#coffeedate #romanticise"
  },
  energy: {
    title: "⏰ monday deadlines",
    desc: "fast caffeine. sharp focus. no excuses.",
    drinks: ["espresso", "doppio", "americano"],
    caption: "powered by deadlines & caffeine ⏰☕\n#mondaymood #deadlineenergy"
  },
  night: {
    title: "🌙 midnight cravings",
    desc: "late nights. low caffeine. emotional comfort.",
    drinks: ["chocolate milk", "raf coffee", "glace"],
    caption: "midnight coffee hits different 🌙☕\n#latenightvibes #decafmood"
  },
  creative: {
    title: "🎨 creative chaos",
    desc: "ideas > perfection. playful & experimental.",
    drinks: ["frappe", "freddo", "caramel frappe"],
    caption: "creating > overthinking 🎨☕\nchaos but make it cute\n#creativechaos"
  }
};

function showMood(key) {
  const mood = moods[key];

  /* UPDATE AMBIENT LIGHT */
  document.getElementById("ambient-light").style.background =
    `radial-gradient(circle at center, ${moodLights[key]}, transparent 70%)`;

  document.getElementById("moodTitle").innerText = mood.title;
  document.getElementById("moodDesc").innerText = mood.desc;

  const list = document.getElementById("moodDrinks");
  list.innerHTML = "";
  mood.drinks.forEach(drink => {
    const li = document.createElement("li");
    li.innerText = drink;
    list.appendChild(li);
  });

  document.getElementById("captionText").innerText = mood.caption;

  const output = document.getElementById("moodOutput");
  output.style.display = "block";
  output.scrollIntoView({ behavior: "smooth" });
}

function copyCaption() {
  const text = document.getElementById("captionText").innerText;
  navigator.clipboard.writeText(text);
  alert("caption copied ✨ paste it on your story");
}

function shareVibe() {
  alert("screenshot this vibe 📸\nshare it on your story & tag @caffeinewithme ☕");
}

/* DEFAULT WARM GLOW */
window.onload = () => {
  document.getElementById("ambient-light").style.background =
    "radial-gradient(circle at center, rgba(255,200,150,0.25), transparent 70%)";
};
