import React from 'react'
import {formatDate} from "@/lib/utils";
import {EyeIcon} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/button";

const StartUpCard = (post) => {
    const {_createdAt, views, author, title, category, _id, image, description} = post;
    return (
        <li className="border-4 border-black shadow-lg rounded-xl p-4 lg:w-1/3">
           <div className="flex items-center justify-between mb-4">
                <p className="text-lg font-extrabold">{formatDate(_createdAt)}</p>
               <p className="flex gap-2 font-extrabold"><EyeIcon color="red"/> {views}</p>
           </div>
            <div>
                <div>
                    <Link href={`/user/${author._id}`}>
                        <p className="font-extrabold text-base mb-2">{author.name}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-3xl font-extrabold mb-4">{title}</h3>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-base font-semibold">{description}</h3>
                    </Link>
                </div>
                <div className="flex items-center justify-between mt-4">
                        <Link href={`/?query=${category.toLowerCase()}`}>
                            <p>{category}</p>
                        </Link>
                        <Button>
                            <Link href={`/startup/${_id}}`}>
                                Details
                            </Link>
                        </Button>
                </div>
            </div>
        </li>
    )
}
export default StartUpCard
