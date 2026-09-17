import DropDownMenuProfile from "@/components/layout/DropDownMenuProfile";
import {Button} from "@/components/ui/button";
import {buttonsHeader} from "@/types";
import Link from "next/link";
import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";

export default function HeaderButtons(){
	return(
		<div className="flex flex-row gap-6">

			<Button
				variant='secondary'
				className='bg-lime-50 hover:bg-lime-100'
				size='lg'
			>
				<Switch
					size='default'
				>
				</Switch>
				<span className='flex justify-center items-center bg-black rounded-full text-lg w-6 h-6'>
					<p className='text-lime-300 text-sm'>AI</p>
				</span>
				<Label>
					Assistant
				</Label>
			</Button>
			{buttonsHeader.map((button) => {
				return(
					<Link href={button.link} key={button.id}>
						<Button
							key={button.id}
							variant='secondary'
							size='lg'
							className='bg-background'
						>
							<button.icon/>
						</Button>
					</Link>
				)
			})}
			<DropDownMenuProfile/>
		</div>
	)
}