//first part for text typing

const setOfWords = [`India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world`,
`Japan is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.`,
`As of 2021, the United States and China would occupy the first two places in both methods' gdp ranking`,
`Having been originated in India, Yoga is largely followed in the West too as it has amazing health benefits. It can work wonders for the body in terms of shape, weight loss, balanced mind and breathing among others.`,
`Anulom vilom is a specific type of controlled breathing in the practice of yoga. It involves holding one nostril closed while inhaling, then holding the other nostril closed while exhaling. The process is then reversed and repeated.`,
`Your stomach acid is strong enough to dissolve metal.`,
`USA based IEEE has proved what has been a century-old suspicion in the world scientific community that the pioneer of Wireless communication was Prof. Jagdeesh Bose and not Marconi.`,
`According to the Gemological Institute of America, up until 1896, India was the only source for diamonds to the world.`,
`The Indian Army is the 4th largest standing Army in the world after the US, Russia and China.`,
`The Gorkha regiment is one of the oldest regiments of the Indian Army and has impressed leaders worldwide with their combat ability. Adolf Hitler once reportedly said, "If I had Gurkhas, no armies in the world would defeat me."`,
`The Indian army controls the highest battlefield in the world, the Siachen Glacier, which is 5000 metres above sea level.`,
`The number of start-ups in Bangalore rivals those in the global top tech cities, with San Francisco research firm Compass rating it the second fastest-growing start-up ecosystem in the world, after Berlin.`,
`API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.`,
`Indian cuisine consists of a variety of regional and traditional cuisines native to the Indian subcontinent. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.`, 
`It has been 50 years since the Indo-Pak war of 1971, but the memories of the events remain etched in the hearts of the war heroes who fought for the liberation of Bangladesh. Pakistan was defeated and forced to publicly surrender to India, the largest military surrender since the second World War`];

const msg = document.getElementById('message');
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const res = document.getElementById('result');
let startTime, endTime;
input.disabled=true;

let i;

let keyMap = new Map();

    keyMap.set("`", "key-1");
    keyMap.set("1","key-2");
    keyMap.set("2","key-3");
    keyMap.set("3","key-4");
    keyMap.set("4","key-5");
    keyMap.set("5","key-6");
    keyMap.set("6","key-7");
    keyMap.set("7","key-8");
    keyMap.set("8","key-9");
    keyMap.set("9","key-10");
    keyMap.set("0","key-11");
    keyMap.set("-","key-12");
    keyMap.set("=","key-13");
    keyMap.set("Backspace","key-14");
    keyMap.set("Tab","key1");
    keyMap.set("Q","key2");
    keyMap.set("W","key3");
    keyMap.set("E","key4");
    keyMap.set("R","key5");
    keyMap.set("T","key6");
    keyMap.set("Y","key7");
    keyMap.set("U","key8");
    keyMap.set("I","key9");
    keyMap.set("O","key10");
    keyMap.set("P","key11");
    keyMap.set("q","key2");
    keyMap.set("w","key3");
    keyMap.set("e","key4");
    keyMap.set("r","key5");
    keyMap.set("t","key6");
    keyMap.set("y","key7");
    keyMap.set("u","key8");
    keyMap.set("i","key9");
    keyMap.set("o","key10");
    keyMap.set("p","key11");
    keyMap.set("[","key12");
    keyMap.set("]","key13");
    keyMap.set("\"","key14");               //problem
    keyMap.set("CapsLock", "key15");
    keyMap.set("A","key16");
    keyMap.set("S","key17");
    keyMap.set("D","key18");
    keyMap.set("F","key19");
    keyMap.set("G","key20");
    keyMap.set("H","key21");
    keyMap.set("J","key22");
    keyMap.set("K","key23");
    keyMap.set("L","key24");
    keyMap.set("a","key16");
    keyMap.set("s","key17");
    keyMap.set("d","key18");
    keyMap.set("f","key19");
    keyMap.set("g","key20");
    keyMap.set("h","key21");
    keyMap.set("j","key22");
    keyMap.set("k","key23");
    keyMap.set("l","key24");
    keyMap.set(";","key25");
    keyMap.set("'","key26");
    keyMap.set("Enter", "key27");
    keyMap.set("Shift","key28");
    keyMap.set("Z","key29");
    keyMap.set("X","key30");
    keyMap.set("C","key31");
    keyMap.set("V","key32");
    keyMap.set("B","key33");
    keyMap.set("N","key34");
    keyMap.set("M","key35");
    keyMap.set("z","key29");
    keyMap.set("x","key30");
    keyMap.set("c","key31");
    keyMap.set("v","key32");
    keyMap.set("b","key33");
    keyMap.set("n","key34");
    keyMap.set("m","key35");
    keyMap.set(",","key36");
    keyMap.set(".","key37");
    keyMap.set("/","key38");
    keyMap.set("Shift","key39");
    keyMap.set(" ","key40");


