function clock(){

    var hours=document.getElementById("hour");
    var minutes=document.getElementById("min");
    var seconds=document.getElementById("sec");
    var am=document.getElementById("am_pm");

    var time = new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm="AM";
    if (hrs == 0){
        hrs = 12;
    }
    if(hrs>12){
        hrs = hrs - 12;
        am_pm="PM"
    }
    if(hrs<10){
        hrs="0"+hrs;
    }
    if(mins<10){
        mins="0"+mins
    }
    if(secs<10){
        secs="0"+secs
    }
    hours.innerText=hrs;
    minutes.innerText=mins;
    seconds.innerText=secs;
    am.innerText=am_pm;
}
setInterval(clock,1000);

function Makediv(){

    var container=document.createElement('div');
    container.className="grid-item";
    container.id="display-block";


    document.getElementById("grid-container").appendChild(container);

    var invalue = document.getElementById("time111");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("div21").innerHTML="Wake up Time : " + value;


    var invalue = document.getElementById("time222");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("div22").innerHTML="Lunch Time : " + value;

    var invalue = document.getElementById("time333");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("div23").innerHTML="Nap Time : " + value;

    var invalue = document.getElementById("time444");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("div24").innerHTML="night Time : " + value;

}
function clicked() {
    var x= document.getElementById("time111").value;
    var y= document.getElementById("time222").value;
    var z= document.getElementById("time333").value;
    var zz= document.getElementById("time444").value;

    var hour = new Date().getHours();

    if(x == hour){
        document.getElementById("textarea1").innerText="GOOD MORNING!! WAKE UP!!";
        document.getElementById("textarea2").innerText="GRAB SOME HEALTHY BREAKEFAST";
        document.getElementById("textimg").innerText="Good Morning!!!Have A Nice Day!!!";

        document.getElementById("imgarea").style.backgroundImage="url(../morning.svg)";
    }
    if(y == hour){
        document.getElementById("textarea1").innerText="GOOD AFTERNOON !! TAKE SOME SLEEP!!";
        document.getElementById("textarea2").innerText="LETS HAVE SOME LUNCH!!";
        document.getElementById("textimg").innerText="Good Afternoon!!!!!!";
        document.getElementById("imgarea").style.backgroundImage="url(../componebt.jpg)";
    }
    if(z == hour){
        document.getElementById("textarea1").innerText="GOOD EVENING!! ";
        document.getElementById("textarea2").innerHTML="<b>STOP YAWNING,LETS HAVE SOME TEA!! IT'S JUST EVENING!!<b>";
        document.getElementById("textimg").innerText="Good Evening!!!!!!";
        document.getElementById("imgarea").style.backgroundImage="url(../lunch_image.png)";
    }

    if(zz == hour){
        document.getElementById("textarea1").innerText="GOOD NIGHT !!";
        document.getElementById("textarea2").innerText="CLOSE YOUR EYES AND GO TO SLEEP!!";
        document.getElementById("textimg").innerText="Good Night!!! Have A sweet Dreams!!!";
        document.getElementById("imgarea").style.backgroundImage="url(../nightt.svg)";
    }
    Makediv();
}
clicked();



