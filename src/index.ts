export interface Project {
  name: string,
  owner: string,
  private: boolean,
  url: string,
  commits: number,
  description: string,
  stars: number,
  watchers: number,
  forks: number,
  license: string,
}



export default async function getAllRepos(username: string): Promise<Project[]> {

  let url = `https://api.github.com/users/${username}/repos`
  const projects: Project[] = []
  let page = 1;
  let hasNextPage = true;

  while (hasNextPage) {
    const response = await fetch(
      `${url}?page=${page}&per_page=100`, {
      method: 'GET',

      headers: {

        'Authorization': `token ${process.env.GH_API_TOKEN}`
      }
    });

    const data = await response.json();


    let project: Project;
    data.forEach((repo: any) => {

      console.log(repo)
      project = {
        name: repo.name,
        owner: repo.owner.login,
        private: repo.private,
        commits: repo.commits,
        url: repo.html_url,
        description: repo.description,
        stars: repo.stargazers_count,
        watchers: repo.watchers_count,
        forks: repo.forks,
        license: repo.license
      }

      projects.push(project);

    });

    page++;
    hasNextPage = data.length === 100
  }



  return projects;
}

export async function getReposWithStars(username: string, stars: number): Promise<Project[]> {
  let allProjects = await getAllRepos(username);

  return allProjects.filter((value, _index, _arr) => {

    if (value.stars >= stars)
      return value
  })
}

export async function getReposWithName(username: string, name: string): Promise<Project[]> {

  let allProjects = await getAllRepos(username);

  return allProjects.filter((value, _index, _arr) => {

    if (value.name === name)
      return value
  })
}
export async function getReposWithForks(username: string, forks: number): Promise<Project[]> {

  let allProjects = await getAllRepos(username);

  return allProjects.filter((value, _index, _arr) => {

    if (value.forks >= forks)
      return value
  })
}
export async function getReposWithDescription(username: string, description: string): Promise<Project[]> {

  let allProjects = await getAllRepos(username);

  return allProjects.filter((value, _index, _arr) => {

    if (value.description === description)
      return value
  })
}
export async function getReposWithWatchers(username: string, watchers: number): Promise<Project[]> {

  let allProjects = await getAllRepos(username);

  return allProjects.filter((value, _index, _arr) => {

    if (value.watchers >= watchers)
      return value
  })
}

export async function getPrivateRepos(username: string): Promise<Project[]> {

  let allProjects = await getAllRepos(username);

  return allProjects.filter((value, _index, _arr) => {

    if (value.private)
      return value
  })
}
export async function getReposWithLicense(username: string, license: string): Promise<Project[]> {

  let allProjects = await getAllRepos(username);

  return allProjects.filter((value, _index, _arr) => {

    if (value.license === license)
      return value
  })
}
