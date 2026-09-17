import {Check, Clock, Sparkles, Star, Undo2, Van, X} from "lucide-react";

export default function BlockRatingAI() {
	return (
		<div className='flex flex-col gap-5'>
			<div className='flex flex-col border px-5 py-5 border-gray-300 rounded-xl h-auto'>
				<div className='flex flex-row items-center justify-between'><h1 className='text-muted-foreground'>AI INSIGHT</h1><Sparkles strokeWidth={1.5} size={18} fill={'black'}/></div>
				<p className='pt-5'>На основе 1248 отзывов клиентов <br/> покупатели особенно ценят <b> время <br/> автономной работы и качество звука.</b> <br/> Самая распространенная критика касается веса.</p>
				<p className='pt-5'><b>Почему это хороший выбор для вас</b></p>
				<div className='flex flex-row items-center gap-3 py-2'>
					<div className='flex flex-row text-xs bg-lime-300 text-muted-foreground p-1 px-1 rounded-full font-bold'><Check size={10}/></div>
					<div>Отличное шумоподавление подходит для ваших поездок</div>
				</div>
				<div className='flex flex-row items-center gap-3 py-2'>
					<div className='flex flex-row text-xs bg-lime-300 text-muted-foreground p-1 px-1 rounded-full font-bold'><Check size={10}/></div>
					<div>Премиальный звук для музыки и фильмов</div>
				</div>
				<div className='flex flex-col gap-3 py-3 rounded-xl text-sm'>
					<span className='flex flex-row gap-3 items-center'>
						<Van/>
						<div className='flex flex-col gap-0.5'>
							<p className='font-semibold text-base'>Бесплатная доставка</p>
							<p>1-2 рабочих дня</p>
						</div>
					</span>
					<span className='flex flex-row gap-3 items-center'>
						<Undo2/>
						<div className='flex flex-col gap-0.5'>
							<p className='font-semibold text-base'>Возврат</p>
							<p>30 дней</p>
						</div>
					</span>
					<span className='flex flex-row gap-3 items-center'>
						<Clock/>
						<div className='flex flex-col gap-0.5'>
							<p className='font-semibold text-base'>Гарантия</p>
							<p>2 года</p>
						</div>
					</span>
				</div>
			</div>
			<div className='flex flex-col gap-5'>
				<div className='flex flex-row rounded-xl px-3 py-5 gap-5 border border-gray-300'>
					<div className='flex flex-col items-center justify-center gap-4'>
						<h1 className='font-semibold text-2xl'>Оценки</h1>
						<span className='text-4xl'>4.8</span>
						<div className='flex flex-row gap-1'>
							<Star size={16} fill={'black'}/>
							<Star size={16} fill={'black'}/>
							<Star size={16} fill={'black'}/>
							<Star size={16} fill={'black'}/>
							<Star size={16} fill={'black'}/>
						</div>
						<div className='text-muted-foreground text-sm'>(1248 отзывов)</div>
					</div>
					<div className='flex flex-col gap-2 py-2 justify-center'>
						<div className='flex flex-row items-center justify-between gap-2'>
							<p className='flex flex-row items-center gap-1 font-semibold text-sm'>5 <Star size={12} fill={'black'}/></p>
							<p className='w-40 h-2 bg-neutral-300 rounded-full'></p>
							<p className='text-muted-foreground text-sm'>89%</p>
						</div>
						<div className='flex flex-row items-center justify-between gap-2'>
							<p className='flex flex-row items-center gap-1 font-semibold text-sm'>4 <Star size={12} fill={'black'}/></p>
							<p className='w-40 h-2 bg-neutral-300 rounded-full'></p>
							<p className='text-muted-foreground text-sm'>4%</p>
						</div>
						<div className='flex flex-row items-center justify-between gap-2'>
							<p className='flex flex-row items-center gap-1 font-semibold text-sm'>3 <Star size={12} fill={'black'}/></p>
							<p className='w-40 h-2 bg-neutral-300 rounded-full'></p>
							<p className='text-muted-foreground text-sm'>2%</p>
						</div>
						<div className='flex flex-row items-center justify-between gap-2'>
							<p className='flex flex-row items-center gap-1 font-semibold text-sm'>2 <Star size={12} fill={'black'}/></p>
							<p className='w-40 h-2 bg-neutral-300 rounded-full'></p>
							<p className='text-muted-foreground text-sm'>1%</p>
						</div>
						<div className='flex flex-row items-center justify-between gap-2'>
							<p className='flex flex-row items-center gap-1 font-semibold text-sm'>1 <Star size={12} fill={'black'}/></p>
							<p className='w-40 h-2 bg-neutral-300 rounded-full'></p>
							<p className='text-muted-foreground text-sm'>1%</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col border border-gray-300 rounded-xl gap-5 px-5 py-5'>
					<h1 className='text-xl font-semibold'>AI Reviews Summary</h1>
					<div className='flex flex-col gap-2'>
						<h1 className='font-semibold'>Positive</h1>
						<div className='flex flex-row items-center gap-3 py-2'>
							<div className='flex flex-row text-xs bg-lime-300 text-muted-foreground p-1 px-1 rounded-full font-bold'><Check size={10}/></div>
							<div>Звук студийного качества</div>
						</div>
						<div className='flex flex-row items-center gap-3 py-2'>
							<div className='flex flex-row text-xs bg-lime-300 text-muted-foreground p-1 px-1 rounded-full font-bold'><Check size={10}/></div>
							<div>Идеальная тишина</div>
						</div>
						<div className='flex flex-row items-center gap-3 py-2'>
							<div className='flex flex-row text-xs bg-lime-300 text-muted-foreground p-1 px-1 rounded-full font-bold'><Check size={10}/></div>
							<div>Сутки без подзарядки</div>
						</div>
						<div className='flex flex-row items-center gap-3 py-2'>
							<div className='flex flex-row text-xs bg-lime-300 text-muted-foreground p-1 px-1 rounded-full font-bold'><Check size={10}/></div>
							<div>Мгновенное подключение</div>
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='font-semibold'>Negative reviews</h1>
						<div className='flex flex-row items-center gap-3 py-2'>
							<div className='flex flex-row text-xs bg-red-200 text-muted-foreground p-1 px-1 rounded-full font-bold'><X size={10}/></div>
							<div>Маркий корпус</div>
						</div>
						<div className='flex flex-row items-center gap-3 py-2'>
							<div className='flex flex-row text-xs bg-red-200 text-muted-foreground p-1 px-1 rounded-full font-bold'><X size={10}/></div>
							<div>Долгая полная зарядка</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}