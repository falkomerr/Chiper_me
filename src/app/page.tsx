import Image from 'next/image';
import Link from 'next/link';
import { Contacts } from '@/components/Contacts';
import { Model } from '@/components/model';
import { SecondScreen } from '@/app/second-screen';
import { ShootingStars } from '@/components/stars';
import { StarsBackground } from '@/components/stars-bg';
import { QuizDialog } from '@/components/QuizDialog';

export default function Home() {
  return (
    <div className="bg-black">
      <FirstScreen />
      <SecondScreen />
    </div>
  );
}

const FirstScreen = () => {
  return (
    <div className="radial-[at_50%_65%] flex h-screen w-screen max-w-full items-center justify-center overflow-hidden bg-[#060507] from-[#602A9A] to-black to-90%">
      <ShootingStars minDelay={100} maxDelay={200} />
      <StarsBackground />
      <Model />
      <Image
        src="/glow.svg"
        className="absolute right-1/2 left-1/2 z-[10] mt-60 w-screen -translate-x-1/2"
        alt="subtract"
        height="1200"
        width="1200"
      />

      <div className="z-50 flex h-full w-full flex-col items-center bg-black/40 py-4 py-[3.75rem]">
        <Contacts />
        <Link href="/" className="z-[60] mr-2">
          <Image
            src="/subtract.svg"
            className="z-[60] mb-[5.125rem]"
            alt="subtract"
            height="100"
            width="200"
          />
        </Link>

        <div className="z-[60] flex flex-col items-center gap-y-6">
          <p className="flex w-fit cursor-pointer items-center justify-center gap-x-2 rounded-full border border-[#262626] bg-black px-[0.875rem] py-3 text-[#9855FF]">
            <span className="flex w-fit items-center justify-center rounded-full bg-[#9855FF] px-1 py-0.5 text-xs font-semibold text-[#000000]">
              NEW
            </span>
            CA: SOON
          </p>
          <p className="bg-gradient-to-b from-white from-60% to-[#B372CF] bg-clip-text text-center text-[5.5rem] leading-22 font-medium tracking-tighter text-transparent">
            Chiper_me: <br /> The Blockchain Gauntlet
          </p>
          <p className="max-w-[28rem] text-center text-[1.75rem] font-light text-white">
            Decrypt the unknown. Solve the impossible. Unlock what’s hidden
          </p>
          <QuizDialog
            trigger={
              <button className="animate-shimmer inline-flex h-14 cursor-pointer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 text-xl font-medium text-white transition-colors focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 focus:outline-none">
                Go Quiz
              </button>
            }
          />
        </div>
      </div>
      <Image
        src="/subtract-transparent.svg"
        alt="bg"
        fill
        className="z-40 mt-52"
      />
    </div>
  );
};
