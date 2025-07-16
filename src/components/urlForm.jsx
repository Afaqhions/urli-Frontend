import React, { useState } from 'react';
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify' 

const UrlForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!longUrl.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/create`, { url: longUrl });

      // Backend now returns the full URL
      setShortUrl(response.data.short_url);
      toast.success("Created Successfully. ");
      setLongUrl('');
      setCopied(false); // Reset copied state on new URL
    } catch (err) {
      console.error('Error shortening URL:', err);
      toast.error('Failed to shorten URL.');
    }
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset after 2 seconds
  };

  return (
    <div className="max-w-xl mx-auto mt-24 p-6 bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Shorten Your URL</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="url"
          placeholder="Paste your long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
          disabled={loading}
        >
          {loading ? 'Shortening...' : 'Shorten URL'}
        </button>
      </form>

      {/* Display Short URL */}
      {shortUrl && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <p className="text-gray-700 mb-2 text-center">Your shortened URL:</p>
          <div className="flex items-center justify-between">
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline break-all"
            >
              {shortUrl}
            </a>
            <button
              onClick={handleCopy}
              className="bg-green-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-green-600 transition"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
