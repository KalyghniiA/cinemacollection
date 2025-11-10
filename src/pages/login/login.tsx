import Title from "../../components/title/title.tsx";
import LoginForm from "../../components/login-form/login-form.tsx";
import BodySection from "../../components/body-section/body-section.tsx";

export function Login() {
    return (
        <BodySection>
            <Title>
                Вход
            </Title>
            <LoginForm />
        </BodySection>
    );
}