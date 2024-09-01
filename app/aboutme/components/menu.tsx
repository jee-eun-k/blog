import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/registry/new-york/ui/menubar';

export function Menu() {
  return (
    <Menubar className='rounded-none border-b border-none px-2 lg:px-4'>
      <MenubarMenu>
        <MenubarTrigger className='font-bold'>About Me</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className='relative'>Blog</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
