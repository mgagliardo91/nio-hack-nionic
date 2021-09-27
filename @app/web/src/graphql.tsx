/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Branch = {
  __typename?: 'Branch';
  facilityId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Datetime']>;
  value?: Maybe<Scalars['Float']>;
};

/** A condition to be used against `Branch` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BranchCondition = {
  /** Checks for equality with the object’s `facilityId` field. */
  facilityId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `time` field. */
  time?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `value` field. */
  value?: Maybe<Scalars['Float']>;
};

/** A filter to be used against `Branch` object types. All fields are combined with a logical ‘and.’ */
export type BranchFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<BranchFilter>>;
  /** Filter by the object’s `facilityId` field. */
  facilityId?: Maybe<IntFilter>;
  /** Negates the expression. */
  not?: Maybe<BranchFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<BranchFilter>>;
  /** Filter by the object’s `time` field. */
  time?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `value` field. */
  value?: Maybe<FloatFilter>;
};

/** A connection to a list of `Branch` values. */
export type BranchesConnection = {
  __typename?: 'BranchesConnection';
  /** A list of edges which contains the `Branch` and cursor to aid in pagination. */
  edges: Array<BranchesEdge>;
  /** A list of `Branch` objects. */
  nodes: Array<Branch>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Branch` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Branch` edge in the connection. */
export type BranchesEdge = {
  __typename?: 'BranchesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Branch` at the end of the edge. */
  node: Branch;
};

/** Methods to use when ordering `Branch`. */
export enum BranchesOrderBy {
  FACILITY_ID_ASC = 'FACILITY_ID_ASC',
  FACILITY_ID_DESC = 'FACILITY_ID_DESC',
  NATURAL = 'NATURAL',
  TIME_ASC = 'TIME_ASC',
  TIME_DESC = 'TIME_DESC',
  VALUE_ASC = 'VALUE_ASC',
  VALUE_DESC = 'VALUE_DESC'
}

/** All input for the create `Device` mutation. */
export type CreateDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Device` to be created by this mutation. */
  device: DeviceInput;
};

/** The output of our create `Device` mutation. */
export type CreateDevicePayload = {
  __typename?: 'CreateDevicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Device` that was created by this mutation. */
  device?: Maybe<Device>;
  /** An edge for our `Device`. May be used by Relay 1. */
  deviceEdge?: Maybe<DevicesEdge>;
  /** Reads a single `Facility` that is related to this `Device`. */
  facility?: Maybe<Facility>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Device` mutation. */
export type CreateDevicePayloadDeviceEdgeArgs = {
  orderBy?: Maybe<Array<DevicesOrderBy>>;
};

/** All input for the create `Facility` mutation. */
export type CreateFacilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Facility` to be created by this mutation. */
  facility: FacilityInput;
};

/** The output of our create `Facility` mutation. */
export type CreateFacilityPayload = {
  __typename?: 'CreateFacilityPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Facility` that was created by this mutation. */
  facility?: Maybe<Facility>;
  /** An edge for our `Facility`. May be used by Relay 1. */
  facilityEdge?: Maybe<FacilitiesEdge>;
  /** Reads a single `Organization` that is related to this `Facility`. */
  organization?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Facility` mutation. */
export type CreateFacilityPayloadFacilityEdgeArgs = {
  orderBy?: Maybe<Array<FacilitiesOrderBy>>;
};

/** All input for the create `MetricDefinition` mutation. */
export type CreateMetricDefinitionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MetricDefinition` to be created by this mutation. */
  metricDefinition: MetricDefinitionInput;
};

/** The output of our create `MetricDefinition` mutation. */
export type CreateMetricDefinitionPayload = {
  __typename?: 'CreateMetricDefinitionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MetricDefinition` that was created by this mutation. */
  metricDefinition?: Maybe<MetricDefinition>;
  /** An edge for our `MetricDefinition`. May be used by Relay 1. */
  metricDefinitionEdge?: Maybe<MetricDefinitionsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `MetricDefinition` mutation. */
export type CreateMetricDefinitionPayloadMetricDefinitionEdgeArgs = {
  orderBy?: Maybe<Array<MetricDefinitionsOrderBy>>;
};

/** All input for the create `Organization` mutation. */
export type CreateOrganizationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Organization` to be created by this mutation. */
  organization: OrganizationInput;
};

/** The output of our create `Organization` mutation. */
export type CreateOrganizationPayload = {
  __typename?: 'CreateOrganizationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Organization` that was created by this mutation. */
  organization?: Maybe<Organization>;
  /** An edge for our `Organization`. May be used by Relay 1. */
  organizationEdge?: Maybe<OrganizationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Organization` mutation. */
export type CreateOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: Maybe<Array<OrganizationsOrderBy>>;
};

/** All input for the create `Reading` mutation. */
export type CreateReadingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Reading` to be created by this mutation. */
  reading: ReadingInput;
};

/** The output of our create `Reading` mutation. */
export type CreateReadingPayload = {
  __typename?: 'CreateReadingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Device` that is related to this `Reading`. */
  device?: Maybe<Device>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Reading` that was created by this mutation. */
  reading?: Maybe<Reading>;
  /** An edge for our `Reading`. May be used by Relay 1. */
  readingEdge?: Maybe<ReadingsEdge>;
};


/** The output of our create `Reading` mutation. */
export type CreateReadingPayloadReadingEdgeArgs = {
  orderBy?: Maybe<Array<ReadingsOrderBy>>;
};



/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Datetime']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Datetime']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Datetime']>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Datetime']>>;
};

/** All input for the `deleteDeviceByNodeId` mutation. */
export type DeleteDeviceByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Device` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteDeviceBySlug` mutation. */
export type DeleteDeviceBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The device’s description. */
  slug: Scalars['String'];
};

/** All input for the `deleteDevice` mutation. */
export type DeleteDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The primary unique identifier for the device. */
  id: Scalars['Int'];
};

/** The output of our delete `Device` mutation. */
export type DeleteDevicePayload = {
  __typename?: 'DeleteDevicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedDeviceNodeId?: Maybe<Scalars['ID']>;
  /** The `Device` that was deleted by this mutation. */
  device?: Maybe<Device>;
  /** An edge for our `Device`. May be used by Relay 1. */
  deviceEdge?: Maybe<DevicesEdge>;
  /** Reads a single `Facility` that is related to this `Device`. */
  facility?: Maybe<Facility>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Device` mutation. */
export type DeleteDevicePayloadDeviceEdgeArgs = {
  orderBy?: Maybe<Array<DevicesOrderBy>>;
};

/** All input for the `deleteFacilityByNodeId` mutation. */
export type DeleteFacilityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Facility` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteFacilityBySlug` mutation. */
export type DeleteFacilityBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The facility’s slug. */
  slug: Scalars['String'];
};

/** All input for the `deleteFacility` mutation. */
export type DeleteFacilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The primary unique identifier for the facility. */
  id: Scalars['Int'];
};

