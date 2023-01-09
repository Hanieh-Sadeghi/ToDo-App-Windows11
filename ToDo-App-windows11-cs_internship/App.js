
window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		if (!task) {
			alert("please fill out the task");
			return;
		}
		const task_el = document.createElement('div'); // <div></div>
		task_el.classList.add('task'); // <div class="task"></div>

		const task_content_el = document.createElement('div'); // <div></div>
		task_content_el.classList.add('content'); // <div class="content"></div>

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input'); // <input>
		task_input_el.classList.add('text'); // <input class=text>
		task_input_el.type = 'text'; // <input class=text type=text>
		task_input_el.value = task; // <input class=text type=text value=task>
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div'); // <div></div>
		task_actions_el.classList.add('actions');// <div class=action></div>

		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly"); //read 
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
})


