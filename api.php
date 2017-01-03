<?php
	include('dbConfig.php');
	$method = $_SERVER['REQUEST_METHOD'];
	
	switch ($method) {
		case 'GET':
			$sql = "select * from `$table` ORDER BY id ASC"; break;
		case 'POST':
			$data = json_decode(file_get_contents("php://input"));
			
			$sql = "INSERT into `$table` (id,fname,lname,gender,department) VALUES ('".$data->emp_id."','".$data->emp_fname."','".$data->emp_lname."','".$data->emp_gender."','".$data->emp_department."')";
			break;
		
		case 'PUT':	
			$data = json_decode(file_get_contents("php://input"));
				
			$sql = "UPDATE `$table` 
					SET	fname = '".$data->emp_fname."' ,lname = '".$data->emp_lname."' ,gender = '".$data->emp_gender."', department = '".$data->emp_department.
					"' WHERE id='".$data->emp_id."'";
			break;
			
		case 'DELETE':
			$emp=$_GET['emp_id'];
			$sql="DELETE from `$table` where `$table`.`id`='".$emp."'";
			break;
		default:
			echo 'Invalid Request';
			break;
	}
	
	$result = mysqli_query($link,$sql);
	if (!$result) {
	  http_response_code(404);
	  die(mysqli_error());
	}

	$arr = array();
	if($method=='GET')
	{
 	    if(mysqli_num_rows($result) != 0) {
			while($row = mysqli_fetch_assoc($result)) {
				$arr[] = $row;
			}
		}
		// Return json array containing data from the databasecon
		echo $json_info = json_encode($arr);
	}

	if($method=='POST')
	{
		echo true;
		
	}
	if($method=='DELETE')
	{
		echo true;
		
	}
	if($method=='PUT')
	{
		echo true;
	
	}



?>