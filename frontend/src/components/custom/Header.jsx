const Header = () => {
  return (
    <header className="z-30 mt-2 w-full md:mt-5 absolute top-0 left-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center text-white">Logo</div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <a
                href="/signin"
                className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] px-4 py-1 rounded-md  tracking-tighter font-semibold"
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="btn-sm bg-gradient-to-t from-violet-500 to-fuchsia-500 bg-[length:100%_100%] bg-[bottom]  text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] px-2 py-1 font-medium rounded-md"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
