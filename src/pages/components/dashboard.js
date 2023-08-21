import React from "react";
import Home from '@/assets/img/home.svg'
import Jpg from '@/assets/img/dashboard/jpg.svg'
import Sampul from '@/assets/img/dashboard/sampul.png'
import Coin1 from '@/assets/img/dashboard/1.png'
import Coin2 from '@/assets/img/dashboard/2.png'
import Coin3 from '@/assets/img/dashboard/3.png'
import Reseller from '@/assets/img/dashboard/reseller.svg'
import Reward from '@/assets/img/dashboard/reward.svg'
import Target from '@/assets/img/dashboard/target.svg'
import Belanja from '@/assets/img/dashboard/belanja.svg'




const Layout = () => {
    return (
        <div className="w-full min-h-[calc(100vh_-_107px)] bg-abu py-5 px-8">
            <div className="flex">
                <Home className="mt-1 mr-2" />
                <div className="text-center">
                    / Dashboard
                </div>
            </div>
            <div className="font-semibold  text-blue text-xl">
                Eka Putri (7799000004 | Leader Priority)
            </div>
            <div className="flex sm:flex-row flex-col
            ">
                <div>
                    <div className="  bg-white">
                        <img src={Sampul.src}></img>
                    </div>
                    <div>
                        <div className=" font-bold text-font">
                            TOP 3 LEADER
                        </div>
                        <div className=" bg-white mt-2">
                            <div className="flex- justify-center items-end">
                                <div className="flex justify-evenly py-6">
                                    <div className="">
                                        <img src={Coin1.src} className="m-auto"></img>
                                        <p className="">Alif Fakhri Nurrohmat</p>
                                    </div>
                                    <div>
                                        <img src={Coin2.src} className="m-auto"></img>
                                        <p>Alif Fakhri Nurrohmat</p>
                                    </div>
                                    <div>
                                        <img src={Coin3.src} className="m-auto"></img>
                                        <p>Alif Fakhri Nurrohmat</p>
                                    </div>
                                </div>

                                <button className="h-8 w-full bg-blue text-center text-white">
                                    Lihat Lader Board
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-font">
                            INVOICE PROGRESS
                        </div>
                        <div>
                            <button className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Tagihan
                            </button>
                            <button className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Terbayar
                            </button>
                            <button className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Dikemas
                            </button>
                            <button className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Dikirim
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table>
                                <thead>
                                    <tr >
                                        <th className="px-6 py-3 bg-blue text-left text-xs leading-4 font-medium text-gray-50 uppercase tracking-wider">
                                            No.Invoice
                                        </th>
                                        <th className="px-6 py-3 bg-blue text-left text-xs leading-4 font-medium text-gray-50 uppercase tracking-wider">
                                            Tanggal
                                        </th>
                                        <th className="px-6 py-3 bg-blue text-left text-xs leading-4 font-medium text-gray-50 uppercase tracking-wider">
                                            Ekspedisi
                                        </th>
                                        <th className="px-6 py-3 bg-blue text-left text-xs leading-4 font-medium text-gray-50 uppercase tracking-wider">
                                            Pembayaran
                                        </th>
                                        <th className="px-6 py-3 bg-blue text-left text-xs leading-4 font-medium text-gray-50 uppercase tracking-wider">
                                            Sub Total
                                        </th>
                                        <th className="px-6 py-3 bg-blue text-left text-xs leading-4 font-medium text-gray-50 uppercase tracking-wider">
                                            Total
                                        </th>
                                        <th className="px-6 py-3 bg-blue text-left text-xs leading-4 font-medium text-gray-50 uppercase tracking-wider">
                                            Keterangan
                                        </th>
                                        <th className="px-6 py-3 bg-blue text-left text-xs leading-4 font-medium text-gray-50 uppercase tracking-wider">
                                            Opsi
                                        </th>
                                    </tr>
                                </thead>

                            </table>
                        </div>
                    </div>
                </div>
                <div className="ml-4">
                    <div className="bg-white w-auto px-5 py-5 ">
                        <div className="font-bold text-font">
                            UPDATE HARIAN
                        </div>
                        <div className="flex bg-white mt-5 justify-between">
                            <div>
                                Repeat Order Anda
                            </div>
                            <div className="font-extrabold text-blue ml-14">
                                17
                            </div>
                        </div>
                        <div className=' h-[2px] bg-[#D6D6D6] mt-4'></div>
                        <div className="flex bg-white mt-2 justify-between">
                            <div>
                                Repeat Order Grup
                            </div>
                            <div className="font-extrabold text-blue">
                                42
                            </div>
                        </div>
                        <div className=' h-[2px] bg-[#D6D6D6] mt-4'></div>
                        <div className="flex bg-white mt-2 justify-between">
                            <div>
                                Reseller Hari Ini
                            </div>
                            <div className="font-extrabold text-blue">
                                4
                            </div>
                        </div>
                        <div className=' h-[2px] bg-[#D6D6D6] mt-4'></div>
                        <div className="flex bg-white mt-2 justify-between">
                            <div>
                                Total Komisi
                            </div>
                            <div className="font-extrabold text-blue">
                                0
                            </div>
                        </div>
                        <div className=' h-[2px] bg-[#D6D6D6] mt-4'></div>
                        <div className="flex bg-white mt-2 justify-between">
                            <div>
                                Poin Anda
                            </div>
                            <div className="font-extrabold text-blue">
                                0
                            </div>
                        </div>
                        <div className=' h-[2px] bg-[#D6D6D6] mt-4'></div>
                    </div>
                    <div>
                        <div className="font-extrabold text-font">
                            DOWNLOAD
                        </div>
                        <div className="flex">
                            <button className="flex px-3 py-3 bg-blue mr-3">
                                <Jpg />
                                <p className="text-white px-2">
                                    Kartu Reseller
                                </p>
                            </button>
                            <button className="flex px-3 py-3 bg-blue">
                                <Jpg />
                                <p className="text-white px-2">
                                    Sertifikat
                                </p>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="font-extrabold text-font ">
                            MENU LAINNYA
                        </div>
                        <div>
                            <button className="flex bg-blue px-3 py-3 mt-1 w-full">
                                <Reseller className="my-auto" />
                                <div className="ml-3 text-white ">
                                    Reseller Tools
                                </div>
                            </button>
                            <button className="flex bg-blue px-3 py-3 mt-1 w-full">
                                <Reward className="my-auto" />
                                <div className="ml-3 text-white ">
                                    Poin reward Anda
                                </div>
                            </button>
                            <button className="flex bg-blue px-3 py-3 mt-1 w-full">
                                <Reseller className="my-auto" />
                                <div className="ml-3 text-white ">
                                    Target Reseller
                                </div>
                            </button>
                            <button className="flex bg-blue px-3 py-3 mt-1 w-full">
                                <Belanja className="my-auto" />
                                <div className="ml-3 text-white ">
                                    Belanja Stokist
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="bg-white mt-2 ">
                        <div className="font-extrabold text-font">
                            KALENDER KEGIATAN
                        </div>
                        <div className="mt-4">
                            Ulang Tahun Anava’s Secret
                        </div>
                        <div className="">
                            Webinar “Sharing to Caring”
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Layout;