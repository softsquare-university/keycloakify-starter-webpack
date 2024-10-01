import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-update-password.ftl" });

const meta = {
    title: "login/login-update-password.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory
    kcContext={{
        messagesPerField: {
            // NOTE: The other functions of messagesPerField are derived from get() and
            // existsError() so they are the only ones that need to mock.
            existsError: (fieldName: string, ...otherFieldNames: string[]) => {
                const fieldNames = [fieldName, ...otherFieldNames];
                return fieldNames.includes("username") || fieldNames.includes("password");
            },
            get: (fieldName: string) => {
                if (fieldName === "username" || fieldName === "password") {
                    return "Invalid username or password.";
                }
                return "";
            }
        }
    }}
    />
};
