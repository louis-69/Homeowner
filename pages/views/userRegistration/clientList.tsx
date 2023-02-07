/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import Head from "next/head";
import Header from "../../../components/header";
import Layout from "../../../components/layout";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import trash from "../../../assets/trash.png";
import notify from "../../../assets/mail.png";
import Bubble from "../../../components/bubbles";

export default function ClientList() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <Layout>
                <Head>
                    <title>Client List</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>

                <Header title={"User Registration"} number={5} />
                {/* Code goes into the main tag */}
                <main className="bg-[#FAFAFA] min-h-screen">
                    {/* Bottom menu */}
                    <div className="flex items-center bg-white justify-between border-b px-[5rem] py-3">
                        <div className="text-[#FA790F]">
                            User registration
                            <span className="text-black">/Client List</span>
                        </div>
                        <Link
                            href={"/views/userRegistration/details"}
                            className="text-[#0052FF]"
                        >
                            <button className="bg-[#D0650D] text-white rounded-md p-1 px-2">
                                +Add User
                            </button>
                        </Link>
                    </div>

                    <div className="px-[5rem]">
                        <Tabs>
                            <div className="flex items-end h-[4.6rem] justify-between">
                                <TabList className="flex flex-row gap-x-4 ">
                                    <Tab className="active:border-b focus:underline focus:decoration-[#FA790F] focus:text-[#FA790F]">
                                        All Clients
                                    </Tab>
                                    <Tab className="active:border-b focus:underline focus:decoration-[#FA790F] focus:text-[#FA790F]">
                                        Borrowers
                                    </Tab>
                                </TabList>

                                <div>
                                    <form className="flex items-center gap-x-4">
                                        {/* First search field */}
                                        <label
                                            htmlFor="simple-search"
                                            className="sr-only"
                                        >
                                            Search
                                        </label>
                                        <div className="relative w-full">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-xs text-gray-500">
                                                Sort:
                                            </div>
                                            <input
                                                type="text"
                                                id="simple-search"
                                                className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                                                placeholder="Name(a-z)"
                                                required
                                            />
                                        </div>

                                        {/* Second search Field */}
                                        <label
                                            htmlFor="simple-search"
                                            className="sr-only"
                                        >
                                            Search
                                        </label>
                                        <div className="relative w-full">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                id="simple-search"
                                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Search Item"
                                                required
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <TabPanel>
                                <div className="relative overflow-x-auto shadow-md bg-white sm:rounded-t-md">
                                    <table className="w-full text-left text-sm text-gray-500 ">
                                        <thead className="bg-[#FDF2EA] text-xs uppercase text-[#747A80]">
                                            <tr>
                                                <th scope="col" className="p-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="checkbox-all"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded  bg-gray-100 text-[#FA790F]"
                                                        />
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="py-3"
                                                >
                                                    #User ID
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Phone Number
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Amount
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                ></th>
                                            </tr>
                                        </thead>

                                        <tbody className="text-[#2E2D37]">
                                            <tr className="border-b bg-white hover:bg-gray-50">
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="checkbox-table-1"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded  bg-gray-100 text-[#FA790F]"
                                                            checked={isChecked}
                                                            onChange={() =>
                                                                setIsChecked(
                                                                    !isChecked
                                                                )
                                                            }
                                                        />
                                                        <label
                                                            htmlFor="checkbox-table-1"
                                                            className="sr-only"
                                                        >
                                                            checkbox
                                                        </label>
                                                    </div>
                                                </td>
                                                <th
                                                    scope="row"
                                                    className="flex justify-between mt-4 whitespace-nowrap py-4 font-medium text-gray-900"
                                                >
                                                    00000000
                                                </th>
                                                <td className="px-6 py-6">
                                                    <p>Ama Yeboah</p>
                                                    <p className="text-[#6568A4] text-xs">
                                                        example@gmail.com
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    +233 567 000 0001
                                                </td>
                                                <td className="pl-6 py-4">
                                                    GHC 2700.00
                                                </td>
                                                <td className="pl-6 py-4">
                                                    <Bubble name={"Rejected"} />
                                                    <p className="text-gray-500 text-xs">
                                                        On 23/04/2022
                                                    </p>
                                                </td>
                                                <td className="pl-6 py-4 flex flex-row gap-x-7">
                                                    {isChecked ? (
                                                        <>
                                                            <Link href={""}>
                                                                <Image
                                                                    src={notify}
                                                                    alt=""
                                                                />
                                                            </Link>
                                                            <Link href={""}>
                                                                <Image
                                                                    src={trash}
                                                                    alt=""
                                                                />
                                                            </Link>
                                                        </>
                                                    ) : (
                                                        <a
                                                            href="#"
                                                            className="font-medium text-blue-600 hover:underline"
                                                        >
                                                            View Details
                                                        </a>
                                                    )}
                                                </td>
                                            </tr>
                                            {/* Second */}
                                            <tr className="border-b bg-white hover:bg-gray-50">
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="checkbox-table-1"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded  bg-gray-100 text-[#FA790F]"
                                                        />
                                                        <label
                                                            htmlFor="checkbox-table-1"
                                                            className="sr-only"
                                                        >
                                                            checkbox
                                                        </label>
                                                    </div>
                                                </td>
                                                <th
                                                    scope="row"
                                                    className="flex justify-between mt-4 whitespace-nowrap py-4 font-medium text-gray-900"
                                                >
                                                    00000000
                                                </th>
                                                <td className="px-6 py-6">
                                                    <p>Ama Yeboah</p>
                                                    <p className="text-[#6568A4] text-xs">
                                                        example@gmail.com
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    +233 567 000 0001
                                                </td>
                                                <td className="pl-6 py-4">
                                                    GHC 2700.00
                                                </td>
                                                <td className="pl-6 py-4">
                                                    <span className="bg-[#FFECCC] text-[#965E00] text-sm font-medium mr-2 px-3 py-0.5 rounded-lg">
                                                        ● Approved
                                                    </span>
                                                    <p className="text-gray-500 text-xs">
                                                        On 23/04/2022
                                                    </p>
                                                </td>
                                                <td className="pl-6 py-4">
                                                    <a
                                                        href="#"
                                                        className="font-medium text-blue-600 hover:underline"
                                                    >
                                                        View Details
                                                    </a>
                                                </td>
                                            </tr>
                                            {/* Third */}
                                            <tr className="border-b bg-white hover:bg-gray-50">
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="checkbox-table-1"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded  bg-gray-100 text-[#FA790F]"
                                                        />
                                                        <label
                                                            htmlFor="checkbox-table-1"
                                                            className="sr-only"
                                                        >
                                                            checkbox
                                                        </label>
                                                    </div>
                                                </td>
                                                <th
                                                    scope="row"
                                                    className="flex justify-between mt-4 whitespace-nowrap py-4 font-medium text-gray-900"
                                                >
                                                    00000000
                                                </th>
                                                <td className="px-6 py-6">
                                                    <p>Ama Yeboah</p>
                                                    <p className="text-[#6568A4] text-xs">
                                                        example@gmail.com
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    +233 567 000 0001
                                                </td>
                                                <td className="pl-6 py-4">
                                                    GHC 2700.00
                                                </td>
                                                <td className="pl-6 py-4">
                                                    <span className="bg-[#FFE0E0] text-[#D30000] text-sm font-medium mr-2 px-3 py-0.5 rounded-lg">
                                                        ● Rejected
                                                    </span>
                                                    <p className="text-gray-500 text-xs">
                                                        On 23/04/2022
                                                    </p>
                                                </td>
                                                <td className="pl-6 py-4">
                                                    <a
                                                        href="#"
                                                        className="font-medium text-blue-600 hover:underline"
                                                    >
                                                        View Details
                                                    </a>
                                                </td>
                                            </tr>
                                            {/* Fourth */}
                                            <tr className="border-b bg-white hover:bg-gray-50">
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="checkbox-table-1"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded  bg-gray-100 text-[#FA790F]"
                                                        />
                                                        <label
                                                            htmlFor="checkbox-table-1"
                                                            className="sr-only"
                                                        >
                                                            checkbox
                                                        </label>
                                                    </div>
                                                </td>
                                                <th
                                                    scope="row"
                                                    className="flex justify-between mt-4 whitespace-nowrap py-4 font-medium text-gray-900"
                                                >
                                                    00000000
                                                </th>
                                                <td className="px-6 py-6">
                                                    <p>Ama Yeboah</p>
                                                    <p className="text-[#6568A4] text-xs">
                                                        example@gmail.com
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    +233 567 000 0001
                                                </td>
                                                <td className="pl-6 py-4">
                                                    GHC 2700.00
                                                </td>
                                                <td className="pl-6 py-4">
                                                    <span className="bg-[#CDFFCD] text-[#007F00] text-sm font-medium mr-2 px-3 py-0.5 rounded-lg">
                                                        ● Paid
                                                    </span>
                                                    <p className="text-gray-500 text-xs">
                                                        On 23/04/2022
                                                    </p>
                                                </td>
                                                <td className="pl-6 py-4">
                                                    <a
                                                        href="#"
                                                        className="font-medium text-blue-600 hover:underline"
                                                    >
                                                        View Details
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                </main>
            </Layout>
        </>
    );
}
