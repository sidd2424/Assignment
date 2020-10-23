var expression=document.getElementById('inputId').value;
var first_expr;
var operator;
var last_expr;
console.log(expression);

function add1()
{
    expression=expression+"1";
    document.getElementById('inputId').value=expression;
}

function add2()
{
    expression=expression+"2";
    document.getElementById('inputId').value=expression;
}
function add3()
{
    expression=expression+"3";
    document.getElementById('inputId').value=expression;
}
function add4()
{
    expression=expression+"4";
    document.getElementById('inputId').value=expression;
}

function add5()
{
    expression=expression+"5";
    document.getElementById('inputId').value=expression;
}

function add6()
{
    expression=expression+"6";
    document.getElementById('inputId').value=expression;
}

function add7()
{
    expression=expression+"7";
    document.getElementById('inputId').value=expression;
}

function add8()
{
    expression=expression+"8";
    document.getElementById('inputId').value=expression;
}

function add9()
{
    expression=expression+"9";
    document.getElementById('inputId').value=expression;
}

function add0()
{
    expression=expression+"0";
    document.getElementById('inputId').value=expression;
}

function addplus()
{
    first_expr=Number(expression);
    expression="";
    operator="+";
    document.getElementById('inputId').value="";

}

function addminus()
{
    first_expr=Number(expression);
    expression="";
    operator="-";
    document.getElementById('inputId').value="";
}

function addmultiply()
{
    first_expr=Number(expression);
    expression="";
    operator="*";
    document.getElementById('inputId').value="";
}

function adddiv()
{
    first_expr=Number(expression);
    expression="";
    operator="/";
    document.getElementById('inputId').value="";
}

function calculate()
{
    last_expr=Number(document.getElementById('inputId').value);
    if(operator=="+")
    {
        document.getElementById('inputId').value=first_expr+last_expr;
    }
    if(operator=="-")
    {
        document.getElementById('inputId').value=first_expr-last_expr;
    }
    if(operator=="*")
    {
        document.getElementById('inputId').value=first_expr*last_expr;
    }
    if(operator=="/")
    {
        document.getElementById('inputId').value=first_expr/last_expr;
    }
    if(operator=="sqr")
    {
        document.getElementById('inputId').value=Math.pow(first_expr,2);
    }
    
    if(operator=="cube")
    {
        document.getElementById('inputId').value=Math.pow(first_expr,3);
    }
    if(operator=="sqr_root")
    {
        document.getElementById('inputId').value=Math.sqrt(first_expr);
    }    

}

function toggle()
{
    document.getElementById('headingId').innerHTML="<h2>Scientific Calculator</h2>";

    
    var element1=document.createElement("button");
    element1.innerHTML="Sqr";


    var element2=document.createElement("button");
    element2.innerHTML="Cube";
    
    
    var element3=document.createElement("button");
    element3.innerHTML="SqrRoot";
    

    document.body.appendChild(element1);
    document.body.appendChild(element2);
    document.body.appendChild(element3);

    element1.addEventListener("click",()=>{
        first_expr=Number(expression);
        expression="";
        operator="sqr";
    })

    element2.addEventListener("click",()=>{
        first_expr=Number(expression);
        expression="";
        operator="cube";
    })

    element3.addEventListener("click",()=>{
        first_expr=Number(expression);
        expression="";
        operator="sqr_root";
    })
}
