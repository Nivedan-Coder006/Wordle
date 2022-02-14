// Some important functions

/*

!! Do Not Change !!

*/

var database = ["CRANE","TRAIN","JUMPY","CRANK","QUITE","CLOCK","COLIN","PAINT",

"Abuse",
"Adult",
"Agent",
"Anger",
"Apple",
"Award",
"Basis",
"Beach",
"Block",
"Blood",
"Board",
"Brain",
"Bread",
"Break",
"Brown",
"Buyer",
"Cause",
"Chain",
"Chair",
"Chest",
"Chief",
"Child",
"China",
"Claim",
"Class",
"Clock",
"Coach",
"Coast",
"Court",
"Cover",
"Cream",

"Dance",
"Death",
"Depth",
"Doubt",
"Draft",
"Drama",
"Dream",
"Dress",
"Drink",
"Drive",
"Earth",
"Enemy",
"Entry",
"Error",
"Event",
"Faith",
"Fault",
"Field",
"Fight",
"Final",
"Floor",
"Focus",
"Force",
"Frame",
"Frank",
"Front",
"Fruit",
"Glass",
"Grant",
"Grass",
"Green",
"Group",
"Guide",
"Heart",
"Horse",
"Hotel",
"House",
"Image",
"Index",
"Input",
"Issue",
"Japan",
"Judge",
"Knife",
"Laura",
"Layer",
"Level",
"Lewis",
"Light",
"Limit",
"Lunch",
"Major",
"March",
"Match",
"Metal",
"Model",
"Money",
"Month",
"Motor",
"Mouth",
"Music",
"Night",
"Noise",
"North",
"Novel",
"Nurse",
"Offer",
"Order",
"Other",
"Owner",
"Panel",
"Paper",
"Party",
"Peace",
"Peter",
"Phase",
"Phone",
"Piece",
"Pilot",
"Pitch",
"Place",
"Plane",
"Plant",
"Plate",
"Point",
"Pound",
"Power",
"Press",
"Price",
"Pride",
"Prize",
"Proof",
"Queen",
"Radio",
"Range",
"Ratio",
"Reply",
"Right",
"River",
"Round",
"Route",
"Rugby",
"Scale",
"Scene",
"Scope",
"Score",
"Sense",
"Shape",
"Share"
]

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }


index2 = choose(database)
console.log(index2)
//Main Code


var current = 1;
var word = index2.toUpperCase()
word = word.split("")
console.log(word)

wordDone = 1;
var col1 = document.getElementById("1")
var col2 = document.getElementById("2")
var col3 = document.getElementById("3")
var col4 = document.getElementById("4")
var col5 = document.getElementById("5")
var col6 = document.getElementById("6")
var col7 = document.getElementById("7")
var col8 = document.getElementById("8")
var col9 = document.getElementById("9")
var col10 = document.getElementById("10")
var col11 = document.getElementById("11")
var col12 = document.getElementById("12")
var col13 = document.getElementById("13")
var col14 = document.getElementById("14")
var col15 = document.getElementById("15")
var col16 = document.getElementById("16")
var col17 = document.getElementById("17")
var col18 = document.getElementById("18")
var col19 = document.getElementById("19")
var col20 = document.getElementById("20")
var col21 = document.getElementById("21")
var col22 = document.getElementById("22")
var col23 = document.getElementById("23")
var col24 = document.getElementById("24")
var col25 = document.getElementById("25")

col1.style.backgroundColor = "grey"
col2.style.backgroundColor = "grey"
col3.style.backgroundColor = "grey"
col4.style.backgroundColor = "grey"
col5.style.backgroundColor = "grey"
col6.style.backgroundColor = "grey"
col7.style.backgroundColor = "grey"
col8.style.backgroundColor = "grey"
col9.style.backgroundColor = "grey"
col10.style.backgroundColor = "grey"
col11.style.backgroundColor = "grey"
col12.style.backgroundColor = "grey"
col13.style.backgroundColor = "grey"
col14.style.backgroundColor = "grey"
col15.style.backgroundColor = "grey"
col16.style.backgroundColor = "grey"
col17.style.backgroundColor = "grey"
col18.style.backgroundColor = "grey"
col19.style.backgroundColor = "grey"
col20.style.backgroundColor = "grey"
col21.style.backgroundColor = "grey"
col22.style.backgroundColor = "grey"
col23.style.backgroundColor = "grey"
col24.style.backgroundColor = "grey"
col25.style.backgroundColor = "grey"

