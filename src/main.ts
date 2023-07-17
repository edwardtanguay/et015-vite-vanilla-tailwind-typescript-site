import './style.scss';
import Separator from './components/Separator';

// this works

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/*html*/ `
<div class="flex gap-6" x-data="{message: ''}">
	<button class="btn btn-primary" @click="message = 'create the page'">Create Page</button>
	<button class="btn btn-secondary" @click="message = 'get information'">Get Information</button>
	<button class="btn btn-danger" @click="message = 'delete layout'">Delete Layout</button>
	<div class="text-gray-500 text-3xl" x-text="message"></div>
</div>
${Separator()}

`
