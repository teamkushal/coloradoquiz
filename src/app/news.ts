import { NewsItem } from './news-item';

export interface News {
    title: string;
    dateCreated: string;
    newsItems: NewsItem[];
}
