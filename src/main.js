// re useable function 1
const elsByCls = (cls) => {
  return document.getElementsByClassName(cls);
};
// re useable function 2
const elById = (id) => {
  return document.getElementById(id);
};

let resultDisplay = elById("AreaofReasultDisplay");

//  Area of triangle and rectangle calculation function

const pushToDisplay = (e, param1, param2) => {
  let newLi = document.createElement("li");
  newLi.innerText = `Area of ${e.target.name} = ${0.5 * param1 * param2} cm`;
  resultDisplay.appendChild(newLi);
};
// function for calculation or Triangle Area
const triangleAreaCalcFun = (e) => {
  let triangleA = parseFloat(elById("triangleA").value);
  let triangleB = parseFloat(elById("triangleB").value);

  if (e.target.name == "triangle") {
    triangleA <= 0 || triangleB <= 0 || isNaN(triangleA) || isNaN(triangleB)
      ? alert(`String, zero and negetive number are invalid`)
      : pushToDisplay(e, triangleA, triangleB);
  }
};

// function for calculation or rectangle Area
const rectangleAreaCalcFun = (e) => {
  let rectangleW = parseFloat(elById("rectangleW").value);
  let rectangleL = parseFloat(elById("rectangleL").value);

  if (e.target.name == "rectangle") {
    rectangleW <= 0 || rectangleL <= 0 || isNaN(rectangleW) || isNaN(rectangleL)
      ? alert(`String, zero and negetive number are invalid`)
      : pushToDisplay(e, rectangleW, rectangleL);
  }
};

// function for calculation of last 4 shape
const areaCalcFun = (e) => {
  if (e.target.name == "parallelogram") {
    const parallelogramArea = 10 * 12;
    let newli = document.createElement("li");

    newli.innerText = `Area of parallelogram = ${parallelogramArea} cm`;
    resultDisplay.appendChild(newli);
  } else if (e.target.name == "rhombus") {
    const rhombusArea = 0.5 * 16 * 6;
    let newli = document.createElement("li");
    newli.innerText = `Area of rhombus = ${rhombusArea} cm`;
    resultDisplay.appendChild(newli);
  } else if (e.target.name == "pentagon") {
    const pentagonArea = 0.5 * 6 * 10;

    let newli = document.createElement("li");
    newli.innerText = `Area of pentagon = ${pentagonArea} cm`;
    resultDisplay.appendChild(newli);
  } else if (e.target.name == "ellipse") {
    const ellipseArea = 3.1416 * 10 * 4;

    let newli = document.createElement("li");
    newli.innerText = `Area of ellipse = ${ellipseArea} cm`;
    resultDisplay.appendChild(newli);
  }
};
// for routing clicked event
const routerFun = (e) => {
  areaCalcFun(e);
  triangleAreaCalcFun(e);
  rectangleAreaCalcFun(e);
};

// for calculation  start
for (const calcBtn of elsByCls("btn")) {
  calcBtn.addEventListener("click", routerFun);
}

const randomBgArray = [
  "hover:bg-slate-200",
  "hover:bg-slate-300",
  "hover:bg-slate-600",
  "hover:bg-slate-700",
  "hover:bg-red-200",
  "hover:bg-red-300",
  "hover:bg-red-400",
  "hover:bg-emerald-400",
  "hover:bg-emerald-500",
  "hover:bg-emerald-600",
  "hover:bg-emerald-700",
];

// for card hover

/**
 * Random color is added for each card but it does not 
 * work perfectly. To see rendom bg color of card please
 * Hover on card frequent times.
 */

const randomColorCode = () => {
  return randomBgArray[parseInt(Math.random() * 10)];
};

const mouseHoverFun = (e) => {
  e.target.classList.add(randomColorCode());
};

for (const card of elsByCls("hasib_card")) {
  card.addEventListener("mouseenter", mouseHoverFun);
}


// for blog nevigation
let btnBlog = elById("btn-blog");
btnBlog.addEventListener("click", (e) => {
  location.href = "blog.html";
});
