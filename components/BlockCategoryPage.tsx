import Image from "next/image";
import {categoryBlocks} from "@/types";

export default function BlockCategoryPage() {
	return (
		<div className='flex flex-col gap-5'>
			<h2 className='text-2xl font-semibold'>Поиск по категориям</h2>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
				{categoryBlocks.map((category) => (
					<div className="flex flex-col gap-4" key={category.id}>
						<Image
							src={category.imageUrl}
							alt={category.name}
							width={1200}
							height={1200}
							className='rounded-lg w-auto h-auto'
						/>
						<p className='flex flex-col justify-center items-center'>
							<span className='font-semibold text-lg'>
								{category.name}
							</span>
							<span className='text-muted-foreground text-sm font-semibold'>
								{category.counts} товаров
							</span>
						</p>
					</div>
				))}
			</div>
			<div className='flex flex-col gap-5'>
				<h2 className='text-2xl font-semibold'>На основе ваших предпочтений</h2>
				<div className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5'>
					<Image src='/1.png' alt='L' width={300} height={300} className='rounded-lg w-auto h-auto' loading='eager'/>
					<Image src='/2.png' alt='L' width={300} height={300} className='rounded-lg w-auto h-auto' loading='eager'/>
					<Image src='/3.png' alt='L' width={300} height={300} className='rounded-lg w-auto h-auto' loading='eager'/>
					<Image src='/4.png' alt='L' width={300} height={300} className='rounded-lg w-auto h-auto' loading='eager'/>
					<Image src='/5.png' alt='L' width={300} height={300} className='rounded-lg w-auto h-auto' loading='eager'/>
				</div>
			</div>
		</div>
	)
}