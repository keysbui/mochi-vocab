import Layout from '../../components/Layout'
import ezbdc from '@/assets/friendlinks/ezbdc.jpg'
import kk from '@/assets/friendlinks/kk.jpg'
import web_worker from '@/assets/friendlinks/web-worker.png'
import type React from 'react'

export const FriendLinks: React.FC = () => {
  const links = [
    {
      title: 'ez memorize words',
      href: 'https://ezbdc.dashu.ai',
      imgSrc: ezbdc,
      description: 'A minimalist English vocabulary learning app that can help you learn English very conveniently and efficiently. It has a challenging vocabulary memorization mode. No registration is required, just download and use it.',
    },
    {
      title: 'Kai',
      href: 'https://kaiyi.cool/',
      imgSrc: kk,
      description: 'Kai\'s personal blog, which records some technical articles, life insights, and some interesting small projects',
    },
    {
      title: 'Web Worker - Front-end programmers love to hear',
      href: 'https://www.xiaoyuzhoufm.com/podcast/613753ef23c82a9a1ccfdf35',
      imgSrc: web_worker,
      description:
        'Web Worker Podcast is a Chinese audio podcast program for front-end programmers to chat. The program revolves around the programmer field, talking about information, workplace, technology selection...anything related to web development can be discussed.',
    },
  ]

  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center px-4 pt-20">
        <div className="flex w-full max-w-md flex-grow flex-col items-center">
          <div className="mt-5 text-center text-lg font-bold">Friendly Links</div>
          <div className="links flex w-full flex-col items-center gap-y-8 py-5">
            {links.map((link, index) => (
              <a
                key={index}
                title={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="linkItem flex w-full items-center overflow-hidden"
              >
                <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-gray-200">
                  <img src={link.imgSrc} alt={link.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="pb-1 text-sm font-bold">{link.title}</div>
                  <div className="text-xs text-gray-500">{link.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-auto pb-5 text-center text-sm text-gray-500">
          Want to add a friend link? Please contact email:
          <a href="mailto:me@kaiyi.cool" className="text-blue-500">
            me@kaiyi.cool
          </a>
        </div>
      </div>
    </Layout>
  )
}
