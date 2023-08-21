import React from 'react';
import Gambar from '@/assets/img/sidebar/gambar.png'
import Dashboard from '@/assets/img/sidebar/ic_dashboard.svg'
import Produk from '@/assets/img/sidebar/ic_belanjaproduk.svg'
import Merchandise from '@/assets/img/sidebar/ic_belanjamerch.svg'
import Reseller from '@/assets/img/sidebar/ic_reseller.svg'
import Report from '@/assets/img/sidebar/ic_report.svg'
import Komisi from '@/assets/img/sidebar/ic_komisi.svg'
import Video from '@/assets/img/sidebar/ic_video.svg'
import Pengaturan from '@/assets/img/sidebar/ic_pengaturan.svg'
import Keluar from '@/assets/img/sidebar/ic_keluar.svg'


const Sidebar = () => {
    return (
        <aside className="hidden sm:block bg-[#FFFFFF] text-white  w-auto px-11">
            <div className="ml-8 mt-3">
                <img src={Gambar.src}></img>
            </div>
            <div className='text-center'>
                <div className='font-bold text-blue mt-2'>
                    CALL CENTER
                </div>
                <div className='font-semibold text-font'>
                    team.anavasecret@gmail.com
                </div>
                <div className='text-font'>
                    028569236652
                </div>
            </div>
            <div className=' h-[2px] bg-[#EDEDED] mt-4'>
            </div>
            <div className='ml-5 text-font mt-4'>
                <nav>
                    <ul>
                        <button className='flex'>
                            <Dashboard className=" mr-3" />
                            <li className="text-center font-semibold">
                                Dashboard
                            </li>
                        </button>
                        <button className='flex mt-5'>
                            <Produk className="fill-blue mr-3" />
                            <li className="text-center font-semibold">
                                Belanja Produk
                            </li>
                        </button>
                        <button className='flex mt-5'>
                            <Merchandise className="fill-blue mr-3" />
                            <li className="text-center font-semibold">
                                Belanja Merchandise
                            </li>
                        </button>
                        <button className='flex mt-5'>
                            <Reseller className="fill-blue mr-3" />
                            <li className="text-center font-semibold">
                                Reseller Baru
                            </li>
                        </button>
                        <button className='flex mt-5'>
                            <Report className="fill-blue mr-3" />
                            <li className="text-center font-semibold">
                                Report Reseller
                            </li>
                        </button>
                        <button className='flex mt-5'>
                            <Komisi className="fill-blue mr-3" />
                            <li className="text-center font-semibold">
                                Komisi
                            </li>
                        </button>
                        <button className='flex mt-5'>
                            <Video className="fill-blue mr-3" />
                            <li className="text-center font-semibold">
                                Video Pembelajaran
                            </li>
                        </button>
                        <button className='flex mt-5'>
                            <Pengaturan className="fill-blue mr-3" />
                            <li className="text-center font-semibold">
                                Pengaturan
                            </li>
                        </button>

                    </ul>
                </nav>
            </div>
            <div className='text-center mt-10'>
                <button className='w-full py-2 bg-blue '>
                    <div className='flex justify-center'>
                        <Keluar className=" mr-3" />
                        keluar
                    </div>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
