/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Header from "../../../components/header";
import Layout from "../../../components/layout";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Settings() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Dashboard</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>

                <Header title={"Configuration"} number={21} />
                {/* Code goes into the main tag */}
                <main className="bg-[#FAFAFA] min-h-screen">
                    {/* Bottom menu */}
                    <div className="flex items-center bg-white justify-between border-b px-[5rem] py-3">
                        <div className="text-[#FA790F]">
                            User registration
                            <span className="text-black">/View Details</span>
                        </div>
                        <Link className="flex gap-x-2" href={"/"}>
                            <button className="bg-[#D0650D] text-white rounded-md p-1 px-10 hover:shadow-md hover:shadow-[#D0650D]">
                                Update
                            </button>
                            <button className="border border-[#D0650D] text-[#D0650D] rounded-md p-1 px-9 mr-2 hover:text-orange-300">
                                Cancel
                            </button>
                        </Link>
                    </div>

                    {/* Code here  */}
                    <div className="px-[5rem]">
                        <Tabs>
                            <TabList className="flex justify-between mt-12">
                                <Tab
                                    selectedClassName="text-[#FA790F] underline underline-offset-8"
                                    className="p-2"
                                >
                                    Profile
                                </Tab>
                                <Tab
                                    selectedClassName="text-[#FA790F] underline underline-offset-8"
                                    className="p-2"
                                >
                                    Security
                                </Tab>
                                <Tab
                                    selectedClassName="text-[#FA790F] underline underline-offset-8"
                                    className="p-2"
                                >
                                    Notifications
                                </Tab>
                                <Tab
                                    selectedClassName="text-[#FA790F] underline underline-offset-8"
                                    className="p-2"
                                >
                                    Administration
                                </Tab>
                            </TabList>

                            <TabPanel>
                                <h2>Content of Tab 1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non diam vestibulum,
                                    vulputate nisi vitae, placerat sapien. Nunc
                                    at pulvinar elit. Nam eget egestas libero.
                                    Duis auctor, sapien id luctus suscipit,
                                    nulla tellus tempor lectus, sit amet tempor
                                    quam neque id est.{" "}
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h2>Content of Tab 2</h2>
                                <p>
                                    Suspendisse molestie turpis euismod,
                                    malesuada ligula eu, facilisis sapien. Nunc
                                    euismod enim a neque tempor, eget molestie
                                    nisi dapibus. Aliquam a nunc id magna
                                    iaculis placerat. In hac habitasse platea
                                    dictumst.{" "}
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <div className="bg-white h-auto px-4 grid gap-y-2 mt-2.5">
                                    <h2 className="font-medium mt-4">
                                        General
                                    </h2>
                                    <div className="flex justify-between">
                                        <p>Receive messages from Homehub</p>
                                        <label className="relative inline-flex items-center mb-4 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                            />
                                            {/* <Field
                                                type="checkbox"
                                                name="labo"
                                                id="labo"
                                                checked={checkboxValue2}
                                                onChange={(e) =>
                                                    setCheckboxValue2(
                                                        e.target.checked
                                                    )
                                                }
                                                className="sr-only peer"
                                            /> */}

                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>
                                            Receive messages about your account
                                        </p>
                                        <label className="relative inline-flex items-center mb-4 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Receive updates on new polcies</p>
                                        <label className="relative inline-flex items-center mb-4 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>
                                            Receive notifications when client
                                            send messages
                                        </p>
                                        <label className="relative inline-flex items-center mb-4 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>
                                            Always ask for password when going
                                            to perform an action
                                        </p>
                                        <label className="relative inline-flex items-center mb-4 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>

                                    <hr />

                                    <h2 className="font-medium">Reminders</h2>
                                    <div className="flex justify-between">
                                        <p>Receive reminders of appointments</p>
                                        <label className="relative inline-flex items-center mb-4 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>
                                            Receive reminders when billings are
                                            overdue a week after
                                        </p>
                                        <label className="relative inline-flex items-center mb-4 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>
                                            Receive reminders when loans are due
                                            3 days before
                                        </p>
                                        <label className="relative inline-flex items-center mb-4 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                    <hr className="mt-9 mb-5" />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <p>
                                    Fusce et justo auctor, fringilla sem ac,
                                    malesuada neque. Nunc fringilla velit vel
                                    dolor fringilla commodo. Sed aliquam commodo
                                    mi, vel facilisis diam fringilla eget. Sed
                                    eget purus eget elit varius blandit.
                                </p>
                            </TabPanel>
                        </Tabs>
                    </div>
                </main>
            </Layout>
        </>
    );
}