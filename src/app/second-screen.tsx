'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn, ibmPlexSerif } from '@/lib/utils';

export const SecondScreen = () => {
  return (
    <div className="mx-auto h-[68.75rem] w-screen px-6">
      <Image
        className="absolute right-1/2 left-1/2 z-0 h-[66.75rem] w-[calc(100vw-32px)] -translate-x-1/2 rounded-lg border border-[#262626] bg-black object-cover"
        src="/background-secondary.svg"
        width={1920}
        height={1080}
        alt="bg"
      />
      <p className="relative z-[999] mx-auto mb-[3.4375rem] max-w-[28.125rem] py-[3.5rem] text-center text-[1.5rem] leading-[1.875rem] whitespace-break-spaces text-white">
        Decrypt t<Decore>h</Decore>e code. U<Decore>n</Decore>lock the pr
        <Decore>i</Decore>vate key. Fa<Decore>i</Decore>l, and it’s over. No
        retr<Decore>i</Decore>es. Ch<Decore>i</Decore>per_me is t
        <Decore>h</Decore>e Sq<Decore>u</Decore>id Game of cry<Decore>p</Decore>
        to — only t<Decore>h</Decore>e stron<Decore>g</Decore>est surv
        <Decore>i</Decore>ve
      </p>
      <div className="relative z-[999] mx-auto mb-4 flex max-w-[46.5rem] flex-nowrap gap-4 overflow-hidden px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-full max-w-[15.875rem] gap-y-4 rounded-lg border border-[#262626] bg-black p-4">
          <div>
            <Image
              src="https://s3-alpha-sig.figma.com/img/24a9/f01d/3971cc35568397685ee5c97315aec88f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JMZ7YrXqQ9fYHV3LVIdF9KtCvjMVC8h02bFiRYQg63JjlkMKT5YK05BV6lg7ELiMyDcYmsy0iJJahvlyK19bF7R-dCmXoulAxKxtwweFpSPIZGgTDddfRIAxturw18vvOiwxI6Qq40m6Vw2gXj92aUMFNKIiZN01bFnaxXBREfcZYXcxdkEMshoxycArHkr~nyoJW97Jc6w6LWcoexq3Ts-vy2mmOhACFD0f1aWs3WGmC4jGdqRUwDj9Lu5Lx2pKQh6vkIPhOePjstAOEArb~y9YMosE-UksNjDY6EWwfG8-BJmLJxPbtAz2iDQVKBwgaIkHkMiTLwjCwd6xWYAo7w__"
              alt="ring"
              width={237}
              height={251}
            />
          </div>
          <p className="whitespace-break-spaces">
            Decrypt to Unlock the Future. Blockchain faces massive issues with
            scalability, security, and speed.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative flex w-full max-w-[30rem] items-end gap-y-4 overflow-hidden rounded-lg border border-[#262626] bg-black p-4">
          <div className="absolute -top-10 -right-10 rounded-lg">
            <Image
              src="https://s3-alpha-sig.figma.com/img/f08c/446b/f8af7e7397d6c321061845a40913c929?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tbxFETjgfc0jycVgyZAuj1jI4ePMUkmuqKP8QsOm2JDa8c1qSMzO98VojXWjqKleBA~JmZxgCg3VIsrwFCTs0BVtxIGUtDBu6kyS9X1aRkZR0Wilp0-OCZOH1U4vp5da~mjeK66EcMm6DYi5mBNyny961fIgQOTHST0dL~ld3NqbGALsoD4guULR~Xm2fOrcKiHqDKGByk85Ppmx8TKywyEurbRIKhCbNkOToQ3~ai5yJDltk3JltLiFnFpP03xB~UhcdR3wX8wSyzGPIP~TzQhbWy4Ev8OwZmT1XL3uz99KMSdlcjns1XlH8SvXcxX7lM1Tz66hAVGYKlxrXV4LvQ__"
              alt="ring"
              width={398}
              height={393}
              className="rotate-[112deg]"
            />
          </div>
          <p className="mt-full absolute z-50 max-w-[17.6875rem] whitespace-break-spaces">
            Decoding Blockchain Dark Secrets Blockchain isn’t just about
            transactions. Decrypt the challenge, help break the barriers.
          </p>
          <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#361764] to-[#03010600] to-[50%] backdrop-opacity-40" />
        </motion.div>
      </div>
      <div className="relative z-[999] mx-auto flex max-w-[46.5rem] flex-nowrap gap-4 overflow-hidden px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="relative flex w-full max-w-[30rem] items-end gap-y-4 overflow-hidden rounded-lg border border-[#262626] bg-black p-4">
          <div className="absolute top-14 -right-10 rounded-lg saturate-[20%]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/019e/1155/dc39aa284a8eb0db41ee16b169aa198f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t8euJHaxMxvkJHaGw3Ll85IDu1lSf3tTnvwlFUjeT2RKdFG8B8JG4LhX6ccDXBlSkO39YDZB7SwCg5xYJuKX-uIZ35nvPfvyUvO4CYg76ZSMKOSrTUTrwzW3DjnlJYkIlKBPGS71I23DeIaba3eEyWpR8W~UQ3HLgneDQuKfQCOswhwID6AdJdWpWr-y7kUhSgvz2VNMZv0EtGG5IhU5yxx3EXYHUphs0RQsPNEpQfr671nZPJaGA23265km6aAvp4RM5A4X3si11bY3Brr6bD0jVSvh9a~0U2tFWlQJ46AKu97EHGCVQMf7BwLCF5A-LG15pBSHPPj0SViwm4jIxw__"
              alt="ring"
              width={768}
              height={393}
              className="aspect-[768/393] w-[48rem] scale-[1.3] rotate-[200deg] object-cover opacity-[56%]"
            />
          </div>
          <p className="mt-full absolute z-50 max-w-[17.6875rem] whitespace-break-spaces">
            Decoding Blockchain Dark Secrets Blockchain isn’t just about
            transactions. Decrypt the challenge, help break the barriers.
          </p>
          <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#361764] to-[#03010600] to-[50%] backdrop-opacity-40" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-[15.875rem] gap-y-4 rounded-lg border border-[#262626] bg-black p-4">
          <div>
            <Image
              src="https://s3-alpha-sig.figma.com/img/24a9/f01d/3971cc35568397685ee5c97315aec88f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JMZ7YrXqQ9fYHV3LVIdF9KtCvjMVC8h02bFiRYQg63JjlkMKT5YK05BV6lg7ELiMyDcYmsy0iJJahvlyK19bF7R-dCmXoulAxKxtwweFpSPIZGgTDddfRIAxturw18vvOiwxI6Qq40m6Vw2gXj92aUMFNKIiZN01bFnaxXBREfcZYXcxdkEMshoxycArHkr~nyoJW97Jc6w6LWcoexq3Ts-vy2mmOhACFD0f1aWs3WGmC4jGdqRUwDj9Lu5Lx2pKQh6vkIPhOePjstAOEArb~y9YMosE-UksNjDY6EWwfG8-BJmLJxPbtAz2iDQVKBwgaIkHkMiTLwjCwd6xWYAo7w__"
              alt="ring"
              width={237}
              height={251}
            />
          </div>
          <p className="whitespace-break-spaces">
            Decrypt to Unlock the Future. Blockchain faces massive issues with
            scalability, security, and speed.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
const Decore = ({ children }: { children: ReactNode }) => {
  return (
    <span
      className={cn(
        'text-[1.5rem] leading-[1.875rem] text-white italic',
        ibmPlexSerif.className,
      )}>
      {children}
    </span>
  );
};
