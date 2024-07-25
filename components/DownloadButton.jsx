"use client";

import React from "react";
import { FiDownload } from "react-icons/fi";

const DownloadButton = ({ fileName, buttonText }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(`/api/download?file=${fileName}`);
      if (!response.ok) throw new Error("Download failed");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download the file. Please try again.");
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="relative hover:scale-110 transition-all ease-in-out duration-600 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[--bg-color] px-3 py-1 text-sm font-medium text-[--text-color] backdrop-blur-3xl">
        {buttonText} <FiDownload className="text-xl" />
      </span>
    </button>
  );
};

export default DownloadButton;
