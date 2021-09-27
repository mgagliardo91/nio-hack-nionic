/* eslint-disable */
import * as Types from '../../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetFacilitiesByOrganizationQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
}>;


export type GetFacilitiesByOrganizationQuery = (
  { __typename?: 'Query' }
  & { organizationBySlug?: Types.Maybe<(
    { __typename?: 'Organization' }
    & { facilities: (
      { __typename?: 'FacilitiesConnection' }
      & { nodes: Array<(
        { __typename?: 'Facility' }
        & Pick<Types.Facility, 'id' | 'slug' | 'name' | 'tags'>
      )> }
    ) }
  )> }
);

export type CreateFacilityMutationVariables = Types.Exact<{
  facility: Types.FacilityInput;
}>;


export type CreateFacilityMutation = (
  { __typename?: 'Mutation' }
  & { createFacility?: Types.Maybe<(
    { __typename?: 'CreateFacilityPayload' }
    & { facility?: Types.Maybe<(
      { __typename?: 'Facility' }
      & Pick<Types.Facility, 'id' | 'name' | 'slug' | 'tags'>
    )> }
  )> }
);

export type UpdateFacilityMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  facility: Types.FacilityPatch;
}>;


export type UpdateFacilityMutation = (
  { __typename?: 'Mutation' }
  & { updateFacility?: Types.Maybe<(
    { __typename?: 'UpdateFacilityPayload' }
    & { facility?: Types.Maybe<(
      { __typename?: 'Facility' }
      & Pick<Types.Facility, 'id' | 'name' | 'slug' | 'tags'>
    )> }
  )> }
);

export type GetDistinctTagsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetDistinctTagsQuery = (
  { __typename?: 'Query' }
  & Pick<Types.Query, 'facilityDistinctTags'>
);


export const GetFacilitiesByOrganizationDocument = gql`
    query getFacilitiesByOrganization($slug: String!) {
  organizationBySlug(slug: $slug) {
    facilities {
      nodes {
        id
        slug
        name
        tags
      }
    }
  }
}
    `;

/**
 * __useGetFacilitiesByOrganizationQuery__
 *
 * To run a query within a React component, call `useGetFacilitiesByOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFacilitiesByOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFacilitiesByOrganizationQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetFacilitiesByOrganizationQuery(baseOptions: Apollo.QueryHookOptions<GetFacilitiesByOrganizationQuery, GetFacilitiesByOrganizationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFacilitiesByOrganizationQuery, GetFacilitiesByOrganizationQueryVariables>(GetFacilitiesByOrganizationDocument, options);
      }
export function useGetFacilitiesByOrganizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFacilitiesByOrganizationQuery, GetFacilitiesByOrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFacilitiesByOrganizationQuery, GetFacilitiesByOrganizationQueryVariables>(GetFacilitiesByOrganizationDocument, options);
        }
export type GetFacilitiesByOrganizationQueryHookResult = ReturnType<typeof useGetFacilitiesByOrganizationQuery>;
export type GetFacilitiesByOrganizationLazyQueryHookResult = ReturnType<typeof useGetFacilitiesByOrganizationLazyQuery>;
export type GetFacilitiesByOrganizationQueryResult = Apollo.QueryResult<GetFacilitiesByOrganizationQuery, GetFacilitiesByOrganizationQueryVariables>;
export const CreateFacilityDocument = gql`
    mutation createFacility($facility: FacilityInput!) {
  createFacility(input: {facility: $facility}) {
    facility {
      id
      name
      slug
      tags
    }
  }
}
    `;
export type CreateFacilityMutationFn = Apollo.MutationFunction<CreateFacilityMutation, CreateFacilityMutationVariables>;

/**
 * __useCreateFacilityMutation__
 *
 * To run a mutation, you first call `useCreateFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFacilityMutation, { data, loading, error }] = useCreateFacilityMutation({
 *   variables: {
 *      facility: // value for 'facility'
 *   },
 * });
 */
export function useCreateFacilityMutation(baseOptions?: Apollo.MutationHookOptions<CreateFacilityMutation, CreateFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFacilityMutation, CreateFacilityMutationVariables>(CreateFacilityDocument, options);
      }
export type CreateFacilityMutationHookResult = ReturnType<typeof useCreateFacilityMutation>;
export type CreateFacilityMutationResult = Apollo.MutationResult<CreateFacilityMutation>;
export type CreateFacilityMutationOptions = Apollo.BaseMutationOptions<CreateFacilityMutation, CreateFacilityMutationVariables>;
export const UpdateFacilityDocument = gql`
    mutation updateFacility($id: Int!, $facility: FacilityPatch!) {
  updateFacility(input: {id: $id, patch: $facility}) {
    facility {
      id
      name
      slug
      tags
    }
  }
}
    `;
export type UpdateFacilityMutationFn = Apollo.MutationFunction<UpdateFacilityMutation, UpdateFacilityMutationVariables>;

/**
 * __useUpdateFacilityMutation__
 *
 * To run a mutation, you first call `useUpdateFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFacilityMutation, { data, loading, error }] = useUpdateFacilityMutation({
 *   variables: {
 *      id: // value for 'id'
 *      facility: // value for 'facility'
 *   },
 * });
 */
export function useUpdateFacilityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFacilityMutation, UpdateFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFacilityMutation, UpdateFacilityMutationVariables>(UpdateFacilityDocument, options);
      }
export type UpdateFacilityMutationHookResult = ReturnType<typeof useUpdateFacilityMutation>;
export type UpdateFacilityMutationResult = Apollo.MutationResult<UpdateFacilityMutation>;
export type UpdateFacilityMutationOptions = Apollo.BaseMutationOptions<UpdateFacilityMutation, UpdateFacilityMutationVariables>;
export const GetDistinctTagsDocument = gql`
    query getDistinctTags {
  facilityDistinctTags
}
    `;

/**
 * __useGetDistinctTagsQuery__
 *
 * To run a query within a React component, call `useGetDistinctTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDistinctTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDistinctTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDistinctTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetDistinctTagsQuery, GetDistinctTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDistinctTagsQuery, GetDistinctTagsQueryVariables>(GetDistinctTagsDocument, options);
      }
export function useGetDistinctTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDistinctTagsQuery, GetDistinctTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDistinctTagsQuery, GetDistinctTagsQueryVariables>(GetDistinctTagsDocument, options);
        }
export type GetDistinctTagsQueryHookResult = ReturnType<typeof useGetDistinctTagsQuery>;
export type GetDistinctTagsLazyQueryHookResult = ReturnType<typeof useGetDistinctTagsLazyQuery>;
export type GetDistinctTagsQueryResult = Apollo.QueryResult<GetDistinctTagsQuery, GetDistinctTagsQueryVariables>;