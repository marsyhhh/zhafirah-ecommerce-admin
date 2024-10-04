import { UserButton, auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChevronsUpDown, Store } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

const Navbar = async () => {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-label="Select a store"
          className={cn("w-[200px] justify-between")}
        >
          <Store className="mr-2 h-4 w-4" />
          Zhafirah Collection
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
