(function() {
  const config = {
      apiKey: "AIzaSyCZQqG7LNguVbTicz3_a12vm1y4qUztDK8",
      authDomain: "smart-metering-system-998bc.firebaseapp.com",
      databaseURL: "https://smart-metering-system-998bc-default-rtdb.firebaseio.com",
      projectId: "smart-metering-system-998bc",
      storageBucket: "smart-metering-system-998bc.appspot.com",
      messagingSenderId: "549686401339",
      appId: "1:549686401339:web:b786883cca91b0bb57bf1e",
      measurementId: "G-MMW1F9EZV5"

  };

  firebase.initializeApp(config);

  //Get elements
  const bigTextEvaluation = document.getElementById('userData');

  // Create reference
  const dbBigTextEvaluationStudents = firebase.database().ref().child('Header_1');

  //sync object changes
  dbBigTextEvaluationStudents.on('value', snap => bigTextEvaluation.innerText = snap.val());

  var table = document.querySelector('#table1 tbody');

  const dbEvaluationStudentsRef = firebase.database().ref().child('USER_DETAILS/ELECTRICITY/');
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
