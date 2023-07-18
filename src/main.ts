import './style.scss';
import { ItemHeader } from './components/ItemHeader';
import { Separator } from './components/Separator';
import employees from './data/employees.json';
import { Employee } from './components/Employee';
import { IEmployee } from './interfaces';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/*html*/ `

${ItemHeader('Interactive Buttons')}
<div class="flex gap-2" x-data="{message: ''}">
	<button class="btn-primary" @click="message = 'copied'">Copy</button>
	<button class="btn-primary" @click="message = 'sent'">Send</button>
	<button class="btn-primary" @click="message = 'saved'">Save</button>
	<button class="btn-danger" @click="message = 'deleted'">Delete</button>
	<div class="text-gray-500 text-3xl" x-text="message"></div>		
</div>
${Separator()}

${ItemHeader('Employee Cards')}

${employees.map((employee:IEmployee) => {
	return `${Employee(employee)}`;
}).join('')}
${Separator()}

${ItemHeader('Feature 3')}
<div class="text-gray-400">(todo)</div>
${Separator()}

${ItemHeader('Feature 4')}
<div class="text-gray-400">(todo)</div>
${Separator()}
`
