import { Link } from "react-router";
import { register_user } from "~/api/users";

export const RegisterForm = () => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    const email = formData.get("email")?.toString()
    const password = formData.get("password")?.toString()
    if (email && password) {
      console.log("heeeere")
      register_user(email, password)
    }
    alert("Formulaire envoyé !")
  }

  return (
    <main className="bg-[#0F172A] px-2 py-10 flex flex-col">
      <h1 className="text-white text-center font-extrabold text-4xl">Se créer un compte</h1>
      <form
        className="text-[#C084FC] p-5 flex flex-col gap-5 max-w-[1000px] mx-auto"
        id="ContactForm"
        onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-5 mb-5">
          <input className="border-b text-center py-2 font-medium text-2xl" type="email" placeholder="Email" name="email" />
          <input className="border-b text-center py-2 font-medium text-2xl" type="password" placeholder="Mot de passe" name="password" />
          <input className="border-b text-center py-2 font-medium text-2xl" type="password" placeholder="Répéter le mot de passe" name="password_repeat" />
        </div>
        <button
          className="bg-[#9333EA] rounded-lg h-12 w-[156px] self-center text-white cursor-pointer hover:bg-purple-500" type="submit"
        >Créer mon compte
        </button>
      </form>
    </main>
  )
}