/** The output of our delete `Facility` mutation. */
export type DeleteFacilityPayload = {
  __typename?: 'DeleteFacilityPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedFacilityNodeId?: Maybe<Scalars['ID']>;
  /** The `Facility` that was deleted by this mutation. */
  facility?: Maybe<Facility>;
  /** An edge for our `Facility`. May be used by Relay 1. */
  facilityEdge?: Maybe<FacilitiesEdge>;
  /** Reads a single `Organization` that is related to this `Facility`. */
  organization?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Facility` mutation. */
export type DeleteFacilityPayloadFacilityEdgeArgs = {
  orderBy?: Maybe<Array<FacilitiesOrderBy>>;
};

/** All input for the `deleteMetricDefinitionByName` mutation. */
export type DeleteMetricDefinitionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The metric’s name. */
  name: Scalars['String'];
};

/** All input for the `deleteMetricDefinitionByNodeId` mutation. */
export type DeleteMetricDefinitionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MetricDefinition` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMetricDefinition` mutation. */
export type DeleteMetricDefinitionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The id of the metric definition. */
  id: Scalars['Int'];
};

/** The output of our delete `MetricDefinition` mutation. */
export type DeleteMetricDefinitionPayload = {
  __typename?: 'DeleteMetricDefinitionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMetricDefinitionNodeId?: Maybe<Scalars['ID']>;
  /** The `MetricDefinition` that was deleted by this mutation. */
  metricDefinition?: Maybe<MetricDefinition>;
  /** An edge for our `MetricDefinition`. May be used by Relay 1. */
  metricDefinitionEdge?: Maybe<MetricDefinitionsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `MetricDefinition` mutation. */
export type DeleteMetricDefinitionPayloadMetricDefinitionEdgeArgs = {
  orderBy?: Maybe<Array<MetricDefinitionsOrderBy>>;
};

/** All input for the `deleteOrganizationByNodeId` mutation. */
export type DeleteOrganizationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organization` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteOrganizationBySlug` mutation. */
export type DeleteOrganizationBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The org’s slug. */
  slug: Scalars['String'];
};

/** All input for the `deleteOrganization` mutation. */
export type DeleteOrganizationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The primary unique identifier for the org. */
  id: Scalars['Int'];
};

/** The output of our delete `Organization` mutation. */
export type DeleteOrganizationPayload = {
  __typename?: 'DeleteOrganizationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedOrganizationNodeId?: Maybe<Scalars['ID']>;
  /** The `Organization` that was deleted by this mutation. */
  organization?: Maybe<Organization>;
  /** An edge for our `Organization`. May be used by Relay 1. */
  organizationEdge?: Maybe<OrganizationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Organization` mutation. */
export type DeleteOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: Maybe<Array<OrganizationsOrderBy>>;
};

