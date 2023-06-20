import "dotenv/config";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: process.env.AUTH_TOKEN });

async function getMessage() {
  const repoNames = await _getRepoNames();
  const countMap = await _getPRCountMap(repoNames);
  return _getFormattedMsg(countMap);
}
async function _getRepoNames() {
  // if your ora has more than 100 repos, you need to change this value
  const PER_PAGE = 100;
  const { data } = await octokit.request("GET /orgs/{org}/repos", {
    org: process.env.ORG,
    per_page: PER_PAGE,
  });
  return data.map((v) => v.name);
}
async function _getPRCountMap(repoNames) {
  if (!repoNames.length) return;
  const countMap = {};
  const assigneerList = await Promise.all(
    repoNames.map((repoName) => _getRepoAssigneers(repoName))
  );
  const filteredList = assigneerList.map((data) =>
    data
      .flat()
      .map(({ login }) => login)
      .filter(Boolean)
  );
  filteredList.flat().forEach((login) => {
    countMap[login] = (countMap[login] || 0) + 1;
  });
  return countMap;
}
async function _getRepoAssigneers(repoName) {
  const { data } = await octokit.request("GET /repos/{owner}/{repo}/pulls", {
    owner: process.env.ORG,
    repo: repoName,
  });
  return data.filter((v) => !v.draft).map((v) => v?.requested_reviewers);
}
function _getFormattedMsg(data) {
  const sortedEntries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  const formattedCountMap = sortedEntries.map(
    ([key, value]) => `- ${key}: ${value}`
  );
  return formattedCountMap.join("\n");
}

export default { getMessage };
