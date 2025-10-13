import toast from 'svelte-french-toast';

export const toastSuccess = (message: string) => {
	toast.success(message, {
		className: '!bg-emerald-600 !text-white !rounded-full !p-0 !pl-1',
		iconTheme: {
			primary: '#fff',
			secondary: '#00bc7d'
		}
	});
};

export const toastError = (message: string) => {
	toast.error(message, {
		className: '!bg-primary !text-white !rounded-full !p-0 !pl-1',
		iconTheme: {
			primary: '#fff',
			secondary: '#be0e23'
		}
	});
};