/** A device producing data. */
export type Device = Node & {
  __typename?: 'Device';
  /** The time this device was created. */
  createdAt?: Maybe<Scalars['Datetime']>;
  description: Scalars['String'];
  /** Reads a single `Facility` that is related to this `Device`. */
  facility?: Maybe<Facility>;
  /** The device’s associated facility. */
  facilityId: Scalars['Int'];
  /** The primary unique identifier for the device. */
  id: Scalars['Int'];
  /** The device’s name. */
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Reading`. */
  readings: ReadingsConnection;
  /** The device’s description. */
  slug: Scalars['String'];
  /** The time this device was updated. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};


/** A device producing data. */
export type DeviceReadingsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<ReadingCondition>;
  filter?: Maybe<ReadingFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ReadingsOrderBy>>;
};

/** A condition to be used against `Device` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type DeviceCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `facilityId` field. */
  facilityId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `Device` object types. All fields are combined with a logical ‘and.’ */
export type DeviceFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<DeviceFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: Maybe<StringFilter>;
  /** Filter by the object’s `facilityId` field. */
  facilityId?: Maybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Negates the expression. */
  not?: Maybe<DeviceFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<DeviceFilter>>;
  /** Filter by the object’s `slug` field. */
  slug?: Maybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>;
};

/** An input for mutations affecting `Device` */
export type DeviceInput = {
  /** The time this device was created. */
  createdAt?: Maybe<Scalars['Datetime']>;
  description?: Maybe<Scalars['String']>;
  /** The device’s associated facility. */
  facilityId: Scalars['Int'];
  /** The primary unique identifier for the device. */
  id?: Maybe<Scalars['Int']>;
  /** The device’s name. */
  name: Scalars['String'];
  /** The device’s description. */
  slug: Scalars['String'];
  /** The time this device was updated. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Device`. Fields that are set will be updated. */
export type DevicePatch = {
  /** The time this device was created. */
  createdAt?: Maybe<Scalars['Datetime']>;
  description?: Maybe<Scalars['String']>;
  /** The device’s associated facility. */
  facilityId?: Maybe<Scalars['Int']>;
  /** The primary unique identifier for the device. */
  id?: Maybe<Scalars['Int']>;
  /** The device’s name. */
  name?: Maybe<Scalars['String']>;
  /** The device’s description. */
  slug?: Maybe<Scalars['String']>;
  /** The time this device was updated. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `Device` values. */
export type DevicesConnection = {
  __typename?: 'DevicesConnection';
  /** A list of edges which contains the `Device` and cursor to aid in pagination. */
  edges: Array<DevicesEdge>;
  /** A list of `Device` objects. */
  nodes: Array<Device>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Device` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Device` edge in the connection. */
export type DevicesEdge = {
  __typename?: 'DevicesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Device` at the end of the edge. */
  node: Device;
};

/** Methods to use when ordering `Device`. */
export enum DevicesOrderBy {
  CREATED_AT_ASC = 'CREATED_AT_ASC',
  CREATED_AT_DESC = 'CREATED_AT_DESC',
  DESCRIPTION_ASC = 'DESCRIPTION_ASC',
  DESCRIPTION_DESC = 'DESCRIPTION_DESC',
  FACILITY_ID_ASC = 'FACILITY_ID_ASC',
  FACILITY_ID_DESC = 'FACILITY_ID_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  SLUG_ASC = 'SLUG_ASC',
  SLUG_DESC = 'SLUG_DESC',
  UPDATED_AT_ASC = 'UPDATED_AT_ASC',
  UPDATED_AT_DESC = 'UPDATED_AT_DESC'
}

/** A connection to a list of `Facility` values. */
export type FacilitiesConnection = {
  __typename?: 'FacilitiesConnection';
  /** A list of edges which contains the `Facility` and cursor to aid in pagination. */
  edges: Array<FacilitiesEdge>;
  /** A list of `Facility` objects. */
  nodes: Array<Facility>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Facility` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Facility` edge in the connection. */
export type FacilitiesEdge = {
  __typename?: 'FacilitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Facility` at the end of the edge. */
  node: Facility;
};

/** Methods to use when ordering `Facility`. */
export enum FacilitiesOrderBy {
  CREATED_AT_ASC = 'CREATED_AT_ASC',
  CREATED_AT_DESC = 'CREATED_AT_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  NATURAL = 'NATURAL',
  ORGANIZATION_ID_ASC = 'ORGANIZATION_ID_ASC',
  ORGANIZATION_ID_DESC = 'ORGANIZATION_ID_DESC',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  SLUG_ASC = 'SLUG_ASC',
  SLUG_DESC = 'SLUG_DESC',
  TAGS_ASC = 'TAGS_ASC',
  TAGS_DESC = 'TAGS_DESC',
  UPDATED_AT_ASC = 'UPDATED_AT_ASC',
  UPDATED_AT_DESC = 'UPDATED_AT_DESC'
}

/** A facility. */
export type Facility = Node & {
  __typename?: 'Facility';
  /** Reads and enables pagination through a set of `Metric`. */
  branch: MetricsConnection;
  /** The time this facility was created. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `Device`. */
  devices: DevicesConnection;
  /** The primary unique identifier for the facility. */
  id: Scalars['Int'];
  /** Reads and enables pagination through a set of `Metric`. */
  john: MetricsConnection;
  /** Reads and enables pagination through a set of `Metric`. */
  metrics: MetricsConnection;
  /** Reads and enables pagination through a set of `Metric`. */
  michael: MetricsConnection;
  /** The facility’s name. */
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Organization` that is related to this `Facility`. */
  organization?: Maybe<Organization>;
  /** The facility’s associated organization. */
  organizationId: Scalars['Int'];
  /** Reads and enables pagination through a set of `Metric`. */
  rate: MetricsConnection;
  /** The facility’s slug. */
  slug: Scalars['String'];
  /** Reads and enables pagination through a set of `Metric`. */
  spend: MetricsConnection;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The time this facility was updated. */
  updatedAt?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `Metric`. */
  usage: MetricsConnection;
};


/** A facility. */
export type FacilityBranchArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<MetricFilter>;
  first?: Maybe<Scalars['Int']>;
  from: Scalars['Datetime'];
  interval?: Maybe<IntervalInput>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Datetime']>;
};


/** A facility. */
export type FacilityDevicesArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<DeviceCondition>;
  filter?: Maybe<DeviceFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DevicesOrderBy>>;
};


/** A facility. */
export type FacilityJohnArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<MetricFilter>;
  first?: Maybe<Scalars['Int']>;
  from: Scalars['Datetime'];
  interval?: Maybe<IntervalInput>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Datetime']>;
};


/** A facility. */
export type FacilityMetricsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<MetricFilter>;
  first?: Maybe<Scalars['Int']>;
  interval?: Maybe<IntervalInput>;
  last?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
};


/** A facility. */
export type FacilityMichaelArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<MetricFilter>;
  first?: Maybe<Scalars['Int']>;
  from: Scalars['Datetime'];
  interval?: Maybe<IntervalInput>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Datetime']>;
};


/** A facility. */
export type FacilityRateArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<MetricFilter>;
  first?: Maybe<Scalars['Int']>;
  from: Scalars['Datetime'];
  interval?: Maybe<IntervalInput>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Datetime']>;
};


/** A facility. */
export type FacilitySpendArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<MetricFilter>;
  first?: Maybe<Scalars['Int']>;
  from: Scalars['Datetime'];
  interval?: Maybe<IntervalInput>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Datetime']>;
};


/** A facility. */
export type FacilityUsageArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<MetricFilter>;
  first?: Maybe<Scalars['Int']>;
  from: Scalars['Datetime'];
  interval?: Maybe<IntervalInput>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Datetime']>;
};

/**
 * A condition to be used against `Facility` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FacilityCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `organizationId` field. */
  organizationId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `tags` field. */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `Facility` object types. All fields are combined with a logical ‘and.’ */
export type FacilityFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<FacilityFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Negates the expression. */
  not?: Maybe<FacilityFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<FacilityFilter>>;
  /** Filter by the object’s `organizationId` field. */
  organizationId?: Maybe<IntFilter>;
  /** Filter by the object’s `slug` field. */
  slug?: Maybe<StringFilter>;
  /** Filter by the object’s `tags` field. */
  tags?: Maybe<StringListFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>;
};

/** An input for mutations affecting `Facility` */
export type FacilityInput = {
  /** The time this facility was created. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** The primary unique identifier for the facility. */
  id?: Maybe<Scalars['Int']>;
  /** The facility’s name. */
  name: Scalars['String'];
  /** The facility’s associated organization. */
  organizationId: Scalars['Int'];
  /** The facility’s slug. */
  slug: Scalars['String'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The time this facility was updated. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Facility`. Fields that are set will be updated. */
export type FacilityPatch = {
  /** The time this facility was created. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** The primary unique identifier for the facility. */
  id?: Maybe<Scalars['Int']>;
  /** The facility’s name. */
  name?: Maybe<Scalars['String']>;
  /** The facility’s associated organization. */
  organizationId?: Maybe<Scalars['Int']>;
  /** The facility’s slug. */
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The time this facility was updated. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

export type FacilityRanking = {
  __typename?: 'FacilityRanking';
  facility?: Maybe<Facility>;
  rank?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  value?: Maybe<Scalars['Float']>;
};

/** A filter to be used against `FacilityRanking` object types. All fields are combined with a logical ‘and.’ */
export type FacilityRankingFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<FacilityRankingFilter>>;
  /** Negates the expression. */
  not?: Maybe<FacilityRankingFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<FacilityRankingFilter>>;
  /** Filter by the object’s `rank` field. */
  rank?: Maybe<IntFilter>;
  /** Filter by the object’s `tags` field. */
  tags?: Maybe<StringListFilter>;
  /** Filter by the object’s `value` field. */
  value?: Maybe<FloatFilter>;
};

/** A connection to a list of `FacilityRanking` values. */
export type FacilityRankingsConnection = {
  __typename?: 'FacilityRankingsConnection';
  /** A list of edges which contains the `FacilityRanking` and cursor to aid in pagination. */
  edges: Array<FacilityRankingsEdge>;
  /** A list of `FacilityRanking` objects. */
  nodes: Array<FacilityRanking>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FacilityRanking` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `FacilityRanking` edge in the connection. */
export type FacilityRankingsEdge = {
  __typename?: 'FacilityRankingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FacilityRanking` at the end of the edge. */
  node: FacilityRanking;
};

/** A filter to be used against Float fields. All fields are combined with a logical ‘and.’ */
export type FloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Float']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Float']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Float']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Float']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Float']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Float']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Float']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Float']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Float']>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Float']>>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Int']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Int']>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Int']>>;
};

/** An interval of time that has passed where the smallest distinct unit is a second. */
export type IntervalInput = {
  /** A quantity of days. */
  days?: Maybe<Scalars['Int']>;
  /** A quantity of hours. */
  hours?: Maybe<Scalars['Int']>;
  /** A quantity of minutes. */
  minutes?: Maybe<Scalars['Int']>;
  /** A quantity of months. */
  months?: Maybe<Scalars['Int']>;
  /**
   * A quantity of seconds. This is the only non-integer field, as all the other
   * fields will dump their overflow into a smaller unit of time. Intervals don’t
   * have a smaller unit than seconds.
   */
  seconds?: Maybe<Scalars['Float']>;
  /** A quantity of years. */
  years?: Maybe<Scalars['Int']>;
};


