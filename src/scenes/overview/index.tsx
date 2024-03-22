import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import Profile from "@/assets/avatar.png";
import HomePage from "@/assets/mainpage.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { EnvelopeIcon,StarIcon,UsersIcon } from "@heroicons/react/24/solid";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Overview = ({ setSelectedPage }: Props) => {
    return (
        <section id="overview" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* Image and Header */}
            <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                {/* MAIN HEADER */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* HEADINGS */}
                    <div className="md:-mt-10">
                        <div className="relative">
                            <img className="rounded-full border-8 border-black" alt="logo" height={350} width={300} src={Profile} />
                            <p className="mt-8 text-black text-3xl">Adriana Costafreda Martin</p>
                            <p className="mt-1 text-gray-400 text-xl">adrianacostafreda</p>
                        </div>

                        <p className="mt-8 text-xl">
                            A repository contains all of your code, your files, 
                            and each file's revision history. 
                            You can discuss and manage your work within the repository.
                        </p>
                    </div>

                    {/* ACTIONS */}
                    <div className="mt-8 flex items-center gap-8">
                        <ActionButton setSelectedPage={setSelectedPage}>Follow</ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.Repositories)}
                            href={`#${SelectedPage.Repositories}`}
                        >
                            <div className=" max-w-sm mx-auto flex items-center space-x-4">
                                <div className="shrink-0">
                                    <EnvelopeIcon className="h-6 w-6"> </EnvelopeIcon>
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

                    <div className=" max-w-sm flex space-x-4">
                        <div className="shrink-0">
                            <UsersIcon className="h-6 w-6"> </UsersIcon>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black"> 150 followers</div>  
                        </div>
                        <div className="shrink-0">
                            <StarIcon className="h-6 w-6"> </StarIcon>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black"> Favourites</div>  
                        </div>
                        
                    </div>


                </div>

                {/* IMAGE */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    {/* Ensure images are aligned side by side */}
                    <img className="mt-32 md:mt-0" alt="home-pageGraphic" src={HomePage} />
                    
                </div>

            </div>
        </section>
    );
};

export default Overview;
