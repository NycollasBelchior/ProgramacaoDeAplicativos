
var tasks = [

];



const listTask = document.getElementById("tasksList");

function renderizarTasks(){
    listTask.innerHTML = "";

    for(let task of tasks){
        let article = document.createElement("article");
    

    article.innerHTML = `
    <li class="task">
                
                <button class="button-check">
                <span class="material-symbols-outlined">
                    radio_button_unchecked
                    </span> 
                </button>

                    <span class="task-Text">
                        ${task.text}
                    </span>
                    
                    <button type="button" class="Delete-task" onclick="DelTask(${task.id})">
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                    
            </li>
    `;

    listTask.appendChild(article)
    }
}

let proximoID = 1

function addTask(){
        const input = document.getElementById("inputtask").value;

    if(input.trim() === ""){
        alert("Digite uma tarefa!")
        return;
    }

        let newTask = {    
            id : proximoID++,
            
            text: input,
            del: false,
            checked: false
        }

        tasks.push(newTask)

    renderizarTasks()
}


function DelTask(id) {
    tasks = tasks.filter(task => task.id !== id);

    renderizarTasks();
}
renderizarTasks()




