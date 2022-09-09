// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (data.license == "MIT") {
  return '![MIT](https://img.shields.io/badge/license-MIT-green)';
 }
 else if (data.license == "APACHE 2.0") {
  return '![APACHE 2.0] https://img.shields.io/badge/license-APACHE2.0-green)'; 
}

 else if (data.license == "GPL 3.0") {
  return '![GPL 3.0] https://img.shields.io/badge/license-GPL3.0-green)'; 
}

 else if (data.license == "BSD 3") {
  return '![BSD 3] https://img.shields.io/badge/license-BSD3.0-green)'; 
}
 else if (data.license == "None") {
  return ''; 
 }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {

    if (license === "MIT") {
      return`(https://choosealicense.com/licenses/mit)`
    } else if (license === "APACHE 2.0"){
      return `(https://choosealicense.com/licenses/apache-2.0)`
    } else if (license === "GPL 3.0"){
      return `(https://choosealicense.com/licenses/gpl-3.0)` 
    } else if (license === "BSD 3") {
      return `(https://choosealicense.com/licenses/bsd-3-clause)`
    }else if (license === "None") {
      return ""
    }
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  This project is licensed under the ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions concerning this project, please contact me at ${data.email}. You can find more of my work at https://github.com/${data.username}.

`;
}

module.exports = generateMarkdown;
