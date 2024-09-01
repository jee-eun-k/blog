import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york/ui/button';
import { ScrollArea } from '@/registry/new-york/ui/scroll-area';

import { Playlist } from '../data/playlists';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn('pb-12', className)}>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            Jee Eun Kang
          </h2>
          <div className='space-y-1'></div>
        </div>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'></h2>
          <div className='space-y-1'></div>
        </div>
        <div className='py-2'>
          <h2 className='relative px-7 text-lg font-semibold tracking-tight'></h2>
          <ScrollArea className='h-[300px] px-1'>
            <div className='space-y-1 p-2'></div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
