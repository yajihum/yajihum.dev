import { createClient, MicroCMSQueries } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? '',
  apiKey: process.env.MICROCMS_API_KEY ?? '',
});

export type Memo = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};
export type MemoResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Memo[];
};

export const getMemos = async (queries?: MicroCMSQueries) => {
  return await client.get<MemoResponse>({ endpoint: 'memorandum', queries });
};

export const getMemoDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Memo>({
    endpoint: 'memorandum',
    contentId,
    queries,
  });
};
