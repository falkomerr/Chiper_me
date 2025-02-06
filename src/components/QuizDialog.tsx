'use client';

import { Dialog, DialogContent, DialogTrigger } from './Dialog';
import { Button } from './Button';
import { Heart } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const data = [
  {
    id: 1,
    text: "Yo, you ever wonder where the private keys for them lost SOL wallets be hidin'? You think they just vaporized? Or is there some mysterious place where forgotten crypto souls reside? 👀",
    data: [
      '1. Secret underground Bitcoin vaults',
      '2. On hard drives, lost in the abyss of time',
      '3. Buried in encrypted capsules somewhere on the Moon 🌑',
      '4. Tucked inside Ethereum smart contracts',
    ],
    rightAnswer: 1,
  },
  {
    id: 2,
    text: 'What crypto was created to be the ultimate joke, yet somehow managed to pull a "pump" like no other and became a meme legend? Hint: It’s garlic flavored. No, really.',
    data: ['1. Dogecoin', '2. Garlicoin', '3. Bitcoin Cash', '4. SafeMoon'],
    rightAnswer: 2,
  },
  {
    id: 3,
    text: 'You’re chilling on a meme coin ride. 🚀 It’s to the moon one minute, dead in the water the next. The whales are flipping bags like it’s nothing, while you’re holding on for dear life. What\'s the secret to surviving this madness, and what strategy do you need to stop being the one "left holding the bag"? 💀',
    data: [
      '1. Buy the dip, sell the top, and HODL the chaos 🐋',
      '2. Only buy when the meme gods speak',
      '3. Buy now, regret later — that’s the play, fam',
      '4. Degen mode on — YOLO all in and pray for the pump 🔥',
    ],
    rightAnswer: 3,
  },
  {
    id: 4,
    text: 'What makes Solana’s consensus mechanism unique, and how does it enable faster transaction speeds compared to other blockchains like Ethereum?',
    data: null,
    rightAnswer: null,
  },
] as const;

export function QuizDialog({ trigger }: { trigger: ReactNode }) {
  const [hearts, setHearts] = useState(2);
  const [level, setLevel] = useState(1);
  const [answer, setAnswer] = useState({
    number: -1,
    correct: true,
  });
  const [loose, setLoose] = useState(false);
  const [block, setBlock] = useState(false);
  const timeoutRef = useRef(0);

  useEffect(() => {
    if (hearts === 0) {
      setLoose(true);
    } else {
      setLoose(false);
    }
  }, [hearts]);

  useEffect(() => {
    if (!answer.correct) {
      setBlock(true);
      setHearts((prev) => prev - 1);
      timeoutRef.current = setTimeout(
        () => {
          setAnswer({
            number: -1,
            correct: true,
          });
          setBlock(false);
        },
        2000,
        {},
      );
    } else if (answer.number !== -1) {
      setLevel((prev) => prev + 1);
    }
  }, [answer]);

  return (
    <Dialog>
      <DialogTrigger asChild className="h-14">
        {trigger}
      </DialogTrigger>
      <DialogContent
        className={cn(
          'z-[9999] h-[75vh] !w-[55vw] border-none bg-[#2D1B69] p-8 text-white',
          loose && 'items-center justify-center pt-20',
        )}>
        <div className="z-[9999] mb-8 flex gap-2">
          {Array.from({ length: hearts }).map((_, index) => (
            <Heart
              key={index}
              className="h-6 w-6 fill-[#AC87E4] stroke-[#AC87E4] transition-all duration-300 hover:fill-red-500 hover:stroke-red-500"
            />
          ))}
        </div>

        <Image
          src="/subtract.svg"
          className="z-[60] mx-auto -translate-x-2"
          alt="subtract"
          height="100"
          width="200"
        />

        {!loose ? (
          <>
            <h1 className="mb-6 text-center text-4xl font-bold">
              Riddle No. {level}:
            </h1>

            <p className="mx-auto mb-8 max-w-[40.5rem] text-center text-xl text-[1.7rem] leading-[1.8rem] font-normal whitespace-break-spaces">
              {data[level - 1].text}
            </p>

            <div className="space-y-3">
              {data[level - 1].data ? (
                data[level - 1].data!.map((text, index) => (
                  <Button
                    disabled={block}
                    onClick={() =>
                      setAnswer({
                        number: index,
                        correct: index + 1 === data[level - 1].rightAnswer,
                      })
                    }
                    key={index}
                    variant="secondary"
                    className={cn(
                      'h-auto w-full justify-start rounded-xl bg-[#AC87E4] text-lg font-medium text-black hover:bg-[#D4B7FF]',
                      answer.number === index &&
                        !answer.correct &&
                        'bg-red-500',
                    )}>
                    {text}
                  </Button>
                ))
              ) : (
                <form
                  onSubmit={() => {
                    setHearts(0);
                  }}>
                  <input
                    className="w-full rounded-xl border-2 border-[#AC87E4] bg-[#20162D] px-6 py-3 outline-none placeholder:text-[#342C40]"
                    placeholder="Enter the answer"
                  />
                </form>
              )}
            </div>
          </>
        ) : (
          <div className="mx-auto mt-8 flex h-[23.875rem] w-[55.4375rem] flex-col items-center gap-y-12">
            <p className="w-full text-center text-[6rem] leading-[4.5rem]">
              GAME OVER :(
            </p>
            <Button
              onClick={() => {
                clearTimeout(timeoutRef.current);
                setAnswer({
                  number: -1,
                  correct: true,
                });
                setLevel(1);
                setHearts(2);
                setBlock(false);
                setLoose(false);
              }}
              variant="secondary"
              className="mx-auto h-auto w-fit justify-start rounded-xl bg-[#AC87E4] px-4 text-lg font-medium text-black hover:bg-[#D4B7FF]">
              Try Again
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
