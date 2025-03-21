/* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client';
// import { useEffect } from 'react';

// export default function Chatbot() {
//   useEffect(() => {
//     // Create and load the plugin script
//     const pluginScript = document.createElement('script');
//     pluginScript.src = 'https://app.sofitech.ai/webchat/plugin.js?v=5';
//     pluginScript.async = true;

//     pluginScript.onload = () => {
//       // After the plugin script loads, create and execute the configuration script
//       const configScript = document.createElement('script');
//       configScript.textContent = `
//         window.ktt10 = window.ktt10 || {};
//         ktt10.setup({
//           id: "MDeRvVkTpHwvnz",
//           accountId: "1711681",
//           color: "#36D6B5",
//           element: '#chat-container',
//           type: 'floating',
//           hideHeader: true,
//           loadMessages: false,
//           icon: '/images/logo/logo.png',
//         });
//       `;
//       document.body.appendChild(configScript);
//     };

//     document.body.appendChild(pluginScript);

//     // Cleanup function to remove scripts if component unmounts
//     return () => {
//       if (pluginScript && pluginScript.parentNode) {
//         pluginScript.parentNode.removeChild(pluginScript);
//       }
//     };
//   }, []); // Empty dependency array ensures this runs once on mount

//   return null; // This component doesn't render anything visible
// }

'use client';

import { useEffect } from 'react';

// Create a global variable to track initialization
// This will persist even if the component remounts
if (typeof window !== 'undefined') {
  window.__SOFITECH_INITIALIZED = window.__SOFITECH_INITIALIZED || false;
}

export default function Chatbot() {
  useEffect(() => {
    // First, let's clean up any existing chatbot instances
    cleanupExistingChatbot();

    // Check if already initialized using our global flag
    if (typeof window !== 'undefined' && window.__SOFITECH_INITIALIZED) {
      console.log('Sofitech chatbot already initialized, skipping');
      return;
    }

    // Set a small delay to ensure any previous instances are fully cleaned up
    const initTimer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        // Mark as initialized before we do anything
        window.__SOFITECH_INITIALIZED = true;

        // Create and load the plugin script
        const pluginScript = document.createElement('script');
        pluginScript.src = 'https://app.sofitech.ai/webchat/plugin.js?v=5';
        pluginScript.async = true;
        pluginScript.id = 'sofitech-script';

        pluginScript.onload = () => {
          // After the plugin script loads, create and execute the configuration script
          const configScript = document.createElement('script');
          configScript.id = 'sofitech-config';
          configScript.textContent = `
            // Reset ktt10 to ensure a clean initialization
            window.ktt10 = window.ktt10 || {};

            // Initialize the chatbot
            ktt10.setup({
              id: "MDeRvVkTpHwvnz",
              accountId: "1711681",
              color: "#36D6B5",
              element: '#chat-container',
              type: 'floating',
              hideHeader: true,
              loadMessages: false,
              icon: '/images/logo/logo-test.png',
            });
          `;
          document.body.appendChild(configScript);
        };

        document.body.appendChild(pluginScript);
      }
    }, 300); // Small delay to ensure cleanup completes

    // Cleanup function
    return () => {
      clearTimeout(initTimer);
      // We don't reset the global flag on unmount to prevent re-initialization
      // if the component is remounted
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return null; // This component doesn't render anything visible
}

// Function to clean up any existing chatbot instances
function cleanupExistingChatbot() {
  if (typeof window === 'undefined') return;

  // Remove any existing scripts
  const existingPluginScript = document.getElementById('sofitech-script');
  if (existingPluginScript) existingPluginScript.remove();

  const existingConfigScript = document.getElementById('sofitech-config');
  if (existingConfigScript) existingConfigScript.remove();

  // Find and remove any chatbot elements that might have been created
  // These selectors are based on common patterns for chat widgets
  const possibleChatbotSelectors = [
    '.ktt10-widget',
    '.ktt10-container',
    '.ktt10-chat',
    '.ktt10-button',
    '[id^="ktt10-"]',
    '[class^="ktt10-"]',
    '.sofitech-widget',
    '.sofitech-container',
    '.sofitech-chat',
    '.sofitech-button',
    '[id^="sofitech-"]',
    '[class^="sofitech-"]',
    // Generic chat widget selectors
    '.chat-widget',
    '.chat-container',
    '.chat-button',
    '.chat-launcher',
    '.chat-widget-container',
  ];

  possibleChatbotSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.remove();
    });
  });

  // Reset any global variables the chatbot might have created
  if (window.ktt10) {
    // Keep a reference but reset properties
    const tempKtt10 = window.ktt10;
    window.ktt10 = {
      // Preserve the setup function if it exists
      setup: tempKtt10.setup,
    };
  }
}

// Add TypeScript declaration for our global variable
declare global {
  interface Window {
    __SOFITECH_INITIALIZED?: boolean;
    ktt10?: any;
  }
}
