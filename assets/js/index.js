// JavaScript Document

(function( $ ){
	setInterval(RefreshAuto, 3000);
})( jQuery );

function RefreshAuto() {
	var result1 = {
		'iddefi' : '0'
	}
	$.ajax({
		url : 'https://localhost:1337/verify-challenge',
		type : 'GET',
		data : result1,
		success : function(code_html, statut){
			if( code_html  === true) {
				$("#LockPicking").addClass("done");
				$("#Inv-LockPicking").prop('disabled', true);
				$("#Valid-LockPicking").prop('disabled', true);
			}
		}
	});
	
	result1 = {
		'iddefi' : '1'
	}
	$.ajax({
		url : 'https://localhost:1337/verify-challenge',
		type : 'GET',
		data : result1,
		success : function(code_html, statut){
			if(code_html === true) {
				$("#RFID").addClass("done");
				$("#Inv-RFID").prop('disabled', true);
				$("#Valid-RFID").prop('disabled', true);
			}
		}
	});
	
	result1 = {
		'iddefi' : '2'
	}
	$.ajax({
		url : 'https://localhost:1337/verify-challenge',
		type : 'GET',
		data : result1,
		success : function(code_html, statut){
			if(code_html === true) {
				$("#BruteforceRC4").addClass("done");
				$("#Inv-BruteforceRC4").prop('disabled', true);
				$("#Valid-BruteforceRC4").prop('disabled', true);
			}
		}
	});
	
	result1 = {
		'iddefi' : '3'
	}
	$.ajax({
		url : 'https://localhost:1337/verify-challenge',
		type : 'GET',
		data : result1,
		success : function(code_html, statut){
			if(code_html === true) {
				$("#SteganoAudio1").addClass("done");
				$("#Inv-SteganoAudio1").prop('disabled', true);
				$("#Valid-SteganoAudio1").prop('disabled', true);
			}
		}
	});
	
	result1 = {
		'iddefi' : '4'
	}
	$.ajax({
		url : 'https://localhost:1337/verify-challenge',
		type : 'GET',
		data : result1,
		success : function(code_html, statut){
			if(code_html === true) {
				$("#SteganoAudio2").addClass("done");
				$("#Inv-SteganoAudio2").prop('disabled', true);
				$("#Valid-SteganoAudio2").prop('disabled', true);
			}
		}
	});
	
	result1 = {
		'iddefi' : '5'
	}
	$.ajax({
		url : 'https://localhost:1337/verify-challenge',
		type : 'GET',
		data : result1,
		success : function(code_html, statut){
			if(code_html === true) {
				$("#SteganoImage").addClass("done");
				$("#Inv-SteganoImage").prop('disabled', true);
				$("#Valid-SteganoImage").prop('disabled', true);
			}
		}
	});
	
	result1 = {
		'iddefi' : '6'
	}
	$.ajax({
		url : 'https://localhost:1337/verify-challenge',
		type : 'GET',
		data : result1,
		success : function(code_html, statut){
			if(code_html === true) {
				$("#FailleXSSCookies").addClass("done");
				$("#Inv-FailleXSSCookies").prop('disabled', true);
				$("#Valid-FailleXSSCookies").prop('disabled', true);
			}
		}
	});

	result1 = {
		'iddefi' : '7'
	}
	$.ajax({
		url : 'https://localhost:1337/verify-challenge',
		type : 'GET',
		data : result1,
		success : function(code_html, statut){
			if(code_html === true) {
				$("#FailleSQL").addClass("done");
				$("#Inv-FailleSQL").prop('disabled', true);
				$("#Valid-FailleSQL").prop('disabled', true);
			}
		}
	});

	result1 = {
		'iddefi' : '8'
	}
	$.ajax({
		url : 'https://localhost:1337/verify-challenge',
		type : 'GET',
		data : result1,
		success : function(code_html, statut){
			if(code_html === true) {
				$("#ReverseBase64").addClass("done");
				$("#Inv-ReverseBase64").prop('disabled', true);
				$("#Valid-ReverseBase64").prop('disabled', true);
			}
		}
	});
}

