// import Input from "../../components/Input";
import { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email && message) {
      console.log("EMAIL: " + email);
      console.log("MESSAGE: " + message);
    }
  };

  return (
    <main className="w-full h-full min-h-screen pt-[1em]">
      <section className="w-full h-full flex flex-col">
        <h1 className="text-4xl font-bold w-full leading-tight mb-[1em]">
          Gostou? Entre em <span className="text-primGreen">Contato</span>
        </h1>

        <form
          className="bg-white max-sm:w-[18em] w-[20em] h-[25em] rounded-lg self-center shadow-[0_0_20px_-10px_rgba(0,0,0,0.5)] p-[1em] flex flex-col gap-[1em]"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="email" className="font-bold">
              Seu Email
            </label>
            <input
              type="email"
              className="w-full bg-primGreen rounded-md h-[2em] px-[1em]"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="message" className="font-bold">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              className="resize-none w-full h-[12em] bg-primGreen rounded-md px-[1em]"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primGreen p-[.5em] rounded-md w-full font-bold transition-all hover:brightness-[.8]"
          >
            Enviar
          </button>
        </form>

        {/* <Input email="felipe.sousa4030@gmail.com" /> */}
      </section>
    </main>
  );
};
