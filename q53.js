// A list showing a programmer's skills in detail
var developrSkills = {
    languages: ["Javascript", "Typescript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
// Getting specific skills from the list
var languages = developrSkills.languages, frameworks = developrSkills.frameworks, tools = developrSkills.tools;
// Showing a skill from each category
console.log("Language: ".concat(languages[0], ",  Framework: ").concat(frameworks[0], ", Tool: ").concat(tools[0]));
