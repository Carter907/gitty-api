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
Get all of a user's repositories
```js
let projects = await getAllRepos('[user]')
```
Get Repositories with at least a certain number of forks
```js
let moreThan4Forks = await getReposWithForks('[user]', 5) // 5 or more forks
```
Get Repositories with at least a certain number of stars
```js
let popularRepositories = await getReposWithStarts('[user]', 1000) // 1000 or more stars
```

