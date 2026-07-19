// -------------------------
// SCREEN REFERENCES
// -------------------------

const homeScreen = document.getElementById("homeScreen");
const nameScreen = document.getElementById("nameScreen");
const speciesScreen = document.getElementById("speciesScreen");

// -------------------------
// BUTTONS
// -------------------------

const beginButton = document.getElementById("beginButton");
const continueName = document.getElementById("continueName");

const speciesButtons = document.querySelectorAll(".speciesButton");

const originScreen = document.getElementById("originScreen");
const originDescription = document.getElementById("originDescription");
const originButtons = document.getElementById("originButtons");

const assessmentScreen = document.getElementById("assessmentScreen");

const resultsScreen = document.getElementById("resultsScreen");

const finalSpecialty = document.getElementById("finalSpecialty");

// -------------------------
// PLAYER INFO
// -------------------------

let playerName = "";
let playerSpecies = "";
let playerOrigin = "";

// -------------------------
// BEGIN
// -------------------------

beginButton.addEventListener("click", () => {

    homeScreen.style.display = "none";
    nameScreen.style.display = "block";

});

// -------------------------
// NAME
// -------------------------

continueName.addEventListener("click", () => {

    playerName = document.getElementById("playerName").value;

    if(playerName === ""){

        alert("Please enter your name.");

        return;

    }

    nameScreen.style.display = "none";
    speciesScreen.style.display = "block";

});

// -------------------------
// SPECIES
// -------------------------

speciesButtons.forEach(button => {

    button.addEventListener("click", () => {

        playerSpecies = button.dataset.species;

        speciesScreen.style.display = "none";
        originScreen.style.display = "block";

        let origins = [];

        if(playerSpecies === "Human"){

            originDescription.textContent = "Humans are adaptable explorers from many worlds.";

            origins = [
                "Earthborn",
                "Stationborn",
                "Colonyborn"
            ];

        }

        if(playerSpecies === "Android"){

            originDescription.textContent = "Androids are advanced synthetic explorers built for specialized missions.";

            origins = [
                "Service Unit",
                "Explorer Unit",
                "Prototype Unit"
            ];

        }

        if(playerSpecies === "Alien"){

            originDescription.textContent = "Alien civilizations bring unique perspectives from across the galaxy.";

            origins = [
                "Aqualian",
                "Zephyrian",
                "Crystalline"
            ];

        }

        originButtons.innerHTML = "";

        origins.forEach(origin => {

            const button = document.createElement("button");

            button.textContent = origin;

            button.className = "originButton";

            button.onclick = function(){

    playerOrigin = origin;

    originScreen.style.display = "none";

    assessmentScreen.style.display = "block";

    loadQuestion();

};

            originButtons.appendChild(button);

        });

    });

});

// -------------------------
// ASSESSMENT
// -------------------------

const questionTitle = document.getElementById("questionTitle");
const questionMission = document.getElementById("questionMission");

const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");

let currentQuestion = 0;

const scores = {

Guardian:0,
Builder:0,
Engineer:0,
Scientist:0,
Explorer:0,
Mystic:0,
Xenologist:0,
Astrobiologist:0,
Tinkerer:0

};

