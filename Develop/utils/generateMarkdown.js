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
 else if (data.license == "Drivers") {
  return ''; 
 }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  function renderLicenseLink(license) {
    if (license === "Apache 2.0") {
      return`(https://opensource.org/licenses/Apache-2.0)`
    } else if (license === "MIT"){
      return `(https://opensource.org/licenses/MIT)`
    } else if (license === "The Perl License"){
      return `(https://opensource.org/licenses/Artistic-2.0)` 
    } else if (license === "GNU GPLv3") {
      return `(https://www.gnu.org/licenses/gpl-3.0)`
    }else if (license === "None") {
      return ""
    }
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
