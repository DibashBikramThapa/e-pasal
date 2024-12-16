import React from "react";
import Link from "next/link";

import { BiLogoTelegram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-32 bg-black text-white">
      <div className="grid md:grid-cols-2 mx-2 sm:mx-[5rem]">
        <div className="mt-6 flex flex-col gap-5">
          {/* <img alt="Image not found" src={`/logo.png`} className="w-[15rem]" /> */}
          <p className="font-[200]">
            To Z. Online Bazar Pvt. Ltd. is a well-established and multifarious company. A to Z Online Bazar is one of the best online shopping marketplace
            based in the capital city-Kathmandu. Our office and store are located at Buddha Bhawan Putalisadak Kathmandu Nepal.

          </p>
          <p className="mt-8 font-[200]">
          Subscribe to our newsletter for regular updates about Offers, Coupons & more
          </p>
        </div>
        <div className="mt-6 flex flex-col md:items-end gap-4">
          <Link href={"mailto:info@hoskycoin.com"} className="">
            <h4>Contact Us</h4>
          </Link>
          <Link href={"/privacy-policy-3"} className="">
            <h4>Privacy Policy</h4>
          </Link>
          <Link href={"/terms-conditions"} className="">
            <h4>Terms & Conditions</h4>
          </Link>
          <div className="flex gap-6">
            <Link
              href={"https://t.me/Hoskycoinmeme"}
              target="_blank"
              className="rounded bg-white"
            >
              <BiLogoTelegram className="text-black text-[20px] px-1" />
            </Link>
            <Link
              href={"https://twitter.com/HoskyCoin"}
              target="_blank"
              className="rounded bg-white"
            >
              <FaXTwitter className="text-black text-[20px] px-1" />
            </Link>
            <Link
              href={"https://medium.com/@HoskyCoin"}
              target="_blank"
              className="rounded bg-white"
            >
              <FaMediumM className="text-black text-[20px] px-1" />
            </Link>
            <Link
              href={"https://discord.gg/DP3nJ9mDPw"}
              target="_blank"
              className="rounded bg-white"
            >
              <FaDiscord className="text-black text-[20px] px-1" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-16 font-[100] px-2">
        2024, All Rights Reserved!
      </div>
    </div>
  );
}

export default Footer;
