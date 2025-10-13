import { getAllNews } from '$lib/api/news';
import type { News } from '$lib/models/News';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (): Promise<{ news: News[] }> => {
	try {
		const news = await getAllNews();
		return { news };
	} catch (e) {
		console.error(e);
		return { news: [] };
	}
};
