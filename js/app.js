//var r=3;
//var s=r*r*Math.PI;
//console.log(s);

//var tarix = new Date();
//var h = tarix.getHours();

//function Show(){
//   if (h<12) {
//       alert("Sabahınız xeyir")
//        
//   }else{
//       alert("Axşamınız xeyir")
//        document.body.style.backgroundColor='black';
//    }
//}

function Mode(){
     var body=document.body;
    //document.getElementById("mode").style.backgroundColor='black';
    if (body.style.backgroundColor==='black') {
        body.style.backgroundColor='white'
        body.style.color='black'
    }else{
        body.style.backgroundColor='black'
        body.style.color='white'
    }
   

}


