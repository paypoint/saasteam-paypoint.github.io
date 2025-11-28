import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Learn",
    Svg: require("@site/static/img/1.svg").default,
    description: (
      <>
        A structured, beginner-friendly guide covering Frontend, Backend, and
        database fundamentals. Learn at your pace with clear explanations and
        practical examples.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/2.svg").default,
    description: (
      <>
        No filler. Only the essential concepts you need to build real
        applications — HTML, CSS, JavaScript, TypeScript, .NET, MS-SQL, clean
        code, and best practices.
      </>
    ),
  },
  {
    title: "Built for Developers",
    Svg: require("@site/static/img/3.svg").default,
    description: (
      <>
        Everything is based on real-world development experience. Learn
        patterns, debugging techniques, architecture basics, and practical tips
        you can apply immediately.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
