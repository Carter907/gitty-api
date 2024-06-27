### Gitty API

gitty api is a set of functions that allows you to interface with your github repositories at a high level.

### API token

gitty api uses your api token to make requests. Please set an environment variable called `GH_API_TOKEN`
set to your token to successfully call these functions.

### Install
use npm to install this package
```
npm i @carte_907/gitty-api
```

### Usage
To get all the repositories from your github page simply write the following:
```js
let projects = await getAllRepos('[your username]')
```

