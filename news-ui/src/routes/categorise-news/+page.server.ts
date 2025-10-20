import { PUBLIC_SERVER_URL } from '$env/static/public';
import { getAllNews } from '$lib/api/news';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const news = await getAllNews();
		return { news };
	} catch (e) {
		console.error(e);
		return { news: [] };
	}
};
