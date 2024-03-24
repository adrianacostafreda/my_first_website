import { useEffect, useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { EnvelopeIcon, StarIcon, UsersIcon } from "@heroicons/react/24/solid";
import { TopAreaProps, UserProps } from "../../types";
import Profile from "@/assets/avatar.png";

type Props = {
    setUser: (user: UserProps | null) => void;
};

const Overview = ({ setUser }: Props) => {
    const [empty, setEmpty] = useState<boolean>(false);
    const [notFound, setNotFound] = useState<boolean>(false);
    const [user, setUserState] = useState<UserProps | null>(null);
    const usernameRef = useRef<HTMLInputElement>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!usernameRef.current?.value.trim()) {
            setEmpty(true);
            setUser(null);
            return;
        }

        setEmpty(false);
        setNotFound(false);
        fetchUser(usernameRef.current!.value);
    }

    async function fetchUser(username: string) {
        try {
            const response = await fetch(`https://api.github.com/repos/adrianacostafreda/${username}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error("User not found");
            }

            const user: UserProps = {
                name: data.name,
                description: data.description
            };

            setUserState(user);
        } catch (error) {
            setNotFound(true);
            setUser(null);
        }
    }

    return (
        <section id="overview" className=" gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            <div className="md:flex mx-auto w-5/6 md:h-5/6">
                <div className="z-10 mt-32 md:basis-3/5">
                    <div className="md:-mt-10">
                        <div className="relative">
                        <img className="rounded-full border-8 border-black" alt="logo" height={350} width={300} src={Profile} />
                            <p className="mt-8 text-black text-3xl">Adriana Costafreda Martin</p>
                            <p className="mt-1 text-gray-400 text-xl">adrianacostafreda</p>
                        </div>
                        <p className="mt-8 text-xl">
                            A repository contains all of your code, your files, and each file's revision history. You can discuss and manage your work within the repository.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-8">
                        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500">
                            <div className=" max-w-sm mx-auto flex items-center space-x-4">
                                <div className="shrink-0">
                                    <EnvelopeIcon className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-xl font-medium text-black">adriana.costafreda1@gmail.com</div>
                                </div>
                            </div>
                        </AnchorLink>
                    </div>
                    <div>
                        <hr className="h-px my-8 bg-black border-0 dark:bg-gray-700"></hr>
                    </div>

                    <div className="max-w-sm flex space-x-4">
                        <div className="shrink-0">
                            <UsersIcon className="h-6 w-6" />
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">150 followers</div>
                        </div>
                        <div className="shrink-0">
                            <StarIcon className="h-6 w-6" />
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">Favourites</div>
                        </div>
                    </div>
                </div>

                <div className="md:object-top inset-y-10 rounded-xl bg-card shadow-md w-full sm:w-10/12 lg:w-8/12 xl:w-6/12 h-24 flex-col items-start justify-between px-4 sm:px-8 transition-all duration-300 relative">
                    <form onSubmit={handleSubmit} className="mt-10 w-full flex justify-between items-center px-4">
                        <label className="hidden">
                            <img src="/assets/icon-search.svg" alt="search .." />
                        </label>
                        <input
                            ref={usernameRef}
                            name="username"
                            id="username"
                            type="text"
                            placeholder="Search repository ..."
                            className="pl-12 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {empty && <div className="text-red-500">Enter User</div>}
                        {notFound && <div className="text-red-500">Not Found</div>}
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Search
                        </button>
                    </form>
                    <div className="mt-10 text-xl">
                        <p>These are the directories</p>
                    </div>
                    <div className="mt-20 text-xl">
                        {user && (
                            <>
                                <p>Name Repository: {user.name}</p>
                                <p>Description Repository: {user.description}</p>
                            </>
                        )}
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Overview;
