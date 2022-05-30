<!DOCTYPE html>
<html lang="en">
<head>
	<title> Calculator </title>
	<meta charset="UTF-8"/>
	<link rel="stylesheet" href="Main.css"/> 
</head>
<body>
	<p id="display"> </p>
	<p id="result"> </p>
	<button class="numBtn" onClick="displayNum(1)"> 1 </button>
	<button onClick="displayNum(2)"> 2 </button>
	<button onClick="displayNum(3)"> 3 </button>
	<button onClick="displayNum(4)"> 4 </button>
	<button class="numBtn" onClick="displayNum(5)"> 5 </button>
	<button class="numBtn" onClick="displayNum(6)"> 6 </button>
	<button class="numBtn" onClick="displayNum(7)"> 7 </button>
	<button class="numBtn" onClick="displayNum(8)"> 8 </button>
	<button class="numBtn" onClick="displayNum(9)"> 9 </button>
	<button class="numBtn" onClick="displayNum(0)"> 0 </button>
	<button onClick='displayNum("+")'> + </button>
	<button onClick='displayNum("-")'> - </button>
	<button class="numBtn" onClick='displayNum("*")'> * </button>
	<button class="numBtn" onClick='displayNum("/")'> / </button> 
	<button onClick='displayResult()'> = </button>
	<button class="numBtn" onClick="clearbox()"> Clear </button> <br> 
	<button class="numBtn" onClick='displayNum("&#8730;")'> √x </button>
	<button class="numBtn" onClick='displayNum("%")'> % </button>
	<button class="numBtn" onClick='displayNum(".")'> . </button>
	<button class="numBtn" onClick='displayNum("1/x")'> 1/x </button>
	<button class="numBtn" onClick='displayNum("(")'> ( </button>
	<button class="numBtn" onClick='displayNum(")")'> ) </button>
	<button class="numBtn" onClick='displayNum("sin")'> sin </button>
	<button class="numBtn" onClick='displayNum("cos")'> cos </button>
	<button class="numBtn" onClick='displayNum("sinh")'> sinh </button>
	<button class="numBtn" onClick='displayNum("cosh")'> cosh </button>
	<button class="numBtn" onClick='displayNum("+/-")'> +/- </button>
	<button class="numBtn" onClick='displayNum("π")'> π </button>
	<button class="numBtn" onClick='displayNum("Rad")'> Rad </button>
	<button class="numBtn" onClick='displayNum("Rand")'> Rand </button>
	<button class="numBtn" onClick='displayNum("x!")'> x! </button>
	</body>
<script>
	function displayNum(x){
		console.log(x);
		document.getElementById("display").innerHTML += x;
	}
	
	function displayResult(){
		//get text
		var text_to_eva = document.getElementById("display").innerHTML;
		//evalute text
		document.getElementById("result").innerHTML = eval(text_to_eva);
	}
	function clearbox() {
            document.getElementById("display").innerHTML = ""

            document.getElementById("result").innerHTML = "" ;
    } 
</script>
</html>  