col1.textContent = ""
col2.textContent = ""
col3.textContent = ""
col4.textContent = ""
col5.textContent = ""
col6.textContent = ""
col7.textContent = ""
col8.textContent = ""
col9.textContent = ""
col10.textContent = ""
col11.textContent = ""
col12.textContent = ""
col13.textContent = ""
col14.textContent = ""
col15.textContent = ""
col16.textContent = ""
col17.textContent = ""
col18.textContent = ""
col19.textContent = ""
col20.textContent = ""
col21.textContent = ""
col22.textContent = ""
col23.textContent = ""
col24.textContent = ""
col25.textContent = ""



document.getElementById("submit").onclick = function(){
    if(document.getElementById("userInput").value != "" && document.getElementById("userInput").value.length == 1){
    if(current<=5){
        if(current == 1){
            col1.textContent = document.getElementById("userInput").value.toUpperCase()
        }
        if(current == 2){
            col2.textContent = document.getElementById("userInput").value.toUpperCase()
        }        
        if(current == 3){
            col3.textContent = document.getElementById("userInput").value.toUpperCase()
        }
        if(current == 4){
            col4.textContent = document.getElementById("userInput").value.toUpperCase()
        }        
        if(current == 5){
            col5.textContent = document.getElementById("userInput").value.toUpperCase()
        }               
        current +=1
    }
    if(current == 6){
        if(col1.textContent == word[0]){
            col1.style.backgroundColor = "green"
        }
        if(col1.textContent == word[1]){
            col1.style.backgroundColor = "yellow"
        }
        if(col1.textContent == word[2]){
            col1.style.backgroundColor = "yellow"
        }
        if(col1.textContent == word[3]){
            col1.style.backgroundColor = "yellow"
        }
        if(col1.textContent == word[4]){
            col1.style.backgroundColor = "yellow"
        }

        if(col2.textContent == word[0]){
            col2.style.backgroundColor = "yellow"
        }
        if(col2.textContent == word[1]){
            col2.style.backgroundColor = "green"
        }
        if(col2.textContent == word[2]){
            col2.style.backgroundColor = "yellow"
        }
        if(col2.textContent == word[3]){
            col2.style.backgroundColor = "yellow"
        }
        if(col2.textContent == word[4]){
            col2.style.backgroundColor = "yellow"
        }

        if(col3.textContent == word[0]){
            col3.style.backgroundColor = "yellow"
        }
        if(col3.textContent == word[1]){
            col3.style.backgroundColor = "yellow"
        }
        if(col3.textContent == word[2]){
            col3.style.backgroundColor = "green"
        }
        if(col3.textContent == word[3]){
            col3.style.backgroundColor = "yellow"
        }
        if(col3.textContent == word[4]){
            col3.style.backgroundColor = "yellow"
        }

        if(col4.textContent == word[0]){
            col4.style.backgroundColor = "yellow"
        }
        if(col4.textContent == word[1]){
            col4.style.backgroundColor = "yellow"
        }
        if(col4.textContent == word[2]){
            col4.style.backgroundColor = "yellow"
        }
        if(col4.textContent == word[3]){
            col4.style.backgroundColor = "green"
        }
        if(col4.textContent == word[4]){
            col4.style.backgroundColor = "yellow"
        }

        if(col5.textContent == word[0]){
            col5.style.backgroundColor = "yellow"
        }
        if(col5.textContent == word[1]){
            col5.style.backgroundColor = "yellow"
        }
        if(col5.textContent == word[2]){
            col5.style.backgroundColor = "yellow"
        }
        if(col5.textContent == word[3]){
            col5.style.backgroundColor = "yellow"
        }
        if(col5.textContent == word[4]){
            col5.style.backgroundColor = "green"
        }
        
        current = current+1
    }



    if(current>=7 && current<=12){
        if(current == 8){
            col6.textContent = document.getElementById("userInput").value.toUpperCase()
        }
        if(current == 9){
            col7.textContent = document.getElementById("userInput").value.toUpperCase()
        }        
        if(current == 10){
            col8.textContent = document.getElementById("userInput").value.toUpperCase()
        }
        if(current == 11){
            col9.textContent = document.getElementById("userInput").value.toUpperCase()
        }        
        if(current == 12){
            col10.textContent = document.getElementById("userInput").value.toUpperCase()
        }               
        current +=1
    }
    if(current == 13){
        if(col6.textContent == word[0]){
            col6.style.backgroundColor = "green"
        }
        if(col6.textContent == word[1]){
            col6.style.backgroundColor = "yellow"
        }
        if(col6.textContent == word[2]){
            col6.style.backgroundColor = "yellow"
        }
        if(col6.textContent == word[3]){
            col6.style.backgroundColor = "yellow"
        }
        if(col6.textContent == word[4]){
            col6.style.backgroundColor = "yellow"
        }

        if(col7.textContent == word[0]){
            col7.style.backgroundColor = "yellow"
        }
        if(col7.textContent == word[1]){
            col7.style.backgroundColor = "green"
        }
        if(col7.textContent == word[2]){
            col7.style.backgroundColor = "yellow"
        }
        if(col7.textContent == word[3]){
            col7.style.backgroundColor = "yellow"
        }
        if(col7.textContent == word[4]){
            col7.style.backgroundColor = "yellow"
        }

        if(col8.textContent == word[0]){
            col8.style.backgroundColor = "yellow"
        }
        if(col8.textContent == word[1]){
            col8.style.backgroundColor = "yellow"
        }
        if(col8.textContent == word[2]){
            col8.style.backgroundColor = "green"
        }
        if(col8.textContent == word[3]){
            col8.style.backgroundColor = "yellow"
        }
        if(col8.textContent == word[4]){
            col8.style.backgroundColor = "yellow"
        }

        if(col9.textContent == word[0]){
            col9.style.backgroundColor = "yellow"
        }
        if(col9.textContent == word[1]){
            col9.style.backgroundColor = "yellow"
        }
        if(col9.textContent == word[2]){
            col9.style.backgroundColor = "yellow"
        }
        if(col9.textContent == word[3]){
            col9.style.backgroundColor = "green"
        }
        if(col9.textContent == word[4]){
            col9.style.backgroundColor = "yellow"
        }

        if(col10.textContent == word[0]){
            col10.style.backgroundColor = "yellow"
        }
        if(col10.textContent == word[1]){
            col10.style.backgroundColor = "yellow"
        }
        if(col10.textContent == word[2]){
            col10.style.backgroundColor = "yellow"
        }
        if(col10.textContent == word[3]){
            col10.style.backgroundColor = "yellow"
        }
        if(col10.textContent == word[4]){
            col10.style.backgroundColor = "green"
        }
        
        current = current+1
    }



    if(current>=14 && current<=19){
        if(current == 15){
            col11.textContent = document.getElementById("userInput").value.toUpperCase()
        }
        if(current == 16){
            col12.textContent = document.getElementById("userInput").value.toUpperCase()
        }        
        if(current == 17){
            col13.textContent = document.getElementById("userInput").value.toUpperCase()
        }
        if(current == 18){
            col14.textContent = document.getElementById("userInput").value.toUpperCase()
        }        
        if(current == 19){
            col15.textContent = document.getElementById("userInput").value.toUpperCase()
        }               
        current +=1
    }
    if(current == 20){
        if(col11.textContent == word[0]){
            col11.style.backgroundColor = "green"
        }
        if(col11.textContent == word[1]){
            col11.style.backgroundColor = "yellow"
        }
        if(col11.textContent == word[2]){
            col11.style.backgroundColor = "yellow"
        }
        if(col11.textContent == word[3]){
            col11.style.backgroundColor = "yellow"
        }
        if(col11.textContent == word[4]){
            col11.style.backgroundColor = "yellow"
        }

        if(col12.textContent == word[0]){
            col12.style.backgroundColor = "yellow"
        }
        if(col12.textContent == word[1]){
            col12.style.backgroundColor = "green"
        }
        if(col12.textContent == word[2]){
            col12.style.backgroundColor = "yellow"
        }
        if(col12.textContent == word[3]){
            col12.style.backgroundColor = "yellow"
        }
        if(col12.textContent == word[4]){
            col12.style.backgroundColor = "yellow"
        }

        if(col13.textContent == word[0]){
            col13.style.backgroundColor = "yellow"
        }
        if(col13.textContent == word[1]){
            col13.style.backgroundColor = "yellow"
        }
        if(col13.textContent == word[2]){
            col13.style.backgroundColor = "green"
        }
        if(col13.textContent == word[3]){
            col13.style.backgroundColor = "yellow"
        }
        if(col13.textContent == word[4]){
            col13.style.backgroundColor = "yellow"
        }

        if(col14.textContent == word[0]){
            col14.style.backgroundColor = "yellow"
        }
        if(col14.textContent == word[1]){
            col14.style.backgroundColor = "yellow"
        }
        if(col14.textContent == word[2]){
            col14.style.backgroundColor = "yellow"
        }
        if(col14.textContent == word[3]){
            col14.style.backgroundColor = "green"
        }
        if(col14.textContent == word[4]){
            col14.style.backgroundColor = "yellow"
        }

        if(col15.textContent == word[0]){
            col15.style.backgroundColor = "yellow"
        }
        if(col15.textContent == word[1]){
            col15.style.backgroundColor = "yellow"
        }
        if(col15.textContent == word[2]){
            col15.style.backgroundColor = "yellow"
        }
        if(col15.textContent == word[3]){
            col15.style.backgroundColor = "yellow"
        }
        if(col15.textContent == word[4]){
            col15.style.backgroundColor = "green"
        }
        
        current = current+1
    }


    
    if(current>=21 && current<=26){
        if(current == 22){
            col16.textContent = document.getElementById("userInput").value.toUpperCase()
        }
        if(current == 23){
            col17.textContent = document.getElementById("userInput").value.toUpperCase()
        }        
        if(current == 24){
            col18.textContent = document.getElementById("userInput").value.toUpperCase()
        }
        if(current == 25){
            col19.textContent = document.getElementById("userInput").value.toUpperCase()
        }        
        if(current == 26){
            col20.textContent = document.getElementById("userInput").value.toUpperCase()
        }               
        current +=1
    }
    if(current == 27){
        if(col16.textContent == word[0]){
            col16.style.backgroundColor = "green"
        }
        if(col16.textContent == word[1]){
            col16.style.backgroundColor = "yellow"
        }
        if(col16.textContent == word[2]){
            col16.style.backgroundColor = "yellow"
        }
        if(col16.textContent == word[3]){
            col16.style.backgroundColor = "yellow"
        }
        if(col16.textContent == word[4]){
            col16.style.backgroundColor = "yellow"
        }

        if(col17.textContent == word[0]){
            col17.style.backgroundColor = "yellow"
        }
        if(col17.textContent == word[1]){
            col17.style.backgroundColor = "green"
        }
        if(col17.textContent == word[2]){
            col17.style.backgroundColor = "yellow"
        }
        if(col17.textContent == word[3]){
            col17.style.backgroundColor = "yellow"
        }
        if(col17.textContent == word[4]){
            col17.style.backgroundColor = "yellow"
        }

        if(col18.textContent == word[0]){
            col18.style.backgroundColor = "yellow"
        }
        if(col18.textContent == word[1]){
            col18.style.backgroundColor = "yellow"
        }
        if(col18.textContent == word[2]){
            col18.style.backgroundColor = "green"
        }
        if(col18.textContent == word[3]){
            col18.style.backgroundColor = "yellow"
        }
        if(col18.textContent == word[4]){
            col18.style.backgroundColor = "yellow"
        }

        if(col19.textContent == word[0]){
            col19.style.backgroundColor = "yellow"
        }
        if(col19.textContent == word[1]){
            col19.style.backgroundColor = "yellow"
        }
        if(col19.textContent == word[2]){
            col19.style.backgroundColor = "yellow"
        }
        if(col19.textContent == word[3]){
            col19.style.backgroundColor = "green"
        }
        if(col19.textContent == word[4]){
            col19.style.backgroundColor = "yellow"
        }

        if(col20.textContent == word[0]){
            col20.style.backgroundColor = "yellow"
        }
        if(col20.textContent == word[1]){
            col20.style.backgroundColor = "yellow"
        }
        if(col20.textContent == word[2]){
            col20.style.backgroundColor = "yellow"
        }
        if(col20.textContent == word[3]){
            col20.style.backgroundColor = "yellow"
        }
        if(col20.textContent == word[4]){
            col20.style.backgroundColor = "green"
        }
        
        current = current+1
    }

    if(current>=28 && current<=33){
        if(current == 29){
            col21.textContent = document.getElementById("userInput").value.toUpperCase()
        }
        if(current == 30){
            col22.textContent = document.getElementById("userInput").value.toUpperCase()
        }        
        if(current == 31){
            col23.textContent = document.getElementById("userInput").value.toUpperCase()
        }
        if(current == 32){
            col24.textContent = document.getElementById("userInput").value.toUpperCase()
        }        
        if(current == 33){
            col25.textContent = document.getElementById("userInput").value.toUpperCase()
        }               
        current +=1
    }
    if(current == 34){
        if(col21.textContent == word[0]){
            col21.style.backgroundColor = "green"
        }
        if(col21.textContent == word[1]){
            col21.style.backgroundColor = "yellow"
        }
        if(col21.textContent == word[2]){
            col21.style.backgroundColor = "yellow"
        }
        if(col21.textContent == word[3]){
            col21.style.backgroundColor = "yellow"
        }
        if(col21.textContent == word[4]){
            col21.style.backgroundColor = "yellow"
        }

        if(col22.textContent == word[0]){
            col22.style.backgroundColor = "yellow"
        }
        if(col22.textContent == word[1]){
            col22.style.backgroundColor = "green"
        }
        if(col22.textContent == word[2]){
            col22.style.backgroundColor = "yellow"
        }
        if(col22.textContent == word[3]){
            col22.style.backgroundColor = "yellow"
        }
        if(col22.textContent == word[4]){
            col22.style.backgroundColor = "yellow"
        }

        if(col23.textContent == word[0]){
            col23.style.backgroundColor = "yellow"
        }
        if(col23.textContent == word[1]){
            col23.style.backgroundColor = "yellow"
        }
        if(col23.textContent == word[2]){
            col23.style.backgroundColor = "green"
        }
        if(col23.textContent == word[3]){
            col23.style.backgroundColor = "yellow"
        }
        if(col23.textContent == word[4]){
            col23.style.backgroundColor = "yellow"
        }

        if(col24.textContent == word[0]){
            col24.style.backgroundColor = "yellow"
        }
        if(col24.textContent == word[1]){
            col24.style.backgroundColor = "yellow"
        }
        if(col24.textContent == word[2]){
            col24.style.backgroundColor = "yellow"
        }
        if(col24.textContent == word[3]){
            col24.style.backgroundColor = "green"
        }
        if(col24.textContent == word[4]){
            col24.style.backgroundColor = "yellow"
        }

        if(col25.textContent == word[0]){
            col25.style.backgroundColor = "yellow"
        }
        if(col25.textContent == word[1]){
            col25.style.backgroundColor = "yellow"
        }
        if(col25.textContent == word[2]){
            col25.style.backgroundColor = "yellow"
        }
        if(col25.textContent == word[3]){
            col25.style.backgroundColor = "yellow"
        }
        if(col25.textContent == word[4]){
            col25.style.backgroundColor = "green"
        }
        
        current = current+1
    }

    document. getElementById('userInput').value = ""
}else{
    window.alert("**WARNING** Please Enter a Letter and The input field should not be empty!")
}


}

document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }


})
