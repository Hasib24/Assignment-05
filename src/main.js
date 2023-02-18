const calcBtns = (btnClass) => {
  return document.getElementsByClassName(btnClass);
};

const elById = (id) => {
  return document.getElementById(id);
};
let btnBlog = elById("btn-blog");
  btnBlog.addEventListener('click', (e)=>{
    location.href = "blog.html"
  })
let resultDisplay = elById("AreaofReasultDisplay");

const areaCalcFun = (e) => {
  if (e.target.name == "parallelogram") {
    const parallelogramArea = 10 * 12;
    let newli = document.createElement("li");
    newli.innerText = `parallelogram ${parallelogramArea} cm sqr`;
    resultDisplay.appendChild(newli);
    
  } else if (e.target.name == "rhombus") {
    const rhombusArea = 0.5 * 16 * 6;
    let newli = document.createElement("li");
    newli.innerText = `Area of Rhombus ${rhombusArea} cm sqr`;
    resultDisplay.appendChild(newli);

    
  } else if (e.target.name == "pentagon") {
    const pentagonArea = 0.5 * 6 * 10;
    console.log(`pentagon area ${pentagonArea} ok`);
  } else if (e.target.name == "ellipse") {
    const ellipseArea = 3.1416 * 10 * 4;
    console.log(`ellipse area ${ellipseArea} ok`);
  }
};

for (const calcBtn of calcBtns("btn")) {
  calcBtn.addEventListener("click", areaCalcFun);
}

const areaParallogram = () => {
  console.log(`para area calculated`);
};
