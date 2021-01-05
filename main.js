
modifyedDocumet = document.querySelector('.FomrSubmitButton');
letterSpacing = modifyedDocumet.style.letterSpacing;
text = modifyedDocumet.value;

document.querySelector('.FomrSubmitButton').addEventListener("transitionstart", ()=>
{
    modifyedDocumet.style.letterSpacing='-5px';
    
    function makeStripes()
    {
        textStripes="";
        for(i=0;i<50;i++)
        {
            textStripes+= '-';
        }
        return textStripes
    }
    modifyedDocumet.value = makeStripes();
});

modifyedDocumet.addEventListener("transitionend", ()=>
{
    modifyedDocumet.value = text;
    modifyedDocumet.style.letterSpacing=letterSpacing;
});

