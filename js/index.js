
var products = [];
if( localStorage.getItem("productStorage") == null)
    {
        products = [];
    }
else
    {
 products = JSON.parse(localStorage.getItem("productStorage"));
        
    }

var categories = ["mobiles" , "smart" , "sports" , "general"];
var inputs = document.getElementsByTagName("input")

var temp = ""
for(var i=0; i <categories.length ; i++)
    {
        temp +="<option value='"+categories[i]+"'>"+categories[i]+"</option>";
    }
document.getElementById("productCategory").innerHTML = temp;



function addProduct()
{

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productImag = document.getElementById("productImage");
    
    console.log(productImag.value)
    
    var product = {name:productName.value ,price:productPrice.value , cat: productCategory.value , image :productImag.value }
  
    products.push(product)
    displayData();
    clearForm();
   
localStorage.setItem("productStorage" ,  JSON.stringify(products));

}


function clearForm()
{
    for(var i=0; i<inputs.length ;i++)
        {
            inputs[i].value = '';
        }
}


function displayData()
{
    var item = document.getElementById("row");

    var cont = "";

    for(var i=0;i<products.length ; i++)
    {        var x=products[i].image.lastIndexOf("\\");
             var path="images"+products[i].image.slice(x);
     console.log(path)

        cont += "<div id='item' class='col-md-4 '><img class='img-fluid w-100' src='"+path+"'><p>"+products[i].name+"</p><p>"+products[i].price+"</p><p>"+products[i].cat+"</p></div>";
        
        console.log(products[i].image);
     
    }


    item.innerHTML  = cont;
    console.log(cont)
}


displayData();


function toggleForm()
{
   var form = document.getElementById("form-container");
   var btnToggle = document.getElementById("btnToggle")    
    if( form.style.display == "none")
        {
            form.style.display = "block"
btnToggle.innerHTML="<i class='fas fa-arrow-alt-circle-up'></i>"    
        }
    else
        {
            form.style.display = "none"
btnToggle.innerHTML="<i class='fas fa-arrow-alt-circle-down'></i>"    
            
            
        }   
}
/*
function deleteProduct(i){
    if(i == products.length-1){
        document.getElementById("tableBody").deleteRow(-1);
   console.log(localStorage.mo3taz.indexOf(products[i]));
    }
          else{ document.getElementById("tableBody").deleteRow(i);
                 console.log(localStorage.mo3taz.index(products));
} 

}

function editProduct(i){
    var editButton = document.getElementById("editBtn");
    editButton.addEventListener("click",function(){
       var table=document.getElementById("tableBody");
        var rows=table.getElementsByTagName("tr");
        var cont="";
        for( var j=0 ;j<rows.length;j++){
            if(i==j){
              cont+=  "<tr><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><button id='editBtn' onclick='saveProduct("+i+")' class='btn btn-info'>save</button><button id='editBtn' onclick='deleteProduct("+i+")' class='btn btn-danger ml-3'>delete</button</td></tr>";
            }
        }
        table.innerHTML=cont;



    })
}*/