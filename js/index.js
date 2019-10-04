
function addItem(){

$("button").on('click',function(event){
        event.preventDefault();
        //console.log("Clicked ! ");
        let item = $("#item").val(); //checa el valor del input 
        
        if (item != "") { //agrega el elemento a la lista y dos botones
        $("ul").append(`<div class = "divlist">   
        <li> ${item} </li>
        <button class = "check" type ="button" id ="checkb" > CHECK </button>
        <button class = "delete" type = "button" id = "deleteb"> DELETE </button> 
        </div>`); //si se quiere agregar variables es con `` en vez de ""
        }

});

$("ul").on('click', ".check",function(event){ //se crea un event delegate ya que el "check" aun no estaba "creado"
    event.preventDefault();
   console.log("dentro del check");
   $(this).parent().css('text-decoration', 'line-through');
});

$("ul").on('click', ".delete", function(event){
    event.preventDefault();
    console.log("dentro del delete");
    $(this).parent().remove();
})
 

}

addItem();