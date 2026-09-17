import {ArrowLeft, Ellipsis, Search, Send} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import ShoppingProductCard from "@/components/ShoppingProductCard";

export default function WindowAssistant() {
	return(
		<div className='flex flex-col justify-between gap-2 px-8 py-5 border border-neutral-200 rounded-lg w-1/3'>
			<div className="flex flex-row justify-between">
				<div className="flex flex-row items-center gap-2">
					<ArrowLeft size={18} />
					<h1 className='font-semibold'>AI Assistant</h1>
				</div>
				<div className="flex flex-row items-center gap-2">
					<Ellipsis/>
				</div>
			</div>
			<div className="flex flex-row items-center justify-end px-1 py-2">
				<p className='bg-stone-200 px-5 py-2 rounded-xl'>I need headphones for long flights</p>
			</div>
			<div className="flex flex-row items-center justify-start px-1 py-2">
				<p className='bg-stone-200 px-5 py-2 rounded-xl'>Вот что нам удалось найти по вашему запросу</p>
			</div>
			<div className="grid grid-cols-2 gap-10 px-5 py-5">
				<ShoppingProductCard/>
				<ShoppingProductCard/>
			</div>
			<div className='flex flex-col gap-2 w-full'>
				<div className="flex flex-row gap-5">
					<Button
						className='text-sm rounded-xl'
						variant='outline'
					>
						Полезный ответ
					</Button>
					<Button
						className='text-sm rounded-xl'
						variant='outline'
					>
						Посмотреть все товары
					</Button>
				</div>
				<div className="flex flex-row gap-5">
					<Button
						className='text-sm rounded-xl'
						variant='outline'
					>
						Премиальные опции
					</Button>
					<Button
						className='text-sm rounded-xl'
						variant='outline'
					>
						Какие лучше для поездок?
					</Button>
				</div>
			</div>
			<div className="relative flex flex-row gap-2 pt-2">
				<Search
					size={16}
					className='absolute top-5.5 left-2 text-muted-foreground'
				/>
				<Input
					placeholder='Расскажите что ищете...'
					className='text-sm rounded-xl px-8 py-5'
				/>
				<Button
					className='rounded-xl'
					variant='outline'
					size='lg'
				>
					<Send/>
				</Button>
			</div>
		</div>
	)
}