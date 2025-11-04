import React from 'react';
import { RiInstagramFill, RiYoutubeFill, RiFacebookFill, RiTwitterXFill, RiLinkedinFill } from "@remixicon/react"
import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer className="max-w-[2000px] px-20 py-12 flex flex-col md:pb-0 mx-auto">
      <h3 className="font-roboto text-[32px] font-bold lg:hidden">weeb</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-b border-[#E2E8F0] py-12 gap-12">
        <h3 className="hidden lg:block font-roboto text-[32px] font-bold">weeb</h3>
        <section>
          <h4 className="uppercase py-3 text-[#94A3B8] font-medium font-roboto">Product</h4>
          <ul className="flex flex-col gap-2">
            <Link to="#" className="py-3 hover:text-purple-500">Pricing</Link>
            <Link to="#" className="py-3 hover:text-purple-500">Overview</Link>
            <Link to="#" className="py-3 hover:text-purple-500">Browse</Link>
            <Link to="#" className="py-3 hover:text-purple-500">Accessibility</Link>
            <Link to="#" className="py-3 hover:text-purple-500">Five</Link>
          </ul>
        </section>

        <section>
          <h4 className="uppercase py-3 text-[#94A3B8] font-medium font-roboto">Solutions</h4>
          <ul className="flex flex-col gap-2">
            <Link to="#" className="py-3 hover:text-purple-500">Brainstorming</Link>
            <Link to="#" className="py-3 hover:text-purple-500">Ideation</Link>
            <Link to="#" className="py-3 hover:text-purple-500">Wireframing</Link>
            <Link to="#" className="py-3 hover:text-purple-500">Research</Link>
          </ul>
        </section>

        <section>
          <h4 className="uppercase py-3 text-[#94A3B8] font-medium font-roboto">Resources</h4>
          <ul className="flex flex-col gap-2">
            <Link to="#" className="py-3 hover:text-purple-500">Help Center</Link>
            <Link to="/blog" className="py-3 hover:text-purple-500">Blog</Link>
            <Link to="#" className="py-3 hover:text-purple-500">Tutorials</Link>
          </ul>
        </section>

        <section>
          <h4 className="uppercase py-3 text-[#94A3B8] font-medium font-roboto">Company</h4>
          <ul className="flex flex-col gap-2">
            <Link to="#" className="py-3 hover:text-purple-500">About</Link>
            <Link to="#" className="py-3 hover:text-purple-500">Press</Link>
            <Link to="#" className="py-3 hover:text-purple-500">Events</Link>
            <Link to="#" className="py-3 hover:text-purple-500">Careers</Link>
          </ul>
        </section>
      </div>

      <section className="py-12 gap-12 flex flex-col md:flex-row md:justify-between">
        <p className="font-roboto font-normal">@ 2025 Weeb, Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="#"><RiYoutubeFill /></Link>
          <Link to="#"><RiFacebookFill /></Link>
          <Link to="#"><RiTwitterXFill /></Link>
          <Link to="#"><RiInstagramFill /></Link>
          <Link to="#"><RiLinkedinFill /></Link>
        </div>
      </section>
    </footer>
  )
}
