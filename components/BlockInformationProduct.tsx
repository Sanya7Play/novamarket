import {AudioLines, BatteryCharging, Euro, Headphones, ShoppingCart, Star, Zap} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function BlockInformationProduct() {
	return (
		<div className='flex flex-col justify-between p-3 w-auto h-full'>
			<div className='flex flex-row gap-5'>
				<h1 className='text-muted-foreground'>Apple</h1>
				<div className='text-xs bg-lime-200 text-lime-600 p-1 px-3 rounded-2xl font-bold'>Бестселлер</div>
			</div>
			<div className='flex flex-row gap-5 pt-4'>
				<h1 className='text-3xl font-semibold'>Apple AirpodsMax Comfort Наушники </h1>
			</div>
			<div className='flex flex-row items-center gap-3 py-3'>
				<div className='flex flex-row gap-1'>
					<Star size={16} fill={'black'}/>
					<Star size={16} fill={'black'}/>
					<Star size={16} fill={'black'}/>
					<Star size={16} fill={'black'}/>
					<Star size={16} fill={'black'}/>
				</div>
				<div className='flex flex-row items-center gap-2'>
					<p className='font-semibold'>4.8</p>
					<p className='text-muted-foreground text-sm'>(1248 отзывов)</p>
				</div>
			</div>
			<div className='flex flex-row items-center gap-5 py-2'>
				<p className='flex flex-row text-4xl font-semibold items-center'><Euro size={38}/> 299</p>
				<p className='flex flex-row text-base font-semibold items-center text-muted-foreground line-through'><Euro size={16}/> 349</p>
				<p className='text-sm bg-lime-100 text-lime-600 p-1 px-2 rounded-xl font-bold'>-15%</p>
			</div>
			<div>
				<p className='font-medium py-2'>Цвет: Чёрный</p>
				<div className='flex flex-row items-center gap-3 py-2'>
					<p className='w-8 h-8 bg-black rounded-full'></p>
					<p className='w-8 h-8 bg-neutral-400 rounded-full'></p>
					<p className='w-8 h-8 bg-mauve-400 rounded-full'></p>
				</div>
			</div>
			<div className='flex flex-col py-5 justify-between gap-3'>
				<span className='flex flex-row gap-3 items-center text-muted-foreground text-sm font-medium'>
					<AudioLines/>
					<p>Активное шумоподавление</p>
				</span>
				<span className='flex flex-row gap-3 items-center text-muted-foreground text-sm font-medium'>
					<Zap/>
					<p>До 40 часов работы</p>
				</span>
				<span className='flex flex-row gap-3 items-center text-muted-foreground text-sm font-medium'>
					<BatteryCharging/>
					<p>Быстрая зарядка</p>
				</span>
				<span className='flex flex-row gap-3 items-center text-muted-foreground text-sm font-medium'>
					<Headphones/>
					<p>Премиум звук</p>
				</span>
			</div>
			<div className='flex flex-col items-center gap-3 py-2'>
				<Button
					variant='default'
					className='px-10 py-6 w-full rounded-full bg-lime-400'
				>
					<p className='text-black flex flex-row gap-1 items-center text-base font-semibold'><ShoppingCart/>Добавить в корзину</p>
				</Button>
				<Button
					variant='default'
					className='px-10 py-6 w-full rounded-full bg-white border border-gray-300 font-semibold text-black hover:bg-neutral-300'
				>
					Купить сейчас
				</Button>
			</div>
		</div>
	)
}