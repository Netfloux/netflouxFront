export interface StrapiResponse<T> {
	data: T[];
	meta: {
		pagination: StrapiPagination;
	}
}

export interface StrapiPagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}