const primaryColorScheme = ""; // "light" | "dark"

// Get theme data from local storage
const currentTheme = localStorage.getItem("theme");

function getPreferTheme() {
  // return theme value in local storage if it is set
  if (currentTheme) return currentTheme;

  // return primary color scheme if it is set
  if (primaryColorScheme) return primaryColorScheme;

  // return user device's prefer color scheme
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  // Get a reference to the body element
  const body = document.body;

  // Check if the body element exists before using getComputedStyle
  if (body) {
    // Get the computed styles for the body element
    const computedStyles = window.getComputedStyle(body);

    // Get the background color property
    const bgColor = computedStyles.backgroundColor;

    // Set the background color in <meta theme-color ... />
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
}

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  function setThemeFeature() {
    // set on load so screen readers can get the latest value on the button
    reflectPreference();

    // now this script can find and listen for clicks on the control
    document.querySelector("#theme-btn")?.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : "light";

      if (!document.startViewTransition) {
        setPreference();
        return;
      }

      const styleEl = document.getElementById("view-transition");
      styleEl.textContent = `
        :root {
          --expo-out: linear(
            0 0%, 0.1684 2.66%, 0.3165 5.49%,
            0.446 8.52%, 0.5581 11.78%,
            0.6535 15.29%, 0.7341 19.11%,
            0.8011 23.3%, 0.8557 27.93%,
            0.8962 32.68%, 0.9283 38.01%,
            0.9529 44.08%, 0.9711 51.14%,
            0.9833 59.06%, 0.9915 68.74%, 1 100%
          );
        }
        
        ::view-transition-group(root) {
          animation-duration: 700ms;
          animation-timing-function: var(--expo-out);
        }
        ::view-transition-new(root) {
          animation-name: reveal-light;
        }
        ::view-transition-old(root),
        [data-theme=dark]::view-transition-old(root) {
          animation: none;
          z-index: -1;
        }
        [data-theme=dark]::view-transition-new(root) {
          animation-name: reveal-dark;
        }
        @keyframes reveal-dark {
          from {
            clip-path: polygon(171% 50%, 50% -71%, 50% -71%, 171% 50%);
          }
          to {
            clip-path: polygon(171% 50%, 50% -71%, -71% 50%, 50% 171%);
          }
        }
        @keyframes reveal-light {
          from {
            clip-path: polygon(50% 171%, -71% 50%, -71% 50%, 50% 171%);
          }
          to {
            clip-path: polygon(50% 171%, -71% 50%, 50% -71%, 171% 50%);
          }
        }
      `;
      document.startViewTransition(() => {
        setPreference();
      });
    });
  }

  setThemeFeature();

  // Runs on view transitions navigation
  document.addEventListener("astro:after-swap", setThemeFeature);
};

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
