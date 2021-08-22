window.onscroll = () => {
    if (window.pageYOffset > 120) {
        document.getElementById('nav-container').style.width = '100%';
        document.getElementById('nav-container').style.position = 'fixed';
        document.getElementById('nav-container').style.top = '0px';
        document.getElementById('nav-container').style.left = '0px';
        document.getElementById('nav-container').style.backgroundColor = '#fff';
        document.getElementById('nav-links').style.color = '#000';
        document.getElementById('first-nav-link').style.color = '#0473db';
    } else {
        document.getElementById('nav-container').style.width = 'auto';
        document.getElementById('nav-container').style.position = 'static';
        document.getElementById('nav-container').style.backgroundColor =
            'transparent';
        document.getElementById('navbar').style.width = '100%';
        document.getElementById('navbar').style.maxWidth = 'auto';
        document.getElementById('nav-links').style.color = '#fff';
        document.getElementById('first-nav-link').style.color = '#f8ea49';
    }

    if (window.pageYOffset > 775) {
        document.getElementById('nav-container').style.boxShadow =
            '0px 1px 2px #d5d5d5';
    } else {
        document.getElementById('nav-container').style.boxShadow = 'none';
    }

    if (window.pageYOffset > 520) {
        document.getElementById('btt').style.transform = 'translateY(0vh)';
    } else {
        document.getElementById('btt').style.transform = 'translateY(15vh)';
    }
};
let scrollValue;

function scrollToTop() {
    window.scrollTo(0, scrollValue);

    if (scrollValue > 0) {
        scrollValue -= 50;
    } else {
        cancelAnimationFrame(anim);
    }

    let anim = requestAnimationFrame(scrollToTop);
}

document.getElementById('btt').addEventListener('click', function () {
    scrollValue = window.pageYOffset;
    scrollToTop();
});

 let mobNavStatus = false;

document.getElementById('menu-lines').addEventListener('click', function () {
    console.log("mob-nav");
    if (!mobNavStatus) {

        document.getElementById("line-2").style.opacity="0";
        document.getElementById("line-1").style.transform="rotateZ(45deg) translateX(6px) translateY(10px)"
        document.getElementById("line-3").style.transform="rotateZ(-45deg) translateX(6px) translateY(-10px)"
        document.getElementById('mob-nav').style.marginLeft = "0px";
        mobNavStatus = true;
    } else {


        document.getElementById("line-2").style.opacity="1";
        document.getElementById("line-1").style.transform="none"
        document.getElementById("line-3").style.transform="none"
        

        document.getElementById('mob-nav').style.marginLeft = "-270px";

        mobNavStatus = false;
    }
});

