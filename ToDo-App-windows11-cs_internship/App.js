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
		const taskEl = document.createElement('div');
		taskEl.classList.add('task');

		const taskContent = document.createElement('div');
		taskContent.classList.add('content');

		taskEl.appendChild(taskContent);

		const taskInput = document.createElement('input');
		taskInput.classList.add('text');
		taskInput.type = 'text';
		taskInput.value = task;
		taskInput.setAttribute('readonly', 'readonly');

		taskContent.appendChild(taskInput);

		const taskActions = document.createElement('div');
		taskActions.classList.add('actions');

		const taskEdit = document.createElement('button');
		taskEdit.classList.add('edit');
		taskEdit.innerText = 'Edit';

		const taskDelete = document.createElement('button');
		taskDelete.classList.add('delete');
		taskDelete.innerText = 'Delete';

		taskActions.appendChild(taskEdit);
		taskActions.appendChild(taskDelete);

		taskEl.appendChild(taskActions);

		const taskCheckbox = document.createElement('input');
		taskCheckbox.classList.add('checkbox');
		taskCheckbox.type = 'checkbox';

		taskEl.insertBefore(taskCheckbox, taskContent);

		listEl.appendChild(taskEl);

		input.value = '';

		taskEdit.addEventListener('click', (e) => {
			if (taskEdit.innerText.toLowerCase() == "edit") {
				taskEdit.innerText = "Save";
				taskInput.removeAttribute("readonly");
				taskInput.focus();
			} else {
				taskEdit.innerText = "Edit";
				taskInput.setAttribute("readonly", "readonly");
			}
		});

		taskDelete.addEventListener('click', (e) => {
			listEl.removeChild(taskEl);
		});

		taskCheckbox.addEventListener('change', (e) => {
			if (e.target.checked) {
				taskEl.classList.add('completed');
			} else {
				taskEl.classList.remove('completed');
			}
		});
	});
	const select = document.querySelector(".Tasks1");

	select.addEventListener("change", function (e) {
		const selectedOption = this.options[this.selectedIndex].value;
		const tasks = document.querySelectorAll('.task');

		tasks.forEach(task => {
			if (selectedOption === "all") {
				task.style.display = "flex";
			} else if (selectedOption === "completed" && task.classList.contains("completed")) {
				task.style.display = "flex";
			} else if (selectedOption === "Active" && !task.classList.contains("completed")) {
				task.style.display = "flex";
			} else {
				task.style.display = "none";
			}
		});
	});

	const dayhistory = document.querySelector('.history');
	const today = new Date();
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const formattedDate = today.toLocaleDateString('en-US', options);

	dayhistory.innerHTML = formattedDate;
	console.log(formattedDate);
});
