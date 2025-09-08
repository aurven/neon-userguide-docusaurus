---
sidebar_position: 1
---

# Neon Headless APIs

Neon is a content management system that acts as a _content delivery hub_: it provides robust and scalable headless APIs, exposing its content in a presentation-agnostic JSON format.

In this section we'll review those APIs, and explain how to use them.

## Neon data model

### Basic concepts

In Neon, essentially everything is a _node_ - articles, webpages, images, liveblogs, etc - but also sites, sections, etc.  Nodes have relationships with other nodes, and altogether form _models_.

This translates into 2 APIs, managing each of these cases:

| API   | Description | Doc |
|:------|:------------|:----|
|`/api/nodes/$id`|Return a single node (also called _NodeData_)|[Swagger](/api/doc/#/nodes)|
|`/api/pages/$id`|Return the model of a node (also called _ContentData_)|[Swagger](/api/doc/#/pages)|

:::note[Nodes vs Models]
Let's imagine we have a _webpage_ with id "12345", which contains 2 _webpagefragments_, each containing 10 _articles_:

* calling the `/api/nodes/12345` on that webpage, will return only the webpage node itself  
* calling the `/api/pages/12345` will not only return the webpage, but also the 2 webpagefragments, and the 20 stories that are linked -> everything that is needed to actually render that webpage on the frontend.
:::

### Node types

Neon implements a hierachical type system, which can be extended with custom types.   A set of standard types are provided built-in with Neon, and are called _baseTypes_.   On each installation it is possible to define custom types, deriving from those _baseTypes_.

More details on the Neon type system can be found here: [Neon Type System](../reference/type-system)

### API response structure

Let's first review the _structure of a single node_ (_NodeData_).  Then let's see how those nodes are composed together in a _model structure_ (_ContentData_).

#### Single node structure (_NodeData_)

Let's have a look at the structure returned by the `/api/nodes/$id` API.

Most nodes share the same structure, still there are some differences on how the fields are used dependending on the type of the node.

See some example node structures below.

#### Overview of some node properties

| Property | Description |
|----------|-------------|
| `id`
|The UUID of the node
| `foreignId` | The ID of the node on the external/upstream system (e.g. Méthode) |
| `title` | The title of the content |
| `description` | The summary of the content |
| `authors` | An array containing all the authors of the content |
| `sys` | An object containing all the system information of the node. For example:<br/>• `baseType`: The baseType of the content<br/>• `type`: The type of the content |
| `pubInfo` | An object containing all the information relative to the publication of the node. Example:<br/>• `siteName`: the site on which the content is published<br/>• `sectionPath`: the section on which the content is published<br/>• `canonical`: the eventual canonical url set on the content (see [URL Management](../features/urls))<br/>• `urls`: the eventual aliases and redirects set on the content (see [URL Management](../features/urls))<br/>• `visible`: whether the node is visible or not (i.e. embargoed or not). Note that on the public APIs (i.e. /api/*), the node will simply not be returned if not visible. |
| `pubInfoEx` | An object containing extended information related to the publication of the node, e.g. information about all the stages of publication. |
| `attributes` | The custom metadata set on the node. The fields present on here obviously depend on each installation, and how the publication process (nodeData.js) has been configured |
| `files` | Contains a map with the information of all the files attached to that node, and their content (when applicable). For instance, when the node type is `image`, this will contain a map with all the info of the formats of that image. If the node type is `article`, it will contain the XML content of the article. |
| `links` | The links that this node has with other nodes. The first level properties indicate the type of link, which can be for instance:<br/>• `hyperlink`: the nodes that are referenced as hyperlinks in the content<br/>• `correlated`: the nodes that are correlated to this node<br/>• `pagelink`: in the case of a `webpage` or `webpagefragment`, it contains a map with all the zones of the page, and the nodes that are linked to each of those zones.<br/><br/>Each link specifies the `targetId` of the linked node, and also `metadata` that can contain custom attributes set on the link. |
| `providers` | The providers set on that content, as set in the publication process (nodeData.js). Providers are useful for defining embargo rules on content based on who provided it (contractors, wires, etc). |


Below some examples of node structure for various types (and their particularities)

#### Example node structures

| Type | Example | Note |
|------|---------|------|
| article | [article.json](./cobalt-headless-apis/article-node-structure-example) | `files.content.data` contains the content of the article (which in this case is XML, as it is coming from Méthode) |
| webpage / webpagefragment | [webpagefragment.json](./cobalt-headless-apis/webpage-node-structure-example) | In this case, `files.templates` contains the available templates of the webpage and their structure, and `files.content` the actual `pageTemplate` being currently used. Then, the `links.pagelink` contains the references to the linked nodes for each of the zones of the page. |
| image | [image.json](./cobalt-headless-apis/image-node-structure-example) | Here, `files` contains a map with all the formats of that image, and their properties. |

#### Model structure (_ContentData_)

Now let's have a look at the structure returned by the `/api/pages/$id` API. This structure is an extension of the one returned by `/api/nodes/$id` (described in the section just above): it wraps that single node structure to provide a model, that includes also the nodes that are linked to that node.

The high-level structure is the following:

#### /api/pages model structure


```javascript
{
    "model": {
        "id": "model://0275-1538b13bfd76-9600c727974a-1000/RAW/1/null",
        "data": {...}, //The main node data
        "dataType": "node",
        "nodes": {...}, // A map with the data of all linked nodes
        "defaultContent": true,
        "lastModified": 1659343530099,
        "etag": "0275-1538b13bfd76-9600c727974a-1000-233410587801/1659343530099/-16959295",
        "contentLength": 0,
        "children": [],
        "errors": [],
        "totalPages": 0,
        "outputMode": "RAW",
        "aggregators": [],
        "page": 1
    },
    "nodesUrls": {}, //A map with the permalinks of all nodes present in the model
    "resourcesUrls": {}, //A map with the urls of all resources present in the model
    "siteNode": {},
    "siteData": {},
    "theme": {},
    "viewData": {},
    "configuration": {},
    "multivariateTesting": {},
    "requestParams": {},
    "requestHeaders": {}
}
```

There are 4 fields worth mentioning in particular in this structure:

#### Model structure

| Property | Description |
|----------|-------------|
| `model.data` | Contains the node data of the main (requested) node, following the structure described in the section above |
| `model.nodes` | Contains a map with the _NodeData_ of all the nodes that are linked in the model. The key of the map is the UUID of the linked node. Note that it not only contains the nodes linked to the main nodes, but also the nodes linked to the linked nodes. |
| `nodesUrls` | A map with all the permalinks of the nodes referenced in the model |
| `resourcesUrls` | A map with all the URLs of the resources linked in the model |

## Headless APIs overview

We've already reviewed above the 2 main headless APIs of Neon: `/api/pages` and `/api/nodes`.  In this section will complete the picture with the remaining ones, and explain how to use them.

### /api/pages

Probably the most used API, it permits to return full node models, as described above. There are 3 main ways to call `/api/pages`:

#### Using /api/pages

| Call | Example |
|------|----------|
| GET by UUID | `/api/pages/0275-153a82e35485-d14a2fd95211-1000?emk.site=my-site` |
| GET by URL | `/api/pages?url=/&emk.site=my-site` |
| GET by Foreign ID | `/api/pages/foreignid/120e4fba-dc24-11ec-b9c7-a774e39c7955?emk.site=my-site` |

:::note
* Retrieving by URL is especially useful if your frontend wants to delegate URL management to Neon. You can simply pass the URL requested, and then render accordingly depending on the node type returned
* As always, it is necessary to specify the website from which the content should be retrieved, using the `emk.site` parameter
:::

//*TODO swagger link*

### /api/nodes

This is `/api/pages` simpler version, that only returns the requested node instead of the full model, as described in the Single node structure section above.
There are 2 main ways to call `/api/nodes`:

#### Using /api/nodes

| Call | Example |
|------|----------|
| GET by UUID | `/api/nodes/0275-153a82e35485-d14a2fd95211-1000?emk.site=my-site` |
| GET by Foreign ID | `/api/nodes/foreignid/120e4fba-dc24-11ec-b9c7-a774e39c7955?emk.site=my-site` |

//*TODO swagger link*


### /api/search

`/api/search` returns a collection of _NodeData_ (as described in the Single node structure section above) that are matching a search query.  

There are multiple ways to call this API, providing solutions from the simplest to the most complex use case:

#### Using /api/search

| Call | Example | Description |
|------|---------|-------------|
| GET /api/search | `/api/search?type=article&type=liveblog&param.attributes.section=/sport/&emk.site=my-site` | Perform a simple search in GET, using query params. Each different query params are composed in AND; multiple identical query params are composed in OR. For instance, the example here will search for all articles OR liveblogs belonging to the "sport" section of "my-site". It possible to search on any field (including custom ones) that are mapped in the ElasticSearch index. More details on this can be found here: [Searching in Neon](../features/search) |
| POST /api/search | See example in [Searching in Neon](../features/search) | Same API as above, instead passing the search criterias as a body instead of query params |
| POST /api/search/cql | `/api/search/cql`<br/>```javascript<br/>{<br/>  "query": "SELECT FROM NODES WHERE sys.type='article'"<br/>}<br/>``` | Query using the Neon Query Language (see here: [Searching in Neon](../features/search)), allowing to express more complex conditions compared to the APIs above. Neon Query Language (CQL) is an abstraction on top of our internal Domain Specific Language (DSL) to express a query on our repository. |
| POST /api/search/dsl | See example in [Searching in Neon](../features/search) | Perform a search using the internal Neon Domain Specific Language (DSL) - useful in case of very complex queries for which none of the simplified formalisms above were sufficient. |
| POST /api/search/createScrollCursor<br/>GET /api/search/fetchScrollCursor | See example in [Searching in Neon](../features/search) | Useful when you need to scroll though huge result set (>10.000 results). |

//*TODO swagger link*

### /api/liveblogs

2 APIs are dedicated to retrieving liveblog posts: `/posts` and `/updates`. The first one can be used to retrieve the last 10 posts, and then perform infinite scrolling towards the oldest post. The second one can then be used to poll regularly for new posts (or updates/deletions of existing ones).

#### Using /api/liveblogs

| Call | Example | Description |
|------|---------|-------------|
| GET /api/liveblogs/posts | `/api/liveblogs/0275-153e2d23e82b-e93b9d6ab730-1012/posts?from=0270-13faa4e4b747-cf1c056d3bc1&emk.site=my-site` | Return the last 10 posts. The (optional) `from` parameter takes the UUID of a particular post, from which to start from (allowing pagination / infinite scrolling) |
| GET /api/liveblogs/updates | `/api/liveblogs/0275-153e2d23e82b-e93b9d6ab730-1012/updates?version=0275-153e2d23e82b-e93b9d6ab730-1012-233567895434&emk.site=my-site` | Get all the updates on a liveblog starting from a particular version (the current version is returned in every response of the `/api/liveblogs` APIs). |

The structure of each liveblog post follows the structure defined in the Single node structure section above.

The full response has the following structure:

#### /api/liveblogs response structure
[source,javascript]
```javascript
{
    "count": 10,
    "result": [], // List of posts (NodeData) 
    "version": "0270-13faa4e4b747-cf1c056d3bc1-1012-234685247025",
    "reset": false,
    "totalPosts": 232
}
```

Where:

* `result` contains the list of liveblog posts
* `count` indicates how many posts are present in the current response
* `totalPosts` indicates how many posts are there in total in the liveblog
* `version` indicates the current version of the liveblog (to be passed to the `/api/liveblogs/updates` API)

[NOTE]
====
The /updates API returns a slightly different structure for each post, in order to indicate whether this post has been added, removed or updated:


./api/liveblogs/updates single post structure

```javascript
{
    "operation": "add", // add|delete|update
    "prev": "0259-0e822888cb1c-31fbade76f38-10ff",
    "post": {} // The post's NodeData

}
```

====

//*TODO swagger link*

### /api/v2/liveblogs

The v2 APIs are the new version of the ones described in the previous paragraph and can be used only if for the involved site a liveblog model configuration has been defined as described in [./configure-api-model.adoc#config_api_liveblog_responses, Configuring /api/v2/liveblogs responses].

The paths of the new APIs are:

* GET /api/v2/liveblogs/posts
* GET /api/v2/liveblogs/updates

The structure of each liveblog post follows the model configuration for liveblog defined above; in other words, the information returned for each post are defined by configuration.

One of the main advantages of these APIs is that they allow to retrieve the first level liveblog linked nodes (e.g. the image associated to a post).

### /api/menus

/api/menus allows to retrieve the menus structures defined in the Neon Administration UI.

.Using /api/menus
[Attributes]
|===
|Call | Example | Description
|GET /api/menus
|`/api/menus?emk.site=my-site`
|Retrieve all the menus for a website
|GET /api/menus/\{name\}
|`/api/menus/footerMenu?emk.site=my-site`
|Retrieve a particular menu from a website. 
|===

An example of menu response structure can be found here: [./cobalt-headless-apis/menu-api-example.adoc#, menu response structure].  We can see there are 3 kinds of items:

* `SECTION`: a pointer to a section of the website (in which case the ID of the section is returned)
* `EXTERNAL`: a URL to an external website (in which case the URL is returned)
* `GROUP`: a generic item, allowing to group other items

### /api/sites and /api/site

Those APIs return a hierarchical structure of items, representing the websites and sections configured in the backend. 

Each item has the following structure:

#### /api/sites single item structure

```javascript
{
    "nodeType": "siteNode",
    "id": "4004-152c8c4deae8-d07877a7d0f8-2001",
    "name": "test",
    "title": "test",
    "uri": "/test/",
    "items": [],
    "status": "ENABLED",
    "commentsEnabled": false,
    "attributes": {},
    "type": "section",
    "path": "/test/"
}
```

The `items` property contains an array of the sub-sections of that section/site. The `attributes` properties contains a map with all the custom attributes set on the site or section, in the Neon administration UI.

#### Using /api/sites and /api/site

| Call | Example | Description |
|------|---------|-------------|
| GET /api/sites | `/api/sites/live` | Retrieve all the live sites structure configured in the system |
| GET /api/site | `/api/site?emk.site=my-site` | Retrieve the structure of a particular website |



### /api/tags

The `/api/tags` API returns all the tags used on the site, on how many content (nodes) are tagged with it. The structure is a simple ordered list of:

```javascript
{
    "name":"climate-change",
    "count": 123978 
}
```

#### Using /api/tags

| Call | Example | Description |
|------|---------|-------------|
| GET /api/tags/\{tagFamily\} | `/api/tags/tags` | _There is no typo: the default tagFamily is indeed called "tags", but multiple tag families can be configured_. |

<!-- More info on this: Tags Management TODO -->

### /api/urls

These are specific APIs to retrieve the URLs of nodes. See [URLs management](../features/urls). 
