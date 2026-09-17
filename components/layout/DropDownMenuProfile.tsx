"use client"

import {
	ArrowDown, ArrowDown01, ChevronDown,
	CreditCardIcon,
	LogOutIcon,
	SettingsIcon,
	UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";

export default function DropDownMenuProfile() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger render={
				<Button
					variant="secondary"
					size='lg'
					className='bg-background'
				>
					<img src='/misc/avatar.jpg' alt='avatarlogo' className='rounded-full w-6 h-6'/>
					<ChevronDown/>
				</Button>
			}/>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<UserIcon />
					Profile
				</DropdownMenuItem>
				<DropdownMenuItem>
					<CreditCardIcon />
					Billing
				</DropdownMenuItem>
				<DropdownMenuItem>
					<SettingsIcon />
					Settings
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem variant="destructive">
					<LogOutIcon />
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