wordCounter = (str)=>{
    let count = str.split(" ").length;
    return count;
}


compareWords = (str1, str2)=>{
    let c = 0, i = 0;
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
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
    document.getElementById('pressEnterMessage1').innerText="Or press Enter";
    input.disabled=false;
    input.focus();              //get the i/o focus on input2
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
    // console.log(totalInput);
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
        // console.log("correct words : "+correctWords);
        let errorP = Math.round(((totalWords-correctWords)/totalWords)*100);
        correctP = Math.round((correctWords/totalWords)*100);
    }
    
    res.innerText = "WPM: "+wpm+" Accuracy: "+correctP+"%";
    btn.innerText = "Start";
    input.style.backgroundColor="black";
    document.getElementById('pressEnterMessage1').innerText="";
    document.getElementById(keyMap.get(prevKey)).style.backgroundColor="black"; //reset the last key pressed
}


btn.addEventListener('click', function(){
    
    if(this.innerText=='Start')
    {
        //get focus
        input.focus();
        playGame();
    }
    else if(this.innerText == "Done")
    {
        endGame();
    }
})

 function glowKeys(x, prev){
    if(keyMap.has(prev) && prev!="-1")
    {
        document.getElementById(keyMap.get(prev)).style.backgroundColor = "black";
        document.getElementById(keyMap.get(prev)).style.boxShadow = "4px 4px 4px 1px black";
    }
    if(keyMap.has(x))
    {
        document.getElementById(keyMap.get(x)).style.backgroundColor = "blue";
        document.getElementById(keyMap.get(x)).style.boxShadow = "2px 2px 2px 1px black";
    }
}

let prevKey="-1";
input.addEventListener("keydown", function(event){
    
    let x=event.key;
    glowKeys(x, prevKey);
    // console.log("We are looking for"+msg.innerText[i]+" -> "+x);
    
    prevKey=x; //ref to change the prev key color back to black
    if(x=="Shift" || x=="CapsLock" || x=="ArrowLeft" || x=="ArrowRight" || x=='Tab')
    {
        
    }
    else if(x=="Enter")
    {
        endGame();
    }
    else if(x=="Backspace")
    {
        if(i>0)
        {
            i--;
        }
    }
    else if(msg.innerText[i]==x)
    {
        input.style.textShadow="0 0 0 green";
        i++;                        //if correct then only consider the next letters
    }
    else
    {
        input.style.textShadow="0 0 0 red";
        i++;
    }
})

//Second part for the letter typing

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
    input2.focus();          //get the i/o focus on input2
    btn2.innerText = "Done";
    let rand = Math.floor(Math.random()*26);
    msg2.innerText = setOfLetters[rand]; 
}

endGame2 = () =>{
    let acc = 0;
    if(correctLetters != 0)
    {
        acc=(correctLetters/totalLetters)*100;
    }
    correctLetters=0;
    totalLetters=0;
    res2.innerText="Accuracy: "+acc+"%";
    btn2.innerText = "Start";
    input2.value="";
    msg2.innerText="";
}

let prevKey2=-1, totalLetters=0, correctLetters=0;
input2.addEventListener('keydown', function(event){
    let x = event.key;

    glowKeys(x, prevKey2);
    if(x == 'Enter')
    {
        endGame2();
    }
    else if(x==msg2.innerText[0])
    {
        input2.style.textShadow="0 0 0 green";
        totalLetters++;
        correctLetters++;
        playGame2();
    }
    else
    {
        input2.style.textShadow="0 0 0 red";
        totalLetters++;
        playGame2();
    }
    prevKey2=x;
})

btn2.addEventListener('click', function(){

    //reset the last key pressed in the prev iteration to initial appearence
    if(prevKey2!="-1") 
    {
        document.getElementById(keyMap.get(prevKey2)).style.backgroundColor= "black";
    }

    if(this.innerText == 'Start')
    {
        playGame2();
    }
    else if(this.innerText == "Done")
    {
        endGame2();
    }
})
