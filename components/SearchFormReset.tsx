"use client"
import React from 'react'
import {X} from "lucide-react";
import {Button} from "@/components/button";
import {useRouter} from "next/navigation";

const SearchFormReset = () => {
    const router = useRouter();
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if (form) {
            form.reset()
        }
        router.push("/");
    }
    return  <Button type="reset" onClick={reset} className="bg-black text-white px-4 py-2 rounded-full font-extrabold text-2xl cursor-pointer">
        <X className="size-5" />
    </Button>
}
export default SearchFormReset
