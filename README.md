# Christian’s Resume
Get to know me professionally!

This project aims to showcase how I write developer documentation — mainly API documentation. It also showcases my developer skills, including API design.

To meet these goals, I plan to:

- Design and document a new API: ”Resume API”.
- Build a custom docs site.
- Build the API.
- Use the API to display my resume on the homepage.


## API Design and Docs
To see how far I’ve made it with the API design and documentation phase, see [docs/spec/](./docs/spec/).

I’d like to highlight that I’ve set up the specification as multiple files. This makes it easier to maintain. See [docs/spec/src/](./docs/spec/src/).

I then use the following script to compile the specification into a single file:

```bash
swagger-cli bundle docs/spec/src/resume-api.yaml -o docs/spec/_versions/resume-api-${npm_package_version}.yaml -t yaml
```

Not only that, I version it to match the version in [package.json](./package.json). Versions get stored in [docs/spec/_versions/](./docs/spec/_versions/).


## Docs Site
This is a work in progress. I’m using the latest version of Next.js (app router).

I actually ended up taking a detour and building [`openapi-hook`](https://github.com/christianareas/openapi-hook). This hook makes it possible to build a OpenAPI documentation site to my exact specifications. I plan to publish it to NPM!


## API
The rest (no pun intended) is in the queue.
