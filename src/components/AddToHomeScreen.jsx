import React, { useState, useEffect } from 'react';
import { FiDownload, FiX } from 'react-icons/fi';

const AddToHomeScreen = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const checkStandalone = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      const isInWebAppiOS = window.navigator.standalone === true;
      setIsStandalone(isStandalone || isInWebAppiOS);
    };

    // Check if iOS device
    const checkIOS = () => {
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      setIsIOS(iOS);
    };

    checkStandalone();
    checkIOS();

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show install prompt only if not already installed and not on iOS
      if (!isStandalone && !isIOS) {
        setShowInstallPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for successful installation
    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
      setIsStandalone(true);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [isIOS, isStandalone]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
      }
    }
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'GRI - Grassroot Innovation',
        text: 'Join our rural innovation community',
        url: window.location.href
      });
    }
  };

  // Don't show if already installed
  if (isStandalone) {
    return null;
  }

  // iOS instructions
  if (isIOS && !isStandalone) {
    return (
      <div className="ios-install-prompt">
        <div className="ios-install-content">
          <FiDownload size={20} />
          <div>
            <strong>Add to Home Screen</strong>
            <p>Tap the share button and select "Add to Home Screen"</p>
          </div>
          <button
            onClick={() => setShowInstallPrompt(false)}
            className="ios-close-btn"
          >
            <FiX size={16} />
          </button>
        </div>
      </div>
    );
  }

  // Android/Chrome install prompt
  if (showInstallPrompt && deferredPrompt) {
    return (
      <button
        className="add-to-home-btn"
        onClick={handleInstallClick}
        title="Install GRI App"
      >
        <FiDownload size={16} />
        Install App
      </button>
    );
  }

  // Fallback for browsers that don't support PWA install
  return (
    <button
      className="add-to-home-btn"
      onClick={handleShareClick}
      title="Share GRI"
    >
      📱 Share
    </button>
  );
};

export default AddToHomeScreen;
