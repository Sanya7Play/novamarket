import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Button} from "@/components/ui/button";
import {
	BadgeRussianRuble,
	Bookmark,
	Brain, ChevronRight, Cpu,
	Eye,
	Heart,
	Info,
	LucideSquareArrowRightExit, MemoryStick,
	ShoppingBag, Truck,
	User, Weight
} from "lucide-react";
import Image from "next/image";


export default function ProfilePage() {
	return (
		<main className="flex flex-row gap-5 px-10">
			<article className="flex flex-col gap-5">
				<div className="flex flex-row items-center gap-5">
					<Avatar
						className="h-15 w-15"
					>
						<AvatarImage src="/misc/avatar.jpg" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className="flex flex-col gap-2">
						<h1 className='text-xl font-semibold'>Арсений Попов</h1>
						<p className='text-muted-foreground text-sm'>arsikpopov17@gmail.com</p>
					</div>
				</div>
				<div className="flex flex-col justify-between min-h-full">
					<div className="flex flex-col gap-2">
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-10 py-6 font-semibold hover:bg-lime-100"
						>
							<User/>
							<p className='text-base'>Профиль</p>
						</Button>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-10 py-6 font-semibold hover:bg-lime-100"
						>
							<ShoppingBag/>
							<p className='text-base'>Заказы</p>
						</Button>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-10 py-6 font-semibold hover:bg-lime-100"
						>
							<Heart/>
							<p className='text-base'>Избранное</p>
						</Button>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-10 py-6 font-semibold hover:bg-lime-100"
						>
							<Eye/>
							<p className='text-base'>Просмотры</p>
						</Button>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-10 py-6 font-semibold hover:bg-lime-100"
						>
							<Info/>
							<p className='text-base'>Интересы</p>
						</Button>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-10 py-6 font-semibold hover:bg-lime-100"
						>
							<Bookmark/>
							<p className='text-base'>Сохраненные настройки</p>
						</Button>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-10 py-6 font-semibold hover:bg-lime-100"
						>
							<Brain/>
							<p className='text-base'>AI настройки</p>
						</Button>
					</div>
					<div className='flex flex-col gap-5'>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-10 py-6 font-semibold hover:bg-lime-100"
						>
							<LucideSquareArrowRightExit/>
							<p className='text-base'>Выйти</p>
						</Button>
					</div>
				</div>
			</article>
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-3">
					<h1 className='text-3xl font-semibold'>Добро пожаловать, Арсений!</h1>
					<p className='text-lg'>Вот что нового на вашем аккаунте.</p>
				</div>
				<div className="flex flex-col gap-5">
					<h1 className='text-xl font-semibold'>Недавно просмотренные</h1>
					<div className='relative flex flex-row pr-10 gap-4'>
						<div className='bg-neutral-200 rounded-2xl px-3 py-6'>
							<Image src='/products/macbook.png' alt='Item' width={100} height={100} className='w-auto h-auto' />
						</div>
						<div className='bg-neutral-200 rounded-2xl px-3 py-6'>
							<Image src='/products/airpods.png' alt='Item' width={100} height={100} className='w-auto h-auto' />
						</div>
						<div className='bg-neutral-200 rounded-2xl px-3 py-6'>
							<Image src='/products/macbook.png' alt='Item' width={100} height={100} className='w-auto h-auto' />
						</div>
						<div className='bg-neutral-200 rounded-2xl px-3 py-6'>
							<Image src='/products/airpods.png' alt='Item' width={100} height={100} className='w-auto h-auto'/>
						</div>
						<div className='absolute top-17 right-0 bottom-0'>
							<Button
								size='icon-sm'
								variant='outline'
							>
								<ChevronRight/>
							</Button>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<h1 className='text-xl font-semibold'>Избранное</h1>
					<div className='flex flex-row gap-4 w-full'>
						<div className='bg-neutral-200 rounded-2xl px-3 py-6'>
							<Image src='/products/macbook.png' alt='Item' width={100} height={100} className='w-auto h-auto' />
						</div>
						<div className='bg-neutral-200 rounded-2xl px-3 py-6'>
							<Image src='/products/airpods.png' alt='Item' width={100} height={100} className='w-auto h-auto' />
						</div>
						<div className='bg-neutral-200 rounded-2xl px-3 py-6'>
							<Image src='/products/macbook.png' alt='Item' width={100} height={100} className='w-auto h-auto' />
						</div>
						<div className='relative flex flex-row bg-neutral-200 rounded-2xl px-3 py-6'>
							<Image src='/products/airpods.png' alt='Item' width={100} height={100} className='w-auto h-auto'/>
						</div>
						<div className='absolute top-0 right-0'>
							<Button
								size='icon-sm'
								variant='outline'
							>
								<ChevronRight/>
							</Button>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-8">
					<div className="flex flex-row justify-between items-center">
						<h1 className='text-lg font-medium'>UNDERSTANDING YOUR REQUEST</h1>
						<Button className='text-xs text-muted-foreground' variant='outline'>Edit</Button>
					</div>

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
				</div>
			</div>
			<div>
				123
			</div>
		</main>
	)
}