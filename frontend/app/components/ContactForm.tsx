export const ContactForm = () => {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        alert("Message envoyé !")
    }

    return (
        <section className="bg-[#0F172A] px-2 py-10">
            <form
                className="border-[#AF52DE] border-2 text-[#C084FC] rounded-[20px] p-5 flex flex-col gap-5 max-w-[1000px] mx-auto bg-[#C084FC1A]"
                id="ContactForm"
                onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <input className="border-b text-center py-2" type="text" placeholder="Nom" name="name" />
                    <input className="border-b text-center py-2" type="text" placeholder="Prénom" name="firstname" />
                    <input className="border-b text-center py-2" type="tel" placeholder="Téléphone" name="tel" />
                    <input className="border-b text-center py-2" type="email" placeholder="Email" name="email" />
                </div>
                <div className="border-b resize-none flex flex-col py-2 ">
                    <textarea
                        id="comment"
                        rows={1}
                        className="text-center resize-none"
                        name="comment"
                        form="ContactForm"
                        placeholder="Message"
                        onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement;
                            target.style.height = "auto"; // On reset la taille
                            target.style.height = target.scrollHeight + "px"; // Et à chaque changement à met la bonne taille 
                        }}
                    />
                </div>
                <button
                    className="bg-[#9333EA] rounded-lg h-9 text-white cursor-pointer" type="submit"
                >Contact
                </button>
            </form>
        </section>
    )
}
