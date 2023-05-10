import Link from 'next/link';
import Image from 'next/image';

// Assets
import certificate from '../public/assets/meta-front-end-developer-certificate.png';

export default function Footer() {
  const socials = [
    {
      name: 'GitHub',
      link: 'https://github.com/anniedavid13',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/annie-david/',
    },
    {
      name: 'Medium',
      link: 'https://medium.com/@anniedavid407',
    },
    {
      name: 'Resume',
      link: 'https://drive.google.com/file/d/17rBJB459MV2fX5txr30IWbmAmcpdFZ6G/view?usp=sharing',
    },
  ];

  const menuItems = [
    { name: 'Skills', path: '/#skills' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Contact', path: '/#contact' },
  ];

  const menuItemsDisplay = menuItems.map(({ name, path }) => (
    <li key={name}>
      <Link href={path} scroll={false}>
        {name}
      </Link>
    </li>
  ));

  const socialsDisplay = socials.map(({ name, link }) => (
    <li key={name}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </li>
  ));

  return (
    <footer className="border-t border-t-primary-dark pt-6 dark:border-t-primary-light">
      <div className="my-8 grid gap-4 md:grid-cols-3 lg:max-w-3xl">
        <ul className="space-y-2">{menuItemsDisplay}</ul>

        <ul className="space-y-2">{socialsDisplay}</ul>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://coursera.org/share/0ef277f24380d64e77d074a841e1deb1"
          className="w-full grayscale filter hover:grayscale-0"
        >
          <Image
            src={certificate}
            alt="meta front end developer certificate"
            height={100}
            width={100}
          />
        </a>
      </div>

     
    </footer>
  );
}
