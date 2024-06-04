import type { NextApiRequest, NextApiResponse } from 'next';
import Parser from 'rss-parser';

const parser = new Parser();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const feed = await parser.parseURL('https://medium.com/feed/@fkadev');
  res.status(200).json(feed);
}