const questions = [

{

title:"Academy Simulation 1 of 12",

mission:"Your squad discovers an abandoned research satellite drifting silently through space. Long-range sensors detect no life signs, but its power systems remain active.\n\nWhat does your squad do first?",

answers:[
{
text:"Scan the satellite from a safe distance before approaching.",
score:["Scientist","Engineer"]
},
{
text:"Dock with the satellite and inspect its damaged systems.",
score:["Engineer","Tinkerer"]
},
{
text:"Secure the area and make sure your teammates stay safe.",
score:["Guardian","Builder"]
},
{
text:"Search nearby space to see where the satellite came from.",
score:["Explorer","Xenologist"]
}
]

},

{

title:"Academy Simulation 2 of 12",

mission:"Your squad lands on a planet covered in glowing plants unlike anything recorded before.\n\nWhat does your squad do first?",

answers:[
{
text:"Collect detailed observations before disturbing anything.",
score:["Scientist","Astrobiologist"]
},
{
text:"Build a safe path through the vegetation.",
score:["Builder","Engineer"]
},
{
text:"Search for signs of animal life nearby.",
score:["Explorer","Astrobiologist"]
},
{
text:"Investigate the source of the glowing light.",
score:["Mystic","Xenologist"]
}
]

},

{

title:"Academy Simulation 3 of 12",

mission:"Your squad receives a distress signal from a small research outpost. Emergency power is failing.\n\nWhat is your first priority?",

answers:[
{
text:"Help repair the damaged systems immediately.",
score:["Engineer","Builder"]
},
{
text:"Protect everyone while the situation is assessed.",
score:["Guardian","Explorer"]
},
{
text:"Question the researchers to learn what happened.",
score:["Xenologist","Scientist"]
},
{
text:"Search the surrounding area for the source of the problem.",
score:["Explorer","Astrobiologist"]
}
]

},

{

title:"Academy Simulation 4 of 12",

mission:"An ancient doorway deep inside alien ruins suddenly begins to open.\n\nWhat does your squad do?",

answers:[
{
text:"Record everything before entering.",
score:["Scientist","Explorer"]
},
{
text:"Examine the doorway's mechanisms.",
score:["Engineer","Tinkerer"]
},
{
text:"Prepare the team in case something emerges.",
score:["Guardian","Builder"]
},
{
text:"Explore inside to discover what lies beyond.",
score:["Explorer","Mystic"]
}
]

},

{

title:"Academy Simulation 5 of 12",

mission:"Your expedition discovers a deep underground cave filled with strange crystal formations emitting unknown energy. What do you do first?",

answers:[
{
text:"Study the crystals before touching anything.",
score:["Scientist","Astrobiologist"]
},
{
text:"Check whether the cave is structurally safe.",
score:["Engineer","Builder"]
},
{
text:"Secure the entrance and protect the team.",
score:["Guardian","Explorer"]
},
{
text:"Search for evidence of who created the cave.",
score:["Explorer","Xenologist"]
}
]

},

{

title:"Academy Simulation 6 of 12",

mission:"Your communications array suddenly stops working while exploring an uncharted moon. What is your first response?",

answers:[
{
text:"Diagnose and repair the communications equipment.",
score:["Engineer","Tinkerer"]
},
{
text:"Remain calm and organize the team.",
score:["Guardian","Builder"]
},
{
text:"Investigate possible environmental interference.",
score:["Scientist","Explorer"]
},
{
text:"Look for an alternate way to contact headquarters.",
score:["Explorer","Engineer"]
}
]

},

{

title:"Academy Simulation 7 of 12",

mission:"Your team encounters an intelligent alien civilization that has never met humans before. How do you proceed?",

answers:[
{
text:"Observe quietly and learn about their culture first.",
score:["Xenologist","Scientist"]
},
{
text:"Attempt peaceful communication.",
score:["Explorer","Guardian"]
},
{
text:"Document everything for future research.",
score:["Scientist","Astrobiologist"]
},
{
text:"Study their technology from a respectful distance.",
score:["Engineer","Tinkerer"]
}
]

},

{

title:"Academy Simulation 8 of 12",

mission:"A dangerous solar storm is approaching your orbital station. Time is limited. What is your priority?",

answers:[
{
text:"Strengthen critical station systems.",
score:["Engineer","Builder"]
},
{
text:"Ensure every crew member reaches safety.",
score:["Guardian","Explorer"]
},
{
text:"Collect scientific data before the storm arrives.",
score:["Scientist","Mystic"]
},
{
text:"Predict how the storm may affect future missions.",
score:["Mystic","Astrobiologist"]
}
]

},

{

title:"Academy Simulation 9 of 12",

mission:"A mysterious signal is repeating from beneath a frozen lake. What does your team do first?",

answers:[
{
text:"Analyze the signal before approaching.",
score:["Scientist","Engineer"]
},
{
text:"Search for a safe route to the source.",
score:["Explorer","Guardian"]
},
{
text:"Prepare specialized equipment.",
score:["Builder","Tinkerer"]
},
{
text:"Determine whether the signal could be intelligent.",
score:["Xenologist","Mystic"]
}
]

},

{

title:"Academy Simulation 10 of 12",

mission:"Your rover discovers a damaged drone from another expedition. What is your first priority?",

answers:[
{
text:"Repair the drone.",
score:["Engineer","Tinkerer"]
},
{
text:"Recover its stored mission data.",
score:["Scientist","Explorer"]
},
{
text:"Secure the surrounding area.",
score:["Guardian","Builder"]
},
{
text:"Determine who built it.",
score:["Xenologist","Astrobiologist"]
}
]

},

{

title:"Academy Simulation 11 of 12",

mission:"An unstable energy crystal begins overloading inside your laboratory. What do you do?",

answers:[
{
text:"Study its behavior from a safe distance.",
score:["Scientist","Mystic"]
},
{
text:"Build a containment device.",
score:["Engineer","Builder"]
},
{
text:"Evacuate everyone immediately.",
score:["Guardian","Explorer"]
},
{
text:"Search historical records for similar events.",
score:["Xenologist","Astrobiologist"]
}
]

},

{

title:"Academy Simulation 12 of 12",

mission:"You are selected to lead the Bureau's next expedition into completely unknown space. What best describes your leadership style?",

answers:[
{
text:"Lead with careful planning and research.",
score:["Scientist","Engineer"]
},
{
text:"Lead by protecting and encouraging your team.",
score:["Guardian","Builder"]
},
{
text:"Lead by exploring boldly and adapting quickly.",
score:["Explorer","Tinkerer"]
},
{
text:"Lead by embracing the unknown and discovering new possibilities.",
score:["Mystic","Xenologist"]
}
]

}

];

