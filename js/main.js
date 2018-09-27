//listen to form submit
document.getElementById('myForm').addEventListener('submit',saveTask);

//
function saveTask(e){

var taskName = document.getElementById('taskName').value;




//using an array of objects 
var task = {
name: taskName,

}

if (localStorage.getItem('tasks')=== null ){
	//init array
	var tasks = [];
	//add to array
	tasks.push(task);
	//set to local storage
	localStorage.setItem('tasks', JSON.stringify(tasks)); 
} else{
	//get tasks from local storage
	var tasks = JSON.parse(localStorage.getItem('tasks'));
	//adding the task to array
	tasks.push(task);
	//re-set it back to local storage
	localStorage.setItem('tasks', JSON.stringify(tasks));

}  
	
	//Clearing the form
	document.getElementById('myForm').reset();

	fetchTasks();

	
	//prevent it from getting default values
	e.preventDefault();
}


//Delete Bookmarks
function deleteTask(name){
	//gettin the tasks from local storage, comparing the values, then splicing.
	var tasks = JSON.parse(localStorage.getItem('tasks'));

	//Loop through the tasks
	for(var i=0;i<tasks.length;i++)
	{
      if(tasks[i].name == name){
      	tasks.splice(i, 1);
      }
	}
	
	localStorage.setItem('tasks', JSON.stringify(tasks));	

	//Re-fetch tasks
	fetchTasks();
	
}

function fetchTasks(){
    //get tasks from local storage
	var tasks = JSON.parse(localStorage.getItem('tasks'));
	

	//get output id
	var tasksResults = document.getElementById('tasksResults');

	//build Output
	tasksResults.innerHTML ='';
	for (var i=0; i<tasks.length; i++){
		var name = tasks[i].name;
		

		tasksResults.innerHTML += '<div class="well">'+
		                              '<h3>'+    name    +
		                              '  <input type="checkbox" class="form-check-label" id="materialChecked2" unchecked onclick="saveCoTask(\''+name+'\');deleteTask(\''+name+'\');" > ' +
		                             //'<a onclick="deleteTask(\''+name+'\')" class="btn btn-danger" href="#">Delete</a> ' +
		                              '</h3>'+
		                              '</div>';




	}
}



//used for saving the completed tasks that can then be deleted later if needed.
function saveCoTask(Name){

	var coTask = {
		name:Name,
	}

	if (localStorage.getItem('cotasks')=== null ){
	//init array
	var cotasks = [];
	//add to array
	cotasks.push(coTask);
	//set to local storage
	localStorage.setItem('cotasks', JSON.stringify(cotasks)); 
} else{
	//get tasks from local storage
	var cotasks = JSON.parse(localStorage.getItem('cotasks'));
	//adding the task to array
	cotasks.push(coTask);
	//re-set it back to local storage
	localStorage.setItem('cotasks', JSON.stringify(cotasks));

}  
	
	

	fetchCoTasks();

	
	//prevent it from getting default values
	//e.preventDefault();
}

//fetch completed tasks if not deleted.
function fetchCoTasks(){

//get tasks from local storage
	var cotasks = JSON.parse(localStorage.getItem('cotasks'));
	

	//get output id
	var tasksCoResults = document.getElementById('tasksCoResults');

	//build Output
	tasksCoResults.innerHTML ='';
	for (var i=0; i<cotasks.length; i++){
		var name = cotasks[i].name;
		

		tasksCoResults.innerHTML += '<div class="well">'+
		                              '<h3>'+    name    +
		                             // '  <input type="checkbox" class="form-check-label" id="materialChecked2" unchecked onclick="deleteTask(\''+name+'\');saveCoTask(\''+name+'\')" > ' +
		                             '  <a onclick="delCoTasks(\''+name+'\')" class="btn btn-danger" href="#">Delete</a> ' +
		                              '</h3>'+
		                              '</div>';




	}

}

//deletes the completed tasks
function delCoTasks(Name){

//gettin the completed tasks from local storage, comparing the values, then splicing.
	var cotasks = JSON.parse(localStorage.getItem('cotasks'));

	//Loop through the completed tasks
	for(var i=0;i<cotasks.length;i++)
	{
      if(cotasks[i].name == Name){
      	cotasks.splice(i, 1);
      }
	}
	
	localStorage.setItem('cotasks', JSON.stringify(cotasks));	

	//Re-fetch Completed Tasks
	fetchCoTasks();
	

}



//form validation
function matchStuff(taskName){
	
	if(!taskName){
	alert('Please fill in a task');
	return false;
}
}

