'use client';

import { usePathname } from 'next/navigation';
import { PAGE_LABELS, waLink } from '@/lib/site';

/** WhatsApp link whose pre-filled message names the page the visitor is on. */
export function useWaLink() {
  const pathname = usePathname();
  return waLink(PAGE_LABELS[pathname] ?? pathname);
}

type Props = {
  /** Which button this is in analytics, e.g. "hero" or "footer". */
  cta: string;
  className?: string;
  children: React.ReactNode;
};

export default function WhatsAppLink({ cta, className, children }: Props) {
  const href = useWaLink();
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-cta={cta} className={className}>
      {children}
    </a>
  );
}
