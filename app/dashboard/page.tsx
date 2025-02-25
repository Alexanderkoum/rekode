import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import Upload from "./upload"
import Editor from "./editor"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import RekodeIDE from "./CodeEditor"



export default function Page({children}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Inbox</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        {/*
        <div className="flex flex-1 flex-col gap-4 p-4">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="aspect-video h-12 w-full rounded-lg bg-muted/50"
            />
          ))}
          </div>*/}
          <main className="sticky-0 shrink-0 items-center justify-center h-auto">
              
              
              <div className="w-auto h-auto p-2 border-r">
              <Tabs defaultValue="account" className="w-[100%] resize">
  <TabsList>
    <TabsTrigger value="account">index.tsx</TabsTrigger>
    <TabsTrigger value="password">style.css</TabsTrigger>
  </TabsList>
  <TabsContent value="account"><RekodeIDE/>
</TabsContent>
  <TabsContent value="password"><RekodeIDE/></TabsContent>
</Tabs>
                
              </div>
             
            </main>
            <footer className="sticky bottom-0 flex shrink-0 items-center gap-2 border-t bg-background p-2">
                <p className="text-xs">Built by alexander ©</p>
            </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}
