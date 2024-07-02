var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default function getAllRepos(username) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = `https://api.github.com/users/${username}/repos`;
        const projects = [];
        let page = 1;
        let hasNextPage = true;
        while (hasNextPage) {
            const response = yield fetch(`${url}?page=${page}&per_page=100`, {
                method: 'GET',
                headers: {
                    'Authorization': `token ${process.env.GH_API_TOKEN}`
                }
            });
            const data = yield response.json();
            let project;
            data.forEach((repo) => {
                console.log(repo);
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
                };
                projects.push(project);
            });
            page++;
            hasNextPage = data.length === 100;
        }
        return projects;
    });
}
export function getReposWithStars(username, stars) {
    return __awaiter(this, void 0, void 0, function* () {
        let allProjects = yield getAllRepos(username);
        return allProjects.filter((value, _index, _arr) => {
            if (value.stars >= stars)
                return value;
        });
    });
}
export function getReposWithName(username, name) {
    return __awaiter(this, void 0, void 0, function* () {
        let allProjects = yield getAllRepos(username);
        return allProjects.filter((value, _index, _arr) => {
            if (value.name === name)
                return value;
        });
    });
}
export function getReposWithForks(username, forks) {
    return __awaiter(this, void 0, void 0, function* () {
        let allProjects = yield getAllRepos(username);
        return allProjects.filter((value, _index, _arr) => {
            if (value.forks >= forks)
                return value;
        });
    });
}
export function getReposWithDescription(username, description) {
    return __awaiter(this, void 0, void 0, function* () {
        let allProjects = yield getAllRepos(username);
        return allProjects.filter((value, _index, _arr) => {
            if (value.description === description)
                return value;
        });
    });
}
export function getReposWithWatchers(username, watchers) {
    return __awaiter(this, void 0, void 0, function* () {
        let allProjects = yield getAllRepos(username);
        return allProjects.filter((value, _index, _arr) => {
            if (value.watchers >= watchers)
                return value;
        });
    });
}
export function getPrivateRepos(username) {
    return __awaiter(this, void 0, void 0, function* () {
        let allProjects = yield getAllRepos(username);
        return allProjects.filter((value, _index, _arr) => {
            if (value.private)
                return value;
        });
    });
}
export function getReposWithLicense(username, license) {
    return __awaiter(this, void 0, void 0, function* () {
        let allProjects = yield getAllRepos(username);
        return allProjects.filter((value, _index, _arr) => {
            if (value.license === license)
                return value;
        });
    });
}
