
import React from 'react'
import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset";
import {Search} from "lucide-react";
import {Button} from "@/components/button";

const SearchForm = ({query} : {query? : string}) => {
    return (
        <Form action="/" scroll={false} className="border-4 min-w-11/12 border-black bg-white p-4 rounded-full flex justify-between search-form">
            <input name="query" defaultValue={query} className="w-full border-none outline-0 text-2xl font-extrabold" placeholder="Search..." />

            <div className="flex gap-2">
                {query && <SearchFormReset />}
                <Button type="submit" className="bg-black text-white px-4 py-2 rounded-full  text-2xl font-extrabold">
                    <Search className="size-5"/>
                </Button>
            </div>
        </Form>
    )
}
export default SearchForm
