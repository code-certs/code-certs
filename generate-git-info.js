const fs = require("fs");
let gitRepoInfo = require("git-repo-info")();

if (!fs.existsSync('public')) fs.mkdirSync('public');

fs.writeFileSync('public/git.json', JSON.stringify({
    commit: gitRepoInfo.abbreviatedSha,
    message: gitRepoInfo.commitMessage
}));
