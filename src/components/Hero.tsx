import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '../lib/cn'
import { useTranslation } from 'react-i18next'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    const { t } = useTranslation("hero")

    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='h-screen -top-40 -left-10 md:-left-32 md:-top-20' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />

                <div className="relative flex items-center justify-center w-full bg-white dark:bg-black-100">
                    <div
                        className={cn(
                            "absolute inset-0",
                            "[background-size:20px_20px]",
                            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
                        )}
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />

                    <div className='relative z-10 flex justify-center my-20'>
                        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                            <h2 className='text-xs tracking-widest text-center text-blue-100 uppercase max-w-80'>{t("title")}</h2>

                            <TextGenerateEffect
                                className="md:text-5xl lg:text-6xl text-center text-[40px]"
                                words={t('subtitle')}
                            />

                            <p className='mb-4 text-sm text-center md:tracking-wider md:text-lg lg:text-2xl'>{t('extra')}
                            </p>

                            <a href="#about">
                                <MagicButton
                                    title={t('cta')}
                                    icon={
                                        <FaLocationArrow />
                                    }
                                    position='right'
                                    otherClasses=''
                                />
                            </a>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero