/* eslint-disable */
import * as Types from '../../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetFacilityRankingsQueryVariables = Types.Exact<{
  metric: Types.Scalars['String'];
  tags?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>>;
}>;


export type GetFacilityRankingsQuery = (
  { __typename?: 'Query' }
  & { facilityRankings?: Types.Maybe<(
    { __typename?: 'FacilityRankingsConnection' }
    & { nodes: Array<(
      { __typename?: 'FacilityRanking' }
      & Pick<Types.FacilityRanking, 'rank' | 'tags' | 'value'>
      & { facility?: Types.Maybe<(
        { __typename?: 'Facility' }
        & Pick<Types.Facility, 'slug'>
      )> }
    )> }
  )> }
);


export const GetFacilityRankingsDocument = gql`
    query getFacilityRankings($metric: String!, $tags: [String]) {
  facilityRankings(metric: $metric, tags: $tags) {
    nodes {
      facility {
        slug
      }
      rank
      tags
      value
    }
  }
}
    `;

/**
 * __useGetFacilityRankingsQuery__
 *
 * To run a query within a React component, call `useGetFacilityRankingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFacilityRankingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFacilityRankingsQuery({
 *   variables: {
 *      metric: // value for 'metric'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useGetFacilityRankingsQuery(baseOptions: Apollo.QueryHookOptions<GetFacilityRankingsQuery, GetFacilityRankingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFacilityRankingsQuery, GetFacilityRankingsQueryVariables>(GetFacilityRankingsDocument, options);
      }
export function useGetFacilityRankingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFacilityRankingsQuery, GetFacilityRankingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFacilityRankingsQuery, GetFacilityRankingsQueryVariables>(GetFacilityRankingsDocument, options);
        }
export type GetFacilityRankingsQueryHookResult = ReturnType<typeof useGetFacilityRankingsQuery>;
export type GetFacilityRankingsLazyQueryHookResult = ReturnType<typeof useGetFacilityRankingsLazyQuery>;
export type GetFacilityRankingsQueryResult = Apollo.QueryResult<GetFacilityRankingsQuery, GetFacilityRankingsQueryVariables>;