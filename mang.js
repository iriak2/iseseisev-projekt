let kelleKord = "X";
let voit = 0;
let xid = [];
let oid = [];
let voiduteade = 0;

function vajutus(ruut)
{   //lisa muutuja kellekord vaartus vajutatud kasti
    let id = ruut.id;
    if (document.getElementById(id).textContent.length == 0){
        document.getElementById(id).textContent = kelleKord;

        //kontrolli voitu
        voiduteade = 0;
        if(voit == 0){
            if(kelleKord == "X"){
                xid.push(id);
                kelleKord = "O";
            } else{
                oid.push(id);
                kelleKord = "X";
            }
        } else {
            kasVoitis();
            lopp();
        }
        kasVoitis();
    }
    console.log(xid);
    console.log(voiduteade);
    
}

function kasVoitis(){
    //kontrolli kas saadud vaartustes on voidu kombot
    let a = xid.indexOf("1");
    let b = xid.indexOf("2");
    let c = xid.indexOf("3");
    let d = xid.indexOf("4");
    let e = xid.indexOf("5");
    let f = xid.indexOf("6");
    let g = xid.indexOf("7");
    let h = xid.indexOf("8");
    let j = xid.indexOf("9");

    if(a != -1 && b != -1 && c != -1){//ylemine rida
        voit = 1;
        document.getElementById('1').style.backgroundColor = "blue";
        document.getElementById('2').style.backgroundColor = "blue";
        document.getElementById('3').style.backgroundColor = "blue";
    } else if(d != -1 && e != -1 && f != -1){//kesk rida
        voit = 1;
        document.getElementById('4').style.backgroundColor = "blue";
        document.getElementById('5').style.backgroundColor = "blue";
        document.getElementById('6').style.backgroundColor = "blue";
    } else if(g != -1 && h != -1 && j != -1){//alumine rida
        voit = 1;
        document.getElementById('7').style.backgroundColor = "blue";
        document.getElementById('8').style.backgroundColor = "blue";
        document.getElementById('9').style.backgroundColor = "blue";
    } else if(a != -1 && d != -1 && g != -1){//esimene tulp
        voit = 1;
        document.getElementById('1').style.backgroundColor = "blue";
        document.getElementById('4').style.backgroundColor = "blue";
        document.getElementById('7').style.backgroundColor = "blue";
    } else if(b != -1 && e != -1 && h != -1){//teine tulp
        voit = 1;
        document.getElementById('2').style.backgroundColor = "blue";
        document.getElementById('5').style.backgroundColor = "blue";
        document.getElementById('8').style.backgroundColor = "blue";
    } else if(c != -1 && f != -1 && j != -1){//kolmas tulp
        voit = 1;
        document.getElementById('3').style.backgroundColor = "blue";
        document.getElementById('6').style.backgroundColor = "blue";
        document.getElementById('9').style.backgroundColor = "blue";
    } else if(a != -1 && e != -1 && j != -1){//1.diagonaal
        voit = 1;
        document.getElementById('1').style.backgroundColor = "blue";
        document.getElementById('5').style.backgroundColor = "blue";
        document.getElementById('9').style.backgroundColor = "blue";
    } else if(c != -1 && e != -1 && g != -1){//2.diagonaal
        voit = 1;
        document.getElementById('3').style.backgroundColor = "blue";
        document.getElementById('5').style.backgroundColor = "blue";
        document.getElementById('7').style.backgroundColor = "blue";
    }


    let ao = oid.indexOf("1");
    let bo = oid.indexOf("2");
    let co = oid.indexOf("3");
    let doo = oid.indexOf("4");
    let eo = oid.indexOf("5");
    let fo = oid.indexOf("6");
    let go = oid.indexOf("7");
    let ho = oid.indexOf("8");
    let jo = oid.indexOf("9");

    if(ao != -1 && bo != -1 && co != -1){//ylemine rida
        voit = 2;
        document.getElementById('1').style.backgroundColor = "red";
        document.getElementById('2').style.backgroundColor = "red";
        document.getElementById('3').style.backgroundColor = "red";

    } else if(doo != -1 && eo != -1 && fo != -1){//kesk rida
        voit = 2;
        document.getElementById('4').style.backgroundColor = "red";
        document.getElementById('5').style.backgroundColor = "red";
        document.getElementById('6').style.backgroundColor = "red";

    } else if(go != -1 && ho != -1 && jo != -1){//alumine rida
        voit = 2;
        document.getElementById('7').style.backgroundColor = "red";
        document.getElementById('8').style.backgroundColor = "red";
        document.getElementById('9').style.backgroundColor = "red";

    } else if(ao != -1 && doo != -1 && go != -1){//esimene tulp
        voit = 2;
        document.getElementById('1').style.backgroundColor = "red";
        document.getElementById('4').style.backgroundColor = "red";
        document.getElementById('7').style.backgroundColor = "red";

    } else if(bo != -1 && eo != -1 && ho != -1){//teine tulp
        voit = 2;
        document.getElementById('2').style.backgroundColor = "red";
        document.getElementById('5').style.backgroundColor = "red";
        document.getElementById('8').style.backgroundColor = "red";

    } else if(co != -1 && fo != -1 && jo != -1){//kolmas tulp
        voit = 2;
        document.getElementById('3').style.backgroundColor = "red";
        document.getElementById('6').style.backgroundColor = "red";
        document.getElementById('9').style.backgroundColor = "red";

    } else if(ao != -1 && eo != -1 && jo != -1){//1.diagonaal
        voit = 2;
        document.getElementById('1').style.backgroundColor = "red";
        document.getElementById('5').style.backgroundColor = "red";
        document.getElementById('9').style.backgroundColor = "red";

    } else if(co != -1 && eo != -1 && go != -1){//2.diagonaal
        voit = 2;
        document.getElementById('3').style.backgroundColor = "red";
        document.getElementById('5').style.backgroundColor = "red";
        document.getElementById('7').style.backgroundColor = "red";

    }
    
    //kontrolli kas viik
    if(voit != 1 && voit != 2){
        if(xid.length + oid.length == 9){
            voit = 4;
        }
    }
}
