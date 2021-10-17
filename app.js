var score = {
    userScore = 0,
    cpuScore = 0
}

var chooseUser;
var chooseCPU;

var allOption = [
    {
        name =  "Carta",
        image = "https://www.seekpng.com/png/detail/238-2388185_view-full-size-white-paper-scroll-png.png",
        name = "Forbice",

        image = "https://www.pescaloccasione.it/image/cache/data/daiwa/minuteria/daiwa-scissor-forbici-800x800.jpg",
        
        name = "Sasso",
        image = "https://it.toluna.com/dpolls_images/2013/10/15/c0ea799c-bc63-47d7-8313-1c3aa8ecea28_x365.jpg",

    }
];

var poxUserChoise = document.getElementsByClassName("user-choise");

for(var i = 0; i < poxUserChoise.length; i++){
    poxUserChoise[i].addEventListener('click', onUserChoise);
}

function onUserChoise(){
    chooseUser = this.dataset.name;
        generateCPU();
        
        var CPUChoiseImg = "<img src='" + chooseCPU.image + "'/>";
        var CPUChoiseText = "<h3>" + chooseCPU.name + "</h3>";
        document.getElementById("computer-choise").innerHTML = CPUChoiseImg + CPUChoiseText;
        document.getElementById("result").innerHTML = winround();

        document.getElementById("player-score").innerHTML = score.userScore;
        document.getElementById("cpu-score").innerHTML = score.cpuScore;
}
       
       

function generateCPU(){
    chooseCPU = allOption[Math.floor(Math.random() * allOption.length)];
}

generateCPU();

function winround(){
    if (chooseUser == "Sasso"){

        if(chooseCPU.name =="Sasso"){
            
            return "pareggio;"
        }   if (chooseCPU.name =="Carta"){
            score.cpuScore++;
            return "Hai perso";
            }   if (chooseCPU.name =="Forbice"){
                score.userScore++;
                return "Hai Vinto";
                }
    }   if (chooseUser == "Carta"){

            if(chooseCPU.name =="Carta"){
                return "pareggio;"
            }   if (chooseCPU.name =="Forbice"){
                score.cpuScore++;
                return "Hai perso";
                }   if (chooseCPU.name =="Sasso"){
                    score.userScore++;
                    return "Hai Vinto";
                    }
        }   if (chooseUser == "Forice"){

                if(chooseCPU.name =="Forbice"){
                    return "pareggio;"
                }   if (chooseCPU.name =="sasso"){
                    score.cpuScore++;
                    return "Hai perso";
                    }   if (chooseCPU.name =="Carta"){
                        score.userScore++;
                        return "Hai Vinto";
                        }
            }
}

        

        
    