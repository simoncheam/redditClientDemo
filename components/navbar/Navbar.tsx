import styles from './navbar.module.css'
import Image from 'next/image'


const Navbar = () => {
    return (

        <nav className={`${styles.navbar} bg-white`}>
            <div className='max-w-7xl mx-auto sm:px-4 lg:px-8 lg:divide-y lg:divide-gray-200'>
                <div className='relative h-16 flex justify-between'>
                    {/* application logo */}
                    <div className='relative z-10 px-2 flex lg:px-0'>
                        <div className='flex-shrink-0 flex items-center'>
                            <Image className='block h-8 w-auto' src="/logos/subreddit.png" alt='SubReddit'
                                width={50}
                                height={25}
                            />
                        </div>
                    </div>

                </div>

            </div>

        </nav>
    )
};

export default Navbar;
