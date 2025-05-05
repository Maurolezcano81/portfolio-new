import { useTranslation } from "react-i18next";
import { Timeline } from "./ui/TimelineComponent";
export function TimelineDemo() {

    const { t } = useTranslation("experience")

    const data = [
        {
            title: t('nc_title'),
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        {t('nc_subtitle')}
                    </p>
                </div>
            ),
        },
        {
            title: t('comforgas_title'),
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        {t('comforgas_subtitle')}
                    </p>
                </div>
            ),
        },
        {
            title: t('hrm_title'),
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        {t('hrm_subtitle')}
                    </p>
                </div>
            ),
        },

    ];
    return (
        <div className="relative w-full overflow-clip" id="experience">
            <Timeline data={data} />
        </div>
    );
}