/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export type JsonFilter = {
  /** Contained by the specified JSON. */
  containedBy?: Maybe<Scalars['JSON']>;
  /** Contains the specified JSON. */
  contains?: Maybe<Scalars['JSON']>;
  /** Contains all of the specified keys. */
  containsAllKeys?: Maybe<Array<Scalars['String']>>;
  /** Contains any of the specified keys. */
  containsAnyKeys?: Maybe<Array<Scalars['String']>>;
  /** Contains the specified key. */
  containsKey?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['JSON']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['JSON']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['JSON']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['JSON']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['JSON']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['JSON']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['JSON']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['JSON']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['JSON']>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['JSON']>>;
};

export type John = {
  __typename?: 'John';
  facilityId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Datetime']>;
  value?: Maybe<Scalars['Float']>;
};

/** A condition to be used against `John` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type JohnCondition = {
  /** Checks for equality with the object’s `facilityId` field. */
  facilityId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `time` field. */
  time?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `value` field. */
  value?: Maybe<Scalars['Float']>;
};

/** A filter to be used against `John` object types. All fields are combined with a logical ‘and.’ */
export type JohnFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<JohnFilter>>;
  /** Filter by the object’s `facilityId` field. */
  facilityId?: Maybe<IntFilter>;
  /** Negates the expression. */
  not?: Maybe<JohnFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<JohnFilter>>;
  /** Filter by the object’s `time` field. */
  time?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `value` field. */
  value?: Maybe<FloatFilter>;
};

/** A connection to a list of `John` values. */
export type JohnsConnection = {
  __typename?: 'JohnsConnection';
  /** A list of edges which contains the `John` and cursor to aid in pagination. */
  edges: Array<JohnsEdge>;
  /** A list of `John` objects. */
  nodes: Array<John>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `John` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `John` edge in the connection. */
export type JohnsEdge = {
  __typename?: 'JohnsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `John` at the end of the edge. */
  node: John;
};

/** Methods to use when ordering `John`. */
export enum JohnsOrderBy {
  FACILITY_ID_ASC = 'FACILITY_ID_ASC',
  FACILITY_ID_DESC = 'FACILITY_ID_DESC',
  NATURAL = 'NATURAL',
  TIME_ASC = 'TIME_ASC',
  TIME_DESC = 'TIME_DESC',
  VALUE_ASC = 'VALUE_ASC',
  VALUE_DESC = 'VALUE_DESC'
}

export type Metric = {
  __typename?: 'Metric';
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  first?: Maybe<Scalars['Float']>;
  last?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Datetime']>;
};

/** The definition of a metric. */
export type MetricDefinition = Node & {
  __typename?: 'MetricDefinition';
  /** The description of the metric definition. */
  description?: Maybe<Scalars['String']>;
  /** The id of the metric definition. */
  id: Scalars['Int'];
  /** The metric’s name. */
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** The metric’s definition. */
  query: Scalars['String'];
  /** The facility’s tags. */
  units?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `MetricDefinition` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type MetricDefinitionCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `query` field. */
  query?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `units` field. */
  units?: Maybe<Scalars['String']>;
};

/** A filter to be used against `MetricDefinition` object types. All fields are combined with a logical ‘and.’ */
export type MetricDefinitionFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<MetricDefinitionFilter>>;
  /** Filter by the object’s `description` field. */
  description?: Maybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Negates the expression. */
  not?: Maybe<MetricDefinitionFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<MetricDefinitionFilter>>;
  /** Filter by the object’s `query` field. */
  query?: Maybe<StringFilter>;
  /** Filter by the object’s `units` field. */
  units?: Maybe<StringFilter>;
};

/** An input for mutations affecting `MetricDefinition` */
export type MetricDefinitionInput = {
  /** The description of the metric definition. */
  description?: Maybe<Scalars['String']>;
  /** The id of the metric definition. */
  id?: Maybe<Scalars['Int']>;
  /** The metric’s name. */
  name: Scalars['String'];
  /** The metric’s definition. */
  query: Scalars['String'];
  /** The facility’s tags. */
  units?: Maybe<Scalars['String']>;
};

/** Represents an update to a `MetricDefinition`. Fields that are set will be updated. */
export type MetricDefinitionPatch = {
  /** The description of the metric definition. */
  description?: Maybe<Scalars['String']>;
  /** The id of the metric definition. */
  id?: Maybe<Scalars['Int']>;
  /** The metric’s name. */
  name?: Maybe<Scalars['String']>;
  /** The metric’s definition. */
  query?: Maybe<Scalars['String']>;
  /** The facility’s tags. */
  units?: Maybe<Scalars['String']>;
};

/** A connection to a list of `MetricDefinition` values. */
export type MetricDefinitionsConnection = {
  __typename?: 'MetricDefinitionsConnection';
  /** A list of edges which contains the `MetricDefinition` and cursor to aid in pagination. */
  edges: Array<MetricDefinitionsEdge>;
  /** A list of `MetricDefinition` objects. */
  nodes: Array<MetricDefinition>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MetricDefinition` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `MetricDefinition` edge in the connection. */
export type MetricDefinitionsEdge = {
  __typename?: 'MetricDefinitionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MetricDefinition` at the end of the edge. */
  node: MetricDefinition;
};

/** Methods to use when ordering `MetricDefinition`. */
export enum MetricDefinitionsOrderBy {
  DESCRIPTION_ASC = 'DESCRIPTION_ASC',
  DESCRIPTION_DESC = 'DESCRIPTION_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  QUERY_ASC = 'QUERY_ASC',
  QUERY_DESC = 'QUERY_DESC',
  UNITS_ASC = 'UNITS_ASC',
  UNITS_DESC = 'UNITS_DESC'
}

/** A filter to be used against `Metric` object types. All fields are combined with a logical ‘and.’ */
export type MetricFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<MetricFilter>>;
  /** Filter by the object’s `avg` field. */
  avg?: Maybe<FloatFilter>;
  /** Filter by the object’s `count` field. */
  count?: Maybe<FloatFilter>;
  /** Filter by the object’s `first` field. */
  first?: Maybe<FloatFilter>;
  /** Filter by the object’s `last` field. */
  last?: Maybe<FloatFilter>;
  /** Filter by the object’s `max` field. */
  max?: Maybe<FloatFilter>;
  /** Filter by the object’s `min` field. */
  min?: Maybe<FloatFilter>;
  /** Negates the expression. */
  not?: Maybe<MetricFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<MetricFilter>>;
  /** Filter by the object’s `sum` field. */
  sum?: Maybe<FloatFilter>;
  /** Filter by the object’s `time` field. */
  time?: Maybe<DatetimeFilter>;
};

/** A connection to a list of `Metric` values. */
export type MetricsConnection = {
  __typename?: 'MetricsConnection';
  /** A list of edges which contains the `Metric` and cursor to aid in pagination. */
  edges: Array<MetricsEdge>;
  /** A list of `Metric` objects. */
  nodes: Array<Metric>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Metric` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Metric` edge in the connection. */
export type MetricsEdge = {
  __typename?: 'MetricsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Metric` at the end of the edge. */
  node: Metric;
};

export type Michael = {
  __typename?: 'Michael';
  facilityId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Datetime']>;
  value?: Maybe<Scalars['Float']>;
};

/** A condition to be used against `Michael` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MichaelCondition = {
  /** Checks for equality with the object’s `facilityId` field. */
  facilityId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `time` field. */
  time?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `value` field. */
  value?: Maybe<Scalars['Float']>;
};

