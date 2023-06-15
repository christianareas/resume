// Dependencies.
const fs = require("fs")
const yaml = require("js-yaml")

// Get the OpenAPI object.
const pathToOpenApiFile = "../../../docs/spec/_versions/resume-api-0.1.0.yaml"
const openApiFile = fs.readFileSync(pathToOpenApiFile, "utf8")
const openApiObject = yaml.load(openApiFile)

console.log(openApiObject) // *****
