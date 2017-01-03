# Employee Directory

## Technology Used

### Front-end
  * HTML, CSS
  * BootStrap
  * AngularJS
  
### Back-end
  * API in PHP
  * DB of directory in MySQL

## Information about Application 

### Different Fields in Employee Form
* Employee ID *(Primary Key)*
* Fname
* Lname
* Gender *(Radio button)*
* Department *(Drop-down menu)*


### CRUD Operation
In Angular I've used $http service for routing and different methods to implement CRUD operation:
* $http.get
* $htttp.post
* $http.put
* $http.delete

On Index/Main page, we have list of all employees with their information in Tabular format. 

Last column of table contains two buttons: 
* *Delete*
* *Edit*

Both are used to delete/update that particular field from the directory.

There are two button in the menubar: 
 * *Homepage*
 * *Insert a new Record*
 
### Different routes or URL
Homepage:
```sh
http://localhost/directory_name/#/
```


Insert page's routing URL:
```sh
http://localhost/directory_name/#/insert
```
Update page's routing URL:
```sh
http://localhost/directory_name/#/update?id=employee_id
```


