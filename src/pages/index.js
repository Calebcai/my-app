import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 pt-12 ${inter.className} relative`}
    >
      <div className="chat chat-start">
        <div className="chat-bubble ">Hi, <br/>自从上次一别,我们也是好久没见了呢！</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">那这次我们婚礼见吧！</div>
        </div>
      <div className="text-xl font-serif pt-22">
        距离约定日期还有
      </div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max mb-10">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{"--value":15}}></span>
          </span>
          天
        </div> 
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{"--value":10}}></span>
          </span>
          时
        </div> 
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{"--value":24}}></span>
          </span>
          分
        </div> 
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{"--value":29}}></span>
          </span>
          秒
        </div>
      </div>
      <div className="flex flex-col items-center absolute bottom-2">
        <Image
          className="w-5 h-5 text-gray-500"
          src={require('../../public/nextpage.svg')}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className="font-sans text-xs p-4 text-gray-500">查看详情</div>
      </div>
    </main>
  )
}
