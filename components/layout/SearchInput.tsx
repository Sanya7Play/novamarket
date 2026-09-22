import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
export default function SearchInput(){
	return(
		<div className="relative flex flex-row gap-10">
			<Search className='absolute left-3 top-2.5' color='grey' size={18} />
			<Input
				className='pl-10 w-250 2xl:w-130 xl:w-80 lg:w-30 md:w-50 rounded-2xl'
				placeholder='Поиск товаров или опишите что ищете...'
			/>
		</div>
	)
}