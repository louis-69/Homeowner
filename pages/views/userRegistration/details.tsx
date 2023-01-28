/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Header from "../../../components/header";
import Layout from "../../../components/layout";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Detail() {
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
                <main className="bg-[#FAFAFA] ">
                    {/* Bottom menu */}
                    <div className="flex items-center bg-white justify-between border-b px-[5rem] py-3">
                        <div className="text-[#FA790F]">
                            User registration
                            <span className="text-black">/View Details</span>
                        </div>
                        <Link href={"#"} className="text-[#0052FF]">
                            <button className="bg-[#D0650D] text-white rounded-md p-1 px-2">
                                Edit
                            </button>
                        </Link>
                    </div>

                    <Tabs>
                        <div className="flex items-end  h-[4.6rem] justify-between  px-[5rem]">
                            <TabList className="flex flex-row gap-x-[8rem] ">
                                <Tab className="active:border-b focus:underline focus:decoration-[#FA790F] focus:text-[#FA790F]">
                                    Personal Information
                                </Tab>
                                <Tab className="active:border-b focus:underline focus:decoration-[#FA790F] focus:text-[#FA790F]">
                                    Business Information
                                </Tab>
                                <Tab className="active:border-b focus:underline focus:decoration-[#FA790F] focus:text-[#FA790F]">
                                    Bank Information
                                </Tab>
                                <Tab className="active:border-b focus:underline focus:decoration-[#FA790F] focus:text-[#FA790F]">
                                    Emergency Information
                                </Tab>
                            </TabList>
                        </div>

                        <TabPanel>
                            {/* Accordian 1*/}
                            <div className="px-[5rem] py-5">
                                <h2>
                                    <div className="flex items-center justify-between w-full p-2 font-medium text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                                        <span>Basic Information</span>
                                    </div>
                                </h2>
                                <div className="flex flex-col p-5 gap-y-4 font-normal border bg-white border-b border-gray-200">
                                    <div className="flex flex-row justify-between">
                                        <div>
                                            <p className="font-medium">
                                                Fullname
                                            </p>
                                            <p className="text-gray-500">
                                                Mahama Hamida
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-gray-500">
                                                mahamahamida@gmail.com
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Gender
                                            </p>
                                            <p className="text-gray-500">
                                                Female
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Username
                                            </p>
                                            <p className="text-gray-500">
                                                @Meedah
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>
                                            <p className="font-medium">Phone</p>
                                            <p className="text-gray-500">
                                                +233 567 000 0001
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Education
                                            </p>
                                            <p className="text-gray-500">
                                                Bsc. Computer Engineering
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium">Age</p>
                                            <p className="text-gray-500">22</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Marital status
                                            </p>
                                            <p className="text-gray-500">
                                                Single
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Accordian 2*/}
                            <div className="px-[5rem] py-5">
                                <h2>
                                    <div className="flex items-center justify-between w-full p-2 font-medium text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                                        <span>Basic Information</span>
                                    </div>
                                </h2>
                                <div className="flex flex-col p-5 gap-y-4 font-normal border bg-white border-b border-gray-200">
                                    <div className="flex flex-row justify-between">
                                        <div>
                                            <p className="font-medium">
                                                Fullname
                                            </p>
                                            <p className="text-gray-500">
                                                Mahama Hamida
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-gray-500">
                                                mahamahamida@gmail.com
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Gender
                                            </p>
                                            <p className="text-gray-500">
                                                Female
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Username
                                            </p>
                                            <p className="text-gray-500">
                                                @Meedah
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div>
                                            <p className="font-medium">Phone</p>
                                            <p className="text-gray-500">
                                                +233 567 000 0001
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Education
                                            </p>
                                            <p className="text-gray-500">
                                                Bsc. Computer Engineering
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium">Age</p>
                                            <p className="text-gray-500">22</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Marital status
                                            </p>
                                            <p className="text-gray-500">
                                                Single
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Accordian 3 */}
                            <div className="flex flex-row">
                                <div className="px-[5rem] py-5">
                                    <h2>
                                        <div className="flex items-center justify-between w-[26.75rem] p-2 font-medium text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                                            <span>Health</span>
                                        </div>
                                    </h2>
                                    <div className="flex flex-col w-[26.75rem] p-5 font-normal border bg-white border-b border-gray-200">
                                        <div className="flex flex-row justify-between pb-20">
                                            <div>
                                                <p className="font-medium">
                                                    Health Conditions
                                                </p>
                                                <p className="text-gray-500">
                                                    N/A
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-medium">
                                                    Allergies
                                                </p>
                                                <p className="text-gray-500">
                                                    N/A
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-medium">
                                                    Medical History
                                                </p>
                                                <p className="text-gray-500">
                                                    N/A
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Accordian 4*/}
                                <div>
                                    <div className="px-[5rem] py-5">
                                        <h2>
                                            <div className="flex items-center justify-between w-[35.375rem] p-2 font-medium text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                                                <span>Education</span>
                                            </div>
                                        </h2>
                                        <div className="flex flex-col w-[35.375rem] p-5 font-normal border bg-white border-b border-gray-200">
                                            <div className="flex flex-row justify-between pb-4">
                                                <div>
                                                    <p className="font-medium">
                                                        Highest Level of
                                                        Eductaion
                                                    </p>
                                                    <p className="text-gray-500">
                                                        Undergraduate
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="font-medium">
                                                        School
                                                    </p>
                                                    <p className="text-gray-500">
                                                        Ashesi University
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="font-medium">
                                                        Date commenced
                                                    </p>
                                                    <p className="text-gray-500">
                                                        10/10/2014
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-evenly pb-4">
                                                <div>
                                                    <p className="font-medium">
                                                        Date Completed
                                                    </p>
                                                    <p className="text-gray-500">
                                                        10/10/2018
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="font-medium">
                                                        Certificate
                                                    </p>
                                                    <Link href={"#"}>
                                                        View file
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 3</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 4</h2>
                        </TabPanel>
                    </Tabs>
                </main>
            </Layout>
        </>
    );
}