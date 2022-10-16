import { GraphQLClient } from "graphql-request";

interface GraphQLReq {
  query: any;
  variables?: any;
  includeDrafts?: any;
  excludeInvalid?: any;
}

export function request({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: GraphQLReq) {
  const headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };
  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }
  const client = new GraphQLClient("https://graphql.datocms.com", { headers });
  return client.request(query, variables);
}
