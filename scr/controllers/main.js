function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style= " margin left :0";
}

function getEle(id) {
  return document.getElementById(id)
}

const body = getEle('body');
const header = getEle('header');
const compare = header.offsetTop;


// console.log(body.offsetTop);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {

  var timer = null;
  window.addEventListener('scroll', function () {
    // if (window.scrollY <= 225) {
    //   getEle("header").style.position = 'fixed';
    //   getEle("header").classList.remove('header-fixed')
    //   getEle("header").style.top = "0"
    // }


    if (window.scrollY <= 100) {
      getEle("header").style.position = 'absolute';
      getEle("header").classList.remove('header-fixed')
      getEle("header").style.top = "0";
    }

    if (window.scrollY >= 225) {
      getEle("header").style.position = 'fixed';
      getEle("header").style.top = "-79px";
    }

    if (window.scrollY >= 228) {
      getEle("header").classList.add('header-fixed')
      if (timer != null) {
        this.clearTimeout(timer);
        // timer khác rỗng 

        getEle("header").style.top = "-79px";
      }
      timer = this.setTimeout(function () {
        getEle("header").style.top = "0";
      }, 500)
    }


  })

  // xem để biết thêm
  // console.log('documentElement', document.documentElement.scrollTop);
  // console.log('body', document.body.scrollTop)
}