"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudnaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="travel image" />
      )}
      <CldUploadWidget
        uploadPreset="gfhlblke"
        options={{
          sources: [
            "local",
            "url",
            "image_search",
            "google_drive",
            "facebook",
            "dropbox",
            "instagram",
          ],
          multiple: false,
        }}
        onUpload={(result, widget) => {
          // console.log(result);
          if (result.event !== "success") return;
          const info = result.info as CloudnaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
