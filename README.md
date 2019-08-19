# GraphQL
GraphQL is an open source server-side technology which was developed by Facebook to optimize RESTful API calls.
GraphQL structures data in the form of a graph with its powerful query syntax for traversing, retrieving, and modifying data.
GraphQL APIs fetch all the data your application need in a single request.

## GraphQL Types
Scalar types are primitive data types that can store only a single value. The default scalar types that GraphQL offers are −
* Int − Signed 32-bit Integer
* Float − Signed double precision floating point value
* String − UTF - 8-character sequence
* Boolean − True or false
* ID − A unique identifier, often used as a unique identifier to fetch an object or as the key for a cache.

___

## GraphQL Schema
A GraphQL schema is at the core of any GraphQL server implementation.
It describes the functionality available to the client applications that connect to it.
The GraphQL runtime defines a generic graph-based schema to publish the capabilities of the data service it represents.
Client applications can query the schema within its capabilities.
This approach decouples clients from servers and allows both to evolve and scale independently.

___

## Resolver
Resolver is a collection of functions that generate response for a GraphQL query. 
A resolver acts as a GraphQL query handler.
Every resolver function in a GraphQL schema accepts four positional arguments as given below −
```javascript
fieldName:(root, args, context, info) => { result }
```
1. root : The object that contains the result returned from the resolver on the parent field.
2. args : An object with the arguments passed into the field in the query.
3. context : This is an object shared by all resolvers in a particular query.
4. info : It contains information about the execution state of the query, including the field name, path to the field from the root.

___

## Query
A GraphQL operation can either be a read or a write operation.
A GraphQL query is used to read or fetch values while a mutation is used to write or post values.
The Query type is the request sent from a client application to the GraphQL server.
GraphQL uses the Schema Definition Language (SDL) to define a Query.
Query type is one of the many root-level types in GraphQL.
```javascript
query query_name{ someField }
```
___

## Mutation
Mutations are operations sent to the server to create, update or delete data.
These are analogous to the PUT, POST, PATCH and DELETE verbs to call REST-based APIs.
Mutation is one of the root-level data-types in GraphQL.
The Query type defines the entry-points for data-fetching operations
whereas the Mutation type specifies the entry points for data-manipulation operations.
```javascript
mutation{
   someEditOperation(dataField:"valueOfField"):returnType
}
```
___

## Subscriptions 
subscriptions are a way to push data from the server to the clients
that choose to listen to real time messages from the server.
Subscriptions are similar to queries in that they specify a set of fields to be delivered to the client,
but instead of immediately returning a single answer, a result is sent every time a particular event happens on the servescription.

