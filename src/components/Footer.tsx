"use client";

import {useI18n} from "@/components/LanguageProvider";

export default function Footer() {
    const { t } = useI18n();
    return (
        <footer className="relative z-10 text-center py-8 text-gray-500 text-sm border-t border-gray-800">
            <p>{t("footer.copy")}</p>
        </footer>
    )
}