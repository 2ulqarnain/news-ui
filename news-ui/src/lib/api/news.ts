import { PUBLIC_SERVER_URL } from '$env/static/public';
import type { ErrorResponse } from '$lib/models/http';
import type { News } from '$lib/models/News';

type GetAllNews_Response = {
	ok: boolean;
	message: string;
	data: News[];
};

export const getAllNews = async (): Promise<GetAllNews_Response['data']> => {
	try {
		const response = await fetch(PUBLIC_SERVER_URL + '/news');
		const decodedJson = await response.json();
		return decodedJson?.data ?? [];
	} catch (err) {
		return [];
	}
};

type CrawlAPI_Response = {
	ok: boolean;
	message: string;
};
export const crawl = async (): Promise<CrawlAPI_Response> => {
	try {
		const response = await fetch(PUBLIC_SERVER_URL + '/crawl');
		if (!response.ok) throw await response.json();
		const data = (await response.json()) as CrawlAPI_Response;
		return data;
	} catch (err) {
		return { ok: false, message: (err as ErrorResponse).message };
	}
};
