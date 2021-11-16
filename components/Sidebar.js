import Image from 'next/image';
import { AiFillHome, AiFillClockCircle, AiFillCompass } from 'react-icons/ai';
import { HiChartBar, HiMicrophone } from 'react-icons/hi';
import { BsThreeDots } from 'react-icons/bs';
import { FaMicrophoneAlt } from 'react-icons/fa';

function Sidebar() {
	return (
		<section className='fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8'>
			<Image src='https://rb.gy/xkacau' width={56} height={56} objectFit='contain' />
			<div className='flex flex-col space-y-6'>
				<AiFillHome className='opacity-[0.85] sidebarIcon text-white' />
				<AiFillCompass className='opacity-[0.85] sidebarIcon' />
				<FaMicrophoneAlt className='opacity-[0.85] sidebarIcon text-xs ml-[2px]' />
				<HiChartBar className='opacity-[0.85] sidebarIcon' />
				<AiFillClockCircle className='opacity-[0.85] sidebarIcon' />
				<BsThreeDots className='opacity-[0.85] sidebarIcon' />
			</div>
		</section>
	);
}

export default Sidebar;
