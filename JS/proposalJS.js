const maxHeaderFont1000 = 4
const minHeaderFont1000 = 1.5
const maxHeaderFontLess600 = 5
const minHeaderFontLess600 = 2.5
const maxMidDivFontSize1000 = 2.4
const minMidDivFontSize1000 = 1.0
const maxMidDivFontSizeLess600 = 4
const minMidDivFontLess600 = 2.5


function changeFont(){

    if (window.screen.width > 600){
        var header = maxHeaderFont1000;
        var currFont = document.getElementById("sliderInput").value;

        header = parseFloat((currFont/100)*header)
        if (header < minHeaderFont1000){
            header = minHeaderFont1000
        }
        if (header > maxHeaderFont1000){
            header = maxHeaderFont1000
        }

        document.getElementById("headerPage").style.fontSize = header + "vw";
        document.getElementById("outputFont").innerHTML = "Font Size - " + currFont;

        var midDiv = maxMidDivFontSize1000;
        
        midDiv = parseFloat((currFont/100)*midDiv);
        if(midDiv < minMidDivFontSize1000){
            midDiv = minMidDivFontSize1000
        }
        if(midDiv > maxMidDivFontSize1000){
            midDiv = maxMidDivFontSize1000
        }

        document.getElementsByClassName("midsection")[0].style.fontSize = midDiv + "vw";
       // document.getElementsByClassName("midsection")[1].style.fontSize = midDiv + "vw";
        document.getElementById("footerbox1").style.fontSize = midDiv + "vw";
        document.getElementById("footerbox2").style.fontSize = midDiv + "vw";
        document.getElementById("footerbox3").style.fontSize = midDiv + "vw";
       

    }else{
        var header = maxHeaderFontLess600
        var currFont = document.getElementById("sliderInput").value;

        header = parseFloat((currFont/100)*header)
        if (header < minHeaderFontLess600){
            header = minHeaderFontLess600
        }

        document.getElementById("headerPage").style.fontSize = header + "vw";
        document.getElementById("outputFont").innerHTML = "Font Size - " + currFont;

        var midDiv = maxMidDivFontSizeLess600;
        
        midDiv = parseFloat((currFont/100)*midDiv);
        if(midDiv < minMidDivFontLess600){
            midDiv = minMidDivFontLess600
        }

        document.getElementsByClassName("midsection")[0].style.fontSize = midDiv + "vw";
       // document.getElementsByClassName("midsection")[1].style.fontSize = midDiv + "vw";
        document.getElementById("footerbox1").style.fontSize = midDiv + "vw";
        document.getElementById("footerbox2").style.fontSize = midDiv + "vw";
        document.getElementById("footerbox3").style.fontSize = midDiv + "vw";
    }

}

function checkScreenSize(){
    // when screen width goes below 600 pixels 
    // Call changeFont function
    if (window.screen.width <= 600)
        changeFont();

    if (window.screen.width >= 1000)
        changeFont();
}