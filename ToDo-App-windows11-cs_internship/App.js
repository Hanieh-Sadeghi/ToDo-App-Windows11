window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const listEl = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		if (!task) {
			alert("please fill out the task");
			return;
		}
		const taskEl = document.createElement('div'); // <div></div>
		taskEl.classList.add('task'); // <div class="task"></div>

		const taskContent = document.createElement('div'); // <div></div>
		taskContent.classList.add('content'); // <div class="content"></div>

		taskEl.appendChild(taskContent);

		const taskInput = document.createElement('input'); // <input>
		taskInput.classList.add('text'); // <input class=text>
		taskInput.type = 'text'; // <input class=text type=text>
		taskInput.value = task; // <input class=text type=text value=task>
		taskInput.setAttribute('readonly', 'readonly');

		taskContent.appendChild(taskInput);

		const taskActions = document.createElement('div'); // <div></div>
		taskActions.classList.add('actions');// <div class=action></div>

		const taskEdit = document.createElement('button');
		taskEdit.classList.add('edit');
		taskEdit.innerText = 'Edit';

		const taskDelete = document.createElement('button');
		taskDelete.classList.add('delete');
		taskDelete.innerText = 'Delete';

		taskActions.appendChild(taskEdit);
		taskActions.appendChild(taskDelete);

		taskEl.appendChild(taskActions);

		listEl.appendChild(taskEl);

		input.value = '';

		taskEdit.addEventListener('click', (e) => {
			if (taskEdit.innerText.toLowerCase() == "edit") {
				taskEdit.innerText = "Save";
				taskInput.removeAttribute("readonly");
				taskInput.focus();
			} else {
				taskEdit.innerText = "Edit";
				taskInput.setAttribute("readonly", "readonly"); //read 
			}
		});

		taskDelete.addEventListener('click', (e) => {
			listEl.removeChild(taskEl);
		});

		taskInput.addEventListener('change', (e) => {
			if (e.target.checked) {
				taskEl.classList.add('completed');
			} else {
				taskEl.classList.remove
			}
	
		});

	});

});

let dayHistory = document.querySelector('.History');

let today = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let formattedDate = today.toLocaleDateString('en-US', options);

dayHistory.innerHTML = formattedDate;
console.log(formattedDate);

