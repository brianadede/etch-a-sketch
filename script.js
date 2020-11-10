const gridContainer = document.querySelector('#gridContainer');
const newGrid = document.querySelector('#newGridButton');
const pencilGrid = document.querySelector('#pencilButton');
const coloredGrid = document.querySelector('#colorfulButton');
const resetButton= document.querySelector('#resetButton')

var size= prompt('enter the size of your grid(not exceeding 100): ');
while(isNaN(size) || size>100){size= prompt('enter the size of your grid(not exceeding 100): ');}
    
    

var widthSquare = (1000/size);


function gridSquares(size){
    for (var i = 0; i<size*size; i++){
        const gridSquare = document.createElement('div');
        gridContainer.appendChild(gridSquare);
        gridSquare.id= 'square';
        gridSquare.style.cssText= 'width:'+widthSquare+'px; height:'+widthSquare+'px;'
        pencilGrid.addEventListener('click',()=>{
            gridSquare.addEventListener('mouseover',()=>{
                gridSquare.style.background= 'black';})
        })
        
        coloredGrid.addEventListener('click',()=>{
            gridSquare.addEventListener('mouseover',()=>{
                gridSquare.style.background= randRgb()})
        })
        newGrid.addEventListener('click',()=>{
            gridSquare.style.background = 'white';
        })
        
        
    }
}



function removeSquares(){
    gridContainer.innerHTML='';
    
}

var randRgb = function () {
	var red= Math.floor((Math.random()*255));
	var green= Math.floor((Math.random()*255));
	var blue= Math.floor((Math.random()*255));
  return "rgb(" + red + "," + green + "," + blue + ")";
};

function  containingGrid(){
    gridContainer.style.cssText=' grid-template-columns:repeat('+size+','+ widthSquare+'px) ; grid-template-rows:repeat('+size+','+widthSquare+'px) ;'
    

}

resetButton.addEventListener('click',()=>{
    removeSquares();
    size= prompt('enter the size of your grid(not exceeding 100): ');
    while (isNaN(size) || size>100){size= prompt('enter the size of your grid(not exceeding 100): ');}
    widthSquare = (1000/size);
    containingGrid();
    gridSquares(size);
})


containingGrid();
gridSquares(size);
