import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{' '}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>

        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:md-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />


        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Founder"
            company="AORF Designs"
            companyLink="https://github.com/AorfDesigns"
            time="April 2022 - Present"
            address="Lagos, Nigeria (Remote)"
            work={`AORF Designs is a creative and technology-driven brand specializing in Branding, Product Design, Software Development, and Marketing. We help startups, small-scale businesses, and established brands create impactful solutions that drive growth and visibility.`}
          />
        </ul>

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Lead Frontend Engineer | Social Media App (Remote)"
            company="CitizenX"
            companyLink="https://citizenx-dashboard-sbqx.onrender.com/login"
            time="2024 - 2025"
            address="Remote, Lagos"
            work="• Designed and developed responsive web applications using React.js, 
improving user engagement by 30% through optimized UI/UX.
• Collaborated with Enterprise Architects to define software requirements, 
ensuring alignment with business objectives.
• Wrote clean, efficient, and maintainable code, reducing technical debt by 
25% through refactoring and automation scripts.
• Implemented automated testing with Jest, achieving 90% test coverage 
and minimizing production bugs.
• Utilized New Relic to monitor system performance, identifying and 
resolving bottlenecks to enhance application speed by 15%.
• Led a team of 3 developers in an agile environment, delivering projects 
ahead of deadlines while maintaining high quality"
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Software Engineer | Fintech Startup (Remote)"
            company="RoutePay Fintech"
            companyLink="http://Portal.routepay.com"
            time="2023 - 2024"
            address="Remote, Lagos"
            work="• Developed and deployed customer-facing features using React Native for 
mobile (iOS/Android), increasing user retention by 25%.
• Built scalable web applications with React, Next.js, and TypeScript, 
integrating RESTful APIs to streamline financial workflows.
• Built scalable web applications with React, Next.js, and TypeScript, 
integrating RESTful APIs to streamline financial workflows.
• Implemented automated testing with Jest and Cypress, achieving 95% 
test coverage and reducing bugs by 30%.
• Mentored 3 junior engineers, enhancing team productivity through pair 
programming and code reviews.
• Contributed to CI/CD pipelines on Azure, cutting deployment times by 
40%"
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Engineer"
            company="NailSavvy"
            companyLink="http://Portal.routepay.com"
            time="2022 - 2023"
            address="Remote, Lagos"
            work="• Built and maintained Angular-based web applications, supporting over 
500,000 users with seamless functionality.
• Automated repetitive tasks using scripting tools, saving 10+ hours of 
manual work per week.
• Conducted code reviews and debugging sessions, improving code quality 
and team knowledge sharing.
• Worked independently on critical features, delivering solutions that 
increased customer satisfaction by 20%.
• Documented development processes and ensured software updates 
aligned with the latest industry standards."
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Junior Front-End Developer
"
            company="BlooCode"
            companyLink=""
            time="2021 - 2022"
            address="Remote, Lagos"
            work="• Collaborated with back-end engineers to integrate business logic into 
client applications.
• Worked with designers to ensure accurate design implementation and 
cohesive visual results.
• Maintained high coding standards, including testing and documentation 
for reliable and maintainable code.
• Streamlined user authentication and authorization flow, improving user 
experience and security using React."
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Founder"
            company="AORF Designs"
            companyLink="https://github.com/AorfDesigns"
            time="April 2022 - Present"
            address="Lagos, Nigeria (Remote)"
            work={`AORF Designs is a creative and technology-driven brand specializing in Branding, Product Design, Software Development, and Marketing. We help startups, small-scale businesses, and established brands create impactful solutions that drive growth and visibility.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
