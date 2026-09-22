import {Euro, Heart, ShoppingCart, Star} from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
export default function ShoppingProductCard() {
	return (
		<div className='flex flex-row gap-5 items-center justify-center pb-5'>
			<div className='relative flex flex-col border border-gray-200 rounded-md py-8 px-4'>
				<p className='absolute top-4 left-4 text-sm bg-lime-100 rounded-2xl p-1.5 text-lime-600 font-bold'>-15%</p>
				<Button
					variant='destructive'
					className='absolute top-4 right-4 text-sm bg-lime-100 rounded-2xl p-2.5 text-lime-800 font-semibold'
				>
					<p className='text-lime-600'><Heart size={20} strokeWidth={2.5}/></p>
				</Button>
				<Image src='/products/macbook.png' alt='productPersonalized' width={200} height={200} className='w-auto h-auto' loading='eager' />
				<div className='flex flex-col gap-1 pl-4'>
					<h1 className='font-semibold'>MacBook Air 13 M3</h1>
					<p className='text-sm text-muted-foreground'>Apple</p>
					<div className='flex flex-row gap-2 items-center pt-2'>
						<p className='flex flex-row text-sm font-bold'><Euro size={20} strokeWidth={3}/> 1,299 </p>

						<span className='flex flex-row text-xs text-muted-foreground'><Euro size={15} strokeWidth={3}/> 1,499 </span>
					</div>
					<div className='flex flex-row gap-2 items-center justify-between pt-2'>
						<div className='flex flex-row gap-2 items-center justify-between'>
							<div className='flex flex-row text-sm font-bold gap-1 items-center'>
								<Star fill='black' size={15}/>
								<p className='text-sm'>4.8</p>
							</div>
							<p className='text-sm text-muted-foreground'>(1361)</p>
						</div>
						<Button
							variant='default'
							className='absolute bottom-10 right-4 rounded-xl p-3 text-lime-800 bg-lime-100 font-semibold'
						>
							<p className='text-lime-600'><ShoppingCart size={22} strokeWidth={2}/></p>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}