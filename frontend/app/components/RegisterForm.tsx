import { useState } from "react";
import { Link } from "react-router";
import { register_user } from "~/api/users";

export const RegisterForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    const passwordRepeat = formData.get("password_repeat")?.toString() || "";
    const firstName = formData.get("first_name")?.toString() || "";
    const lastName = formData.get("last_name")?.toString() || "";

    if (password !== passwordRepeat) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    setLoading(true);
    try {
      await register_user({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      });
      setSuccess("Compte créé ! Un administrateur doit valider votre compte avant que vous puissiez vous connecter.");
      (event.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.response?.data?.email?.[0] || err.response?.data?.password?.[0] || "Erreur lors de la création du compte");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#0F172A] px-2 py-10 flex flex-col">
      <h1 className="text-white text-center font-extrabold text-4xl">Se créer un compte</h1>

      {error && (
        <p className="text-red-500 text-center mt-4">{error}</p>
      )}

      {success && (
        <p className="text-green-500 text-center mt-4">{success}</p>
      )}

      <form
        className="text-[#C084FC] p-5 flex flex-col gap-5 max-w-[1000px] mx-auto"
        id="ContactForm"
        onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <input className="border-b text-center py-2 font-medium text-2xl" type="text" placeholder="Prénom" name="first_name" required />
          <input className="border-b text-center py-2 font-medium text-2xl" type="text" placeholder="Nom" name="last_name" required />
        </div>
        <div className="grid grid-cols-1 gap-5 mb-5">
          <input className="border-b text-center py-2 font-medium text-2xl" type="email" placeholder="Email" name="email" required />
          <input className="border-b text-center py-2 font-medium text-2xl" type="password" placeholder="Mot de passe" name="password" required />
          <input className="border-b text-center py-2 font-medium text-2xl" type="password" placeholder="Répéter le mot de passe" name="password_repeat" required />
        </div>
        <button
          className="bg-[#9333EA] rounded-lg h-12 w-[156px] self-center text-white cursor-pointer hover:bg-purple-500 disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? "Création..." : "Créer mon compte"}
        </button>
      </form>

      <p className="text-[#C4C4C4] text-center w-1/2 mx-auto font-medium mt-4">
        Vous avez déjà un compte ? <Link className="underline underline-offset-8 text-white" to="/connexion">Se connecter</Link>
      </p>
    </main>
  );
}
