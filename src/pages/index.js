import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-1.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBlub from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>AbdulRahman PortFolio</title>
        <meta name="description" content="Welcome to AbdulRahman PortFolio" />
      </Head>
      <TransitionEffect />
      <main
        className="flex items-center text-dark w-full min-h-scree 
      dark:text-light "
      >
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Obadea"
                className="w-full h-auto lg:hidden md:inline-block wd:w-full"
                priority
                sizes="(max-width:768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left
                xl:!text-5xl  lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl

                "
              />
              <p className="my-4 text-base font-medium  md:text-sm sm:text-xs">


I focus on developing and optimizing user interfaces, ensuring they are both visually appealing and highly functional. I have collaborated closely with designers and back-end developers, honing my skills in problem-solving and effective communication. My eagerness to take on new challenges and my commitment to continuous improvement are evident in the quality of my work and my proactive approach to learning.

              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
              <a
  href="/Abdulrahman_Aminu_FrontEndCV.pdf"
  download
  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
  md:p-2 md:px-4 md:text-base"
>
  Resume <LinkArrow className="max-w-6 h-6 ml-1" />
</a>

                <Link
                  href="mailto:rahformatives@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base
                  "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-20 md:hidden">
          <Link href={"https://wa.me/message/LCKVE7YA74JKN1"} >
          <Image
            src={lightBlub}
            alt="Obadiah Gbenga"
            className="w-full h-auto"
          />
          </Link>
        </div>
      </main>
    </>
  );
}
