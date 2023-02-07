/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Layout from "../../../components/layout";
import Header from "../../../components/header";
import downloadclose from "../../../assets/download-close.png";
import approvalimage from "../../../assets/Chart 7.png";
import calendar from "../../../assets/calendar.png";
import totalclientsgraph from "../../../assets/total clients.png";
import months from "../../../assets/Months.png";
import report from "../../../assets/Report.png";
import approvalrate from "../../../assets/approval_rate.png";
import defaultrate from "../../../assets/default rate.png";
import download from "../../../assets/Download.png";

import Image from "next/image";

export default function Reports() {
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
                {/* Code goes into the main tag */}
                <main className="bg-[#FAFAFA] min-h-screen">
                    {/* Change props to suit page*/}
                    <Header title={"Mortgage Requests"} number={21} />
                    {/* Bottom menu */}
                    <div className="flex items-center bg-white justify-between border-b px-[5rem] py-4">
                        <div className="text-[#FA790F]">
                            Mortgage Requests/{" "}
                            <span className="text-black">Report</span>{" "}
                        </div>

                        <div>
                            <div>
                                <button
                                    type="button"
                                    className="px-3 py-2 text-xs font-medium text-center text-white bg-[#d0650d] rounded-md hover:bg-[#ee7613] focus:ring-4 focus:outline-none focus:ring-yellow-500 dark:bg-[#d0650d] dark:hover:bg-[#ee7613] dark:focus:ring-yellow-500"
                                >
                                    + Add Chart
                                </button>

                                <button
                                    type="button"
                                    className="text-yellow-600 hover:text-yellow-700 border m-3 border-yellow-700 hover:bg-gray-100 font-bold focus:ring-4 focus:outline-none focus:ring-[#d0650d] font-sm rounded-md text-sm px-2 py-1 text-center mr-2 mb-2 dark:border-yellow-700 dark:text-[#d0650d] dark:hover:text-yellow-700 dark:hover:bg-[#d0650d] dark:focus:ring-[#d0650d]"
                                >
                                    Export Data
                                </button>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm font-semibold mx-8 px-8 py-6">
                        Here is the report for the day.
                    </p>

                    <div className="border-2 bg-[#FAFAFA] rounded-xl ml-10 mb-3 w-[1024px] h-[1214px]">
                        <div className="flex items-center mb-0 rounded-t-xl w-[1020px]  bg-white justify-between border-b px-[2rem] py-4">
                            <h6 className="font-bold pt-2">
                                Accounts Overview
                            </h6>
                            <section className="flex">
                                <Image
                                    src={calendar}
                                    width={15}
                                    height={50}
                                    alt={"calendar image"}
                                />
                                <p className="font-bold self-center pl-1 text-xs ">
                                    2022
                                </p>
                            </section>
                        </div>

                        <div className="flex bg-white rounded-md my-1  ">
                            <div className="w-[554] rounded-lg mr-5 my-1 border-2 h-[481]">
                                <h3 className="mt-10 text-[#58575F] text-[21px] ml-9 font-bold">
                                    Total Revenue
                                </h3>
                                <p className="mt-6 ml-9 font-bold text-3xl">
                                    GHC 100,000.00
                                </p>

                                <h6 className="mt-12 ml-9 text-[16px] text-[#58575F] font-bold ">
                                    Amount Loaned
                                </h6>
                                <p className="mt-6 ml-9 mb-0 font-bold tracking-tight text-[23px]">
                                    GHC 30,000.70
                                </p>

                                <Image
                                    src={approvalimage}
                                    width={493}
                                    height={150}
                                    className="h-[150]"
                                    alt={"accounts overview graph"}
                                />
                            </div>

                            <div className="w-[226px] border-2 my-1 rounded-lg h-[310px]">
                                <h5 className="text-[21px] m-7 text-[#58575F] font-bold">
                                    Approval rate
                                </h5>
                                <Image
                                    className="ml-12 "
                                    src={approvalrate}
                                    width={130}
                                    height={50}
                                    alt={"calendar image"}
                                />
                                <p className="text-[21px] font-bold m-9 mt-10">
                                    GHC 30,000.70
                                </p>
                            </div>

                            <div className="mb-52 w-[226px] h-[310px] ml-5 my-1 bg-gradient-to-br from-[#D0650D] via-[#d0650df3] to-[#f5b179] rounded-[7px] ">
                                <h5 className="text-white m-7 text-[21px] font-bold">
                                    Default rates
                                </h5>
                                <Image
                                    className="ml-12"
                                    src={defaultrate}
                                    width={130}
                                    alt={"default rate"}
                                />
                                <p className="text-white text-[21px] font-bold m-9 mt-10">
                                    GHC 30,000.70
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center mb-5 rounded w-[1020px] h-[140px] bg-[#EBF0F0]">
                            <div
                                className="flex bg-white rounded-md w-[320px] h-[114px]"
                                id="total clients"
                            >
                                <div className="m-6">
                                    <h6 className="text-gray-500 text-sm font-medium">
                                        Total clients
                                    </h6>
                                    <p className="font-bold pt-2 text-lg">
                                        823,000
                                    </p>
                                </div>
                                <Image
                                    className="ml-0"
                                    src={totalclientsgraph}
                                    pl-
                                    width={190}
                                    alt={"total clients graph"}
                                />
                            </div>

                            <div
                                className="flex bg-white rounded-md w-[320px] h-[114px] ml-4"
                                id="borrowers"
                            >
                                <div className="m-6">
                                    <h6 className="text-gray-500 text-sm font-medium">
                                        Borrowers
                                    </h6>
                                    <p className="font-bold pt-2 text-lg">
                                        29,000
                                    </p>
                                </div>
                                <Image
                                    src={totalclientsgraph}
                                    pl-
                                    width={190}
                                    alt={"total clients graph"}
                                />
                            </div>

                            <div
                                className="flex bg-white rounded-md w-[320px] mb-0 h-[114px] ml-4"
                                id="loan status"
                            >
                                <div className="">
                                    <h6 className="mt-7 ml-7 text-gray-500 text-sm font-medium">
                                        Loan Status
                                    </h6>

                                    <div className="flex pt-3">
                                        <section className="ml-9">
                                            <span className="flex items-center text-sm font-medium text-[#965E00] dark:text-white">
                                                <span className="flex w-2.5 h-2.5 bg-[#965E00] rounded-full mr-1.5 flex-shrink-0"></span>
                                                Unpaid
                                            </span>
                                            <p className="text-lg font-bold text-center">
                                                200
                                            </p>
                                        </section>

                                        <section className="ml-9">
                                            <span className="flex items-center text-sm font-medium text-[#D30000] dark:text-white">
                                                <span className="flex w-2.5 h-2.5 bg-[#D30000] rounded-full mr-1.5 flex-shrink-0"></span>
                                                Overdue
                                            </span>
                                            <p className="text-lg font-bold text-center">
                                                200
                                            </p>
                                        </section>

                                        <section className="ml-9">
                                            <span className="flex items-center text-sm font-medium text-[#007F00] dark:text-white">
                                                <span className="flex w-2.5 h-2.5 bg-[#007F00] rounded-full mr-1.5 flex-shrink-0"></span>
                                                Paid
                                            </span>
                                            <p className="text-lg font-bold text-center">
                                                200
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ml-10 mb-10">
                            <Image
                                src={report}
                                className="h-[300px]"
                                pl-
                                width={900}
                                alt={"total clients graph"}
                            />
                            <Image
                                src={months}
                                width={830}
                                className="pt-4 ml-14"
                                alt={"total clients graph"}
                            />
                        </div>

                        {/* Download boxes */}
                        <section className="flex" id="download box">
                            <div
                                className="flex mb-20 ml-4 w-96"
                                id="downloading-report"
                            >
                                <div className="bg-[#FA790F] w-1 h-12"></div>

                                <div className="bg-[#EDFBF1] flex w-96 h-12">
                                    <Image
                                        className="h-5 ml-[12px] self-center"
                                        src={download}
                                        width={18}
                                        alt={"download icon"}
                                    />
                                    <p className="font-bold self-center text-[#151515] ml-[14px] mr-auto">
                                        Downloading Report
                                    </p>
                                    <div className="rounded-full w-5 h-5 mr-2 hover:bg-gray-300 self-center bg-[#EDFBF1]">
                                        <Image
                                            className="h-5 ml-[2px]"
                                            src={downloadclose}
                                            width={25}
                                            alt={"close button"}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex mb-[100px] ml-4 w-96"
                                id="report downloaded"
                            >
                                <div className="bg-[#FA790F] w-1 h-12"></div>

                                <div className="bg-[#EDFBF1] flex w-96 mb-12">
                                    <Image
                                        className="h-5 ml-[12px] self-center"
                                        src={download}
                                        width={18}
                                        alt={"download icon"}
                                    />
                                    <p className="font-bold self-center text-[#151515] ml-[14px] mr-auto">
                                        Completed!
                                    </p>

                                    <a
                                        href="#"
                                        className=" self-center font-medium mr-[44px] text-[#11B8A4] dark:text-blue-500 hover:underline"
                                    >
                                        Download PDF
                                    </a>

                                    <div className="rounded-full w-5 h-5 mr-2 hover:bg-gray-300 self-center bg-[#EDFBF1]">
                                        <Image
                                            className="h-5 ml-[2px]"
                                            src={downloadclose}
                                            width={25}
                                            alt={"close button"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </Layout>
        </>
    );
}