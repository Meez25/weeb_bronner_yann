import React from 'react';
import { RiInstagramFill, RiYoutubeFill, RiFacebookFill, RiTwitterXFill, RiLinkedinFill } from "@remixicon/react"

export const Footer = () => {
    return (
        <footer className="px-20 py-12 flex flex-col md:pb-0">
            <h3 className="font-roboto text-[32px] font-bold lg:hidden">weeb</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-b border-[#E2E8F0] py-12 gap-12">
                <h3 className="hidden lg:block font-roboto text-[32px] font-bold">weeb</h3>
                <section>
                    <h4 className="uppercase py-3 text-[#94A3B8] font-medium font-roboto">Product</h4>
                    <ul className="flex flex-col gap-2">
                        <a href="#" className="py-3">Pricing</a>
                        <a href="#" className="py-3">Overview</a>
                        <a href="#" className="py-3">Browse</a>
                        <a href="#" className="py-3">Accessibility</a>
                        <a href="#" className="py-3">Five</a>
                    </ul>
                </section>

                <section>
                    <h4 className="uppercase py-3 text-[#94A3B8] font-medium font-roboto">Solutions</h4>
                    <ul className="flex flex-col gap-2">
                        <a href="#" className="py-3">Brainstorming</a>
                        <a href="#" className="py-3">Ideation</a>
                        <a href="#" className="py-3">Wireframing</a>
                        <a href="#" className="py-3">Research</a>
                    </ul>
                </section>

                <section>
                    <h4 className="uppercase py-3 text-[#94A3B8] font-medium font-roboto">Resources</h4>
                    <ul className="flex flex-col gap-2">
                        <a href="#" className="py-3">Help Center</a>
                        <a href="#" className="py-3">Blog</a>
                        <a href="#" className="py-3">Tutorials</a>
                    </ul>
                </section>

                <section>
                    <h4 className="uppercase py-3 text-[#94A3B8] font-medium font-roboto">Company</h4>
                    <ul className="flex flex-col gap-2">
                        <a href="#" className="py-3">About</a>
                        <a href="#" className="py-3">Press</a>
                        <a href="#" className="py-3">Events</a>
                        <a href="#" className="py-3">Careers</a>
                    </ul>
                </section>
            </div>

            <section className="py-12 gap-12 flex flex-col md:flex-row md:justify-between">
                <p className="font-roboto font-normal">@ 2025 Weeb, Inc. All rights reserved.</p>
                <div className="flex gap-4">
                    <RiYoutubeFill />
                    <RiFacebookFill />
                    <RiTwitterXFill />
                    <RiInstagramFill />
                    <RiLinkedinFill />
                </div>
            </section>
        </footer>
    )
}
