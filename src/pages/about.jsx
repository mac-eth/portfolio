import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import avatarImage from '@/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Mac Sweeny</title>
        <meta
          name="description"
          content="I’m Mac Sweeny. I live in Brisbane, Australia."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={avatarImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m <a className='text-teal-500 dark:text-teal-400'>Mac Sweeny</a>. I live in Brisbane, Australia.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’m a passionate, hardworking, young guy who loves to learn and
                challenge myself with new technologies and programming
                languages. I am always eager to take on new projects and tasks,
                and enjoy working in a fast-paced, dynamic environment. I am a
                quick learner and am able to adapt to new situations easily. I
                am also a strong team player and enjoy collaborating with others
                to solve complex problems and deliver high-quality results.
              </p>
              <p>
                Currently, I am focusing on learning and developing the various
                components that make up a full-stack web application, with a
                particular emphasis on Software as a Service (SaaS) products.
                This encompasses gaining knowledge about different front-end
                stacks, such as TailwindCSS and React, as well as back-end
                technologies, Prisma, tRPC, and Next.js. Furthermore, I am
                highly motivated to learn about the different methodologies and
                best practices associated with building, deploying, and
                maintaining SaaS products. To accomplish this, I am actively
                working on a SaaS product called Onu, which enables users to
                create and manage their own social media communities.
              </p>
              <p>
                Another one of my goals is to secure a full-time position as a
                Software Engineer within a corporate environment. I am currently
                seeking such a position in Brisbane, Australia, but I am open to
                remote opportunities as well. I am particularly interested in
                working with a team of like-minded individuals so that I can
                continue to develop my skills as a developer.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/mac-eth"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/mac-sweeny-a2b492219/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:macsweenydev@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                macsweenydev@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
