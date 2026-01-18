import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "~/contexts/AuthContext";

export const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth()

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (email && password) {
      try {
        await login(email, password);
        window.location.href = "/";
      } catch (err) {
        setError("Email ou mot de passe incorrect");
      }
    }
  };

  return (
    <main className="bg-[#0F172A] px-2 py-10 flex flex-col">
      <h1 className="text-white text-center font-extrabold text-4xl">Se connecter</h1>

      {error && (
        <p className="text-red-500 text-center mt-4">{error}</p>
      )}

      <form
        className="text-[#C084FC] p-5 flex flex-col gap-5 max-w-[1000px] mx-auto"
        id="ContactForm"
        onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-5 mb-5">
          <input className="border-b text-center py-2 font-medium text-2xl" type="email" placeholder="Email" name="email" />
          <input className="border-b text-center py-2 font-medium text-2xl" type="password" placeholder="Mot de passe" name="password" />
        </div>
        <button
          className="bg-[#9333EA] rounded-lg h-12 w-[156px] self-center text-white cursor-pointer hover:bg-purple-500" type="submit"
        >Se connecter
        </button>
      </form>

      <div className="self-center mb-5">
        <Link className="text-center text-white hover:underline" to="#">Mot de passe oublié ?</Link>
      </div>

      <p className="text-[#C4C4C4] text-center w-1/2 mx-auto font-medium">Vous n'avez pas de compte ? Vous pouvez en <Link className="underline underline-offset-8 text-white" to="/enregistrement">créer un</Link></p>
    </main>
  )
}
