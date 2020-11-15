function openNav() {
    document.getElementsByClassName("toggle--left--menu")[0].style.width="250px";
    document.getElementsByClassName("toggle--left--menu")[0].style.marginLeft="-250px";
    document.getElementsByClassName("document--container")[0].style.marginLeft="250px";
    document.getElementsByClassName("closebtn")[0].style.display="block";
}

function closeNav() {
    document.getElementsByClassName("toggle--left--menu")[0].style.width="0";
    document.getElementsByClassName("toggle--left--menu")[0].style.width="0px";
    document.getElementsByClassName("closebtn")[0].style.display="none";
    document.getElementsByClassName("document--container")[0].style.marginLeft="0";
}