import getAllRepos from "../src/index"

test('github api has commit counter', async () => {
  const projects = await getAllRepos('Carter907');
  expect(projects).toHaveProperty('commit')
})
