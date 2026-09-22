import {BadgeRussianRuble, Cpu, MemoryStick, ShoppingBag, Truck, Weight} from "lucide-react";
import ShoppingProductCard from "@/components/ShoppingProductCard";

export default function AISearchPage() {
	return (
		<div className="flex flex-col gap-8 px-10 py-10">
			<div className="flex flex-col gap-8">
				<h1 className='text-lg font-medium'>UNDERSTANDING YOUR REQUEST</h1>
				<div className="flex flex-row items-center gap-5">
					<div className="flex flex-row items-center gap-3 bg-lime-100 px-8 py-4 rounded-full border border-gray-200">
						<Truck size={20} color='green'/>
						<p className='font-medium text-sm'>Ноутбук</p>
					</div>
					<div className="flex flex-row items-center gap-3 bg-lime-100 px-8 py-4 rounded-full border border-gray-200">
						<MemoryStick size={20} color='green'/>
						<p className='font-medium text-sm'>16GB+RAM</p>
					</div>
					<div className="flex flex-row items-center gap-3 bg-lime-100 px-8 py-4 rounded-full border border-gray-200">
						<BadgeRussianRuble size={20} color='green'/>
						<p className='font-medium text-sm'>До 150000р</p>
					</div>
					<div className="flex flex-row items-center gap-3 bg-lime-100 px-8 py-4 rounded-full border border-gray-200">
						<Cpu size={20} color='green'/>
						<p className='font-medium text-sm'>Программирование</p>
					</div>
					<div className="flex flex-row items-center gap-3 bg-lime-100 px-8 py-4 rounded-full border border-gray-200">
						<Weight size={20} color='green'/>
						<p className='font-medium text-sm'>Легкий</p>
					</div>
				</div>
				<div className='flex flex-row items-center gap-4'>
					<p className='text-muted-foreground font-medium'>Ваш запрос объединяет релевантность товаров, семантическое сходство и ваши предпочтения.</p>
				</div>
			</div>
			<div className="flex flex-col gap-8">
				<h1 className='text-2xl font-semibold'>Лучшие результаты</h1>
				<div className="flex flex-row items-center gap-5">
					<ShoppingProductCard/>
					<ShoppingProductCard/>
					<ShoppingProductCard/>
					<ShoppingProductCard/>
				</div>

			</div>
		</div>
	)
}