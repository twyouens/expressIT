# ExpressIT
Simple asset managment node API

---

## Usage
To get started, run:
* Install dependencies
```sh
  npm install
```
* Run 
```sh
  npm run prod
```

### Endpoints
<details>
 <summary><code>GET</code> <code><b>/assets</b></code> <code>(lists all assets in system)</code></summary>

##### Parameters

> None

</details>

<details>
 <summary><code>POST</code> <code><b>/assets</b></code> <code>(create new asset)</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | name      |  required | string                  | Asset name  |
> | type      |  required | "computer","laptop","mobile","tablet","other"                  | Asset type  |

</details>

<details>
 <summary><code>GET</code> <code><b>/assets/asset/{assetID}</b></code> <code>(lists asset by assetID)</code></summary>


##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | assetID   |  required | string                  | Asset unique ID  |


</details>

<details>
 <summary><code>PUT</code> <code><b>/assets/asset/{assetID}</b></code> <code>(update asset by ID)</code></summary>


##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | name      |  required | string                  | Asset name  |
> | type      |  required | "computer","laptop","mobile","tablet","other"                  | Asset type  |

</details>

<details>
 <summary><code>DELETE</code> <code><b>/assets/asset/{assetID}</b></code> <code>(delete single asset by ID)</code></summary>


##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | assetID   |  required | string                  | Asset unique ID  |


</details>