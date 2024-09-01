import { Metadata } from 'next';
import Image from 'next/image';
import { PlusCircledIcon } from '@radix-ui/react-icons';

import { Button } from '@/registry/new-york/ui/button';
import { ScrollArea, ScrollBar } from '@/registry/new-york/ui/scroll-area';
import { Separator } from '@/registry/new-york/ui/separator';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/registry/new-york/ui/tabs';

import { AlbumArtwork } from './components/album-artwork';
import { Menu } from './components/menu';
import { Sidebar } from './components/sidebar';
import { listenNowAlbums } from './data/albums';
import { playlists } from './data/playlists';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default function MusicPage() {
  return (
    <>
      <div className=' md:block'>
        <Menu />
        <div className='border-t'>
          <div className='bg-background'>
            <div className='grid lg:grid-cols-5'>
              <Sidebar playlists={playlists} className='hidden lg:block' />
              <div className='col-span-3 lg:col-span-4 lg:border-l'>
                <div className='h-full px-4 py-6 lg:px-8'>
                  <Tabs defaultValue='music' className='h-full space-y-6'>
                    <div className='space-between flex items-center'>
                      <TabsList>
                        <TabsTrigger value='music' className='relative'>
                          Front-end
                        </TabsTrigger>
                        <TabsTrigger value='live' disabled>
                          Back-end
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent
                      value='music'
                      className='border-none p-0 outline-none'
                    >
                      <div className='flex items-center justify-between'>
                        <div className='space-y-1'>
                          <h2 className='text-2xl font-semibold tracking-tight'>
                            Projects
                          </h2>
                        </div>
                      </div>
                      <Separator className='my-4' />
                      <div className='relative'>
                        <ScrollArea>
                          <div className='flex space-x-4 pb-4'>
                            {listenNowAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className='w-[250px]'
                                aspectRatio='portrait'
                                width={250}
                                height={330}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation='horizontal' />
                        </ScrollArea>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
