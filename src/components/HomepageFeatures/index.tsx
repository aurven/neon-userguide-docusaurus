import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type QuickLinkItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
  link: string;
};

const QuickLinkList: QuickLinkItem[] = [
  {
    title: 'Dashboards',
    Svg: require('@site/static/img/neon_dashboards.svg').default,
    description: 'Learn how to create and customize dashboards for content overview and analytics',
    link: '/docs/user-guide/dashboard',
  },
  {
    title: 'Faceted Search',
    Svg: require('@site/static/img/neon_faceted_search.svg').default,
    description: 'Discover powerful search and filtering capabilities for content management',
    link: '/docs/user-guide/faceted-search',
  },
  {
    title: 'Webpage Editor',
    Svg: require('@site/static/img/neon_webpage_editor.svg').default,
    description: 'Master the visual editor for creating and editing web content',
    link: '/docs/user-guide/creating-editing-web-pages',
  },
];

function QuickLink({title, Svg, description, link}: QuickLinkItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.quickLinkCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {QuickLinkList.map((props, idx) => (
            <QuickLink key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
