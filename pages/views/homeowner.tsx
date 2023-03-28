/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import exclamation from "../../assets/exclamation.png"
import ProfileRectangle from "../../components/dashboard/homeownerDashboard";
import { MediumRectangle } from "../../components/dashboard/homeownerDashboard";
import { BookingsRectangle } from "../../components/dashboard/homeownerDashboard";
import { PropertiesRectangle } from "../../components/dashboard/homeownerDashboard";
import { LargeRectangle } from "../../components/dashboard/homeownerDashboard";
import UserDetails from "../../components/navbar";
import SalesChart from "../../components/dashboard/salesChart"
import PropertiesTable from "../../components/properties/propertiesTable";
import PendingTable from "../../components/requests/pendingTable";
import AppointmentTable from "../../components/requests/appointmentTable";
import GuestsTable from "../../components/requests/guestsTable";
import Plan from "../../components/subscription/plan";
import { Plan1, Plan2 } from "../../components/subscription/plan";
import Link from "next/link";
import Announcements from "../../components/notifications/announcements";


type navbarProp = {
    name?: string;
    hostType?: string;
    joinDate?: string;
};
export default function Home(props: navbarProp) {
    
    return (
        <>
                <Head>
                    <title>Sign Up</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>

                <Header />
                
                {/* Code goes into the main tag */}
                <main className="bg-[#FAFAFA] min-h-screen">
                    {/* Bottom menu */}
                    <nav className=" bg-[#FA790F] items-center justify-center ">
                <div className="flex items-center">
                <UserDetails name="John Doe" hostType="Verified Host" joinDate="Since April 2022"/>
                <div>
                <button type="button" className="text-[#FA790F] bg-white focus:ring-0 font-medium rounded leading-[130%] text-sm px-4 mr-20 py-2 mt-5 mb-2 ">Account Settings</button>
                </div>

                </div>

                    <div>
                        <Tabs>
                            <div className="flex items-end ml-20 mb-3 h-[4.6rem] justify-between">
                                <TabList className="flex flex-row text-[#FFE1C9] gap-x-14">
                                    <Tab selectedClassName="text-white underline underline-offset-[5.5px]">
                                        Dashboard
                                    </Tab>
                                    <Tab selectedClassName="text-white underline underline-offset-[5.5px]">
                                        Properties
                                    </Tab>
                                    <Tab selectedClassName="text-white underline underline-offset-[5.5px]">
                                        Requests
                                    </Tab>
                                    <Tab selectedClassName="text-white underline underline-offset-[5.5px]">
                                        Messages
                                    </Tab>
                                    <Tab selectedClassName="text-white underline underline-offset-[5.5px]">
                                        Subscription
                                    </Tab>
                                    <Tab selectedClassName="text-white underline underline-offset-[5.5px]">
                                        Notifications
                                    </Tab>
                                </TabList>

                            
                            </div>
                           
                                {/* Dashboard */}
                            <TabPanel>
                                <div className="relative overflow-x-auto bg-[#FAFAFA] sm:rounded-t-">
                                <div className="flex">
                                <div>
                                <div className="flex mb-0 ml-20 mt-10 flex-wrap">
                        <div className=""><MediumRectangle totalProperties="240" selling="120" renting="120"/></div>
                        <div className="ml-[4.5%]"><ProfileRectangle profileViews="400" /></div>
                        
                            </div>
                        <div className="flex mt-8 gap-x-[2.0875rem] ml-20">
                        <div className=""><BookingsRectangle totalBookings="17"/></div>
                        <div className=""><BookingsRectangle totalBookings="17"/></div>
                        <div className=""><PropertiesRectangle totalPropertySales="23"/></div>

                        </div>
                        </div>

                        <div className="ml-[7.375rem] mt-10"><LargeRectangle totalPropertySales="23"/></div>  
                        </div>

                        <div className="ml-20 mt-7 shadow-lg mb-[5.125rem] w-[74rem] h-[22rem] bg-white">
                        <h6 className="text-[#FA790F] pl-16 pt-9 font-medium text-xl leading-8 ">Sales for the month</h6>
                        <div className="ml-16 mt-8  w-[80%] h-[70%]">
                        <SalesChart />
                        </div>
                        </div>
                                </div>


                            </TabPanel>

                            {/* Properties tab */}
                            <TabPanel>
                                <div className="relative overflow-x-auto bg-[#FAFAFA] sm:rounded-t-">                                
                                <div className="flex">
                                    <form className="flex ml-20 mr-auto mt-10">
                                        {/* First search field */}
                                        <label
                                            htmlFor="simple-search"
                                            className="sr-only"
                                        >
                                            Search
                                        </label>
                                        <div className="relative w-[244px]">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-xs text-gray-500">
                                                Sort By:
                                            </div>
                                            <input
                                                type="text"
                                                id="simple-search"
                                                className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-[#FA790F] placeholder-black focus:border-[#FA790F] block w-[244px] pl-14 p-2.5"
                                                placeholder="Month"
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
                                        <div className="relative ml-[33px] mr-auto w-[244px]">
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
                                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FA790F] focus:border-[#FA790F] block w-[244px] pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FA790F] dark:focus:border-[#FA790F]"
                                                placeholder="Search Item"
                                                required
                                            />
                                        </div>


                                        
                                    </form>

                                    <Link
                            href={"/views/Homeowner/addPropertyForms"}
                            className="text-[#0052FF]"
                                     >
                                    <button type="button" className="text-white leading-[125%] text-base bg-[#FA790F] focus:ring-0 font-medium rounded px-2 mr-20 py-2 mt-10  mb-2 ">+ Add property</button>
                                    </Link>
                                    </div>

                                    <table className="w-[90%] ml-20 text-left mt-2 mb-24 text-sm text-gray-500 ">
                                        <thead className="bg-white text-xs border text-[#747A80]">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="h-16 p-4"
                                                >
                                                   <input
                                                            id="checkbox-table-1"
                                                            type="checkbox"
                                                            className="h-4 border-[#FA790F] w-4 rounded-sm  bg-[#FAFAFA] text-[#FA790F]"
                                                        />
                                                        <label
                                                            htmlFor="checkbox-table-1"
                                                            className="sr-only"
                                                        >
                                                            checkbox
                                                        </label> 
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                   Property Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                    Location
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                   Availability
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="pl-6 py-4"
                                                >
                                                    Price
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="pl-6 py-4"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>

                                        {/*  */}
                                        <tbody className="bg-white text-[#2E2D37]">
                                            <tr className="border-b">
                                        <PropertiesTable image="House1" houseType="Mansion" houseNumber="Afrancho Blk 47" location="Adenta" availability="Yes" price="GHC 200"/>
                                        </tr>
                                        <tr className="border-b">
                                        <PropertiesTable image="House1" houseType="Mansion" houseNumber="Afrancho Blk 47" location="Adenta" availability="Yes" price="GHC 200"/>
                                        </tr>
                                        
                                        </tbody>
                                        </table>
                                </div>
                            </TabPanel>



                            {/* Requests tab */}
                            <TabPanel>
                                <div className="relative overflow-x-auto bg-[#FAFAFA]">
                            <p className="mt-9 text-[#58575] font-normal leading-[140%] text-sm ml-20 ">Guests can only proceed to make payment after you have accepted their request</p>
                                <div className="relative overflow-x-auto shadow-md bg- ">
                                    

                                    <Tabs>
                                        <div className="flex">
                            <div className="flex items-end ml-20 mb-3 mr-auto h-[4.6rem] justify-between">
                                <TabList className="flex flex-row text-[#818187] gap-x-14">
                                    <Tab selectedClassName="text-[#FA790F] underline underline-offset-[5.5px]">
                                        Pending
                                    </Tab>
                                    <Tab selectedClassName="text-[#FA790F] underline underline-offset-[5.5px]">
                                        Appointments
                                    </Tab>
                                    <Tab selectedClassName="text-[#FA790F] underline underline-offset-[5.5px]">
                                        My guests
                                    </Tab>
                                </TabList>
                                

                          
                            </div>
                            <form className="flex ml-20 mr-20 mt-10">
                                        {/* First search field */}
                                        <label
                                            htmlFor="simple-search"
                                            className="sr-only"
                                        >
                                            Search
                                        </label>
                                        <div className="relative w-[244px]">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-xs text-gray-500">
                                                Sort By:
                                            </div>
                                            <input
                                                type="text"
                                                id="simple-search"
                                                className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-[#FA790F] placeholder-black focus:border-[#FA790F] block w-[244px] pl-14 p-2.5"
                                                placeholder="Month"
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
                                        <div className="relative ml-[33px] mr-auto w-[244px]">
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
                                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FA790F] focus:border-[#FA790F] block w-[244px] pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FA790F] dark:focus:border-[#FA790F]"
                                                placeholder="Search Item"
                                                required
                                            />
                                        </div>


                                        
                                    </form>
                                    </div>

                                    <TabPanel>
                                    <table className="w-[90%] ml-20 text-left mt-2 mb-24 text-sm text-gray-500 ">
                                        <thead className="bg-white text-xs border-b text-[#747A80]">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="h-16 p-4"
                                                >
                                                   <input
                                                            id="checkbox-table-1"
                                                            type="checkbox"
                                                            className="h-4 border-[#FA790F] w-4 rounded-sm  bg-[#FAFAFA] text-[#FA790F]"
                                                        />
                                                        <label
                                                            htmlFor="checkbox-table-1"
                                                            className="sr-only"
                                                        >
                                                            checkbox
                                                        </label> 
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                   Property Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                    Guest Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                   Status
                                                </th>
                                                
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>

                                        {/*  */}
                                        <tbody className="bg-white text-[#2E2D37]">
                                            <tr className="border-b">
                                        <PendingTable houseNumber="Afrancho Blk 47" houseType="Mansion" guestName="Hamida Mahama" date="23/01/2023"/>
                                        </tr>
                                        <tr className="border-b">
                                        <PendingTable houseNumber="Afrancho Blk 47" houseType="Mansion" guestName="Hamida Mahama" date="23/01/2023"/>
                                        </tr>
                                        
                                        </tbody>
                                        </table>
                                    </TabPanel>


                                    {/* Appointment tab */}
                                    <TabPanel>
                                    <table className="w-[90%] ml-20 text-left mt-2 mb-24 text-sm text-gray-500 ">
                                        <thead className="bg-white text-xs border-b text-[#747A80]">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="h-16 p-4"
                                                >
                                                   <input
                                                            id="checkbox-table-1"
                                                            type="checkbox"
                                                            className="h-4 border-[#FA790F] w-4 rounded-sm  bg-[#FAFAFA] text-[#FA790F]"
                                                        />
                                                        <label
                                                            htmlFor="checkbox-table-1"
                                                            className="sr-only"
                                                        >
                                                            checkbox
                                                        </label> 
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                   Property Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                    Guest Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                   Duration
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                   Service
                                                </th>
                                                
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>

                                        {/*  */}
                                        <tbody className="bg-white text-[#2E2D37]">
                                            <tr className="border-b">
                                        <AppointmentTable houseNumber="Afrancho Blk 47" houseType="Mansion" guestName="Hamida Mahama" date="Starts 23/01/2023" durationMonth="12 months"/>
                                        </tr>
                                        <tr className="border-b">
                                        <AppointmentTable houseNumber="Afrancho Blk 47" houseType="Mansion" guestName="Hamida Mahama"/>
                                        </tr>
                                        
                                        </tbody>
                                        </table>
                                    </TabPanel>

                                    {/* My Guests tab */}
                                    <TabPanel>
                                    <table className="w-[90%] ml-20 text-left mt-2 mb-24 text-sm text-gray-500 ">
                                        <thead className="bg-white text-xs border-b text-[#747A80]">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="h-16 p-4"
                                                >
                                                   <input
                                                            id="checkbox-table-1"
                                                            type="checkbox"
                                                            className="h-4 border-[#FA790F] w-4 rounded-sm  bg-[#FAFAFA] text-[#FA790F]"
                                                        />
                                                        <label
                                                            htmlFor="checkbox-table-1"
                                                            className="sr-only"
                                                        >
                                                            checkbox
                                                        </label> 
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                   Property Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                    Guest Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                   Service
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                   Status
                                                </th>
                                                
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>

                                        {/*  */}
                                        <tbody className="bg-white text-[#2E2D37]">
                                            <tr className="border-b">
                                        <GuestsTable houseNumber="Afrancho Blk 47" houseType="Mansion" guestName="Hamida Mahama" date="23/01/2023" status="Fully paid on"/>
                                        </tr>

                                        <tr className="border-b">
                                        <GuestsTable houseNumber="Afrancho Blk 47" houseType="Mansion" guestName="Hamida Mahama" status="Ongoing" date="Started 23/01/2023"/>
                                        </tr>

                                        <tr className="border-b">
                                        <GuestsTable houseNumber="Afrancho Blk 47" houseType="Mansion" guestName="Hamida Mahama" status="Ended" date="Started 23/01/2023"/>
                                        </tr>
                                        
                                        </tbody>
                                        </table>
                                    </TabPanel>
                                    
                            </Tabs>
                            </div>
                            </div>
                            </TabPanel>
                            {/* Messages tab */}
                            <TabPanel>
                                <div className="relative overflow-x-auto shadow-md bg-[#FAFAFA] ">


                                </div>
                            </TabPanel>


                            {/* Subscription tab */}
                            <TabPanel>
                                <div className="relative overflow-x-auto bg-[#FAFAFA] ">
                                    <div className="ml-20 mt-10 flex">
                                    <div className="w-[5px] bg-[#FA790F] h-[69px]"></div>
                                    <div className="flex w-[566px] items-center h-[69px] bg-[#D1D2E4]/20 ">
                                        <Image className="w-[24px] h-[24px] ml-6 " src={exclamation} alt={""}  />
                                        <p className="text-[#58575F] font-medium text-sm leading-5 ml-3">Please note that you are currently on the free version.</p>
                                    </div>
                                    </div>

                                    <div className="flex">
                                    <Plan planType="BASIC PLAN" amount="20" duration="Month" numOfProperties="5 properties" benefit1="Benefit 1" benefit2="Benefit 2" benefit3="Benefit 3" benefit4="Benefit 4" benefit5="Benefit 5"/>
                                    
                                    <Plan1 planType="BASIC PLAN" amount="20" duration="Month" numOfProperties="5 properties" benefit1="Benefit 1" benefit2="Benefit 2" benefit3="Benefit 3" benefit4="Benefit 4" benefit5="Benefit 5"/>

                                    <Plan2 planType="BASIC PLAN" amount="20" duration="Month" numOfProperties="5 properties" benefit1="Benefit 1" benefit2="Benefit 2" benefit3="Benefit 3" benefit4="Benefit 4" benefit5="Benefit 5"/>

                                    <Plan1 planType="BASIC PLAN" amount="20" duration="Month" numOfProperties="5 properties" benefit1="Benefit 1" benefit2="Benefit 2" benefit3="Benefit 3" benefit4="Benefit 4" benefit5="Benefit 5"/>

                                    </div>
                                </div>
                            </TabPanel>
                            {/* Notifications tab */}
                            <TabPanel>
                            <div className="relative overflow-x-auto bg-[#FAFAFA] ">
                                <div className="bg-white mt-12 mr-20 ml-20 pb-20 ">
                                <p className="text-[#FA790F] pt-[1.8125rem] mr-[2rem] cursor-pointer font-medium text-base leading-5 text-right">Mark all as read</p>
                                </div>

                                <div className="bg-[#FAFAFA] ">
                                    <Announcements message="Pellentesque arcu semper pulvinar ornare enim elit consequat."/>
                                    <Announcements message="Pellentesque arcu semper pulvinar ornare enim elit consequat."/>
                                    <Announcements message="Pellentesque arcu semper pulvinar ornare enim elit consequat."/>
                                    <Announcements message="Pellentesque arcu semper pulvinar ornare enim elit consequat."/>
                                    <Announcements message="Pellentesque arcu semper pulvinar ornare enim elit consequat."/>
                                

                                <div className="pt-20 pb-10 mb-[6.9375rem] bg-white mr-20 ml-20">
                                <button type="button" className="ml-[50%] text-white font-medium leading-5 text-sm  bg-[#FA790F] focus:ring-0 rounded px-4  mr-20 py-2.5 mb-2 ">Load more</button>
                                </div>
                                </div>
                                </div>
                            </TabPanel>
                            <Footer />
                        </Tabs>
                        </div>



            </nav>


                
                </main>
        </>
    );
}