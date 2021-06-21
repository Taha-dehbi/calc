function msg(){
    var n1=parseInt(document.getElementById('n1').value);
    var n2=parseInt(document.getElementById('n2').value);
    document.getElementById('display').innerText=n1+n2;
}
function msg2(){
    var n1=document.getElementById('n1').value=0;
    var n2=document.getElementById('n2').value=0;
    document.getElementById('display').innerText=0;
}
function msg3(){
    var n1=parseInt(document.getElementById('n1').value);
    var n2=parseInt(document.getElementById('n2').value);
    document.getElementById('display').innerText=n1*n2;
}
function msg4(){
    var n1=parseInt(document.getElementById('n1').value);
    var n2=parseInt(document.getElementById('n2').value);
    document.getElementById('display').innerText=n1/n2;
}