function loadQuestion(){

    const q = questions[currentQuestion];

    questionTitle.textContent = q.title;

    questionMission.textContent = q.mission;

    answerA.textContent = "A. " + q.answers[0].text;
    answerB.textContent = "B. " + q.answers[1].text;
    answerC.textContent = "C. " + q.answers[2].text;
    answerD.textContent = "D. " + q.answers[3].text;

}

// -------------------------
// NEXT QUESTION
// -------------------------

answerA.onclick = () => chooseAnswer(0);
answerB.onclick = () => chooseAnswer(1);
answerC.onclick = () => chooseAnswer(2);
answerD.onclick = () => chooseAnswer(3);

function chooseAnswer(answerIndex){

    const answer = questions[currentQuestion].answers[answerIndex];

    scores[answer.score[0]] += 2;
    scores[answer.score[1]] += 1;

    currentQuestion++;

    if(currentQuestion >= questions.length){

        console.log(scores);

        showResults();

        return;

    }

    loadQuestion();

}
// -------------------------
// RESULTS
// -------------------------

function showResults(){

    let highestScore = -1;
    let bestSpecialty = "";

    for (const specialty in scores){

        if(scores[specialty] > highestScore){

            highestScore = scores[specialty];
            bestSpecialty = specialty;

        }

    }

 assessmentScreen.style.display = "none";

resultsScreen.style.display = "block";

document.getElementById("resultName").textContent = playerName;
document.getElementById("resultSpecies").textContent = playerSpecies;
document.getElementById("resultOrigin").textContent = playerOrigin;

const descriptions = {

Guardian:"You protect your team and remain calm under pressure.",

Builder:"You create solutions, structures, and systems that help everyone succeed.",

Engineer:"You solve technical problems through logic, design, and innovation.",

Scientist:"You rely on observation, experimentation, and careful analysis.",

Explorer:"You seek the unknown and adapt quickly to new environments.",

Mystic:"You recognize patterns and possibilities that others often overlook.",

Xenologist:"You excel at understanding new cultures, species, and civilizations.",

Astrobiologist:"You study alien life and the ecosystems of distant worlds.",

Tinkerer:"You improve, modify, and invent tools to overcome challenges."

};

finalSpecialty.innerHTML =
    bestSpecialty +
    "<br><span style='font-size:24px;font-weight:normal;line-height:1.5;display:block;margin-top:15px;'>" +
    descriptions[bestSpecialty] +
    "</span>";

}