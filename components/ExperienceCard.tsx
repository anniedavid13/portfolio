
import { motion, Variants } from 'framer-motion';

// Interface
import { ExperienceDataTypes } from '../utils/experience';

export default function ExperienceCard({
  title,
  link,
  place,
  time,
  type,
  workdone,
}: ExperienceDataTypes) {
  const projectVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        ease: 'easeIn',
      },
    },
  };

  const projectChildrenVariants = (direction: 'left' | 'right'): Variants => ({
    initial: { x: direction === 'left' ? -10 : 10, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  });

  const projectButtonsHover: Variants = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
  };

  const learn = workdone.map(({ id, desc }) => (
    <li key={id} className='ml-8'>
      <h6>{desc}</h6>
      <br />
    </li>
  ));

  return (
    <a href={link}>
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={projectVariants}
      viewport={{ once: true, amount: 'all' }}
      className="mt-4 flex flex-col gap-6 rounded-2xl border border-accent-grey-light p-5 dark:border-accent-grey-dark lg:flex-row"
    >
      
      <motion.div
        variants={projectChildrenVariants('right')}
        className="w-full lg:flex lg:flex-col lg:justify-between"
      >
        <h4 className="w-fit rounded-md bg-js-yellow p-2 text-heading-md leading-none text-primary-dark ">
          {title}
        </h4>
        <br />
        <p className="max-w-md  text-accent-grey-light dark:text-accent-grey-dark">
          {place}
        </p>
        <br />
       
        <div className="mt-4 mb-2 flex items-center justify-between md:justify-start md:gap-4">
         
          <ul className="list-disc">{learn}</ul>
        </div>
        <div className="mt-4 flex w-full flex-col gap-4 md:flex-row">
          <motion.div
            initial="initial"
            whileHover="animate"
            variants={projectButtonsHover}
            className="w-full rounded-full border border-js-yellow py-2 text-center text-body font-bold tracking-wider text-primary-dark dark:text-js-yellow"
          >
            {time}
          </motion.div>
          <motion.div
            
           
            
            initial="initial"
            whileHover="animate"
            variants={projectButtonsHover}
            className="w-full rounded-full bg-js-yellow py-2 text-center text-body font-bold tracking-wider text-primary-dark"
          >
           {type}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
    </a>
  );
}
