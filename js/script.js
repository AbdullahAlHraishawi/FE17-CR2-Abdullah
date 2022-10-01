let tasksList = JSON.parse(tasks);

for (let tasksListItem of tasksList){
    document.getElementById("tasks").innerHTML += `

    <div class="col">
        <div id="shadow" class="card">
            <img src="${tasksListItem.image}" class="card-img-top" alt="walk the dog" />
            <div class="card-body">
              <h5 class="card-title">${tasksListItem.taskName}</h5>
              <p class="card-text">${tasksListItem.description}</p>
              <hr>
              <h6><img id="priorityIcon" src="images/alert-triangle.svg" alt="alert triangle"> Priority level: <span id="priority">${tasksListItem.importance}</span></h6>
              <h6><img id="priorityIcon" src="images/calendar.svg" alt="calender"> Deadline: ${tasksListItem.deadline}</h6>
              <hr>
              <button id="button" type="button" class="btn btn-success"><img id="priorityIcon" src="images/check-circle.svg" alt="check"> Done</button>
              <button id="button" type="button" class="btn btn-danger"><img id="priorityIcon" src="images/trash.svg" alt="trash can"> Delete</button>
              
            </div>
        </div>
    </div>

    `;

    
}