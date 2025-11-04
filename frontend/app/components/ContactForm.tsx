import React, { useState, useRef } from "react";
import { API_URL } from "~/helper";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const payload = {
      first_name: formData.get("firstname") || "",
      last_name: formData.get("name") || "",
      phone_number: formData.get("tel") || "",
      email_address: formData.get("email") || "",
      message: formData.get("comment") || "",
    };

    try {
      const res = await fetch(API_URL + "contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log("Payload envoyé :", payload);

      if (!res.ok) throw new Error("Erreur lors de l'envoi du message.");

      setSuccess("Message envoyé avec succès !");
      formRef.current.reset(); // Réinitialisation du formulaire
    } catch (err: any) {
      setError(err.message || "Erreur inconnue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0F172A] px-2 py-10">
      <form
        ref={formRef}
        className="border-[#AF52DE] border-2 text-[#C084FC] rounded-[20px] p-5 flex flex-col gap-5 max-w-[1000px] mx-auto bg-[#C084FC1A]"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <input type="text" name="name" placeholder="Nom" className="border-b text-center py-2 bg-transparent placeholder:text-gray-400" required />
          <input type="text" name="firstname" placeholder="Prénom" className="border-b text-center py-2 bg-transparent placeholder:text-gray-400" required />
          <input type="tel" name="tel" placeholder="Téléphone" className="border-b text-center py-2 bg-transparent placeholder:text-gray-400" required />
          <input type="email" name="email" placeholder="Email" className="border-b text-center py-2 bg-transparent placeholder:text-gray-400" required />
        </div>
        <textarea
          name="comment"
          placeholder="Message"
          className="border-b resize-none text-center py-2 bg-transparent placeholder:text-gray-400"
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = target.scrollHeight + "px";
          }}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#9333EA] rounded-lg h-9 text-white cursor-pointer hover:bg-purple-500 disabled:opacity-50"
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>
        {success && <p className="text-green-400 mt-2">{success}</p>}
        {error && <p className="text-red-400 mt-2">{error}</p>}
      </form>
    </section>
  );
};
