import React, { useState } from "react";

export default function CopyBtnDemo({ textToCopy = 'Copy default', setIsUpload }) {
  console.log("🚀 ~ file: clipboard.js:4 ~ CopyBtnDemo ~ textToCopy", textToCopy)
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopied(true);
        setIsUpload(true)
        // changing back to default state after 2 seconds.
        setTimeout(() => {
          setCopied(false);
         
        }, 2000);
      },
      (err) => {
        console.log("failed to copy", err.mesage);
      }
    );
  };

  const btnStyle = copied ? "bg-gray-500 text-white" : "";

  return (
    <div className="text-center my-6">
      <button
        onClick={copyToClipboard}
        className={
          btnStyle +
          " text-sm border w-36 border-gray-500 rounded p-2 transition"
        }
      >
        {copied ? "Copied" : "Copy Image Url"}
      </button>
    </div>
  );
}
