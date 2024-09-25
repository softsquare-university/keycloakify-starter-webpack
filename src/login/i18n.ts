import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        th: {
            username: "Username",   
            password:"Password",
            usernamePlaceholder: "ชื่อผู้ใช้",
            passwordPlaceholder:"รหัสผ่าน"
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
