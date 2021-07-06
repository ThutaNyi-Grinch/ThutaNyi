const toggle = document.querySelector("#toggle");
const header = document.querySelector("#header");
const clicksNav = document.querySelectorAll("#clicksNav a");
const clickBoxImage = document.querySelector("#feactureImage");
const summarys = document.querySelectorAll("#summary");
const overlay = document.querySelector(".overlay");
const faqs = document.querySelectorAll("#faq");
const logIN = document.querySelector("#login");
const email = document.querySelector("#email");
const footer = document.querySelector("#footer");
let lastIndex = 1;
toggle.addEventListener("click", function () {
  header.classList.toggle("open");
  document.body.classList.toggle("no_scroll");
});
clicksNav.forEach((clicks, index) => {
  clicks.addEventListener("click", function () {
    clicksNav.forEach((clicks) => {
      clicks.classList.remove("open");
    });
    let changeIndex = index + 1;
    let currentbg = clickBoxImage.style.backgroundImage;
    clickBoxImage.style.backgroundImage = currentbg.replace(
      lastIndex,
      changeIndex
    );
    // if (index == 2 || index == 1) {
    //   clickBoxImage.style.transform = "scale(1.1)";
    // } else {
    //   clickBoxImage.style.transform = "scale(1)";
    // }
    summarys.forEach((summary) => {
      summary.classList.remove("open");
    });
    summarys[index].classList.add("open");
    this.classList.add("open");
    lastIndex = changeIndex;
  });
});
faqs.forEach((faq) => {
  faq.addEventListener("click", function () {
    if (this.classList.contains("open")) {
      this.classList.remove("open");
    } else {
      faqs.forEach((faq) => {
        faq.classList.remove("open");
      });
      this.classList.add("open");
    }
  });
});
logIN.addEventListener("click", function () {
  let check = email.value;
  if (validateEmail(check)) {
    footer.classList.remove("errorOn");
  } else {
    footer.classList.add("errorOn");
  }
});
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
