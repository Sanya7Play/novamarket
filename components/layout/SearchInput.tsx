import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
export default function SearchInput(){
	return(
		<div className="relative flex flex-row gap-10">
			<Search className='absolute left-3 top-2.5' color='grey' size={18} />
			<Input
				className="pl-10 w-full md:w-1/2 lg:w-[400px] rounded-2xl"
				placeholder='Поиск товаров или опишите что ищете...'
			/>
		</div>
	)
}