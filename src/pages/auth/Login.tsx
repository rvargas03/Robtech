export default function Login() {
  return (
    <div className="max-w-[460px] w-full mx-auto">
      <h2 className="text-4xl font-medium ">Iniciar sesión</h2>
      <p className="text-white/80 mt-1 text-sm">
        Llene el formulario con sus datos para crear una cuenta
      </p>
      <form className="pt-6">
        <div className="space-y-4">
          <div className="">
            <label className="inline-block text-sm mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              className="w-full h-12 bg-white rounded text-gray-700 px-4 placeholder:text-sm"
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="">
            <label className="inline-block text-sm mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="w-full h-12 bg-white rounded text-gray-700 px-4 placeholder:text-sm"
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <a
          href="#"
          className="text-sm text-white/80 block w-max ml-auto mt-4 hover:underline"
        >
          ¿Olvidaste tu contraseña?
        </a>
        <button className="py-4 font-medium mt-8 w-full rounded bg-[#3071FF] shadow-[0px_6px_0px_0_#0033a4] text-white text-sm transition hover:bg-white hover:text-[#4271E5]">
          Iniciar sesión
        </button>
      </form>
      <p className="text-sm text-white/80 mt-6  text-center">
        No tienes una cuenta?{" "}
        <a href="#" className="text-white hover:underline">
          Registrate
        </a>
      </p>
    </div>
  );
}
