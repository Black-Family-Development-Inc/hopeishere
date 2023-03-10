# Hope is Here

This is a progressive web application using Gatbsy for Black Family Resource Development, Inc. It connects to Contentful, a headless CMS, for content edits and additions.

## Getting Started

### Install

```bash
npm install
```

### Add Local `.env` Credentials

Create a file in the root directory with the following contents:

```text
SITE_NAME = "http://localhost:8000"
ACCESS_TOKEN=
SPACE_ID=
ENVIRONMENT_ID = "master"
GOOGLE_ANALYTICS_TAG = ""
```

You will need to fill in the `ACCESS_TOKEN` and `SPACE_ID` for Contentful access. You can use the `ENVIRONMENT_ID` variable to point to a different environment/branch in Contentful. The `GOOGLE_ANALYTICS_TAG` value can be left blank when running in a non-production environment.

### Run the Application Locally

```bash
npm run start
```

This will run the app in development mode. After running this command, a file `src/gatsby-types.d.ts` should be autogenerated and your set-up is complete!

Alternatively, you can run the application in production mode locally with the following commands:

```bash
npm run build
npm run serve
```

#### Default Local Hosting Info

- Development: **localhost:8000**
- Graphql playground: **localhost:8000/__graphql**

## Important Links

### Documentation

- [Gatsby Docs](https://www.gatsbyjs.com/docs/)
- [Contentful](https://www.contentful.com/)
