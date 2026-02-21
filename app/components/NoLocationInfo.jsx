import Link from "next/link";
import React from "react";
import Card from "./Card";

export default function NoLocationInfo({ location }) {
  return (
    <Card>
      <div className="flex  flex-col items-center justify-center bg-[#19243B] text-white">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="flex size-24 items-center justify-center rounded-full bg-[#293A4E]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-12 text-[#7887A2]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
              />
            </svg>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">
              {location}&quot Not Found
            </h1>
            <p className="max-w-sm text-[#7887A2]">
              We couldn't find any data for{" "}
              <span className="font-medium text-white">{location}</span>. Please
              try a different location or go back.
            </p>
          </div>

          <Link
            href="/"
            className="mt-4 rounded-xl bg-[#293A4E] px-6 py-3 text-sm font-medium text-[#92B6F5] transition hover:bg-[#344d66]"
          >
            ← Go Back
          </Link>
        </div>
      </div>
    </Card>
  );
}
