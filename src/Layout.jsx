import { useEffect } from "react";
import "/public/assets/custom.css";

export default function Layout({ children }) {
  useEffect(() => {
  const scripts = ["/js/libs.min.js", "/js/app.min.js"];
  let loaded = 0;

  scripts.forEach((src) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false;

    s.onload = () => {
      loaded++;

      if (loaded === scripts.length) {
        setTimeout(() => {
          // 🔁 Re-init template
          window.dispatchEvent(new Event("load"));
          window.dispatchEvent(new Event("resize"));
          window.dispatchEvent(new Event("scroll")); // 🔥 REQUIRED FOR COUNTERS

          document.querySelectorAll("video").forEach((video) => {
            try {
              video.muted = true;
              video.playsInline = true;
              const playPromise = video.play();
              if (playPromise?.catch) playPromise.catch(() => {});
            } catch (_) {}
          });

        }, 500);
      }
    };

    document.body.appendChild(s);
  });
}, []);


  return <>{children}</>;
}
