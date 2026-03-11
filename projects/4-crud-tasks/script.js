let initialList = [
  {
    id: crypto.randomUUID(),
    task: "Go to gym",
    priority: "High",
    state: "To Do",
  },
  {
    id: crypto.randomUUID(),
    task: "Read a book",
    priority: "Low",
    state: "Done",
  },
  {
    id: crypto.randomUUID(),
    task: "Go to market",
    priority: "Medium",
    state: "In Progress",
  },
  {
    id: crypto.randomUUID(),
    task: "Restart Learning Solidworks",
    priority: "High",
    state: "To Do",
  },
  {
    id: crypto.randomUUID(),
    task: "Change slider to croll",
    priority: "High",
    state: "Done",
  },
  // {
  //   id: crypto.randomUUID(),
  //   task: "To publish the article",
  //   priority: "Medium",
  //   state: "In Progress",
  // },
  // {
  //   id: crypto.randomUUID(),
  //   task: "Go to market",
  //   priority: "Medium",
  //   state: "In Progress",
  // },
  // {
  //   id: crypto.randomUUID(),
  //   task: "Restart Learning Solidworks",
  //   priority: "High",
  //   state: "To Do",
  // },
  // {
  //   id: crypto.randomUUID(),
  //   task: "Change slider to croll",
  //   priority: "High",
  //   state: "Done",
  // },
  // {
  //   id: crypto.randomUUID(),
  //   task: "To publish the article",
  //   priority: "Medium",
  //   state: "In Progress",
  // }
]

const taskContent = document.querySelector('.tasks-content')
const modal = document.querySelector('.form')
const closeModal = modal.querySelector('.form-container > p')
const btnNewTask = document.querySelector('.list .header button')

// Form
const inputTitle = document.getElementById('title')
const selectPriority = document.getElementById('priority')
const selectState = document.getElementById('state')
const btnSubmit = document.querySelector('.btn-submit button')

let currentTask = ''

function deleteTask (e) {
  let task = e.target.parentNode.parentNode
  let id = task.id
  task.remove()
}

function editTask (e) {
  const task = e.target.parentNode.parentNode
  let $title = task.querySelector('.task > .title p').textContent
  let $priority = task.querySelector('.task .priority p').textContent
  let $state = task.querySelector('.task .state > span').textContent

  inputTitle.value = $title
  for (let i = 0; i < selectPriority.options.length; i++) {
    if ( $priority === selectPriority.options[i].value) {
      selectPriority.selectedIndex = i
      break
    }
  }
  for (let i = 0; i < selectState.options.length; i++) {
    if ( $state === selectState.options[i].value) {
      selectState.selectedIndex = i
      break
    }
  }
  modal.classList.add('active')
  currentTask = task
}

function createTask (id, task, priority, state, edit = false) {
  let progress = '0deg'
  if (state === 'Done') progress = '360deg'
  else if (state === 'In Progress') progress = '180deg'

  if (!edit) {
    let newTask = `
      <li class='task' id='${id}'>
        <div class='title info'>
          <span>Task</span>
          <p>${task}</p>
        </div>
        <div class='priority info ${priority.toLowerCase()}'>
          <span>Priority</span>
          <p>${priority}</p>
        </div>
        <div class='state'>
          <span>${state}</span>
        </div>
        <span class='progress-bar' style="--progress: ${progress}"></span>
        <div class='icons'>
          <ion-icon name="create-outline" onclick="editTask(event)"></ion-icon>
          <ion-icon name="trash-outline" onclick="deleteTask(event)"></ion-icon>
          <ion-icon name="checkmark-done-outline" onclick="finishTask(event)"></ion-icon>
        </div>
      </li>
    `
    taskContent.innerHTML += newTask
  } else {
    currentTask.querySelector('.task > .title p').innerText = task
    let $priority = currentTask.querySelector('.task .priority')
    $priority.classList.remove($priority.querySelector('p').textContent.toLowerCase())
    $priority.classList.add(priority.toLowerCase())
    $priority.querySelector('p').textContent = priority
    currentTask.querySelector('.task .priority p').textContent = priority
    currentTask.querySelector('.task .state > span').textContent = state
    currentTask.querySelector('.task > span').style.setProperty('--progress', progress)

    currentTask = ''
  }
}

initialList?.forEach(item => {
  const {id, task, priority, state } = item
  createTask(id, task, priority, state)
})

modal.addEventListener('click', (e) => {
  e.target.classList.remove('active')
  // inputTitle.value = ''
  // selectPriority.selectedIndex = 0
  // selectState.selectedIndex = 0
  e.stopPropagation()
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('active')
})

btnNewTask.onclick = () => {
  modal.classList.add('active')
}

inputTitle.addEventListener('input', (e) => {
  if (e.target.value) {
    inputTitle.parentNode.classList.remove('error')
  }
})

btnSubmit.addEventListener('click', () => {
  if (!inputTitle.value) {
    inputTitle.parentNode.classList.add('error')
  }

  if (currentTask !== '') {
    createTask(null, inputTitle.value, selectPriority.value, selectState.value, true)
  } else {
    try {
      let newTask = {
        id: crypto.randomUUID(),
        task: inputTitle.value,
        priority: selectPriority.value,
        state: selectState.value
      }
  
      createTask(newTask.id, newTask.task, newTask.priority, newTask.state)
      window.scroll({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      })
    } catch (e) {
      throw new Error(`Error al crear nueva tarea: ${e}`)
    }
  }

  modal.classList.remove('active')
  inputTitle.value = ''
  selectPriority.selectedIndex = 0
  selectState.selectedIndex = 0
})