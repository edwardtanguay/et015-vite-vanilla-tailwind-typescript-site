import { IEmployee } from '../interfaces';

export const Employee = (employee: IEmployee) => {
	return `
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4">
	<img class="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://edwardtanguay.vercel.app/share/images/employees/employee_${employee.employeeID}.jpg" alt="">
	<div class="flex flex-col justify-between p-4 leading-normal">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${employee.firstName} ${employee.lastName}</h5>
		<p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">${employee.notes}</p>
	</div>
</a>
`
}