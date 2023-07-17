import './style.scss';
import Separator from './components/Separator';

// this works

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/*html*/ `
<div class="flex gap-6">
	<button class="btn btn-primary">Create Page</button>
	<button class="btn btn-danger">Delete</button>
</div>
${Separator()}

`
