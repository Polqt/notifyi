import { Menu } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


function Sidebar() {

    const menuOptions = (
        <>
            <NewDocumentButton />
        </>
    );

  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
        <div className="md:hidden">
        <Sheet>
                <SheetTrigger className="w-20"><Menu /></SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <div>
                        {menuOptions}
                    </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet> 
        </div>

        <div className="hidden md:inline">
            {menuOptions}
        </div>
        
    </div>
  )
}
export default Sidebar