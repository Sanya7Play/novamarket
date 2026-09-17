import {ChevronDown, Star, ThumbsUp} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function BlockReviewsUsers(){
	return (
		<div className='flex flex-col gap-5 px-5 w-auto'>
			<h1 className='text-2xl font-semibold'>
				Отзывы пользователей
			</h1>
			<div className='flex flex-col w-auto border border-gray-300 rounded-2xl p-5'>
				<header className='flex flex-row items-center justify-between'>
					<div className='flex flex-row items-center gap-10'>
						<Button
							variant='ghost'
							className='font-semibold px-6 py-6 border border-b-gray-300 rounded-none'
						>
							Все отзывы (1,248)
						</Button>
						<Button
							variant='ghost'
							className='font-semibold px-6 py-6 text-muted-foreground'
						>
							Отзывы этого продукта (890)
						</Button>
						<Button
							variant='ghost'
							className='font-semibold px-6 py-6 text-muted-foreground'
						>
							Другие отзывы (340)
						</Button>
					</div>
					<Button
						variant='ghost'
						className='font-semibold px-6 py-6 text-muted-foreground'
					>
						По убыванию
						<p><ChevronDown/></p>
					</Button>
				</header>
				<main className='py-8 px-5'>
					<div className='flex flex-row gap-5'>
						<div>
							<img src='/misc/avatar.jpg' alt='avatarlogo' className='rounded-full w-20 h-12'/>
						</div>
						<div className='flex flex-col gap-2'>
							<div className='flex flex-row gap-5'>
								<h1 className='font-semibold'>Alex GoPro</h1>
								<p className='text-muted-foreground'>Active headphones</p>
								<p className='text-muted-foreground'>13.04.2026</p>
							</div>
							<div className='flex flex-row gap-1'>
								<Star size={16} fill={'black'}/>
								<Star size={16} fill={'black'}/>
								<Star size={16} fill={'black'}/>
								<Star size={16} fill={'black'}/>
								<Star size={16} fill={'black'}/>
							</div>
							<div className='flex flex-row gap-5'>
								<div className='flex flex-col gap-2 pt-2 w-3/4'>
									<h1 className='font-semibold text-xl'>Отличные наушники за свои деньги!</h1>
									<p>Пользуюсь уже пару недель,
										очень доволен покупкой. Звук чистый, басы приятные,
										для музыки на каждый день и просмотра фильмов подходят идеально.
										В ушах сидят комфортно, не выпадают даже во время пробежки.
									</p>
								</div>
							</div>

						</div>
						<div className='flex flex-row items-end'>
							<Button
								variant='secondary'
								className='font-semibold px-6 py-6 '
							>
								<ThumbsUp/>
								<p>Помогло? (229) </p>
							</Button>
						</div>
					</div>
				</main>
			</div>
		</div>

	)
}