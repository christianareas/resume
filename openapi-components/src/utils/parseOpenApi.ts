// Dependencies.
const fs = require("fs")
const yaml = require("js-yaml")

// Get the OpenAPI object.
const pathToOpenApiFile = "../../../docs/spec/_versions/resume-api-0.1.0.yaml"
const openApiFile = fs.readFileSync(pathToOpenApiFile, "utf8")
const openApi = yaml.load(openApiFile)

// OpenAPI Info object.
const openApiInfoData = openApi.info

const openApiInfoTitleData = openApiInfoData.title
const openApiInfoSummaryData = openApiInfoData.summary
const openApiInfoDescriptionData = openApiInfoData.description

const openApiInfoContactData = openApiInfoData.contact
const openApiInfoContactNameData = openApiInfoContactData.name
const openApiInfoContactEmailData = openApiInfoContactData.email

const openApiInfoLicenseData = openApiInfoData.license
const openApiInfoLicenseNameData = openApiInfoLicenseData.name
const openApiInfoLicenseIdentifierData = openApiInfoLicenseData.identifier

const openApiInfoVersionData = openApiInfoData.version

console.log(openApiInfoData) // **
console.log(openApiInfoTitleData) // **
console.log(openApiInfoSummaryData) // **
console.log(openApiInfoDescriptionData) // **
console.log(openApiInfoContactData) // **
console.log(openApiInfoContactNameData) // **
console.log(openApiInfoContactEmailData) // **
console.log(openApiInfoLicenseData) // **
console.log(openApiInfoLicenseNameData) // **
console.log(openApiInfoLicenseIdentifierData) // **
console.log(openApiInfoVersionData) // **