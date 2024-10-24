import React from "react";
import { TbNotes } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IoPlay } from "react-icons/io5";
import CodeEditor from "../components/CodeEditor";

const MockDriveCodingTestStart: React.FC = () => {
    return (
        <div className="mock-drive-coding-test max-w-7xl mx-auto lg:h-[calc(100vh-50px)] p-4">
            <div className="h-full flex flex-col lg:flex-row flex-nowrap gap-5">
                <div className="bg-white rounded-xl h-full w-full p-1 overflow-y-auto">
                    <nav className="h-10 rounded-t-xl flex flex-nowrap items-center px-3">
                        <ul>
                            <li>
                                <a href="" className="inline-flex flex-nowrap items-center gap-1 bg-gray-100 rounded-full px-3 py-1">
                                    <TbNotes className="text-[15px] text-blue-600" />
                                    <h1 className="text-[11px] font-medium text-gray-600">Summary</h1>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="content p-5 flex flex-col gap-6">
                        <section>
                            <h1 className="text-[14px] font-medium tracking-wide text-gray-700">Longest Substring Without Repeating Characters</h1>
                            <div className="flex flex-nowrap items-center gap-2 mt-1">
                                <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-nowrap">Medium</span>
                                <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-nowrap">Hashing</span>
                            </div>
                            <p className="text-[12px] text-justify my-5 text-gray-600/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores a deleniti, veritatis, voluptatem cupiditate nam nesciunt quisquam repudiandae totam iusto excepturi dignissimos placeat non ipsum maxime. Architecto, ipsam maxime.</p>
                        </section>

                        <section>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <h1 className="text-[13px] font-medium">Example 1 :</h1>
                                    <div className="text-[12px] ps-3 border-l-2 border-gray-900">
                                        <p className="flex flex-nowrap items-center gap-2">
                                            <span className="font-medium">Input :</span>
                                            <span className="text-gray-600/90">s = "abcabcbb"</span>
                                        </p>
                                        <p className="flex flex-nowrap items-center gap-2">
                                            <span className="font-medium">Output :</span>
                                            <span className="text-gray-600/90">3</span>
                                        </p>
                                        <p className="flex flex-wrap items-center gap-2">
                                            <span className="font-medium">Explanation :</span>
                                            <span className="text-gray-600/90"> The answer is "b", with the length of 1.</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <h1 className="text-[13px] font-medium">Example 2 :</h1>
                                    <div className="text-[12px] ps-3 border-l-2 border-gray-900">
                                        <p className="flex flex-nowrap items-center gap-2">
                                            <span className="font-medium">Input :</span>
                                            <span className="text-gray-600/90">s = "abcabcbb"</span>
                                        </p>
                                        <p className="flex flex-nowrap items-center gap-2">
                                            <span className="font-medium">Output :</span>
                                            <span className="text-gray-600/90">3</span>
                                        </p>
                                        <p className="flex flex-wrap items-center gap-2">
                                            <span className="font-medium">Explanation :</span>
                                            <span className="text-gray-600/90">The answer is "wke", with the length of 3.
                                                Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.</span>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </section>


                        <section>
                            <h1 className="text-[13px] font-medium">Constraints :</h1>
                            <ul className="text-gray-700 list-disc ps-5">
                                <li className="text-[13px]">{`0 <= s.length <= 5 * 104`}</li>
                                <li className="text-[13px]">{`s consists of English letters, digits, symbols and spaces.`}</li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-2 h-full w-full">
                    <div className="h-10 w-full flex flex-nowrap items-center justify-between gap-5 px-3">
                        <button className="flex flex-nowrap items-center gap-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                            <h1 className="text-[11px] tracking-wide font-medium">Language</h1>
                            <IoIosArrowDown className="text-[13px]" />
                        </button>
                        <button className="bg-green-500 text-white rounded-full px-3 py-1 flex flex-nowrap items-center gap-2">
                            <h1 className="text-[11px] tracking-wide font-medium">Execute</h1>
                            <IoPlay className="text-md" />
                        </button>
                    </div>
                    <CodeEditor />
                </div>
            </div>
        </div>
    )
}

export default MockDriveCodingTestStart;