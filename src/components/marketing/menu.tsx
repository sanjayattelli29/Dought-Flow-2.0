"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { CalendarRangeIcon, CircleHelp, HashIcon, Newspaper, UsersIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Icons from "../global/icons";

interface Props {
    title: string;
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

const Menu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <Link href="#howitworks" legacyBehavior passHref>
                <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
                            How it works
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuTrigger
    className="text-muted-foreground hover:text-foreground cursor-pointer"
    onClick={() => document.getElementById("Tools-section")?.scrollIntoView({ behavior: "smooth" })}
>
    Features
</NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="grid rounded-3xl gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        href=""
                                        className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none bg-gradient-to-tr from-accent to-accent/50 focus:shadow-md"
                                    >
                                        <Icons.icon className="w-6 h-6" />
                                        <div className="my-2 text-lg font-normal">
                                            NotesGalaxy
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Your ultimate Task, Notes, Media management tool
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <Item title="Notes Organizer" href="#" icon={<CalendarRangeIcon className="w-5 h-5" />}>
    Organize and access your notes effortlessly.
</Item>
<Item title="Task Manager" href="#" icon={<HashIcon className="w-5 h-5" />}>
    Plan, track, and complete your tasks efficiently.
</Item>
<Item title="File Storage" href="#" icon={<UsersIcon className="w-5 h-5" />}>
    Securely store and manage your important files.
</Item>

                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
    <NavigationMenuLink
        className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none cursor-pointer"
        onClick={() => document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" })}
    >
        Pricing
    </NavigationMenuLink>
</NavigationMenuItem>


<NavigationMenuItem>
    <NavigationMenuLink
        className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none cursor-pointer"
        onClick={() => document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" })}
    >
        Tools 
    </NavigationMenuLink>
</NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                        Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] xl:w-[500px]">
                            <Item title="Blog" href="#" icon={<Newspaper className="w-5 h-5" />}>
                            Explore guides, tips, and best practices.
                            </Item>
                            <Item title="Support" href="#" icon={<CircleHelp className="w-5 h-5" />}>
                            Get assistance and troubleshoot issues.
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
};

const Item = ({ title, href, children, icon, ...props }: Props) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    passHref
                    href={href}
                    {...props}
                    className="grid grid-cols-[.15fr_1fr] select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                >
                    <div className="flex items-center mt-1 justify-center p-1 w-8 h-8 rounded-md border border-border/80">
                        {icon}
                    </div>
                    <div className="text-start ml-3">
                        <span className="text-sm group-hover:text-foreground font-normal leading-none">
                            {title}
                        </span>
                        <p className="text-sm mt-0.5 line-clamp-2 text-muted-foreground">
                            {children}
                        </p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
};

Item.displayName = "Item";

export default Menu
