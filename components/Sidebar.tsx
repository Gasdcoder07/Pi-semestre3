"use client";

import { sidebarNavigation } from "@/config/navigation";
import { ChevronsRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();

    return (
        <aside
            className={`${isOpen ? 'w-56' : 'w-fit'} p-4 flex flex-col justify-between gap-4 border-r border-neutral-300`}>
            <div className="flex-1 flex flex-col gap-4">
                <TitleSection open={isOpen}/>

                <ul
                    className="flex flex-col">
                    {
                        sidebarNavigation.map((item) => {
                            const isActive = pathname.includes(item.href);

                            return (
                                <SidebarOption
                                    key={item.id}
                                    open={isOpen}
                                    name={item.id}
                                    icon={item.icon}
                                    href={item.href}
                                    isSelected={isActive}/>
                            )
                        })
                    }
                </ul>
            </div>
                    
            <ToggleClose open={isOpen} setIsOpen={setIsOpen}/>
        </aside>
    )
};

export default Sidebar;

interface TitleSectionProps {
    open : boolean;
}

const TitleSection = ({ open } : TitleSectionProps) => {
    return (
        <div
            className="flex items-center gap-4 pb-4 border-b border-neutral-300">
            <img
                src="https://rhpositivo.mx/media/k2/items/cache/9a0d2f73e0452792d0544ef4022ea343_XL.jpg"
                className="size-14 rounded-md shrink-0 object-cover"
                alt="Sucursal" />

            {
                open && (
                    <p className="text-sm font-medium whitespace-nowrap">Sucursal 1</p>
                )
            }
        </div>
    )
}

interface SidebarOptionProps {
    open : boolean;
    name : string;
    href : string;
    icon : LucideIcon;
    isSelected : boolean;
}

const SidebarOption = ({ open, name, href, icon : Icon, isSelected } : SidebarOptionProps) => {
    return (
        <li>
            <Link
                href={href}
                title={!open ? name : undefined}
                className={`${isSelected ? 'bg-[#BFF2FF] text-[#007999]' : 'text-neutral-500'} flex items-center gap-4 p-4 rounded-md transition-colors duration-200 ease-in-out hover:bg-[#E5FAFF] hover:text-[#007999]`}>
                <Icon className="shrink-0"/>

                {
                    open && (
                        <span className="text-sm font-medium">{name}</span>
                    )
                }
            </Link>
        </li>
    )
}

interface ToggleCloseProps {
    open : boolean;
    setIsOpen : Dispatch<SetStateAction<boolean>>
}

const ToggleClose = ({ open, setIsOpen } : ToggleCloseProps) => {
    return (
        <div className="border-t border-neutral-300 pt-4">
            <button
                onClick={() => setIsOpen(!open)}
                className="w-full flex items-center p-4 gap-2 rounded-md transition-all duration-200 ease-in-out hover:bg-[#E5FAFF] hover:text-[#007999] cursor-pointer">
                <ChevronsRight className={`transition-transform ${open && 'rotate-180'} shrink-0`}/>

                {
                    open && (
                        <span className="text-sm font-medium">Hide</span>
                    )
                }
            </button>
        </div>
    )
}