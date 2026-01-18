import { useState, useEffect } from "react"

export default function Mail() {
    return (
        <>
            <div className="w-screen h-screen bg-zinc-800/70 flex justify-center items-center">
                <div className="w-[1200px] min-h-[250px] bg-white/10 border-2 border-white/10 backdrop-blur-md rounded-2xl">
                    <MailForm />
                </div>
            </div>
        </>
    )
}

function MailForm() {

    // Email Regex from https://colinhacks.com/essays/reasonable-email-regex
    const validEmailRegex = /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_'+\-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i;;

    const [formStatus, setFormStatus] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isValidEmail, setIsValidEmail] = useState(false);

    useEffect(() => {
        if ((form.name !== '' && form.email !== '' && form.message !== '') && isValidEmail === true) {
            setFormStatus(true);
        } else {
            setFormStatus(false);
            console.log("The form has not been completed yet");
        }
    }, [form])

    useEffect(() => {
        setIsValidEmail(validEmailRegex.test(form.email));
    }, [form.email])

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await fetch("https://my-portfolio-delta-weld-47.vercel.app/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                alert("Email sent successfully!");
                setForm({ name: "", email: "", message: "" });
            } else {
                const data = await res.json();
                alert(data.message || "Failed to send email");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        }
    }


    return (
        <>
            <div className="flex flex-col h-full w-full">

                <div className="p-12 basis-3/12 h-full">
                    <p className="text-8xl zalando-sans text-amber-300">Contact me</p>

                    <div className="relative">
                        <div className="absolute bottom-0 right-0 overflow-x-hidden">
                                <button
                                    className={`w-[120px] h-[80px] rounded-2xl flex justify-center items-center cursor-pointer hover:animate-pulse transition-all duration-500
                                                ${formStatus ? 'ease-out translate-x-0 opacity-100' : 'ease-in translate-x-full opacity-0'}`}
                                    onClick={(e) => { handleSubmit(e); setForm({ name: '', email: '', message: '' }) }}>
                                    <svg className="fill-amber-300" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#000000" viewBox="0 0 256 256"><path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path></svg>
                                </button>
                        </div>
                    </div>

                </div>


                <div className="p-12 basis-9/12 h-full">
                    <div className="flex flex-col h-full">
                        <div className="flex flex-row justify-between gap-x-16">
                            <label className="flex-1 flex flex-col gap-y-2">
                                <span className="p-2">
                                    <p className="text-4xl zalando-sans text-amber-300">Name</p>
                                </span>
                                <input
                                    value={form.name}
                                    className="w-full zalando-sans"
                                    maxLength={15}
                                    onChange={e => setForm(form => ({ ...form, name: e.target.value }))}></input>
                            </label>
                            <label className="flex-1 flex flex-col gap-y-2">
                                <span className="p-2">
                                    <p className="text-4xl zalando-sans text-amber-300">Email</p>
                                </span>
                                <input
                                    value={form.email}
                                    className="w-full zalando-sans"
                                    maxLength={30}
                                    onChange={e => { setForm(form => ({ ...form, email: e.target.value })) }}></input>
                            </label>
                        </div>
                        <div className="pt-12">
                            <label className="flex flex-col gap-y-2">
                                <span className="p-2">
                                    <p className="text-4xl zalando-sans text-amber-300">Inquiry</p>
                                </span>
                                <textarea
                                    value={form.message}
                                    className="w-full min-h-[120px] max-h-[220px] resize-y zalando-sans"
                                    maxLength={500}
                                    onChange={e => setForm(form => ({ ...form, message: e.target.value }))}></textarea>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}