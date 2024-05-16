import type { Tag } from '../entities/Tag';

export interface ITagRepository {
	getAll(): Promise<Tag[]>;
}