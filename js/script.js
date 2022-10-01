let tasksList = JSON.parse(tasks);

function updateList() {
    for (let tasksListItem of tasksList) {
        document.getElementById("tasks").innerHTML += `
        
            <div class="col">
                <div id="shadow" class="card">
                    <img src="${tasksListItem.image}" class="card-img-top" alt="walk the dog" />
                    <div class="card-body">
                        <h5 class="card-title">${tasksListItem.taskName}</h5>
                        <p class="card-text">${tasksListItem.description}</p>
                        <hr>
                        <h6><img id="icons" src="images/alert-triangle.svg" alt="alert triangle"> Priority level: <button class="priorityBtn" type="button">${tasksListItem.importance}</button></h6>
                        <h6><img id="icons" src="images/calendar.svg" alt="calender"> Deadline: ${tasksListItem.deadline}</h6>
                        <hr>
                        <button id="button" type="button" class="btn btn-success"><img id="priorityIcon" src="images/check-circle.svg" alt="check"> Done</button>
                        <button id="button" type="button" class="btn btn-danger"><img id="priorityIcon" src="images/trash.svg" alt="trash can"> Delete</button>
                        
                    </div>
                </div>
            </div>
        
        `;
    }
}

updateList();
addAction();

function priorityFunction(index) {
    if (tasksList[index].importance != 5) {
        tasksList[index].importance++;
        document.getElementsByClassName("priorityBtn")[index].innerHTML =
        tasksList[index].importance;
    }
}

function sortByPriority() {
    tasksList.sort((a, b) => b.importance - a.importance);
    document.getElementById("tasks").innerHTML = "";
    updateList();
    addAction();
}

function addAction() {
    let priorityBtns = document.getElementsByClassName("priorityBtn");

    for (let i = 0; i < priorityBtns.length; i++) {
        priorityBtns[i].addEventListener("click", function () {
        priorityFunction(i);
        });
    }
}

document.getElementById("sortImg").onclick = sortByPriority;


// Hello Trainers, I wanted to do the colors of the button to change it 
// when the priority goes up but it didn't work for me so if you could please
// explain it in a comment while correcting this, that would be great.
// Thanks for your time.