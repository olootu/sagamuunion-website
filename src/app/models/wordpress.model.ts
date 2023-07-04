export interface Wordpress {
    id: string;
    date: Date;
    date_gmt: string;
    guid: Guid;
    modified: string;
    modified_gmt: string;
    modifiedslug_gmt: string;
    type: string;
    link: string;
    title: Guid;
    content: ContentProtected;
    excerpt: ContentProtected;
    categories: [];
    tags: [];
    featured_url: string;
    _links: [];
}

export interface Guid {
    rendered: string;
}

export interface ContentProtected {
    rendered: string;
    protected?: boolean;
}

//  export class Links {
//      rendered: string;
//      protected?: boolean;
//  }
