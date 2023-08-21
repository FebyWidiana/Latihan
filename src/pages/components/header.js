import React from "react";
import Image from 'next/image'
import Logo from '@/assets/img/anava.png'
import Search from '@/assets/img/search.svg'
import Profil from '@/assets/img/profil.svg'
import Notif from '@/assets/img/notif.svg'
import Shop from '@/assets/img/shop.svg'


const Header = () => {
    return (
        <header className="w-full bg-blue px-10 py-3">
            <div className="flex items-center justify-between">
                <div className="flex">

                    <img src={Logo.src} />

                    <div className="flex justify-between bg-gray-50  mt-[22px] ml-[74px] rounded-[10px]">
                        <input type="cari" name="cari" id="cari" placeholder="Cari" required=""></input>
                        <div className="px-3 py-3 ">
                            <Search />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 ml-60 mt-6">
                    <button>
                        <Profil />
                    </button>
                    <button>
                        <Notif />
                    </button>
                    <button>
                        <Shop />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;