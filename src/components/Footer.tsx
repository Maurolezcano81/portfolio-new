import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '../data'
import { useTranslation } from 'react-i18next'

const Footer = () => {

    const { t } = useTranslation('footer')

    return (
        <footer className='w-full pt-20 pb-10' id='contact'>
            <div className='w-full absolute left-0 min-h-96'>
                <img
                    src="/footer-grid.svg"
                    alt='grid'
                    className='w-full h-full opacity-50'
                />
            </div>

            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>{t('title')}
                    <span className='text-purple'> {t('title2ndPart')}</span>
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>{t('subtitle')}</p>
                <a href="mailto:maurolezcano111@gmail.com">
                    <MagicButton
                        title={t('cta')}
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>

            <div className='flex m-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Mauro Lezcano</p>
                <div className='flex items-center md:gap-3 gap-6 mt-2 md:mt-0'>
                    {socialMedia.map((profile) => (
                        <a href={profile.link} target='_BLANK' key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <img src={profile.img} alt={profile.img} width={20} height={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer