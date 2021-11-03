/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Design library in Figma',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        A fully customizable design system built on Figma. All components are granularly tokenized using Figma Tokens using base &lt; semantic &lt; component tokens.
      </>
    ),
  },
  {
    title: 'State of the art Toolchain',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Integration from design to code using state of the art tooling. Figma, Figma Tokens, Design Linting, Style Dictionary, Storybook, Dinosaurus Docs, StencilJS, Cypress, and more.
      </>
    ),
  },
  {
    title: 'Agnostic Web Component library',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        All components are built as web components. This means that they can be used in any modern javascript environment or even in plain html. All components can be themed using Design tokens/CSS variables, built to support a multi-brand scnenario.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
