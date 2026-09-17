import ShoppingProductCard from "@/components/ShoppingProductCard";
import Link from "next/link";

export default function RecommendationBlockForUser(){
	const items = [1,2,3,4,5]

	return (
		<div className='flex flex-col gap-5 pt-10 px-8'>
			<div className='flex flex-row items-center justify-between'>
				<div className='flex flex-row gap-5 items-center'>
					<h1 className='text-2xl font-bold'>Подобрано для вас</h1>
					<div className='text-xs bg-lime-200 text-lime-700 p-1 px-3 rounded-2xl font-bold'>Персонализировано</div>
				</div>
			</div>
			<div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5'>
				{items.map((item) => (
					<Link key={item} href={`/product/${item}`}>
						<ShoppingProductCard key={item}/>
					</Link>
				))}
			</div>
		</div>
	)
}