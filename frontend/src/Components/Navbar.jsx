import React from "react";

function Navbar() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-white-500 p-6">
            <div class="flex items-center flex-shrink-0 text-black mr-6">
                <img width={54} height={54} className="mr-2" src="Logo_GBKP_removebg.png" />
                <span class="font-semibold text-xl tracking-tight">Pembangunan Medan Delitua</span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;