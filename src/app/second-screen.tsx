'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn, ibmPlexSerif } from '@/lib/utils';
import { Contacts } from '@/components/Contacts';
import Link from 'next/link';

export const SecondScreen = () => {
  return (
    <div className="h-fit rounded-lg px-4">
      <div className="relative max-w-[calc(100vw-2rem)] overflow-hidden rounded-lg border border-[#262626] pb-6">
        <div className="absolute h-full w-full rounded-lg bg-black">
          <Image
            className="z-0 h-full max-h-[32.5rem] w-full object-cover"
            src="https://s.iimg.su/s/05/OE7VE2ljJKHAMdgXpbWg5gpHDIe3siSqJXknuBys.png"
            width={1920}
            quality={100}
            height={1080}
            alt="bg"
          />
        </div>

        <p className="relative z-[999] mx-auto mb-[3.4375rem] max-w-[55.125rem] py-[3.5rem] text-center text-[3rem] leading-[3rem] whitespace-break-spaces text-white">
          Decrypt t<Decore>h</Decore>e code. U<Decore>n</Decore>lock the pr
          <Decore>i</Decore>vate key. Fa<Decore>i</Decore>l, and it’s over. No
          retr<Decore>i</Decore>es. Ch<Decore>i</Decore>per_me is t
          <Decore>h</Decore>e Sq<Decore>u</Decore>id Game of cry
          <Decore>p</Decore>
          to — only t<Decore>h</Decore>e stron<Decore>g</Decore>est surv
          <Decore>i</Decore>ve
        </p>
        <div className="relative z-[999] mx-auto mb-4 flex w-full flex-nowrap gap-4 overflow-hidden px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex aspect-[200/127] w-full flex-2 flex-col justify-between gap-y-4 rounded-lg border border-[#262626] bg-black p-4">
            <div>
              <Image
                src="https://s3-alpha-sig.figma.com/img/24a9/f01d/3971cc35568397685ee5c97315aec88f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JMZ7YrXqQ9fYHV3LVIdF9KtCvjMVC8h02bFiRYQg63JjlkMKT5YK05BV6lg7ELiMyDcYmsy0iJJahvlyK19bF7R-dCmXoulAxKxtwweFpSPIZGgTDddfRIAxturw18vvOiwxI6Qq40m6Vw2gXj92aUMFNKIiZN01bFnaxXBREfcZYXcxdkEMshoxycArHkr~nyoJW97Jc6w6LWcoexq3Ts-vy2mmOhACFD0f1aWs3WGmC4jGdqRUwDj9Lu5Lx2pKQh6vkIPhOePjstAOEArb~y9YMosE-UksNjDY6EWwfG8-BJmLJxPbtAz2iDQVKBwgaIkHkMiTLwjCwd6xWYAo7w__"
                alt="ring"
                width={237}
                height={251}
                className="aspect-square w-full"
              />
            </div>
            <p className="text-[2.3vw] whitespace-break-spaces">
              Decrypt to Unlock the Future. Blockchain faces massive issues with
              scalability, security, and speed.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative flex aspect-[480/400] w-full flex-4 items-end gap-y-4 overflow-hidden rounded-lg border border-[#262626] bg-black p-4">
            <div className="absolute -top-0 -right-10 w-5/6 rounded-lg">
              <Image
                src="https://s3-alpha-sig.figma.com/img/f08c/446b/f8af7e7397d6c321061845a40913c929?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tbxFETjgfc0jycVgyZAuj1jI4ePMUkmuqKP8QsOm2JDa8c1qSMzO98VojXWjqKleBA~JmZxgCg3VIsrwFCTs0BVtxIGUtDBu6kyS9X1aRkZR0Wilp0-OCZOH1U4vp5da~mjeK66EcMm6DYi5mBNyny961fIgQOTHST0dL~ld3NqbGALsoD4guULR~Xm2fOrcKiHqDKGByk85Ppmx8TKywyEurbRIKhCbNkOToQ3~ai5yJDltk3JltLiFnFpP03xB~UhcdR3wX8wSyzGPIP~TzQhbWy4Ev8OwZmT1XL3uz99KMSdlcjns1XlH8SvXcxX7lM1Tz66hAVGYKlxrXV4LvQ__"
                alt="ring"
                width={398}
                height={393}
                className="w-full rotate-[112deg]"
              />
            </div>
            <p className="mt-full absolute z-50 max-w-[60%] text-[2.3vw] whitespace-break-spaces">
              Decoding Blockchain Dark Secrets Blockchain isn’t just about
              transactions. Decrypt the challenge, help break the barriers.
            </p>
            <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#361764] to-[#030106] opacity-70" />
          </motion.div>
        </div>
        <div className="relative z-[999] mx-auto flex w-full flex-nowrap gap-4 overflow-hidden px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative flex aspect-[480/400] w-full flex-4 items-end gap-y-4 overflow-hidden rounded-lg border border-[#262626] bg-black p-4">
            <div className="absolute top-14 -right-10 rounded-lg saturate-[20%]">
              <Image
                src="https://s3-alpha-sig.figma.com/img/019e/1155/dc39aa284a8eb0db41ee16b169aa198f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t8euJHaxMxvkJHaGw3Ll85IDu1lSf3tTnvwlFUjeT2RKdFG8B8JG4LhX6ccDXBlSkO39YDZB7SwCg5xYJuKX-uIZ35nvPfvyUvO4CYg76ZSMKOSrTUTrwzW3DjnlJYkIlKBPGS71I23DeIaba3eEyWpR8W~UQ3HLgneDQuKfQCOswhwID6AdJdWpWr-y7kUhSgvz2VNMZv0EtGG5IhU5yxx3EXYHUphs0RQsPNEpQfr671nZPJaGA23265km6aAvp4RM5A4X3si11bY3Brr6bD0jVSvh9a~0U2tFWlQJ46AKu97EHGCVQMf7BwLCF5A-LG15pBSHPPj0SViwm4jIxw__"
                alt="ring"
                width={768}
                height={393}
                className="aspect-[768/393] w-full scale-[1.4] rotate-[200deg] object-cover opacity-[56%]"
              />
            </div>
            <p className="mt-full absolute z-50 max-w-[60%] text-[2.3vw] whitespace-break-spaces">
              It’s about solving the hidden challenges that keep it from being
              fully scalable, secure, and user-friendly.
            </p>
            <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#361764] to-[#030106] opacity-70" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex aspect-[200/127] w-full flex-2 flex-col justify-between gap-y-4 rounded-lg border border-[#262626] bg-black p-4">
            <div>
              <Image
                src="https://s3-alpha-sig.figma.com/img/295d/6d3d/5c83aa5d4622b0189a7d97a1343e5d11?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zth9rMI-Qobl-84TFSkq-RH466KGL7WICVLrCFk3x2XnqB0I6zS3ng6gp54pXwNnyastue-JMQS8ebcnx7EXzbh7lvPIW0QyBShiVhWQQv7q4u5nJ-1q0DIE9nrAgbQac014R4IhX~frMiqJSb6YSR1mHuIXgSaGf1NEAz0daTHCScoS-4RtEKpfhsMeDYy0jLBKEpCauh1CKFZPloRWomRgo6RcuBEAlWQt0Z~TTYH6A0WfJDt8UmvasfCjCe66Jds228hS2roxEbp7V5rhZUsAejCY-1WGOn2rgO~Sp6fGsnvDAaD3ANqBxUmPPVTvGQ7gNwAv2MaE-sQ5KxvZzQ__"
                alt="ring"
                width={237}
                height={251}
                className="aspect-square w-full"
              />
            </div>
            <p className="text-[2.3vw] whitespace-break-spaces">
              We're forcing the industry to evolve by solving these problems
              with every puzzle cracked.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-[8rem] flex w-fit flex-col items-center">
        <Contacts />
        <Link href="/" className="z-[60]">
          <Image
            src="/subtract.svg"
            className="z-[60] mb-[5.125rem]"
            alt="subtract"
            height="100"
            width="200"
          />
        </Link>
      </div>
    </div>
  );
};
const Decore = ({ children }: { children: ReactNode }) => {
  return (
    <span
      className={cn(
        'text-[3rem] leading-[3rem] text-white italic',
        ibmPlexSerif.className,
      )}>
      {children}
    </span>
  );
};
