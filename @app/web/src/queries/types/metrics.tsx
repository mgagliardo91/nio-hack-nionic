/* eslint-disable */
import * as Types from '../../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetFacilityMetricsQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
  from: Types.Scalars['Datetime'];
  to: Types.Scalars['Datetime'];
}>;


export type GetFacilityMetricsQuery = (
  { __typename?: 'Query' }
  & { facilities?: Types.Maybe<(
    { __typename?: 'FacilitiesConnection' }
    & { nodes: Array<(
      { __typename?: 'Facility' }
      & Pick<Types.Facility, 'slug'>
      & { metrics: (
        { __typename?: 'MetricsConnection' }
        & { nodes: Array<(
          { __typename?: 'Metric' }
          & Pick<Types.Metric, 'time' | 'avg'>
        )> }
      ) }
    )> }
  )> }
);


export const GetFacilityMetricsDocument = gql`
    query getFacilityMetrics($name: String!, $from: Datetime!, $to: Datetime!) {
  facilities {
    nodes {
      slug
      metrics(name: $name, filter: {time: {greaterThan: $from, lessThan: $to}}) {
        nodes {
          time
          avg
        }
      }
    }
  }
}
    `;

/**
 * __useGetFacilityMetricsQuery__
 *
 * To run a query within a React component, call `useGetFacilityMetricsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFacilityMetricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFacilityMetricsQuery({
 *   variables: {
 *      name: // value for 'name'
 *      from: // value for 'from'
 *      to: // value for 'to'
 *   },
 * });
 */
export function useGetFacilityMetricsQuery(baseOptions: Apollo.QueryHookOptions<GetFacilityMetricsQuery, GetFacilityMetricsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFacilityMetricsQuery, GetFacilityMetricsQueryVariables>(GetFacilityMetricsDocument, options);
      }
export function useGetFacilityMetricsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFacilityMetricsQuery, GetFacilityMetricsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFacilityMetricsQuery, GetFacilityMetricsQueryVariables>(GetFacilityMetricsDocument, options);
        }
export type GetFacilityMetricsQueryHookResult = ReturnType<typeof useGetFacilityMetricsQuery>;
export type GetFacilityMetricsLazyQueryHookResult = ReturnType<typeof useGetFacilityMetricsLazyQuery>;
export type GetFacilityMetricsQueryResult = Apollo.QueryResult<GetFacilityMetricsQuery, GetFacilityMetricsQueryVariables>;