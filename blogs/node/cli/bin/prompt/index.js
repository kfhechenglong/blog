import inquirer from 'inquirer'
import packageName from "./packageName.js";
import install from "./install.js";

export default () => inquirer.prompt([
  packageName(),
  install()
])
