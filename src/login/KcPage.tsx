import "./style.scss"
import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";
const UserProfileFormFields = lazy(
    () => import("keycloakify/login/UserProfileFormFields")
);

const doMakeUserConfirmPassword = true;
const Login = lazy(() => import("./pages/Login"));

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    const classes = {
        kcLabelClass: "pf-c-form__label pf-c-form__label-text pf-m-disabled",
      } satisfies { [key in ClassKey]?: string };
    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                  case "login.ftl": return (
                      <Login
                           {...{ kcContext, i18n, classes }}
                           Template={Template}
                           doUseDefaultCss={true}
                        />
                    );
                    default:
                        return (
                            <DefaultPage
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classes}
                                Template={Template}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}

const classes = {} satisfies { [key in ClassKey]?: string };
