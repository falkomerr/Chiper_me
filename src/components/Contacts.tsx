import { Button } from '@/components/Button';
import Link from 'next/link';

const contacts = [
  {
    id: 1,
    link: 'https://t.me/falkomerr',
    icon: (
      <svg
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="none"
        className="-ml-0.5"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.2555 0.472817C11.2595 0.472817 11.2649 0.472817 11.2703 0.472817C11.4107 0.472817 11.541 0.51649 11.6479 0.591742L11.6459 0.590398C11.7238 0.658259 11.7762 0.753668 11.789 0.861171V0.863187C11.8024 0.945157 11.8098 1.03922 11.8098 1.1353C11.8098 1.17898 11.8085 1.22198 11.8051 1.26498V1.25893C11.6539 2.85064 10.9982 6.71066 10.6649 8.49252C10.5238 9.24705 10.2463 9.49969 9.97756 9.52387C9.39368 9.5783 8.95023 9.13821 8.3845 8.76732C7.49895 8.18614 6.99839 7.82466 6.13904 7.25825C5.14531 6.6045 5.78965 6.2437 6.35539 5.65646C6.50387 5.50193 9.07789 3.16038 9.12828 2.94807C9.13097 2.9353 9.13231 2.92119 9.13231 2.90641C9.13231 2.854 9.11283 2.8063 9.08125 2.77002C9.04631 2.74717 9.00264 2.73441 8.95695 2.73441C8.92672 2.73441 8.89783 2.74045 8.87095 2.75053L8.87229 2.74986C8.7836 2.77002 7.36905 3.70484 4.62862 5.55434C4.32963 5.79017 3.95203 5.93933 3.54083 5.9568H3.5368C2.95427 5.88625 2.42549 5.75657 1.92359 5.5718L1.97331 5.58793C1.34307 5.38233 0.842511 5.27416 0.885512 4.92612C0.908356 4.74515 1.15785 4.55994 1.634 4.37046C4.56703 3.09252 6.52291 2.2502 7.50163 1.84348C8.65694 1.36338 9.8331 0.798685 11.1493 0.492974L11.2548 0.472145L11.2555 0.472817Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    id: 2,
    link: 'https://t.me/falkomerr',
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.134 5.41251L11.0388 0.971062H10.1136L6.72154 4.82671L4.01425 0.971062H0.890991L4.98586 6.802L0.890991 11.4591H1.81619L5.39614 7.38649L8.2558 11.4591H11.3791L7.134 5.41251ZM5.8664 6.85318L5.45087 6.27219L2.14984 1.65355H3.57113L6.23595 5.38233L6.64973 5.96332L10.1132 10.8099H8.69191L5.8664 6.85318Z"
          fill="black"
        />
      </svg>
    ),
  },
];

export const Contacts = () => {
  return (
    <div className="z-[60] mb-5 flex cursor-pointer gap-x-1.5">
      {contacts.map((contact) => (
        <Link
          href={contact.link}
          className="z-[9999] cursor-pointer"
          key={contact.id}>
          <Button icon>{contact.icon}</Button>
        </Link>
      ))}
    </div>
  );
};
