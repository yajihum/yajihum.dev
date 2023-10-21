'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SideBar from './SideBar';
import { useLinks } from './data';

export default function SideBarConatiner() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { links } = useLinks();

  const handleLinkClick = (link: string) => {
    setOpen(false);
    router.push(link);
  };

  return (
    <SideBar
      open={open}
      links={links}
      handleOpenChange={setOpen}
      handleLinkClick={handleLinkClick}
    />
  );
}
