const question = document.querySelectorAll(".q-str");
const answer = document.querySelectorAll(".q-ans");
const arrow = document.querySelectorAll(".arrow");

function toggleAnswer(index) {
  const visible = answer[index].classList.contains("display");

  question.forEach((qtn) => {
    qtn.classList.remove("style");
  });

  question[index].classList.add("style");

  answer.forEach((ans) => {
    ans.classList.remove("display");
  });

  answer[index].classList.add("display");

  arrow.forEach((arr) => {
    arr.classList.remove("rotate");
  });

  if (!visible) {
    answer[index].classList.add("display");
    arrow[index].classList.add("rotate");
    question[index].classList.add("style");
  } else {
    answer[index].classList.remove("display");
    arrow[index].classList.remove("rotate");
    question[index].classList.remove("style");
  }
}

question.forEach((qtn, index) => {
  let touchEvent = false;

  const clickHandler = () => {
    if (touchEvent) {
      touchEvent = false;
      question[index].classList.add(".no-hover");
      return;
    }
    toggleAnswer(index);
  };

  const touchHandler = () => {
    TouchEvent = true;
    toggleAnswer(index);
  };

  qtn.addEventListener("click", clickHandler);
  qtn.addEventListener("touchstart", touchHandler);
});
