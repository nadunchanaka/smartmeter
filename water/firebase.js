(function() {
  const config = {
      apiKey: "AIzaSyCgafXEOYJj4lTnk2zY-xdgcRooUdb8KdE",
      authDomain: "webapp-3b026.firebaseapp.com",
      databaseURL: "https://webapp-3b026-default-rtdb.firebaseio.com",
      projectId: "webapp-3b026",
      storageBucket: "webapp-3b026.appspot.com",
      messagingSenderId: "504056536597",
      appId: "1:504056536597:web:08ed1cdfe589ca978cf81c",
      measurementId: "G-H06PBHSC83"
  };

  firebase.initializeApp(config);

  //Get elements
  const bigTextEvaluation = document.getElementById('userData');

  // Create reference
  const dbBigTextEvaluationStudents = firebase.database().ref().child('Header_2');

  //sync object changes
  dbBigTextEvaluationStudents.on('value', snap => bigTextEvaluation.innerText = snap.val());

  var table = document.querySelector('#table1 tbody');

  const dbEvaluationStudentsRef = firebase.database().ref().child('USER_DETAILS/WATER/');
  dbEvaluationStudentsRef.on('value', snap => {
    while(table.hasChildNodes()) {
		    table.removeChild(table.firstChild);
	  }

    var user = snap.val();
    for(var i in user) {
      var row = table.insertRow(-1);
      
      for(var j in user[i]) {
				cell = row.insertCell(-1);
				cell.innerHTML = user[i][j];
			}
		}
  });


  // firebase.initializeApp(config);

  // //Get elements
  // const USER_DETAILS = document.getElementById('USER_DETAILS');

  // // Create reference
  // const USER_DETAILSRef = firebase.database().ref().child('USER_DETAILS');

  // //sync object changes
  // USER_DETAILSRef.on('value', snap => USER_DETAILS.innerText = snap.val());

  // var table = document.querySelector('#table1 tbody');

  // const ELECTRICITYRef = firebase.database().ref().child('ELECTRICITY');
  // ELECTRICITYRef.on('value', snap => {
  //   while(table.hasChildNodes()) {
	// 	    table.removeChild(table.firstChild);
	//   }

  //   var students = snap.val();
  //   for(var i in students) {
  //     var row = table.insertRow(-1);
      
  //     for(var j in students[i]) {
	// 			cell = row.insertCell(-1);
	// 			cell.innerHTML = students[i][j];
	// 		}
	// 	}
  // });

}());
