//what we do
$(document).ready(function() {
  $("#design").hover(function() {
    $("#des").show();
    $("#design").hide();
    $(".de").hide();
    
  });
  $("#des").mouseleave(function() {
    $("#design").show();
    $("#des").hide();
    $(".de").show();
      
  }); 
});
$(document).ready(function() {
  $("#dev").hover(function() {
    $("#deve").show();
    $("#dev").hide();
    $(".de").hide();
  });
  $("#deve").mouseleave(function() {
    $("#dev").show();
    $("#deve").hide();
    $(".de").show();  
  }); 
});
$(document).ready(function() {
  $("#producti").hover(function() {
    $("#product").show();
    $("#producti").hide();
    $(".de").hide();
  });
  $("#product").mouseleave(function() {
    $("#producti").show();
    $("#product").hide();
    $(".de").show();
      
  }); 
});
//portfolio
$(document).ready(function(){
  $(".work1").hover(function(){
    $("#port1").show();
  });
  $(".work1").mouseleave(function(){
    $("#port1").hide();
  })
});
$(document).ready(function(){
  $(".work2").hover(function(){
    $("#port2").show();
  });
  $(".work2").mouseleave(function(){
    $("#port2").hide();
  });
});
$(document).ready(function(){
  $(".work3").hover(function(){
    $("#port3").show();
  });
  $(".work3").mouseleave(function(){
    $("#port3").hide();
  });
});
$(document).ready(function(){
  $(".work4").hover(function(){
    $("#port4").show();
  });
  $(".work4").mouseleave(function(){
    $("#port4").hide();
  });
});
$(document).ready(function(){
  $(".work5").hover(function(){
    $("#port5").show();
  });
  $(".work5").mouseleave(function(){
    $("#port5").hide();
  });
});
$(document).ready(function(){
  $(".work6").hover(function(){
    $("#port6").show();
  });
  $(".work6").mouseleave(function(){
    $("#port6").hide();
  });
});
$(document).ready(function(){
  $(".work7").hover(function(){
    $("#port7").show();
  });
  $(".work7").mouseleave(function(){
    $("#port7").hide();
  });
});
$(document).ready(function(){
  $(".work8").hover(function(){
    $("#port8").show();
  });
  $(".work8").mouseleave(function(){
    $("#port8").hide();
  });
});

// getting the name from form
$(document).ready(function() {
  $("#submit").click (function(event) {
    console.log("working")
    event.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var text=document.getElementById("text").value;
    // form validation
    if (name == ""){
      alert("Please enter your name");
      return false;
    }else if(email == ""){
      alert("Please enter your email")
      return false;
    }else if(text == ""){
      alert("Please give a feedback")
      return false;
    }else {
      alert(name + " your message is received. Thank you");
    }
    document.getElementById("form1").reset();
  });
});