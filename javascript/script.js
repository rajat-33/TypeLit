const setOfWords = ["India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world",
"Japan is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.",
"As of 2021, the United States and China would occupy the first two places in both methods' gdp ranking",
"Having been originated in India, Yoga is largely followed in the West too as it has amazing health benefits. It can work wonders for the body in terms of shape, weight loss, balanced mind and breathing among others.",
"Anulom vilom is a specific type of controlled breathing in the practice of yoga. It involves holding one nostril closed while inhaling, then holding the other nostril closed while exhaling. The process is then reversed and repeated.",
"Your stomach acid is strong enough to dissolve metal.",
"USA based IEEE has proved what has been a century-old suspicion in the world scientific community that the pioneer of Wireless communication was Prof. Jagdeesh Bose and not Marconi. ",
"According to the Gemological Institute of America, up until 1896, India was the only source for diamonds to the world.",
"The Indian Army is the 4th largest standing Army in the world after the US, Russia and China.",
`The Gorkha regiment is one of the oldest regiments of the Indian Army and has impressed leaders worldwide with their combat ability. Adolf Hitler once reportedly said, "If I had Gurkhas, no armies in the world would defeat me."`,
`The Indian army controls the highest battlefield in the world, the Siachen Glacier, which is 5000 metres above sea level.`,
"The number of start-ups in Bangalore rivals those in the global top tech cities, with San Francisco research firm Compass rating it the second fastest-growing start-up ecosystem in the world, after Berlin.",
"API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other."];

const msg = document.getElementById('message');
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const res = document.getElementById('result');
let startTime, endTime;
input.disabled=true;

let i;

wordCounter = (str)=>{
    let count = str.split(" ").length;
    return count;
}


compareWords = (str1, str2)=>{
    let c = 0, i = 0;
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    // for(i=0;i<str1.length;i++)
    // {
    //     if(str1[i] == str2[i])
    //     {
    //         c++;
    //     }
    //     else
    //     {
    //         str2[i] = '_';
    //     }
    // }
    // console.log(str2);
    words1.forEach(function(item, index) {
        if(item == words2[index])
        {
            c++;
        }
    });
    return c;
}

playGame = () =>{
    i=0;
    input.disabled=false;
    input.focus();
    input.value="";
    res.innerText = "";
    let r = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[r];
    let countWords=0, total=setOfWords[r].length;
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = 'Done';
}

endGame = ()=>{
    input.disabled=true;
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime-startTime)/1000;
    let totalInput = input.value;
    console.log(totalInput);
    let wpm, correctP, totalWords;
    if(totalInput == "")
    {
        totalWords = 0;
        wpm = 0;
        correctP = 0;
    }
    else
    {
        totalWords = wordCounter(totalInput);
        wpm = Math.round((totalWords/totalTime)*60);
        let correctWords = compareWords(msg.innerText, totalInput);
        console.log("correct words : "+correctWords);
        let errorP = Math.round(((totalWords-correctWords)/totalWords)*100);
        correctP = Math.round((correctWords/totalWords)*100);
    }
    
    res.innerText = "WPM: "+wpm+" Acurarcy: "+correctP+"%";
    btn.innerText = "Start";
    input.style.backgroundColor="black";
}


btn.addEventListener('click', function(){
    
    if(this.innerText=='Start')
    {
        input.focus();
        playGame();
    }
    else if(this.innerText == "Done")
    {
        endGame();
    }
})

input.addEventListener("keydown", function(event){
    
    let x=event.key;
    console.log(x);
    if(x=="Shift" || x=="CapsLock")
    {
        
    }
    else if(x=="Enter")
    {
        endGame();
    } 
    else if(msg.innerText[i]==x)
    {
        input.style.color="green";
        i++;
    }
    else
    {
        input.style.color="red";
    }
    
    console.log(i);
})


setOfLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const msg2 = document.getElementById('message2');
const input2 = document.getElementById('input2');
const btn2 = document.getElementById('btn2');
const res2 = document.getElementById('result2');
input2.disabled = true;

playGame2 = ()=>{
    res2.innerText = "";
    input2.value = "";
    input2.disabled = false;
    input2.focus();
    btn2.innerText = "Done";
    console.log("im inside the playgame function");
    let rand = Math.floor(Math.random()*26);
    msg2.innerText = setOfLetters[rand]; 
}

endGame2 = () =>{
    btn2.innerText = "Start";
    let l1 = msg2.innerText;
    let l2 = input2.value;
    if(l1 == l2)
    {
        res2.innerText = "Correct!";
        res2.style.color = "green";
    }
    else
    {
        res2.innerText = "Incorrect!";
        res2.style.color = "red";
    }
}

input2.addEventListener('keydown', function(event){
    let x = event.key;
    console.log(x);
    if(x==msg2.innerText[0])
    {
        input2.style.color="green";
        playGame2();
    }
    else
    {
        input2.style.color="red";
        playGame2();
    }
})

btn2.addEventListener('click', function(){
    if(this.innerText == 'Start')
    {
        playGame2();
    }
    else if(this.innerText == "Done")
    {
        endGame2();
    }
})
