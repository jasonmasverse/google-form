'use client'
import { useState } from "react";

export default function Home() {

    const [User, setUser] = useState('')
    const [Invite, setInvite] = useState('')

    const InviteType = [
        "Friends",
        "Community",
        "Social Media"
    ]
    const UserType = [
        "Business Owner",
        "Agent",
        "Community"
    ]

    const inviteSelection = () => {
        return (
            <>
                <div className="flex flex-col w-full justify-around">
                    <div className="flex justify-around">
                    {InviteType.map((user, index) => (
                        <span key={index} 
                        className={`flex justify-center items-center px-2 py-2 sm:px-4 sm:py-2 text-sm md:text-md rounded-2xl text-center md:rounded-full ${Invite === user ? 'bg-purple-500 text-white' : 'text-gray-700'} bg-gray-400 active:bg-blue-500`}
                        onClick={() => setInvite(user)}>
                            <p>{user}</p>
                        </span>
                    ))}
                    <input type="hidden" name="entry.1144815336" value={Invite} />
                    </div>

                    {Invite === InviteType[0] && (
                    <input type="text" name="entry.1696316079" placeholder="Enter friend name" className="bg-gray-200 border-[1.5px] border-gray-300 p-2 rounded-xl mt-3 outline-none" />
                )}
                    {Invite === InviteType[1] && (
                    <input type="text" name="entry.1796875037" placeholder="Enter Community name" className="bg-gray-200 border-[1.5px] border-gray-300 p-2 rounded-xl mt-3 outline-none" />
                )}
                </div>
            </>
        )

    }
    const userSelection = () => {
        return (
            <>
                <div className="flex w-full justify-around gap-4">
                    {UserType.map((user, index) => (
                        <span key={index} 
                        className={`flex justify-center items-center px-2 py-2 sm:px-4 sm:py-2 text-sm md:text-md rounded-2xl text-center md:rounded-full ${User === user ? 'bg-purple-500 text-white' : 'text-gray-700'} bg-gray-400 active:bg-blue-500`}
                        onClick={() => setUser(user)}>
                            <p>{user}</p>
                        </span>
                    ))}
                </div>
            </>
        )

    }
    return (
        <>
            <div className="w-full h-[115vh] flex flex-col justify-center items-center">
                <div className="bg-white/60 backdrop-blur-lg py-3 md:py-7 px-10 rounded-3xl mx-20 flex flex-col items-center relative">
                    <div className='text-center w-full text-[25px] lg:text-[35px] font-bold text-gray-700 drop-shadow-lg'>IEO Appointment Registration</div>
                    <form action="https://docs.google.com/forms/d/e/1FAIpQLSf9dAdEhr8kmFfiIrPKG1-BTXifScjF-K7Bby_92BOcg6H0JA/formResponse" className="mt-3 flex w-full justify-center">
                        <div className="flex flex-col justify-center gap-3">
                            <label htmlFor="Email" className="font-semibold text-gray-700 flex flex-col">&ensp;Email
                                <input type="text" name="entry.1979513377" placeholder="Enter Email" className="bg-gray-200 border-[1.5px] border-gray-300 p-2 rounded-xl mt-1 outline-none" required />
                            </label>

                            <label htmlFor="name" className="font-semibold text-gray-700 flex flex-col">&ensp;You are a
                            {userSelection()}
                            <input type="hidden" name="entry.301415720" value={User} />
                            </label>

                            <label htmlFor="name" className="font-semibold text-gray-700 flex flex-col">&ensp;Name
                                <input type="text" placeholder="Your Name" name="entry.2118983654" className="bg-gray-200 border-[1.5px] border-gray-300 p-2 rounded-xl mt-1 outline-none" required />
                            </label>

                            <label htmlFor="tel" className="font-semibold text-gray-700 flex flex-col">&ensp;Contact Number
                                <input type="tel" name="entry.1081496698" placeholder="Your Contact" className="bg-gray-200 border-[1.5px] border-gray-300 p-2 rounded-xl mt-1 outline-none" required />
                            </label>

                            <label htmlFor="email" className="font-semibold text-gray-700 flex flex-col">&ensp;Available Date
                                <input type="date" name="entry.834808789" placeholder="" className="bg-gray-200 border-[1.5px] border-gray-300 p-2 rounded-xl mt-1 outline-none" required />
                                {/* <input type="time" name="entry.834808789" placeholder="" className="bg-gray-200 border-[1.5px] border-gray-300 p-2 rounded-xl mt-1 outline-none" required /> */}
                            </label>

                            <label htmlFor="name" className="font-semibold text-gray-700 flex flex-col">&ensp;Individual/Company
                                <input type="text" name="entry.1524226422" placeholder="Name" className="bg-gray-200 border-[1.5px] border-gray-300 p-2 rounded-xl mt-1 outline-none" required />
                            </label>

                            <label htmlFor="name" className="font-semibold text-gray-700 flex flex-col">&ensp;Who Invited You ?
                                {inviteSelection()}
                            </label>

                            <button type="submit" className="mt-4 bg-blue-700 text-white font-bold py-3 px-8 rounded-full drop-shadow-2xl shadow-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
