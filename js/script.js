
		document.getElementById("close").onclick = function(){
			document.getElementById("myModal").style.display = "none";
		}
		
			
				//Show the clicked topic
				var add = document.querySelector(".addition");
				var minus = document.querySelector(".subtraction");
				var multiply = document.querySelector(".multiplication");
				var divide = document.querySelector(".division");
				var mod = document.querySelector(".modulus");
				var allTopics = document.querySelector(".sol");
				var holder = document.querySelector(".flex");


					
					/*
						 When the user clicks on the play button, generate a random question.
					*/
					
			function generateRandom(){
						var play = document.getElementById("play").style.display = "none";
						var randomGame = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
						holder.style.display = "flex";
						
						//Modal box
						function home(){
							document.getElementById("myModal").style.display = "block";
						}
						

								document.getElementById("again").onclick = function(){
									document.querySelector(".question").innerHTML = 0;
									document.querySelector(".score").innerHTML = 0;
									document.querySelector(".game-over").style.display = "none";
									return generateRandom();
								}

								
								//If the user wants to go to the game home page
								document.getElementById("goHome").onclick = function(){
									add.style.display = "none";
									minus.style.display = "none";
									multiply.style.display = "none";
									divide.style.display = "none";
									mod.style.display = "none";
									holder.style.display = "none";
									var play = document.getElementById("play");
									play.style.display = "inline";
									document.querySelector(".score").innerHTML = 0;
									document.querySelector(".question").innerHTML = 0;
									document.getElementById("myModal").style.display = "none";
								}

								document.getElementById("addHome").onclick = function(){
									return home();
								}
								document.getElementById("subHome").onclick = function(){
									return home();
								}
								document.getElementById("mulHome").onclick = function(){
									return home();
								}
								document.getElementById("divHome").onclick = function(){
									return home();
								}
								document.getElementById("modHome").onclick = function(){
									return home();
								}
								document.getElementById("overHome").onclick = function(){
									document.querySelector(".game-over").style.display = "none";
									add.style.display = "none";
									minus.style.display = "none";
									multiply.style.display = "none";
									divide.style.display = "none";
									mod.style.display = "none";
									holder.style.display = "none";
									var play = document.getElementById("play");
									play.style.display = "inline";
									document.querySelector(".score").innerHTML = 0;
									document.querySelector(".question").innerHTML = 0;
									document.getElementById("myModal").style.display = "none";
								}

							document.getElementById("continue").onclick = function(){
									var score = document.querySelector(".score").innerHTML;
								if (score == 0){
									document.querySelector(".rating").innerHTML = "Poor";
								} else if (score <= 3){
									document.querySelector(".rating").innerHTML = "Not bad";
								} else if (score <= 5){
									document.querySelector(".rating").innerHTML = "Average";
								} else if (score <= 7){
									document.querySelector(".rating").innerHTML = "Good";
								} else if (score <= 10){
									document.querySelector(".rating").innerHTML = "Very good";
								} else if (score <= 14){
									document.querySelector(".rating").innerHTML = "Excellent";
								} else {
									document.querySelector(".rating").innerHTML = "Genius";
								}
								
								document.querySelector(".final-score").innerHTML = score + "0";
								document.getElementById("showResult").style.display = "none";
								return generateRandom();
						}
								

						if (randomGame == 1){

							//Show addition
							function next(){
							var addnum1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
							var addnum2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

							document.getElementById('addEquation').value = addnum1 +' + '+ addnum2;
							document.getElementById('addAns').value = '';

							if(document.querySelector(".question").innerHTML < 15){
									document.querySelector(".question").innerHTML ++;
								}else{
									document.querySelector(".game-over").style.display = "block";
									document.querySelector(".addition").style.display = "none";
									holder.style.display = "none";
								}

							//If the enter key is clicked, check answer and give feedback
							document.getElementById("addAns").addEventListener("keyup", function (event){
								if (event.keyCode === 13) {
								document.getElementById("add").click();
								}
							});

							//If the submit button is clicked, check answer and give feedback
						 	var addNum = document.getElementById("add");
							addNum.onclick =  function(){
							
							var sum = addnum1 + addnum2;
							var answer = document.getElementById('addAns').value;
							var result = document.getElementById("showResult").style.display = "block";

							if(answer != sum){
								document.querySelector(".result").innerHTML = "Incorrect, better luck next time. The correct answer is " + sum + ". Click continue to proceed";
							} else{
								var score = document.querySelector(".score").innerHTML ++;
								document.querySelector(".result").innerHTML = "Correct. Click continue to proceed";
							}
									
	
								}
					}


					add.style.display = "block";
					minus.style.display = "none";
					multiply.style.display = "none";
					divide.style.display = "none";
					mod.style.display = "none";
					return next();
					
					} else if (randomGame == 2) {
							
						function next(){
						var subnum1 = Math.floor(Math.random() * (100 - 1 + 1)) + 2;
						var subnum2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;


						document.getElementById('subEquation').value = subnum1 +' - '+ subnum2;
						document.getElementById('subAns').value = '';

						if(document.querySelector(".question").innerHTML < 15){
									document.querySelector(".question").innerHTML ++;
								}else{
									document.querySelector(".game-over").style.display = "block";
									document.querySelector(".subtraction").style.display = "none";
									holder.style.display = "none";
								}

							//If the enter key is clicked, check answer and give feedback
							document.getElementById("subAns").addEventListener("keyup", function (event){
								if (event.keyCode === 13) {
								document.getElementById("sub").click();
								}
							});

						//If the add button is clicked, check answer and give feedback
						document.getElementById("sub").onclick =  function(){
							var sum = subnum1 - subnum2;
							var answer = document.getElementById('subAns').value;
							var result = document.getElementById("showResult").style.display = "block";

							if(answer != sum){
								document.querySelector(".result").innerHTML = "Incorrect, better luck next time. The correct answer is " + sum + ". Click continue to proceed";
							} else{
								var score = document.querySelector(".score").innerHTML ++;
								document.querySelector(".result").innerHTML = "Correct. Click continue to proceed";
							}
						}
				}
					add.style.display = "none";
					minus.style.display = "block";
					multiply.style.display = "none";
					divide.style.display = "none";
					mod.style.display = "none";
					return next();

				} else if (randomGame == 3){

					function next(){
						var mulnum1 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
						var mulnum2 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;


						document.getElementById('mulEquation').value = mulnum1 +' x '+ mulnum2;
						document.getElementById('mulAns').value = '';

						if(document.querySelector(".question").innerHTML < 15){
									document.querySelector(".question").innerHTML ++;
								}else{
									document.querySelector(".game-over").style.display = "block";
									document.querySelector(".multiplication").style.display = "none";
									holder.style.display = "none";
							}

							//If the enter key is clicked, check answer and give feedback
							document.getElementById("mulAns").addEventListener("keyup", function (event){
								if (event.keyCode === 13) {
								document.getElementById("mul").click();
								}
							});

						//If the add button is clicked, check answer and give feedback
						document.getElementById("mul").onclick =  function(){
							var sum = mulnum1 * mulnum2;
							var answer = document.getElementById('mulAns').value;
							var result = document.getElementById("showResult").style.display = "block";
							
							if(answer != sum){
								document.querySelector(".result").innerHTML = "Incorrect, better luck next time. The correct answer is " + sum + ". Click continue to proceed";
							} else{
								var score = document.querySelector(".score").innerHTML ++;
								document.querySelector(".result").innerHTML = "Correct. Click continue to proceed";
							}
						}
				}

					add.style.display = "none";
					minus.style.display = "none";
					multiply.style.display = "block";
					divide.style.display = "none";
					mod.style.display = "none";
					return next();	

				} else {

					function next(){
						var modnum1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
						var modnum2 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;


						document.getElementById('modEquation').value = modnum1 +' % '+ modnum2;
						document.getElementById('modAns').value = '';

						if(document.querySelector(".question").innerHTML < 15){
									document.querySelector(".question").innerHTML ++;
								}else{
									document.querySelector(".game-over").style.display = "block";
									document.querySelector(".modulus").style.display = "none";
									holder.style.display = "none";
						}

						//If the enter key is clicked, check answer and give feedback
						document.getElementById("modAns").addEventListener("keyup", function (event){
								if (event.keyCode === 13) {
								document.getElementById("mod").click();
								}
						});

						//If the add button is clicked, check answer and give feedback
						document.getElementById("mod").onclick =  function(){
							var sum = modnum1 % modnum2;
							var answer = document.getElementById('modAns').value;
							var result = document.getElementById("showResult").style.display = "block";
							
							if(answer != sum){
								document.querySelector(".result").innerHTML = "Incorrect, better luck next time. The correct answer is " + sum + ". Click continue to proceed";
							} else{
								var score = document.querySelector(".score").innerHTML ++;
								document.querySelector(".result").innerHTML = "Correct. Click continue to proceed";
							}
						}
				}

					add.style.display = "none";
					minus.style.display = "none";
					multiply.style.display = "none";
					divide.style.display = "none";
					mod.style.display = "block";
					return next();

			}
		}
			



			/* division

			function next(){
						var divnum1 = Math.floor(Math.random() * (50 - 25 + 1)) + 1;
						var divnum2 = Math.floor(Math.random() * (25 - 1 + 1)) + 1;


						document.getElementById('divideEquation').value = divnum1 +' / '+ divnum2;
						document.getElementById('divideAns').value = '';

						if(document.querySelector(".question").innerHTML < 15){
									document.querySelector(".question").innerHTML ++;
								}else{
									document.querySelector(".game-over").style.display = "block";
									document.querySelector(".division").style.display = "none";
									holder.style.display = "none";
						}

						//If the enter key is clicked, check answer and give feedback
						document.getElementById("divideAns").addEventListener("keyup", function (event){
								if (event.keyCode === 13) {
								document.getElementById("divide").click();
								}
						});

						//If the add button is clicked, check answer and give feedback
						document.getElementById("divide").onclick =  function(){
							var sum = ((divnum1 * 10) / (divnum2 * 10)) / 10;
							var answer = document.getElementById('divideAns').value;
							var result = document.getElementById("showResult").style.display = "block";
							
							if(answer != sum){
								document.querySelector(".result").innerHTML = "Incorrect, better luck next time. The correct answer is " + sum + ". Click continue to proceed";
							} else{
								var score = document.querySelector(".score").innerHTML ++;
								document.querySelector(".result").innerHTML = "Correct. Click continue to proceed";
							}
						}
		}

					add.style.display = "none";
					minus.style.display = "none";
					multiply.style.display = "none";
					divide.style.display = "block";
					mod.style.display = "none";
					return next();


			*/
			