function Investiguer(defis) {
	switch (defis) {
		case "LockPicking":
		//alert("LockPicking");
		break;
		case "RFID":
		//alert("RFID");
		break;
		case "BruteforceRC4":
		//alert("BruteforceRC4");
		break;
		case "SteganoAudio1":
		//alert("SteganoAudio1");
		break;
		case "SteganoAudio2":
		//alert("SteganoAudio2");
		break;
		case "SteganoImage":
		//alert("SteganoImage");
		break;
		case "FailleXSSCookies":
		//alert("FailleXSSCookies");
		break;
		case "FailleSQL":
		//alert("FailleSQL");
		break;
		case "ReverseBase64":
		//alert("ReverseBase64");
		break;
		default:
		alert("Erreur");
	}
}

function Valider(defis) {
	var test = false;
	while(test == false) {
		switch (defis) {
			case "LockPicking":
			var result = prompt("LockPicking\n\nRésultat :");
			break;
			case "RFID":
			var result = prompt("RFID\n\nRésultat :");
			break;
			case "BruteforceRC4":
			var result = prompt("Brutefore RC4\n\nRésultat :");
			break;
			case "SteganoAudio1":
			var result = prompt("Stéganographie Audio\n\nRésultat :");
			break;
			case "SteganoAudio2":
			var result = prompt("Stéganographie Audio\n\nRésultat :");
			break;
			case "SteganoImage":
			var result = prompt("Stéganographie Image\n\nRésultat :");
			break;
			case "FailleXSSCookies":
			var result = prompt("Faille XSS et Cookies\n\nRésultat :");
			break;
			case "FailleSQL":
			var result = prompt("Faille SQL\n\nRésultat :");
			break;
			case "ReverseBase64":
			var result = prompt("Reverse Base64\n\nRésultat :");
			break;
			default:
			alert("Erreur");
			
		}
		if(result == "") {
			switch (defis) {
				case "LockPicking":
				alert("LockPicking\n\nErreur :\n Le champs \'Résultat\' est vide.");
				break;
				case "RFID":
				alert("RFID\n\nErreur :\n Le champs \'Résultat\' est vide.");
				break;
				case "BruteforceRC4":
				alert("Bruteforce RC4\n\nErreur :\n Le champs \'Résultat\' est vide.");
				break;
				case "SteganoAudio1":
				alert("Stéganographie Audio\n\nErreur :\n Le champs \'Résultat\' est vide.");
				break;
				case "SteganoAudio2":
				alert("Stéganographie Audio\n\nErreur :\n Le champs \'Résultat\' est vide.");
				break;
				case "SteganoImage":
				alert("Stéganographie Image\n\nErreur :\n Le champs \'Résultat\' est vide.");
				break;
				case "FailleXSSCookies":
				alert("Faille XSS et Cookies\n\nErreur :\n Le champs \'Résultat\' est vide.");
				break;
				case "FailleSQL":
				alert("Faille SQL\n\nErreur :\n Le champs \'Résultat\' est vide.");
				break;
				case "ReverseBase64":
				alert("Faille SQL\n\nErreur :\n Le champs \'Résultat\' est vide.");
				break;
				default:
				alert("Erreur");
			}
		}
		else {
			test = true;
			if(result == null) {
				/* alert("LockPicking\n\nOk."); */
			}
			else {
				switch (defis) {
					case "LockPicking": 
					var result1 = {
						'iddefi' : '0',
						'result': result
					}
					break;
					case "RFID":
					var result1 = {
						'iddefi' : '1',
						'result': result
					}
					break;
					case "BruteforceRC4":
					var result1 = {
						'iddefi' : '2',
						'result': result
					}
					break;
					case "SteganoAudio1":
					var result1 = {
						'iddefi' : '3',
						'result': result
					}
					break;
					case "SteganoAudio2":
					var result1 = {
						'iddefi' : '4',
						'result': result
					}
					break;
					case "SteganoImage":
					var result1 = {
						'iddefi' : '5',
						'result': result
					}
					break;
					case "FailleXSSCookies":
					var result1 = {
						'iddefi' : '6',
						'result': result
					}
					break;
					case "FailleSQL":
					var result1 = {
						'iddefi' : '7',
						'result': result
					}
					break;
					case "ReverseBase64":
					var result1 = {
						'iddefi' : '8',
						'result': result
					}
					break;
					default:
					alert("Erreur");
				}
				$.ajax({
					url : 'https://localhost:1337/check-challenge',
					type : 'GET',
					data : result1,
					success : function(code_html, statut){
						if(code_html === true) {
							switch (defis) {
								case "LockPicking": 
								$("#LockPicking").addClass("done");
								$("#Inv-LockPicking").prop('disabled', true);
								$("#Valid-LockPicking").prop('disabled', true);
								$("#Result-LockPicking").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("LockPicking\n\nYeah, bien joué !!!");
								break;
								case "RFID":
								$("#RFID").addClass("done");
								$("#Inv-RFID").prop('disabled', true);
								$("#Valid-RFID").prop('disabled', true);
								$("#Result-RFID").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("RFID\n\nYeah, bien joué !!!");
								break;
								case "BruteforceRC4":
								$("#BruteforceRC4").addClass("done");
								$("#Inv-BruteforceRC4").prop('disabled', true);
								$("#Valid-BruteforceRC4").prop('disabled', true);
								$("#Result-BruteforceRC4").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Bruteforce RC4\n\nYeah, bien joué !!!");
								break;
								case "SteganoAudio1":
								$("#SteganoAudio1").addClass("done");
								$("#Inv-SteganoAudio1").prop('disabled', true);
								$("#Valid-SteganoAudio1").prop('disabled', true);
								$("#Result-SteganoAudio1").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Stéganographie Audio\n\nYeah, bien joué !!!");
								break;
								case "SteganoAudio2":
								$("#SteganoAudio2").addClass("done");
								$("#Inv-SteganoAudio2").prop('disabled', true);
								$("#Valid-SteganoAudio2").prop('disabled', true);
								$("#Result-SteganoAudio2").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Stéganographie Audio\n\nYeah, bien joué !!!");
								break;
								case "SteganoImage":
								$("#SteganoImage").addClass("done");
								$("#Inv-SteganoImage").prop('disabled', true);
								$("#Valid-SteganoImage").prop('disabled', true);
								$("#Result-SteganoImage").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Stéganographie Image\n\nYeah, bien joué !!!");
								break;
								case "FailleXSSCookies":
								$("#FailleXSSCookies").addClass("done");
								$("#Inv-FailleXSSCookies").prop('disabled', true);
								$("#Valid-FailleXSSCookies").prop('disabled', true);
								$("#Result-FailleXSSCookies").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Faille XSS et Cookies\n\nYeah, bien joué !!!");
								break;
								case "FailleSQL":
								$("#FailleSQL").addClass("done");
								$("#Inv-FailleSQL").prop('disabled', true);
								$("#Valid-FailleSQL").prop('disabled', true);
								$("#Result-FailleSQL").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Faille SQL\n\nYeah, bien joué !!!");
								break;
								case "ReverseBase64":
								$("#ReverseBase64").addClass("done");
								$("#Inv-ReverseBase64").prop('disabled', true);
								$("#Valid-ReverseBase64").prop('disabled', true);
								$("#Result-ReverseBase64").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Reverse Base64\n\nYeah, bien joué !!!");
								break;
								default:
								alert("Erreur");
							}
						}
						else {
							switch (defis) {
								case "LockPicking": 
								alert("LockPicking\n\nLe résultat est erroné.");
								break;
								case "RFID":
								alert("RFID\n\nLe résultat est erroné.");
								break;
								case "BruteforceRC4":
								alert("Bruteforce RC4\n\nLe résultat est erroné.");
								break;
								case "SteganoAudio1":
								alert("Stéganographie Audio\n\nLe résultat est erroné.");
								break;
								case "SteganoAudio2":
								alert("Stéganographie Audio\n\nLe résultat est erroné.");
								break;
								case "SteganoImage":
								alert("Stéganographie Image\n\nLe résultat est erroné.");
								break;
								case "FailleXSSCookies":
								alert("Faille XSS et Cookies\n\nLe résultat est erroné.");
								break;
								case "FailleSQL":
								alert("Faille SQL\n\nLe résultat est erroné.");
								break;
								case "ReverseBase64":
								alert("Reverse Base64\n\nLe résultat est erroné.");
								break;
								default:
								alert("Erreur");
							}
						}
					}
				});
}
}
}
}
