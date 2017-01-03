angular.module('myApp',['ngRoute'])

.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/',{
		templateUrl:'main.html',
		controller:'myCtrl'
	}).
	when('/insert',{
		templateUrl:'insert.html'
	}).
	when('/update',{
		templateUrl:'editForm.html',
		controller:'updateCtrl'
	}).
	otherwise({redirectTo:'/'})
	
}])
.controller('updateCtrl',['$scope','$location','$http',function($scope,$location,$http){
//	alert('You are in update CTrl')
	var info = $location.search();
//	console.log("Info"+info.id);
	getInfo(info.id);
	function getInfo(id){
		$http.get('api.php').then(function(response){
			var details=response.data;
//			console.log(id);
			for(i=0;i<details.length;i++){
//				console.log(details[i]);
				var obj=details[i];
				for(inf in obj){
//					console.log(obj[inf]);
					if(obj[inf]==id){
						$scope.empInfo=obj;
//						console.log($scope.empInfo);
					}
				};
			}
				
		})
	}
	
	$scope.updateData=function(info){
		
		var information={'emp_id':info.id,'emp_fname':info.fname,'emp_lname':info.lname,'emp_gender':info.gender,'emp_department':info.department};
//		console.log(information);
//		alert('U r in update function');
				$http.put('api.php',information)
				.success(function(response){
					$location.path('/');
				})
				
	}
	
}])
.controller('myCtrl', ['$scope','$http','$location','$route', function($scope,$http,$location,$route){
	getInfo();
	function getInfo(){
		$http.get('api.php').then(function(response){
			$scope.details=response.data;
//			console.log(response);
		})
	}

	$scope.deleteInfo=function(info){
//		console.log(information);
//		alert('1');
		$http.delete('api.php',{params: {'emp_id':info}})
		.success(function(response){
			$route.reload();
		})
	}

//	$scope.updateInfo=function(info){
//		alert('U r in update fun');
//		console.log(info);
//		$scope.empInfo=info;
//		$scope.gen=info.gender;
//		$scope.malechecked='';
//		$scope.femalechecked='';
//		if($scope.gen=='Male'){$scope.malechecked='true';$scope.femalechecked='false';}
//		else if($scope.gen='Female'){$scope.malechecked='false';$scope.femalechecked='true';}
//		$('#editForm').slideToggle();
//		$http.put('api.php',{params: {'emp_id':info}})
//		.success(function(response){
//			$route.reload();
//		})
//	}

	$scope.insertInfo=function(info){
//		console.log(info);
//		alert('1');
		var information={'emp_id':info.emp_id,'emp_fname':info.emp_fname,'emp_lname':info.emp_lname,'emp_gender':info.emp_gender,'emp_department':info.emp_department};
		
		$http.post('api.php',information)
		.success(function(response){
			$location.path('/');
		})
	}
}]);