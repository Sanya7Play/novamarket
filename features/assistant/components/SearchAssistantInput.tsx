import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Mic} from "lucide-react";

export default function SearchAssistantInput(){
	return(
		<div className="relative flex flex-col gap-2 w-200">
			<Search className='absolute left-3 top-5' color='grey' size={18} />
			<Input
				className='pl-10 w-180 rounded-2xl h-14'
				placeholder='Расскажите, что вы ищете...'
			/>
			<span className='absolute flex justify-center items-center bg-black rounded-full text-lg w-6 h-6 top-4 right-32'>
					<p className='text-lime-300 text-sm'>AI</p>
				</span>
			<span className='absolute flex justify-center items-center top-4 right-23'>
				<p>
					<Mic
						fill={'white'}
						strokeWidth='2px'
					/>
				</p>
			</span>
		</div>
	)
}