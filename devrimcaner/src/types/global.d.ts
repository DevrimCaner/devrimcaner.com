interface BlogPost {
    title: string;
    link: string;
    pubDate: string;
    description?: string;
    content?: string;
    'content:encoded'?: string;
    'dc:creator'?: string;
    category: string[];
}
  