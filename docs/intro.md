---
sidebar_position: 1
---

# Start here

## Welcome to the Substrate DS Storybook

This is the Substrate DS Storybook, a sandbox for demonstrating and developing components and patterns built for
the Substrate Design System ("Substrate DS"). This demonstration is built using the open source tool
[Storybook](https://storybook.js.org/) using JavaScript and Node.js. All Substrate components are built
using <a href="https://stenciljs.com/docs/introduction" target="_blank">Stencil</a> to deliver standards-compliant web components.
Substrate web components are platform-agnostic and can be used in any JavaScript framework of your choice or directly in the browser
using static HTML.

In the Sidebar to the left, you can browse the components and patterns within Substrate. Each example will
be demonstrated in what is called a "story" within the Canvas (the area of the window you're
reading now). Across the top of the Canvas area, you will see a Docs tab, zoom controls, a color blindness
simulator, and a light/dark theme toggle.

- The **Docs** tab includes all of the developer documentation for each component, including guidelines and usage, the full API, any variants, and instructions for cherry picking.

While viewing a component, to the right of the Canvas there is a tabbed Panel which displays Controls,
any Action outputs associated with that demonstration, and an Accessibility audit.

- The **Control** options allow you to change content in the demonstration area by altering the data given to the component via its properties.
- The **Actions** tab provides console output where user actions like clicking or selecting should produce event target information.
- The **Accessibilty** tab displays a11y violations of WCAG 2.0 Levels A and AA, WCAG 2.1 Level AA, Section 508, and other best practices
  through the [aXe accessibilty engine](https://github.com/dequelabs/axe-core).

Display options and keyboard shortcuts are available via the ellipsis menu
icon next to the Substrate DS logo at the top of the sidebar.

If you would like to download and run the Substrate DS Components Storybook
yourself, you may clone [the respository](https://github.com/phantasmagoriadigital/components)

```sh
git clone https://github.com/phantasmagoriadigital/components.git
```

## Get Started

### Consume components using Unpkg

[ Experiamental ] Use the webcomponent library to play around using unpkg by adding the following to your html head:

```html
<script crossorigin type="module" src="https://unpkg.com/sux-ds@0.0.1/dist/substrate-ds/substrate-ds.esm.js"></script>
```

### For development

Clone the [Substrate Componenet Respository](https://github.com/phantasmagoriadigital/components) from GitHub.

Install dependencies

```bash
npm install
```

To start development wit StencilJS & Storybook run `start-dev` in the terminal

```bash
npm run start-dev
```

Or run the Stencil and Storybook manually using:

```bash
npm run build
npm run start
npm run storybook
```

## Development Environment

### Helpful VS Code extensions

- **EditorConfig for VS Code** — [extension page](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

- **axe Accessibility Linter** — [extension page](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter)

- **MDX** — [extension page](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
  Provides syntax highlighting and bracket matching for MDX (JSX in Markdown) files.

- **ESLint** — [extension page](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- **Prettier - Code formatter** — [extension page](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
