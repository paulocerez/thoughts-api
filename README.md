<h1 align="center">
  <a href="https://github.com/paulocerez/thoughts-enhanced">
    <!-- Please provide path to your logo here -->
    <img src="./client/public/thoughts_logo.png" alt="Logo" width="100" height="100">
  </a>
</h1>

<div align="center">
  Thoughts
  <br />
  <a href="#about"><strong>Explore the docs »</strong></a>
  <br />
  <br />
  <a href="https://github.com/paulocerez/thoughts-enhanced/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  ·
  <a href="https://github.com/paulocerez/thoughts-enhanced/issues/new?assignees=&labels=enhancement&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  .
  <a href="https://github.com/paulocerez/thoughts-enhanced/issues/new?assignees=&labels=question&template=04_SUPPORT_QUESTION.md&title=support%3A+">Ask a Question</a>
</div>

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Support](#support)
- [Project assistance](#project-assistance)
- [Contributing](#contributing)
- [Authors & contributors](#authors--contributors)

</details>

---

## About
Thoughts is a web application that captures any thoughts that cross your mind your mind. It's simple to use, minimalistic and includes some humor. ;) 


### Built With
- Express.js: Node.js framework for building web apps and APIs
- Vue.js: JS framework for building user interfaces and single-page apps
- Vite: build tool for bundling and optimizing Vue.js projects
- Docker: platform for building, packaging, and deploying apps in containers to ensure consistent environments
- Tailwind: CSS framework for styling web apps and websites
- Prisma: ORM for simplifying database access and management in web apps
- Postgres: relational database management system for storing and managing data in web apps
- TypeScript: superset of JS that adds static typing and other features for easier and more reliable development
- Git/GitHub: version control system and web-based platform for tracking changes to code and collaborating with other developers
- Vue Router: routing library for adding client-side routing to Vue.js apps for easy navigation between views and components.



### Software Architecture
<img src="./client/dist/assets/thoughts_architecture.jpg" alt="Software Architecture" width="" height="">
<img src="./client/public/thoughts_logo.png" alt="Logo" width="100" height="100">


## Getting Started

### Prerequisites
- Node.js (>= v14)
- npm (>= v6)
- git

### Installation

```bash

git clone https://github.com/paulocerez/thoughts-enhanced.git

# ignore any Docker-related files at the moment, don't build via docker-compose!

# install dependencies for the backend
cd server
npm i

# apply db migrations to db
npx prisma migrate dev

# run the backend development server
npm run start

# install dependencies for the frontend
cd client
npm i

# run the frontend development server
npm run dev
```

## Roadmap
- User Authentication with Login/Signup (currently didn't implement this out of time issues)
- Responsiveness (same issue)
- "Under construction" Sections to be done
- Share thoughts with friends

See the [open issues](https://github.com/paulocerez/thoughts-enhanced/issues) for a list of proposed features (and known issues).

- [Top Feature Requests](https://github.com/paulocerez/thoughts-enhanced/issues?q=label%3Aenhancement+is%3Aopen+sort%3Areactions-%2B1-desc) (Add your votes using the 👍 reaction)
- [Top Bugs](https://github.com/paulocerez/thoughts-enhanced/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Areactions-%2B1-desc) (Add your votes using the 👍 reaction)
- [Newest Bugs](https://github.com/paulocerez/thoughts-enhanced/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

## Authors & contributors

The original setup of this repository is by [Paulo Cedeños](https://github.com/paulocerez).

For a full list of all authors and contributors, see [the contributors page](https://github.com/paulocerez/thoughts-enhanced/contributors).



