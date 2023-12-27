import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BarsSVG } from "@/assets/"

interface SidebarPropsType {
    TriggerIcon?: React.ComponentType,
    Position?: 'left' | 'right' | 'top' | 'bottom',
}

const Sidebar = ({TriggerIcon=BarsSVG, Position='left'}:SidebarPropsType) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="active:rotate-180 duration-700">
            <TriggerIcon className='w-8 h-8' />
        </button>
      </SheetTrigger>
      <SheetContent side={Position}>
        {/* <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader> */}

        <div className="flex flex-col w-full h-full">
          <div className="w-full h-28 bg-red-500 border-4"></div>
          <div className="w-full h-28 bg-red-500 border-4"></div>
          <div className="w-full h-28 bg-red-500 border-4"></div>
          <div className="w-full h-28 bg-red-500 border-4"></div>
        </div>

        <div className="grid gap-4 py-4">
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div> */}
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar;