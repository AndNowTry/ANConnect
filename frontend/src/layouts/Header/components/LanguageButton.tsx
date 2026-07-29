import { useLanguageStore } from "../../../plugins/I18/LanguageStore.ts"
import { useTranslation } from "react-i18next"
import { Badge, IconButton } from "@mui/material"
import LanguageIcon from '@mui/icons-material/Language'



export default function LanguageButton()
{
    const { language, toggleLanguage } = useLanguageStore()
    const { t } = useTranslation()

    return (
        <IconButton onClick={toggleLanguage}>
            <Badge
                badgeContent={t(language)}
                color="primary"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <LanguageIcon />
            </Badge>
        </IconButton>
    )
}