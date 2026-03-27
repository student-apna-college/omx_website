import LeftContent from "@/components/LoginPage/LeftContent";
import LoginForm from "@/components/LoginPage/LoginForm";
import HomeButton from "@/components/LoginPage/HomeButton";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[var(--color-ghost)] to-[var(--color-ghost)] relative overflow-hidden">
      <HomeButton />
      <LeftContent />
      <LoginForm />
    </div>
  );
}