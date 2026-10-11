import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {
	BadgeRussianRuble,
	Bookmark,
	Brain, ChevronRight, Cpu,
	Eye,
	Heart,
	Info,
	LucideSquareArrowRightExit, MemoryStick, Pencil, Plus, Search, Settings,
	ShoppingBag, Truck,
	User, Weight
} from "lucide-react";
import Image from "next/image";
import {Switch} from "@/components/ui/switch";


export default function ProfilePage() {
	return (
		<main className="grid grid-cols-[320px_1fr_400px] gap-5">
			<article className="flex flex-col gap-5 p-5">
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
				<div className="flex flex-col gap-5 justify-between">
					<div className="flex flex-col gap-1 pr-15">
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-6 py-6 font-semibold"
						>
							<User/>
							<p className='text-sm'>Профиль</p>
						</Button>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-6 py-6 font-semibold"
						>
							<ShoppingBag/>
							<p className='text-sm'>Заказы</p>
						</Button>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-6 py-6 font-semibold"
						>
							<Heart/>
							<p className='text-sm'>Избранное</p>
						</Button>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-6 py-6 font-semibold"
						>
							<Eye/>
							<p className='text-sm'>Просмотры</p>
						</Button>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-6 py-6 font-semibold"
						>
							<Info/>
							<p className='text-sm'>Интересы</p>
						</Button>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-6 py-6 font-semibold"
						>
							<Bookmark/>
							<p className='text-sm'>Сохраненные</p>
						</Button>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-6 py-6 font-semibold"
						>
							<Brain/>
							<p className='text-sm'>AI настройки</p>
						</Button>
					</div>
					<div className='flex flex-col gap-1'>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-6 py-6 font-semibold"
						>
							<Settings/>
							<p className='text-sm'>Настройки</p>
						</Button>
						<Button
							variant='secondary'
							size='lg'
							className="flex flex-row justify-start gap-6 px-6 py-6 font-semibold"
						>
							<LucideSquareArrowRightExit/>
							<p className='text-sm'>Выйти</p>
						</Button>
					</div>
				</div>
			</article>
			<div className="flex flex-col gap-5 p-5">
				<div className="flex flex-col gap-3 px-2">
					<h1 className='text-2xl font-semibold'>Добро пожаловать, Арсений!</h1>
					<p className=''>Вот что нового на вашем аккаунте.</p>
				</div>
				<div className='grid grid-cols-[repeat(2,auto)] gap-5'>
					<div className="relative flex flex-col gap-4 border border-gray-300 rounded-xl px-5 py-5">
						<div className="flex flex-row justify-between items-center">
							<h1 className='text-lg font-semibold'>Недавно просмотренные</h1>
							<Button className='text-xs text-muted-foreground' variant='outline'>Показать все<Plus/></Button>
						</div>
						<div className='grid grid-cols-[repeat(3,auto)] gap-4'>
							<div className='bg-neutral-200 rounded-2xl px-3 py-6'>
								<Image src='/products/macbook.png' alt='Item' width={100} height={100} className='w-auto h-auto' />
							</div>
							<div className='bg-neutral-200 rounded-2xl px-3 py-6'>
								<Image src='/products/airpods.png' alt='Item' width={100} height={100} className='w-auto h-auto' />
							</div>
							<div className='bg-neutral-200 rounded-2xl px-3 py-6'>
								<Image src='/products/macbook.png' alt='Item' width={100} height={100} className='w-auto h-auto' />
							</div>
							<div className='absolute top-1/2 right-1 bottom-0'>
								<Button
									size='icon-sm'
									variant='outline'
								>
									<ChevronRight/>
								</Button>
							</div>
						</div>
					</div>
					<div className="relative flex flex-col gap-4 border border-gray-300 rounded-xl px-5 py-5">
						<div className="flex flex-row justify-between items-center">
							<h1 className='text-lg font-semibold'>Избранное</h1>
							<Button className='text-xs text-muted-foreground' variant='outline'>Показать все<Plus/></Button>
						</div>
						<div className='grid grid-cols-[repeat(3,auto)] gap-4'>
							<div className='bg-neutral-200 rounded-2xl px-3 py-6'>
								<Image src='/products/macbook.png' alt='Item' width={100} height={100} className='w-auto h-auto' />
							</div>
							<div className='bg-neutral-200 rounded-2xl px-3 py-6'>
								<Image src='/products/airpods.png' alt='Item' width={100} height={100} className='w-auto h-auto' />
							</div>
							<div className='bg-neutral-200 rounded-2xl px-3 py-6'>
								<Image src='/products/macbook.png' alt='Item' width={100} height={100} className='w-auto h-auto' />
							</div>
							<div className='absolute top-1/2 right-1 bottom-0'>
								<Button
									size='icon-sm'
									variant='outline'
								>
									<ChevronRight/>
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-8 border border-gray-300 p-5 rounded-2xl">
					<div className="flex flex-row justify-between items-center">
						<h1 className='text-lg font-semibold'>Ваши интересы</h1>
						<Button className='text-xs text-muted-foreground' variant='outline'><Pencil/>Редактировать</Button>
					</div>
					<div className="flex flex-row items-center gap-5">
						<div className="flex flex-row items-center gap-3 bg-lime-100 px-5 py-2 rounded-full border border-gray-200">
							<Truck size={20} color='green'/>
							<p className='font-medium text-sm'>Технологии</p>
						</div>
						<div className="flex flex-row items-center gap-3 bg-lime-100 px-5 py-2 rounded-full border border-gray-200">
							<MemoryStick size={20} color='green'/>
							<p className='font-medium text-sm'>Игры</p>
						</div>
						<div className="flex flex-row items-center gap-3 bg-lime-100 px-5 py-2 rounded-full border border-gray-200">
							<Weight size={20} color='green'/>
							<p className='font-medium text-sm'>Beauty</p>
						</div>
						<div className="flex flex-row items-center gap-3 bg-lime-100 px-5 py-2 rounded-full border border-gray-200">
							<Cpu size={20} color='green'/>
							<p className='font-medium text-sm'>Программирование</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-5'>
				<div className='flex flex-col border border-gray-300 rounded-xl p-5 gap-5'>
					<div className="flex flex-row justify-between items-center">
						<h1 className='text-lg font-semibold'>Ваши заказы</h1>
						<Button className='text-xs text-muted-foreground' variant='outline'>Показать все<Plus/></Button>
					</div>
					<div className='flex flex-row justify-between items-center p-2'>
						<div className='flex flex-row gap-5'>
							<Image src='/products/macbook.png' alt='Item' width={60} height={60} className='w-auto h-auto' />
							<span className='flex flex-col gap-1'>
								<p className='text-lg font-semibold'>Order #12323</p>
								<p className='text-muted-foreground text-xs'>Expended</p>
							</span>
						</div>
						<Badge variant="destructive">Badge</Badge>
					</div>
					<div className='flex flex-row justify-between items-center p-2'>
						<div className='flex flex-row gap-5'>
							<Image src='/products/macbook.png' alt='Item' width={60} height={60} className='w-auto h-auto' />
							<span className='flex flex-col gap-1'>
								<p className='text-lg font-semibold'>Order #12323</p>
								<p className='text-muted-foreground text-xs'>Expended</p>
							</span>
						</div>
						<Badge variant="destructive">Badge</Badge>
					</div>
					<div className='flex flex-row justify-between items-center p-2'>
						<div className='flex flex-row gap-5'>
							<Image src='/products/macbook.png' alt='Item' width={60} height={60} className='w-auto h-auto' />
							<span className='flex flex-col gap-1'>
								<p className='text-lg font-semibold'>Order #12323</p>
								<p className='text-muted-foreground text-xs'>Expended</p>
							</span>
						</div>
						<Badge variant="destructive">Badge</Badge>
					</div>
				</div>
				<div className='flex flex-col border border-gray-300 rounded-xl p-5 gap-5'>
					<div className="flex flex-row justify-between items-center">
						<h1 className='text-lg font-semibold'>AI Настройки</h1>
						<Switch className='text-xs text-muted-foreground'/>
					</div>
					<div className='flex flex-col gap-5'>
						<p className='flex flex-row gap-3 font-medium text-black/80'><Brain color='green'/>Персональные рекомендации</p>
						<p className='flex flex-row gap-3 font-medium text-black/80'><Search color='green'/>Умный поиск</p>
						<p className='flex flex-row gap-3 font-medium text-black/80'><Cpu color='green'/>Анализ продуктов</p>
					</div>
				</div>
			</div>
		</main>
	)
}