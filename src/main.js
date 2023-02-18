const blueCalcBtns = (btnClass) => {
  return document.getElementsByClassName(btnClass);
};

const elById = (id) => {
  return document.getElementById(id);
};




const triangleAreaCalcFun = (e) =>{

  let triangleA = parseFloat(elById("triangleA").value);
  let triangleB = parseFloat(elById("triangleB").value);

 
    if(e.target.name =='triangle'){
      triangleA <= 0 || triangleB <= 0 || isNaN(triangleA) || isNaN(triangleB) ? alert(`String, zero and negetive number are invalid`) : console.log(0.5*triangleA*triangleB)
    }
  
  
}


const rectangleAreaCalcFun = (e) =>{

  let rectangleW = parseFloat(elById("rectangleW").value);
  let rectangleL = parseFloat(elById("rectangleL").value);

 
    if(e.target.name =='rectangle'){
      rectangleW <= 0 || rectangleL <= 0 || isNaN(rectangleW) || isNaN(rectangleL) ? alert(`String, zero and negetive number are invalid`) : console.log(rectangleW*rectangleL)
    }

  

  
  
}





let resultDisplay = elById("AreaofReasultDisplay");

// for calculation of last 4 shape
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

const routerFun = (e) =>{
  areaCalcFun(e)
  triangleAreaCalcFun(e)
  rectangleAreaCalcFun(e)
}
// for calculation of last 4 shape
for (const calcBtn of blueCalcBtns("btn")) {
  calcBtn.addEventListener("click", routerFun);
}


// for blog nevigation
let btnBlog = elById("btn-blog");
btnBlog.addEventListener("click", (e) => {
  location.href = "blog.html";
});
