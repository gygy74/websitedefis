// JavaScript Document

(function( $ ){
	setInterval(RefreshAuto, 3000);
})( jQuery );

function RefreshAuto() {
  var result1 = {
    'iddefi' : '0'
  }
  $.ajax({
    url : 'verify-challenge.html',
    type : 'GET',
    data : result1,
    success : function(code_html, statut){
      if(code_html== "True") {
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
    url : 'verify-challenge.html',
    type : 'GET',
    data : result1,
    success : function(code_html, statut){
      if(code_html== "True") {
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
    url : 'verify-challenge.html',
    type : 'GET',
    data : result1,
    success : function(code_html, statut){
      if(code_html== "True") {
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
    url : 'verify-challenge.html',
    type : 'GET',
    data : result1,
    success : function(code_html, statut){
      if(code_html== "True") {
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
    url : 'verify-challenge.html',
    type : 'GET',
    data : result1,
    success : function(code_html, statut){
      if(code_html== "True") {
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
    url : 'verify-challenge.html',
    type : 'GET',
    data : result1,
    success : function(code_html, statut){
      if(code_html== "True") {
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
    url : 'verify-challenge.html',
    type : 'GET',
    data : result1,
    success : function(code_html, statut){
      if(code_html== "True") {
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
    url : 'verify-challenge.html',
    type : 'GET',
    data : result1,
    success : function(code_html, statut){
      if(code_html== "True") {
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
    url : 'verify-challenge.html',
    type : 'GET',
    data : result1,
    success : function(code_html, statut){
      if(code_html== "True") {
        $("#ReverseBase64").addClass("done");
        $("#Inv-ReverseBase64").prop('disabled', true);
        $("#Valid-ReverseBase64").prop('disabled', true);
      }
    }
  });
  
  
/*  
  $.ajax({
      url : 'verify-lockpicking.html',
      type : 'GET',
      dataType : 'html',
      timeout: 4000,
      success : function(code_html, statut){
          if(code_html== "True") {
              $("#LockPicking").addClass("done");
              $("#Inv-LockPicking").prop('disabled', true);
              $("#Valid-LockPicking").prop('disabled', true);
          }
      }
  });
  $.ajax({
      url : 'verify-rfid.html',
      type : 'GET',
      dataType : 'html',
      timeout: 4000,
      success : function(code_html, statut){
          if(code_html == "True") {
              $("#RFID").addClass("done");
              $("#Inv-RFID").prop('disabled', true);
              $("#Valid-RFID").prop('disabled', true);
          }
      }
  });
  $.ajax({
      url : 'verify-bruteforcerc4.html',
      type : 'GET',
      dataType : 'html',
      timeout: 4000,
      success : function(code_html, statut){
          if(code_html == "True") {
              $("#BruteforceRC4").addClass("done");
              $("#Inv-BruteforceRC4").prop('disabled', true);
              $("#Valid-BruteforceRC4").prop('disabled', true);
          }
      }
  });
  $.ajax({
      url : 'verify-steganoaudio1.html',
      type : 'GET',
      dataType : 'html',
      timeout: 4000,
      success : function(code_html, statut){
          if(code_html == "True") {
              $("#SteganoAudio1").addClass("done");
              $("#Inv-SteganoAudio1").prop('disabled', true);
              $("#Valid-SteganoAudio1").prop('disabled', true);
          }
      }
  });
  $.ajax({
      url : 'verify-steganoaudio2.html',
      type : 'GET',
      dataType : 'html',
      timeout: 4000,
      success : function(code_html, statut){
          if(code_html == "True") {
              $("#SteganoAudio2").addClass("done");
              $("#Inv-SteganoAudio2").prop('disabled', true);
              $("#Valid-SteganoAudio2").prop('disabled', true);
          }
      }
  });
  $.ajax({
      url : 'verify-steganoimage.html',
      type : 'GET',
      dataType : 'html',
      timeout: 4000,
      success : function(code_html, statut){
          if(code_html == "True") {
              $("#SteganoImage").addClass("done");
              $("#Inv-SteganoImage").prop('disabled', true);
              $("#Valid-SteganoImage").prop('disabled', true);
          }
      }
  });
  $.ajax({
      url : 'verify-faillexsscookies.html',
      type : 'GET',
      dataType : 'html',
      timeout: 4000,
      success : function(code_html, statut){
          if(code_html == "True") {
              $("#FailleXSSCookies").addClass("done");
              $("#Inv-FailleXSSCookies").prop('disabled', true);
              $("#Valid-FailleXSSCookies").prop('disabled', true);
          }
      }
  });
  $.ajax({
      url : 'verify-faillesql.html',
      type : 'GET',
      dataType : 'html',
      timeout: 4000,
      success : function(code_html, statut){
          if(code_html == "True") {
              $("#FailleSQL").addClass("done");
              $("#Inv-FailleSQL").prop('disabled', true);
              $("#Valid-FailleSQL").prop('disabled', true);
          }
      }
  });
  $.ajax({
      url : 'verify-reversebase64.html',
      type : 'GET',
      dataType : 'html',
      timeout: 4000,
      success : function(code_html, statut){
          if(code_html == "True") {
              $("#ReverseBase64").addClass("done");
              $("#Inv-ReverseBase64").prop('disabled', true);
              $("#Valid-ReverseBase64").prop('disabled', true);
          }
      }
  });
*/
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
              //alert("LockPicking\n\nOk.");
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
              url : 'check-challenge.html',
              type : 'GET',
              data : result1,
              success : function(code_html, statut){
                if(code_html == "True") {
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
  
/*  
	switch (defis) {
	  case "LockPicking":
		//alert("LockPicking");
		while(test == false) {
			var result = prompt("LockPicking\n\nRésultat :");
			if(result == "") {
			   	alert("LockPicking\n\nErreur :\n Le champs \'Résultat\' est vide.");
			}
			else {
				test = true;
				if(result == null) {
					//alert("LockPicking\n\nOk.");
			   	}
				else {
					var result1 = {
						'result': result
					}
					$.ajax({
					   	url : 'result-lockpicking.html',
					   	type : 'GET',
						data : result1,
					   	success : function(code_html, statut){
							if(code_html == "True") {
								$("#LockPicking").addClass("done");
								$("#Inv-LockPicking").prop('disabled', true);
								$("#Valid-LockPicking").prop('disabled', true);
								$("#Result-LockPicking").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("LockPicking\n\nYeah, bien joué !!!");
							}
							else {
								alert("LockPicking\n\nLe résultat est erroné.");
							}
					   }
					});
				}
			}
		}
		break;
	  case "RFID":
		//alert("RFID");
		while(test == false) {
			var result = prompt("RFID\n\nRésultat :");
			if(result == "") {
			   	alert("RFID\n\nErreur :\n Le champs \'Résultat\' est vide.");
			}
			else {
				test = true;
				if(result == null) {
					//alert("LockPicking\n\nOk.");
			   	}
				else {
                    var result1 = {
						'result': result
					}
					$.ajax({
					   	url : 'result-rfid.html',
					   	type : 'GET',
						data : result1,
					   	success : function(code_html, statut){
							if(code_html == "True") {
								$("#RFID").addClass("done");
								$("#Inv-RFID").prop('disabled', true);
								$("#Valid-RFID").prop('disabled', true);
								$("#Result-RFID").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("RFID\n\nYeah, bien joué !!!");
							}
							else {
								alert("RFID\n\nLe résultat est erroné.");
							}
					   }
					});
				}
			}
		}	
		break;
	  case "BruteforceRC4":
		//alert("BruteforceRC4");
		while(test == false) {
			var result = prompt("Brutefore RC4\n\nRésultat :");
			if(result == "") {
			   	alert("Bruteforce RC4\n\nErreur :\n Le champs \'Résultat\' est vide.");
			}
			else {
				test = true;
				if(result == null) {
					//alert("Bruteforce RC4\n\nOk.");
			   	}
				else {
                    var result1 = {
						'result': result
					}
					$.ajax({
					   	url : 'result-bruteforcerc4.html',
					   	type : 'GET',
						data : result1,
					   	success : function(code_html, statut){
							if(code_html == "True") {
								$("#BruteforceRC4").addClass("done");
								$("#Inv-BruteforceRC4").prop('disabled', true);
								$("#Valid-BruteforceRC4").prop('disabled', true);
								$("#Result-BruteforceRC4").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Bruteforce RC4\n\nYeah, bien joué !!!");
							}
							else {
								alert("Bruteforce RC4\n\nLe résultat est erroné.");
							}
					   }
					});
				}
			}
		}
		break;
	  case "SteganoAudio1":
		//alert("SteganoAudio1");
		while(test == false) {
			var result = prompt("Stéganographie Audio\n\nRésultat :");
			if(result == "") {
			   	alert("Stéganographie Audio\n\nErreur :\n Le champs \'Résultat\' est vide.");
			}
			else {
				test = true;
				if(result == null) {
					//alert("Stéganographie Audio\n\nOk.");
			   	}
				else {
                    var result1 = {
						'result': result
					}
					$.ajax({
					   	url : 'result-steganoaudio1.html',
					   	type : 'GET',
						data : result1,
					   	success : function(code_html, statut){
							if(code_html == "True") {
								$("#SteganoAudio1").addClass("done");
								$("#Inv-SteganoAudio1").prop('disabled', true);
								$("#Valid-SteganoAudio1").prop('disabled', true);
								$("#Result-SteganoAudio1").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Stéganographie Audio\n\nYeah, bien joué !!!");
							}
							else {
								alert("Stéganographie Audio\n\nLe résultat est erroné.");
							}
					   }
					});
				}
			}
		}
		break;
	  case "SteganoAudio2":
		//alert("SteganoAudio2");
		while(test == false) {
			var result = prompt("Stéganographie Audio\n\nRésultat :");
			if(result == "") {
			   	alert("Stéganographie Audio\n\nErreur :\n Le champs \'Résultat\' est vide.");
			}
			else {
				test = true;
				if(result == null) {
					//alert("Stéganographie Audio\n\nOk.");
			   	}
				else {
                    var result1 = {
						'result': result
					}
					$.ajax({
					   	url : 'result-steganoaudio2.html',
					   	type : 'GET',
						data : result1,
					   	success : function(code_html, statut){
							if(code_html == "True") {
								$("#SteganoAudio2").addClass("done");
								$("#Inv-SteganoAudio2").prop('disabled', true);
								$("#Valid-SteganoAudio2").prop('disabled', true);
								$("#Result-SteganoAudio2").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Stéganographie Audio\n\nYeah, bien joué !!!");
							}
							else {
								alert("Stéganographie Audio\n\nLe résultat est erroné.");
							}
					   }
					});
				}
			}
		}
		break;
	  case "SteganoImage":
		//alert("SteganoImage");
		while(test == false) {
			var result = prompt("Stéganographie Image\n\nRésultat :");
			if(result == "") {
			   	alert("Stéganographie Image\n\nErreur :\n Le champs \'Résultat\' est vide.");
			}
			else {
				test = true;
				if(result == null) {
					//alert("Stéganographie Image\n\nOk.");
			   	}
				else {
                    var result1 = {
						'result': result
					}
					$.ajax({
					   	url : 'result-steganoimage.html',
					   	type : 'GET',
						data : result1,
					   	success : function(code_html, statut){
							if(code_html == "True") {
								$("#SteganoImage").addClass("done");
								$("#Inv-SteganoImage").prop('disabled', true);
								$("#Valid-SteganoImage").prop('disabled', true);
								$("#Result-SteganoImage").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Stéganographie Image\n\nYeah, bien joué !!!");
							}
							else {
								alert("Stéganographie Image\n\nLe résultat est erroné.");
							}
					   }
					});
				}
			}
		}
		break;
	  case "FailleXSSCookies":
		//alert("FailleXSSCookies");
		while(test == false) {
			var result = prompt("Faille XSS et Cookies\n\nRésultat :");
			if(result == "") {
			   	alert("Faille XSS et Cookies\n\nErreur :\n Le champs \'Résultat\' est vide.");
			}
			else {
				test = true;
				if(result == null) {
					//alert("Faille XSS etb Cookies\n\nOk.");
			   	}
				else {
                    var result1 = {
						'result': result
					}
					$.ajax({
					   	url : 'result-faillexsscookies.html',
					   	type : 'GET',
						data : result1,
					   	success : function(code_html, statut){
							if(code_html == "True") {
								$("#FailleXSSCookies").addClass("done");
								$("#Inv-FailleXSSCookies").prop('disabled', true);
								$("#Valid-FailleXSSCookies").prop('disabled', true);
								$("#Result-FailleXSSCookies").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Faille XSS et Cookies\n\nYeah, bien joué !!!");
							}
							else {
								alert("Faille XSS et Cookies\n\nLe résultat est erroné.");
							}
					   }
					});
				}
			}
		}
		break;
	  case "FailleSQL":
		//alert("FailleSQL");
		while(test == false) {
			var result = prompt("Faille SQL\n\nRésultat :");
			if(result == "") {
			   	alert("Faille SQL\n\nErreur :\n Le champs \'Résultat\' est vide.");
			}
			else {
				test = true;
				if(result == null) {
					//alert("LockPicking\n\nOk.");
			   	}
				else {
					$.ajax({
					   	url : 'result-faillesql.html',
					   	type : 'GET',
						data : 'result=' + result,
					   	dataType : 'html',
						timeout: 4000,
					   	success : function(code_html, statut){
							if(code_html == "True") {
								$("#FailleSQL").addClass("done");
								$("#Inv-FailleSQL").prop('disabled', true);
								$("#Valid-FailleSQL").prop('disabled', true);
								$("#Result-FailleSQL").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Faille SQL\n\nYeah, bien joué !!!");
							}
							else {
								alert("Faille SQL\n\nLe résultat est erroné.");
							}
					   }
					});
				}
			}
		}
		break;
	  case "ReverseBase64":
		//alert("ReverseBase64");
		while(test == false) {
			var result = prompt("Reverse Base64\n\nRésultat :");
			if(result == "") {
			   	alert("Reverse Base64\n\nErreur :\n Le champs \'Résultat\' est vide.");
			}
			else {
				test = true;
				if(result == null) {
					//alert("LockPicking\n\nOk.");
			   	}
				else {
					$.ajax({
					   	url : 'result-reversebase64.html',
					   	type : 'GET',
						data : 'result=' + result,
					   	dataType : 'html',
						timeout: 4000,
					   	success : function(code_html, statut){
							if(code_html == "True") {
								$("#ReverseBase64").addClass("done");
								$("#Inv-ReverseBase64").prop('disabled', true);
								$("#Valid-ReverseBase64").prop('disabled', true);
								$("#Result-ReverseBase64").html('<b><u>Résultat :</u> ' + result + '</b>');
								alert("Reverse Base64\n\nYeah, bien joué !!!");
							}
							else {
								alert("Reverse Base64\n\nLe résultat est erroné.");
							}
					   }
					});
				}
			}
		}
		break;
	  default:
		alert("Erreur");
	}
*/
}
