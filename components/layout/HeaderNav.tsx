import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ButtonProps, buttonsCategory} from "@/types";
import Image from "next/image";

export default function HeaderNav(){
	return(
		<div className="flex flex-row items-center gap-2">
			<Link href='/'>
				<Image src='/novaLogo.png' alt='LogoNova' width={180} height={100} className='rounded-lg px-5' />
			</Link>
			{buttonsCategory.map((button: ButtonProps) => (
				<Link href={button.link} id={button.id} key={button.id}>
					<Button
						variant='secondary'
						size='lg'
						className='bg-background'
					>
						{button.nameButton}
					</Button>
				</Link>
			))}
		</div>
	)
}