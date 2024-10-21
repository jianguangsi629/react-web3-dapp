// src/components/Publisher.tsx
import React, { useState } from "react";

const Publisher: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<string>("N/A");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 文本输入处理
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  // 文件输入处理
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // 发送文本到服务器
  const handleTextSubmit = async () => {
    if (!text) {
      alert("Please enter some text");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(
        "http://127.0.0.1:8098/v1/publisher/store?epochs=5",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: text }),
        }
      );

      if (res.ok) {
        const result = await res.json();
        // alreadyCertified
        if (result.response?.alreadyCertified) {
          const filteredResult = {
            message: "File already stored!",
            storage: {
              blobID: result.response.alreadyCertified.blobId || "N/A",
              endEpoch: result.response.alreadyCertified.endEpoch || "N/A",
            },
          };
          setResponse(JSON.stringify(filteredResult, null, 2));
        } else {
          const filteredResult = {
            message: "File uploaded successfully!",
            storage: {
              blobID:
                result.response?.newlyCreated?.blobObject?.blobId || "N/A",
              startEpoch:
                result.response?.newlyCreated?.blobObject?.storage.startEpoch ||
                "N/A",
              endEpoch:
                result.response?.newlyCreated?.blobObject?.storage?.endEpoch ||
                "N/A",
              cost: result.response?.newlyCreated?.cost || "N/A",
            },
          };
          setResponse(JSON.stringify(filteredResult, null, 2));
          alert("File uploaded successfully!");
        }
      } else {
        setResponse("Failed to send text data");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while sending text data");
    } finally {
      setIsLoading(false); 
    }
  };

  // 发送文件到服务器
  const handleFileSubmit = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    setIsLoading(true); 

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(
        "http://127.0.0.1:8098/v1/publisher/store/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        const result = await res.json();

        // alreadyCertified
        if (result.response?.alreadyCertified) {
          const filteredResult = {
            message: "File already stored!",
            storage: {
              blobID: result.response.alreadyCertified.blobId || "N/A",
              endEpoch: result.response.alreadyCertified.endEpoch || "N/A",
            },
          };
          setResponse(JSON.stringify(filteredResult, null, 2));
        } else {
          const filteredResult = {
            message: "File uploaded successfully!",
            storage: {
              blobID:
                result.response?.newlyCreated?.blobObject?.blobId || "N/A",
              startEpoch:
                result.response?.newlyCreated?.blobObject?.storage.startEpoch ||
                "N/A",
              endEpoch:
                result.response?.newlyCreated?.blobObject?.storage?.endEpoch ||
                "N/A",
              cost: result.response?.newlyCreated?.cost || "N/A",
            },
          };
          setResponse(JSON.stringify(filteredResult, null, 2));
          alert("File uploaded successfully!");
        }
      } else {
        setResponse("Failed to upload file");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while uploading the file");
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* loading */}
      {isLoading && (
        <div style={{ marginBottom: "20px", color: "blue" }}>Loading...</div>
      )}
      {/* text */}
      <div style={{ marginBottom: "40px" }}>
        <h3>Publish Text</h3>
        <textarea
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text to publish"
          rows={5}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button
          onClick={handleTextSubmit}
          style={{ padding: "10px 20px", cursor: "pointer" }}
          disabled={isLoading}
        >
          Publish Text
        </button>
      </div>

      <hr style={{ margin: "40px 0" }} />

      {/* file */}
      <div style={{ marginBottom: "40px" }}>
        <h3>Publish File</h3>
        <input
          type="file"
          onChange={handleFileChange}
          style={{ marginBottom: "10px" }}
          disabled={isLoading}
        />
        <button
          onClick={handleFileSubmit}
          style={{ padding: "10px 20px", cursor: "pointer" }}
          disabled={isLoading}
        >
          Upload File
        </button>
      </div>

      <hr style={{ margin: "40px 0" }} />
      <h3>Response Text</h3>
      <textarea
        value={response}
        readOnly
        rows={20}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "20px",
          backgroundColor: "#f9f9f9",
        }}
      />
    </div>
  );
};

export default Publisher;