/** A filter to be used against `Michael` object types. All fields are combined with a logical ‘and.’ */
export type MichaelFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<MichaelFilter>>;
  /** Filter by the object’s `facilityId` field. */
  facilityId?: Maybe<IntFilter>;
  /** Negates the expression. */
  not?: Maybe<MichaelFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<MichaelFilter>>;
  /** Filter by the object’s `time` field. */
  time?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `value` field. */
  value?: Maybe<FloatFilter>;
};

/** A connection to a list of `Michael` values. */
export type MichaelsConnection = {
  __typename?: 'MichaelsConnection';
  /** A list of edges which contains the `Michael` and cursor to aid in pagination. */
  edges: Array<MichaelsEdge>;
  /** A list of `Michael` objects. */
  nodes: Array<Michael>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Michael` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Michael` edge in the connection. */
export type MichaelsEdge = {
  __typename?: 'MichaelsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Michael` at the end of the edge. */
  node: Michael;
};

/** Methods to use when ordering `Michael`. */
export enum MichaelsOrderBy {
  FACILITY_ID_ASC = 'FACILITY_ID_ASC',
  FACILITY_ID_DESC = 'FACILITY_ID_DESC',
  NATURAL = 'NATURAL',
  TIME_ASC = 'TIME_ASC',
  TIME_DESC = 'TIME_DESC',
  VALUE_ASC = 'VALUE_ASC',
  VALUE_DESC = 'VALUE_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Device`. */
  createDevice?: Maybe<CreateDevicePayload>;
  /** Creates a single `Facility`. */
  createFacility?: Maybe<CreateFacilityPayload>;
  /** Creates a single `MetricDefinition`. */
  createMetricDefinition?: Maybe<CreateMetricDefinitionPayload>;
  /** Creates a single `Organization`. */
  createOrganization?: Maybe<CreateOrganizationPayload>;
  /** Creates a single `Reading`. */
  createReading?: Maybe<CreateReadingPayload>;
  /** Deletes a single `Device` using a unique key. */
  deleteDevice?: Maybe<DeleteDevicePayload>;
  /** Deletes a single `Device` using its globally unique id. */
  deleteDeviceByNodeId?: Maybe<DeleteDevicePayload>;
  /** Deletes a single `Device` using a unique key. */
  deleteDeviceBySlug?: Maybe<DeleteDevicePayload>;
  /** Deletes a single `Facility` using a unique key. */
  deleteFacility?: Maybe<DeleteFacilityPayload>;
  /** Deletes a single `Facility` using its globally unique id. */
  deleteFacilityByNodeId?: Maybe<DeleteFacilityPayload>;
  /** Deletes a single `Facility` using a unique key. */
  deleteFacilityBySlug?: Maybe<DeleteFacilityPayload>;
  /** Deletes a single `MetricDefinition` using a unique key. */
  deleteMetricDefinition?: Maybe<DeleteMetricDefinitionPayload>;
  /** Deletes a single `MetricDefinition` using a unique key. */
  deleteMetricDefinitionByName?: Maybe<DeleteMetricDefinitionPayload>;
  /** Deletes a single `MetricDefinition` using its globally unique id. */
  deleteMetricDefinitionByNodeId?: Maybe<DeleteMetricDefinitionPayload>;
  /** Deletes a single `Organization` using a unique key. */
  deleteOrganization?: Maybe<DeleteOrganizationPayload>;
  /** Deletes a single `Organization` using its globally unique id. */
  deleteOrganizationByNodeId?: Maybe<DeleteOrganizationPayload>;
  /** Deletes a single `Organization` using a unique key. */
  deleteOrganizationBySlug?: Maybe<DeleteOrganizationPayload>;
  /** Updates a single `Device` using a unique key and a patch. */
  updateDevice?: Maybe<UpdateDevicePayload>;
  /** Updates a single `Device` using its globally unique id and a patch. */
  updateDeviceByNodeId?: Maybe<UpdateDevicePayload>;
  /** Updates a single `Device` using a unique key and a patch. */
  updateDeviceBySlug?: Maybe<UpdateDevicePayload>;
  /** Updates a single `Facility` using a unique key and a patch. */
  updateFacility?: Maybe<UpdateFacilityPayload>;
  /** Updates a single `Facility` using its globally unique id and a patch. */
  updateFacilityByNodeId?: Maybe<UpdateFacilityPayload>;
  /** Updates a single `Facility` using a unique key and a patch. */
  updateFacilityBySlug?: Maybe<UpdateFacilityPayload>;
  /** Updates a single `MetricDefinition` using a unique key and a patch. */
  updateMetricDefinition?: Maybe<UpdateMetricDefinitionPayload>;
  /** Updates a single `MetricDefinition` using a unique key and a patch. */
  updateMetricDefinitionByName?: Maybe<UpdateMetricDefinitionPayload>;
  /** Updates a single `MetricDefinition` using its globally unique id and a patch. */
  updateMetricDefinitionByNodeId?: Maybe<UpdateMetricDefinitionPayload>;
  /** Updates a single `Organization` using a unique key and a patch. */
  updateOrganization?: Maybe<UpdateOrganizationPayload>;
  /** Updates a single `Organization` using its globally unique id and a patch. */
  updateOrganizationByNodeId?: Maybe<UpdateOrganizationPayload>;
  /** Updates a single `Organization` using a unique key and a patch. */
  updateOrganizationBySlug?: Maybe<UpdateOrganizationPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDeviceArgs = {
  input: CreateDeviceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFacilityArgs = {
  input: CreateFacilityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMetricDefinitionArgs = {
  input: CreateMetricDefinitionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateReadingArgs = {
  input: CreateReadingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDeviceArgs = {
  input: DeleteDeviceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDeviceByNodeIdArgs = {
  input: DeleteDeviceByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDeviceBySlugArgs = {
  input: DeleteDeviceBySlugInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFacilityArgs = {
  input: DeleteFacilityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFacilityByNodeIdArgs = {
  input: DeleteFacilityByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFacilityBySlugArgs = {
  input: DeleteFacilityBySlugInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMetricDefinitionArgs = {
  input: DeleteMetricDefinitionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMetricDefinitionByNameArgs = {
  input: DeleteMetricDefinitionByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMetricDefinitionByNodeIdArgs = {
  input: DeleteMetricDefinitionByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationArgs = {
  input: DeleteOrganizationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationByNodeIdArgs = {
  input: DeleteOrganizationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationBySlugArgs = {
  input: DeleteOrganizationBySlugInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDeviceArgs = {
  input: UpdateDeviceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDeviceByNodeIdArgs = {
  input: UpdateDeviceByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDeviceBySlugArgs = {
  input: UpdateDeviceBySlugInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFacilityArgs = {
  input: UpdateFacilityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFacilityByNodeIdArgs = {
  input: UpdateFacilityByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFacilityBySlugArgs = {
  input: UpdateFacilityBySlugInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMetricDefinitionArgs = {
  input: UpdateMetricDefinitionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMetricDefinitionByNameArgs = {
  input: UpdateMetricDefinitionByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMetricDefinitionByNodeIdArgs = {
  input: UpdateMetricDefinitionByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationByNodeIdArgs = {
  input: UpdateOrganizationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationBySlugArgs = {
  input: UpdateOrganizationBySlugInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** An organization. */
export type Organization = Node & {
  __typename?: 'Organization';
  /** The time this org was created. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `Facility`. */
  facilities: FacilitiesConnection;
  /** The primary unique identifier for the org. */
  id: Scalars['Int'];
  /** The org’s name. */
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** The org’s slug. */
  slug: Scalars['String'];
  /** The time this org was updated. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};


/** An organization. */
export type OrganizationFacilitiesArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<FacilityCondition>;
  filter?: Maybe<FacilityFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<FacilitiesOrderBy>>;
};

/**
 * A condition to be used against `Organization` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OrganizationCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `Organization` object types. All fields are combined with a logical ‘and.’ */
export type OrganizationFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<OrganizationFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Negates the expression. */
  not?: Maybe<OrganizationFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<OrganizationFilter>>;
  /** Filter by the object’s `slug` field. */
  slug?: Maybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>;
};

/** An input for mutations affecting `Organization` */
export type OrganizationInput = {
  /** The time this org was created. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** The primary unique identifier for the org. */
  id?: Maybe<Scalars['Int']>;
  /** The org’s name. */
  name: Scalars['String'];
  /** The org’s slug. */
  slug: Scalars['String'];
  /** The time this org was updated. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Organization`. Fields that are set will be updated. */
export type OrganizationPatch = {
  /** The time this org was created. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** The primary unique identifier for the org. */
  id?: Maybe<Scalars['Int']>;
  /** The org’s name. */
  name?: Maybe<Scalars['String']>;
  /** The org’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The time this org was updated. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `Organization` values. */
export type OrganizationsConnection = {
  __typename?: 'OrganizationsConnection';
  /** A list of edges which contains the `Organization` and cursor to aid in pagination. */
  edges: Array<OrganizationsEdge>;
  /** A list of `Organization` objects. */
  nodes: Array<Organization>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Organization` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Organization` edge in the connection. */
export type OrganizationsEdge = {
  __typename?: 'OrganizationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Organization` at the end of the edge. */
  node: Organization;
};

/** Methods to use when ordering `Organization`. */
export enum OrganizationsOrderBy {
  CREATED_AT_ASC = 'CREATED_AT_ASC',
  CREATED_AT_DESC = 'CREATED_AT_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  NATURAL = 'NATURAL',
  PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
  PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
  SLUG_ASC = 'SLUG_ASC',
  SLUG_DESC = 'SLUG_DESC',
  UPDATED_AT_ASC = 'UPDATED_AT_ASC',
  UPDATED_AT_DESC = 'UPDATED_AT_DESC'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Branch`. */
  branches?: Maybe<BranchesConnection>;
  device?: Maybe<Device>;
  /** Reads a single `Device` using its globally unique `ID`. */
  deviceByNodeId?: Maybe<Device>;
  deviceBySlug?: Maybe<Device>;
  /** Reads and enables pagination through a set of `Device`. */
  devices?: Maybe<DevicesConnection>;
  /** Reads and enables pagination through a set of `Facility`. */
  facilities?: Maybe<FacilitiesConnection>;
  facility?: Maybe<Facility>;
  /** Reads a single `Facility` using its globally unique `ID`. */
  facilityByNodeId?: Maybe<Facility>;
  facilityBySlug?: Maybe<Facility>;
  facilityDistinctTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Reads and enables pagination through a set of `FacilityRanking`. */
  facilityRankings?: Maybe<FacilityRankingsConnection>;
  /** Reads and enables pagination through a set of `John`. */
  johns?: Maybe<JohnsConnection>;
  metricDefinition?: Maybe<MetricDefinition>;
  metricDefinitionByName?: Maybe<MetricDefinition>;
  /** Reads a single `MetricDefinition` using its globally unique `ID`. */
  metricDefinitionByNodeId?: Maybe<MetricDefinition>;
  /** Reads and enables pagination through a set of `MetricDefinition`. */
  metricDefinitions?: Maybe<MetricDefinitionsConnection>;
  /** Reads and enables pagination through a set of `Michael`. */
  michaels?: Maybe<MichaelsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  organization?: Maybe<Organization>;
  /** Reads a single `Organization` using its globally unique `ID`. */
  organizationByNodeId?: Maybe<Organization>;
  organizationBySlug?: Maybe<Organization>;
  /** Reads and enables pagination through a set of `Organization`. */
  organizations?: Maybe<OrganizationsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads and enables pagination through a set of `Rate`. */
  rates?: Maybe<RatesConnection>;
  /** Reads and enables pagination through a set of `Reading`. */
  readings?: Maybe<ReadingsConnection>;
  /** Reads and enables pagination through a set of `Spend`. */
  spends?: Maybe<SpendsConnection>;
  /** Reads and enables pagination through a set of `Usage`. */
  usages?: Maybe<UsagesConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBranchesArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<BranchCondition>;
  filter?: Maybe<BranchFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BranchesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDeviceArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDeviceByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDeviceBySlugArgs = {
  slug: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDevicesArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<DeviceCondition>;
  filter?: Maybe<DeviceFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DevicesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFacilitiesArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<FacilityCondition>;
  filter?: Maybe<FacilityFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<FacilitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFacilityArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFacilityByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFacilityBySlugArgs = {
  slug: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFacilityRankingsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<FacilityRankingFilter>;
  first?: Maybe<Scalars['Int']>;
  interval?: Maybe<IntervalInput>;
  last?: Maybe<Scalars['Int']>;
  metric: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryJohnsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<JohnCondition>;
  filter?: Maybe<JohnFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<JohnsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMetricDefinitionArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMetricDefinitionByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMetricDefinitionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMetricDefinitionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<MetricDefinitionCondition>;
  filter?: Maybe<MetricDefinitionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<MetricDefinitionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMichaelsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<MichaelCondition>;
  filter?: Maybe<MichaelFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<MichaelsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationBySlugArgs = {
  slug: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<OrganizationCondition>;
  filter?: Maybe<OrganizationFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OrganizationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRatesArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<RateCondition>;
  filter?: Maybe<RateFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<RatesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryReadingsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<ReadingCondition>;
  filter?: Maybe<ReadingFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ReadingsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySpendsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<SpendCondition>;
  filter?: Maybe<SpendFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SpendsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUsagesArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<UsageCondition>;
  filter?: Maybe<UsageFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UsagesOrderBy>>;
};

export type Rate = {
  __typename?: 'Rate';
  facilityId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Datetime']>;
  value?: Maybe<Scalars['Float']>;
};

/** A condition to be used against `Rate` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RateCondition = {
  /** Checks for equality with the object’s `facilityId` field. */
  facilityId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `time` field. */
  time?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `value` field. */
  value?: Maybe<Scalars['Float']>;
};

/** A filter to be used against `Rate` object types. All fields are combined with a logical ‘and.’ */
export type RateFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<RateFilter>>;
  /** Filter by the object’s `facilityId` field. */
  facilityId?: Maybe<IntFilter>;
  /** Negates the expression. */
  not?: Maybe<RateFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<RateFilter>>;
  /** Filter by the object’s `time` field. */
  time?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `value` field. */
  value?: Maybe<FloatFilter>;
};

/** A connection to a list of `Rate` values. */
export type RatesConnection = {
  __typename?: 'RatesConnection';
  /** A list of edges which contains the `Rate` and cursor to aid in pagination. */
  edges: Array<RatesEdge>;
  /** A list of `Rate` objects. */
  nodes: Array<Rate>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Rate` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Rate` edge in the connection. */
export type RatesEdge = {
  __typename?: 'RatesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Rate` at the end of the edge. */
  node: Rate;
};

/** Methods to use when ordering `Rate`. */
export enum RatesOrderBy {
  FACILITY_ID_ASC = 'FACILITY_ID_ASC',
  FACILITY_ID_DESC = 'FACILITY_ID_DESC',
  NATURAL = 'NATURAL',
  TIME_ASC = 'TIME_ASC',
  TIME_DESC = 'TIME_DESC',
  VALUE_ASC = 'VALUE_ASC',
  VALUE_DESC = 'VALUE_DESC'
}

/** A reading from a device. */
export type Reading = {
  __typename?: 'Reading';
  /** The readings’s slug. */
  data: Scalars['JSON'];
  /** Reads a single `Device` that is related to this `Reading`. */
  device?: Maybe<Device>;
  /** The reading’s associated device. */
  deviceId: Scalars['Int'];
  /** The reading’s name. */
  label: Scalars['String'];
  /** The readings’s metadata. */
  metadata?: Maybe<Scalars['JSON']>;
  /** The time of the reading. */
  time: Scalars['Datetime'];
};

/** A condition to be used against `Reading` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ReadingCondition = {
  /** Checks for equality with the object’s `data` field. */
  data?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `deviceId` field. */
  deviceId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `label` field. */
  label?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `metadata` field. */
  metadata?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `time` field. */
  time?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `Reading` object types. All fields are combined with a logical ‘and.’ */
export type ReadingFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ReadingFilter>>;
  /** Filter by the object’s `data` field. */
  data?: Maybe<JsonFilter>;
  /** Filter by the object’s `deviceId` field. */
  deviceId?: Maybe<IntFilter>;
  /** Filter by the object’s `label` field. */
  label?: Maybe<StringFilter>;
  /** Filter by the object’s `metadata` field. */
  metadata?: Maybe<JsonFilter>;
  /** Negates the expression. */
  not?: Maybe<ReadingFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ReadingFilter>>;
  /** Filter by the object’s `time` field. */
  time?: Maybe<DatetimeFilter>;
};

/** An input for mutations affecting `Reading` */
export type ReadingInput = {
  /** The readings’s slug. */
  data: Scalars['JSON'];
  /** The reading’s associated device. */
  deviceId: Scalars['Int'];
  /** The reading’s name. */
  label: Scalars['String'];
  /** The readings’s metadata. */
  metadata?: Maybe<Scalars['JSON']>;
  /** The time of the reading. */
  time: Scalars['Datetime'];
};

/** A connection to a list of `Reading` values. */
export type ReadingsConnection = {
  __typename?: 'ReadingsConnection';
  /** A list of edges which contains the `Reading` and cursor to aid in pagination. */
  edges: Array<ReadingsEdge>;
  /** A list of `Reading` objects. */
  nodes: Array<Reading>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Reading` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Reading` edge in the connection. */
export type ReadingsEdge = {
  __typename?: 'ReadingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Reading` at the end of the edge. */
  node: Reading;
};

/** Methods to use when ordering `Reading`. */
export enum ReadingsOrderBy {
  DATA_ASC = 'DATA_ASC',
  DATA_DESC = 'DATA_DESC',
  DEVICE_ID_ASC = 'DEVICE_ID_ASC',
  DEVICE_ID_DESC = 'DEVICE_ID_DESC',
  LABEL_ASC = 'LABEL_ASC',
  LABEL_DESC = 'LABEL_DESC',
  METADATA_ASC = 'METADATA_ASC',
  METADATA_DESC = 'METADATA_DESC',
  NATURAL = 'NATURAL',
  TIME_ASC = 'TIME_ASC',
  TIME_DESC = 'TIME_DESC'
}

export type Spend = {
  __typename?: 'Spend';
  facilityId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Datetime']>;
  value?: Maybe<Scalars['Float']>;
};

/** A condition to be used against `Spend` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SpendCondition = {
  /** Checks for equality with the object’s `facilityId` field. */
  facilityId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `time` field. */
  time?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `value` field. */
  value?: Maybe<Scalars['Float']>;
};

/** A filter to be used against `Spend` object types. All fields are combined with a logical ‘and.’ */
export type SpendFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<SpendFilter>>;
  /** Filter by the object’s `facilityId` field. */
  facilityId?: Maybe<IntFilter>;
  /** Negates the expression. */
  not?: Maybe<SpendFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<SpendFilter>>;
  /** Filter by the object’s `time` field. */
  time?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `value` field. */
  value?: Maybe<FloatFilter>;
};

/** A connection to a list of `Spend` values. */
export type SpendsConnection = {
  __typename?: 'SpendsConnection';
  /** A list of edges which contains the `Spend` and cursor to aid in pagination. */
  edges: Array<SpendsEdge>;
  /** A list of `Spend` objects. */
  nodes: Array<Spend>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Spend` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Spend` edge in the connection. */
export type SpendsEdge = {
  __typename?: 'SpendsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Spend` at the end of the edge. */
  node: Spend;
};

/** Methods to use when ordering `Spend`. */
export enum SpendsOrderBy {
  FACILITY_ID_ASC = 'FACILITY_ID_ASC',
  FACILITY_ID_DESC = 'FACILITY_ID_DESC',
  NATURAL = 'NATURAL',
  TIME_ASC = 'TIME_ASC',
  TIME_DESC = 'TIME_DESC',
  VALUE_ASC = 'VALUE_ASC',
  VALUE_DESC = 'VALUE_DESC'
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: Maybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: Maybe<Scalars['String']>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: Maybe<Array<Scalars['String']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  /**
   * Matches the specified pattern (case-sensitive). An underscore (_) matches any
   * single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  like?: Maybe<Scalars['String']>;
  /**
   * Matches the specified pattern (case-insensitive). An underscore (_) matches
   * any single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  likeInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: Maybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: Maybe<Scalars['String']>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: Maybe<Array<Scalars['String']>>;
  /**
   * Does not match the specified pattern (case-sensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  notLike?: Maybe<Scalars['String']>;
  /**
   * Does not match the specified pattern (case-insensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  notLikeInsensitive?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: Maybe<Scalars['String']>;
};

/** A filter to be used against String List fields. All fields are combined with a logical ‘and.’ */
export type StringListFilter = {
  /** Any array item is equal to the specified value. */
  anyEqualTo?: Maybe<Scalars['String']>;
  /** Any array item is greater than the specified value. */
  anyGreaterThan?: Maybe<Scalars['String']>;
  /** Any array item is greater than or equal to the specified value. */
  anyGreaterThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Any array item is less than the specified value. */
  anyLessThan?: Maybe<Scalars['String']>;
  /** Any array item is less than or equal to the specified value. */
  anyLessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Any array item is not equal to the specified value. */
  anyNotEqualTo?: Maybe<Scalars['String']>;
  /** Contained by the specified list of values. */
  containedBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Contains the specified list of values. */
  contains?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Overlaps the specified list of values. */
  overlaps?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** All input for the `updateDeviceByNodeId` mutation. */
export type UpdateDeviceByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Device` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Device` being updated. */
  patch: DevicePatch;
};

/** All input for the `updateDeviceBySlug` mutation. */
export type UpdateDeviceBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Device` being updated. */
  patch: DevicePatch;
  /** The device’s description. */
  slug: Scalars['String'];
};

/** All input for the `updateDevice` mutation. */
export type UpdateDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The primary unique identifier for the device. */
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Device` being updated. */
  patch: DevicePatch;
};

/** The output of our update `Device` mutation. */
export type UpdateDevicePayload = {
  __typename?: 'UpdateDevicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Device` that was updated by this mutation. */
  device?: Maybe<Device>;
  /** An edge for our `Device`. May be used by Relay 1. */
  deviceEdge?: Maybe<DevicesEdge>;
  /** Reads a single `Facility` that is related to this `Device`. */
  facility?: Maybe<Facility>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Device` mutation. */
export type UpdateDevicePayloadDeviceEdgeArgs = {
  orderBy?: Maybe<Array<DevicesOrderBy>>;
};

/** All input for the `updateFacilityByNodeId` mutation. */
export type UpdateFacilityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Facility` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Facility` being updated. */
  patch: FacilityPatch;
};

/** All input for the `updateFacilityBySlug` mutation. */
export type UpdateFacilityBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Facility` being updated. */
  patch: FacilityPatch;
  /** The facility’s slug. */
  slug: Scalars['String'];
};

/** All input for the `updateFacility` mutation. */
export type UpdateFacilityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The primary unique identifier for the facility. */
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Facility` being updated. */
  patch: FacilityPatch;
};

/** The output of our update `Facility` mutation. */
export type UpdateFacilityPayload = {
  __typename?: 'UpdateFacilityPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Facility` that was updated by this mutation. */
  facility?: Maybe<Facility>;
  /** An edge for our `Facility`. May be used by Relay 1. */
  facilityEdge?: Maybe<FacilitiesEdge>;
  /** Reads a single `Organization` that is related to this `Facility`. */
  organization?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Facility` mutation. */
export type UpdateFacilityPayloadFacilityEdgeArgs = {
  orderBy?: Maybe<Array<FacilitiesOrderBy>>;
};

/** All input for the `updateMetricDefinitionByName` mutation. */
export type UpdateMetricDefinitionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The metric’s name. */
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `MetricDefinition` being updated. */
  patch: MetricDefinitionPatch;
};

/** All input for the `updateMetricDefinitionByNodeId` mutation. */
export type UpdateMetricDefinitionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MetricDefinition` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MetricDefinition` being updated. */
  patch: MetricDefinitionPatch;
};

/** All input for the `updateMetricDefinition` mutation. */
export type UpdateMetricDefinitionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The id of the metric definition. */
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `MetricDefinition` being updated. */
  patch: MetricDefinitionPatch;
};

/** The output of our update `MetricDefinition` mutation. */
export type UpdateMetricDefinitionPayload = {
  __typename?: 'UpdateMetricDefinitionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MetricDefinition` that was updated by this mutation. */
  metricDefinition?: Maybe<MetricDefinition>;
  /** An edge for our `MetricDefinition`. May be used by Relay 1. */
  metricDefinitionEdge?: Maybe<MetricDefinitionsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `MetricDefinition` mutation. */
export type UpdateMetricDefinitionPayloadMetricDefinitionEdgeArgs = {
  orderBy?: Maybe<Array<MetricDefinitionsOrderBy>>;
};

/** All input for the `updateOrganizationByNodeId` mutation. */
export type UpdateOrganizationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organization` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Organization` being updated. */
  patch: OrganizationPatch;
};

/** All input for the `updateOrganizationBySlug` mutation. */
export type UpdateOrganizationBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Organization` being updated. */
  patch: OrganizationPatch;
  /** The org’s slug. */
  slug: Scalars['String'];
};

/** All input for the `updateOrganization` mutation. */
export type UpdateOrganizationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The primary unique identifier for the org. */
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Organization` being updated. */
  patch: OrganizationPatch;
};

/** The output of our update `Organization` mutation. */
export type UpdateOrganizationPayload = {
  __typename?: 'UpdateOrganizationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Organization` that was updated by this mutation. */
  organization?: Maybe<Organization>;
  /** An edge for our `Organization`. May be used by Relay 1. */
  organizationEdge?: Maybe<OrganizationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Organization` mutation. */
export type UpdateOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: Maybe<Array<OrganizationsOrderBy>>;
};

export type Usage = {
  __typename?: 'Usage';
  facilityId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Datetime']>;
  value?: Maybe<Scalars['Float']>;
};

/** A condition to be used against `Usage` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UsageCondition = {
  /** Checks for equality with the object’s `facilityId` field. */
  facilityId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `time` field. */
  time?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `value` field. */
  value?: Maybe<Scalars['Float']>;
};

/** A filter to be used against `Usage` object types. All fields are combined with a logical ‘and.’ */
export type UsageFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<UsageFilter>>;
  /** Filter by the object’s `facilityId` field. */
  facilityId?: Maybe<IntFilter>;
  /** Negates the expression. */
  not?: Maybe<UsageFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<UsageFilter>>;
  /** Filter by the object’s `time` field. */
  time?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `value` field. */
  value?: Maybe<FloatFilter>;
};

/** A connection to a list of `Usage` values. */
export type UsagesConnection = {
  __typename?: 'UsagesConnection';
  /** A list of edges which contains the `Usage` and cursor to aid in pagination. */
  edges: Array<UsagesEdge>;
  /** A list of `Usage` objects. */
  nodes: Array<Usage>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Usage` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Usage` edge in the connection. */
export type UsagesEdge = {
  __typename?: 'UsagesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Usage` at the end of the edge. */
  node: Usage;
};

/** Methods to use when ordering `Usage`. */
export enum UsagesOrderBy {
  FACILITY_ID_ASC = 'FACILITY_ID_ASC',
  FACILITY_ID_DESC = 'FACILITY_ID_DESC',
  NATURAL = 'NATURAL',
  TIME_ASC = 'TIME_ASC',
  TIME_DESC = 'TIME_DESC',
  VALUE_ASC = 'VALUE_ASC',
  VALUE_DESC = 'VALUE_DESC'
}
