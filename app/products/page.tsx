import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {ChevronDown, Euro, LayoutGrid, LayoutPanelLeft, X} from "lucide-react";
import {Slider} from "@/components/ui/slider";
import {Button} from "@/components/ui/button";
import ShoppingProductCard from "@/components/ShoppingProductCard";
import ProductPagination from "@/components/ProductPagination";

export default function ProductsPage(){
	const items = [1,2,3,4,5,6,7,8];
	return (
		<div className="grid grid-cols-[220px_1fr] gap-5">
			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-1 py-2 border border-gray-300 rounded-md">
					<header className="flex flex-row justify-between items-center px-3 py-2 border-b border-gray-300	">
						<h2 className='font-semibold px-1'>Категории</h2>
						<ChevronDown size={18}/>
					</header>
					<div className="flex flex-col px-2 gap-2">
						<div className='flex flex-row gap-3 hover:bg-lime-100 px-1 py-2 rounded-md cursor-pointer'>
							<Checkbox/>
							<Label>Все категории</Label>
						</div>
						<div className='flex flex-row gap-3 hover:bg-lime-100 px-1 py-2 rounded-md cursor-pointer'>
							<Checkbox/>
							<Label>Рабочие</Label>
						</div>
						<div className='flex flex-row gap-3 hover:bg-lime-100 px-1 py-2 rounded-md cursor-pointer'>
							<Checkbox/>
							<Label>Игровые</Label>
						</div>
						<div className='flex flex-row gap-3 hover:bg-lime-100 px-1 py-2 rounded-md cursor-pointer'>
							<Checkbox/>
							<Label>Бизнес-ноутбуки</Label>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-3 py-2 border border-gray-300 rounded-md">
					<header className="flex flex-row justify-between items-center px-3 py-2 border-b border-gray-300">
						<h1 className='font-semibold px-1'>Диапазон цены</h1>
					</header>
					<div className='flex flex-row justify-between items-center px-3 py-1'>
						<Label className="font-semibold"><p className='flex flex-row gap-1'><Euro size={14}/> 300</p></Label>
						<Label className="font-semibold"><p className='flex flex-row gap-1'><Euro size={14}/> 300</p></Label>
					</div>
					<Slider
						defaultValue={[0, 100]}
						max={100}
						min={0}
						step={5}
						className="mx-auto w-full max-w-xs px-3 py-4"
					/>
				</div>
				<div className="flex flex-col gap-1 py-2 border border-gray-300 rounded-md">
					<header className="flex flex-row justify-between items-center px-3 py-2 border-b border-gray-300">
						<h2 className='font-semibold px-1'>Бренд</h2>
						<ChevronDown size={18}/>
					</header>
					<div className="flex flex-col px-2 gap-2">
						<div className='flex flex-row gap-2 items-center hover:bg-lime-100 px-1 py-2 rounded-md cursor-pointer'>
							<Checkbox/>
							<Label>Apple</Label>
							<p className='text-xs text-muted-foreground'>(1280)</p>
						</div>
						<div className='flex flex-row gap-3 hover:bg-lime-100 px-1 py-2 rounded-md cursor-pointer'>
							<Checkbox/>
							<Label>Dell</Label>
							<p className='text-xs text-muted-foreground'>(1304)</p>
						</div>
						<div className='flex flex-row gap-3 hover:bg-lime-100 px-1 py-2 rounded-md cursor-pointer'>
							<Checkbox/>
							<Label>Asus</Label>
							<p className='text-xs text-muted-foreground'>(832)</p>
						</div>
						<div className='flex flex-row gap-3 hover:bg-lime-100 px-1 py-2 rounded-md cursor-pointer'>
							<Checkbox/>
							<Label>Lenovo</Label>
							<p className='text-xs text-muted-foreground'>(921)</p>
						</div>
						<div className='flex flex-row gap-3 hover:bg-lime-100 px-1 py-2 rounded-md cursor-pointer'>
							<Checkbox/>
							<Label>HP</Label>
							<p className='text-xs text-muted-foreground'>(882)</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-1 py-2 border border-gray-300 rounded-md">
					<header className="flex flex-row justify-between items-center px-3 py-2 border-b border-gray-300">
						<h2 className='font-semibold px-1'>Рейтинг</h2>
					</header>
					<div className="flex flex-col px-2 gap-2">
						<div className='flex flex-row gap-2 items-center hover:bg-lime-100 px-1 py-2 rounded-md cursor-pointer'>
							<Checkbox/>
							<Label>4.5</Label>
							<p className='text-xs text-muted-foreground'>(132)</p>
						</div>
						<div className='flex flex-row gap-2 items-center hover:bg-lime-100 px-1 py-2 rounded-md cursor-pointer'>
							<Checkbox/>
							<Label>3.5</Label>
							<p className='text-xs text-muted-foreground'>(132)</p>
						</div>
						<div className='flex flex-row gap-2 items-center hover:bg-lime-100 px-1 py-2 rounded-md cursor-pointer'>
							<Checkbox/>
							<Label>2.5</Label>
							<p className='text-xs text-muted-foreground'>(132)</p>
						</div>
					</div>
				</div>
			</div>
			<div className="px-5 py-5">
				<header className="flex flex-col gap-4">
					<div className="flex flex-row items-center gap-5">
						<h1 className='text-3xl font-semibold'>Ноутбуки</h1>
						<p className='text-muted-foreground'>1,234 результата</p>
					</div>
					<div className='flex flex-row justify-between items-center'>
						<div className='flex flex-row items-center gap-6'>
							<div className='flex flex-row items-center gap-1 text-xs bg-lime-100 p-2 px-5 rounded-2xl font-bold'>
								<span>Ноутбук</span>
								<Button
									size='icon-xs'
									variant='ghost'
									className='w-4 h-4 hover:bg-lime-100'
								>
									<X size={16}/>
								</Button>
							</div>
							<div className='flex flex-row items-center gap-1 text-xs bg-lime-100 p-2 px-5 rounded-2xl font-bold'>
								<span>16GB+512GB</span>
								<Button
									size='icon-xs'
									variant='ghost'
									className='w-4 h-4 hover:bg-lime-100'
								>
									<X size={16}/>
								</Button>

							</div>
							<div className='flex flex-row items-center gap-1 text-xs bg-lime-100 p-2 px-5 rounded-2xl font-bold'>
								<span className='flex flex-row items-center gap-0.5'>Цена до 1350 <Euro size={12}/></span>
								<Button
									size='icon-xs'
									variant='ghost'
									className='w-4 h-4 hover:bg-lime-100'
								>
									<X size={16}/>
								</Button>
							</div>
							<Button
								variant='outline'
								className='text-sm font-semibold'
							>
								Очистить все
							</Button>
						</div>
						<div className='flex flex-row items-center gap-5'>
							<p className='text-sm font-semibold'>Сортировка по: убыванию</p>
							<LayoutGrid size={20}/>
							<LayoutPanelLeft size={20}/>
						</div>
					</div>
				</header>
				<main className='grid grid-cols-4 justify-center items-center px-5 py-5 gap-5'>
					{items.map((item) => (
						<ShoppingProductCard key={item}/>
					))}
				</main>
				<ProductPagination/>
			</div>
		</div>
	)
}