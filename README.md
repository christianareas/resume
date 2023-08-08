# Christian’s Resume
Get to know me professionally. This project aims to showcase how I write developer documentation, mainly API documentation. It also showcases my developer skills — including API design.

To meet these goals, I plan to:

- Design and document a new REST API: ”Resume API”.
- Build a custom docs site.
- Build the API.
- Use the API to display my resume on the homepage.


## OpenAPI Specification
The [docs/spec/src/](./docs/spec/src/) directory contains the OpenAPI specification, split into multiple files. This reduces duplication of code, and makes it easier to maintain the specification.

When I’m ready to release a new version of the specification, I run the following command from the root of the project:

```bash
npm run bundle-api
```

This command uses the `bundle-api` script in [package.json](./package.json) to bundle the specification into a single file, add a version number to the filename, and store it in [docs/spec/_versions/](./docs/spec/_versions/).


## Docs Site
This is a work in progress. I’m using the latest version of Next.js (App Router).

I actually ended up taking a detour and building [`openapi-hook`](https://github.com/christianareas/openapi-hook). This React hook makes it possible to build an OpenAPI documentation site to my exact specifications. I plan to publish it to NPM!


## API
The rest (no pun intended) is in the queue.
