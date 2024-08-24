let button=document.querySelectorAll(".box");
let restart=document.querySelector("#restart");
let love=document.querySelector(".complete");
let cong=document.querySelector(".cong");
let btn=document.querySelector(".newgame");


let player1="true";

button.forEach((box)=>
    {     box.addEventListener("click",()=>{  
          
        if(player1=="true"){
            box.innerText="X";
            player1="false";
        
        }
        else{   box.innerText="0";
            player1="true";
        
    
        }
    
   box.disabled =true;
   checkwinner();
});
});

let disablebutton=(con)=>{for(let con of button){
    con.disabled=true;
}}
let enablebutton=(con)=>{for(let con of button){
        con.disabled=false;
        con.innerText=("");
    }
}
let restartgame=()=>{  
    player1="true";
    enablebutton();
    unhidebox();
    love.classList.add("hide");

}
let hidebox=()=>{
    for(let me of button){
        me.classList.add("hide");
    }
}
let unhidebox=()=>{
    for(let me of button){
        me.classList.remove("hide");
    }
}



 const showWinner=(winner)=>{
 cong.innerHTML=`congratulations, winner is ${winner}`;
  love.classList.remove("hide");

}

const wincondition=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
let checkwinner=()=>{
for(const prop of wincondition){
    let pos1=button[prop[0]].innerText;
    let pos2=button[prop[1]].innerText;
    let pos3=button[prop[2]].innerText;

    if(pos1!="" && pos2!="" &&pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winer",pos1);
             showWinner(pos1);
             disablebutton();
             hidebox();
        }
    }
}
}
btn.addEventListener("click",restartgame );
restart.addEventListener("click",restartgame );