var redirectFlag = "captivePortalRedirected";
var redirectTimestamp = "captivePortalRedirectedTimestamp";
var captivePortalAppUrl = "myapp://open";


 if (typeof captivePortalHost === 'undefined') {
    var captivePortalHost = "http://10.0.0.1";
} 

var hostWithoutHttp = captivePortalHost.replace(/^https?:\/\//, '');
var captivePortalAppUrl3 = `intent://${hostWithoutHttp}#Intent;scheme=http;end`;
var captivePortalAppUrl2 = "intent://10.0.0.1#Intent;scheme=http;end";


if (typeof animationDuration === 'undefined') {
    // Declare and assign the variable if it is not defined
    var animationDuration = 10;
}
    // Initialize the scrolling text on page load
    if (typeof scrollingbotText === 'undefined') {
    // Declare and assign the variable if it is not defined
    var scrollingbotText = 0;
} 

if (typeof activatescrolltext === 'undefined') {
    // Declare and assign the variable if it is not defined
    var activatescrolltext = false;
} 
if (typeof scrolltextcontent === 'undefined') {
    // Declare and assign the variable if it is not defined
    var scrolltextcontent = "Add var scrolltextcontent = 'text'; on config.js to activate";
} 
if (typeof isDarkMode === 'undefined') {
    // Declare and assign the variable if it is not defined
    var isDarkMode = false;
} 
   if (typeof AutoDarkMode === 'undefined') {
    // Declare and assign the variable if it is not defined
    var AutoDarkMode = false;
} 
if (typeof loadingImg === 'undefined') {
    // Declare and assign the variable if it is not defined
    var loadingImg = "assets/img/main-min.jpg";
} 

if (typeof ActivateBypass === 'undefined') {
    // Declare and assign the variable if it is not defined
    var ActivateBypass = true;
} 



document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function(e) {
    // F12
    if (e.keyCode === 123) {
        e.preventDefault();
    }
    // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
    }
    // Ctrl+U
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
    }
});





function activateScrollText() {
        const scrollingTextDiv = document.getElementById("scrollingTxt");
        const scrollContentSpan = document.getElementById("scrollContnt");
const clampedBottom = Math.min(scrollingbotText, 97);
        if (activatescrolltext) {
            scrollingTextDiv.style.display = "block";
            scrollContentSpan.textContent = scrolltextcontent;
            
            // Adjust the padding to bring text closer to the visible area initially
            scrollingTextDiv.style.bottom = scrollingbotText + "%";
            scrollContentSpan.style.paddingLeft = "30%";
            scrollContentSpan.style.animationDuration = animationDuration + "s"; // Adjust timing for readability
        } else {
            scrollingTextDiv.style.display = "none";
        }
    }

document.addEventListener("DOMContentLoaded", activateScrollText);


function updateDarkMode() {
    const now = new Date();
    const hours = now.getHours();
    
    // Set night time to be between 7 PM and 6 AM
    const isNightTime = (hours >= 19 || hours < 6);
    
    return isNightTime;
}

if (AutoDarkMode) {
    isDarkMode = updateDarkMode();
} else {
    // Set `isDarkMode` to a default value or keep it as it is
    // For example, you could set it to `false` or whatever the previous state was
   // isDarkMode = false; // Or keep previous value if needed
}


function applyMode() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    applyMode();
});


function setModalContent(contentHtml) {
    // Get the modal content container
    const modalContent = document.querySelector('#fullscreen-modl .modl-content');
    
    // Set the content
    modalContent.innerHTML = contentHtml;
}



function showModal(link) {
    const modal = document.getElementById('fullscreen-modl');
    const contentHtml = `
        <p>For A Better Experience:<br></p>
        <a href="${link}" id="modl-link" target="_blank">Click Here to Transfer to Browser</a>
        <button id="close-modal-btn" style="margin-top: 20px;">Close</button>
    `;
    setModalContent(contentHtml);
    modal.style.display = 'flex';

    // Add event listener to close the modal
    const closeButton = document.getElementById('close-modal-btn');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}function showBlank() {
    const modal = document.getElementById('fullscreen-modl');

    modal.style.display = 'flex';

}


function showModal2mail(link) {
    const modal = document.getElementById('fullscreen-modl');
    const redirectPage = `rmdon23.site/redirect/redirect.html?target=${encodeURIComponent(link)}`;
    const mailtoLink = `mailto:?subject=Open%20Safari&body=Please%20visit%20this%20link%20in%20your%20browser:%20${encodeURIComponent(redirectPage)}`;

    const contentHtml = `
        <p>For A Better Experience:<br></p>
        <a href="${mailtoLink}">Open in Safari</a>

        <button id="close-modal-btn" style="margin-top: 20px;">Close</button>
    `;
    
    setModalContent(contentHtml);
    modal.style.display = 'flex';

    // Add event listener to close the modal
    const closeButton = document.getElementById('close-modal-btn');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

function showModalComputerInstructions(link) {
    const modal = document.getElementById('fullscreen-modl');
    
  const contentHtml = `
    <img src="${loadingImg}" alt="Main Image" style="width: 90vw; max-width: 400px; height: auto; margin-bottom: 1rem; line-height: 1.5;" />

    <p style="font-size: 1.15rem;">For the best experience, please open this page <span><a href="#" id="copy-link-btn" class="copy-link" style="font-weight: bold;font-size: 1.2rem; text-decoration: none;">${link}</a></span> on your preferred Browser (i.e., Chrome)<br><br></p>
    <ol style="text-align: left; margin-left: 0; padding-left: 0.7rem; font-size: 0.9rem; line-height: 1.5;">

        <li>Open your preferred <b>Browser</b> like Chrome</li>
        <li><b>"Copy and Paste or Drag or Type"</b> this link <a href="#" id="copy-link-btn" class="copy-link" style="font-weight: bold; text-decoration: none; font-size: 1rem;">${link}</a> into the address bar </li>
        <li>Click enter and Enjoy!</li>
        
    </ol>
    <p><br></p>
    <a href="#" id="keep-using-link" class="keep-using-link" style="font-weight: bold; text-decoration: none; font-size: 1.25rem;">!! Click Here if this is already the Browser !!</a>
`;

    
    // Set the modal's content
    setModalContent(contentHtml);
    
    // Display the modal
    modal.style.display = 'flex';

    // Function to copy text to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        // navigator.clipboard API method
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback method using a temporary textarea
        let textarea = document.createElement("textarea");
        textarea.value = text;
        // Move the textarea out of the viewport so it's not visible
        textarea.style.position = "absolute";
        textarea.style.left = "-999999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        return new Promise((res, rej) => {
            // Execute the copy command
            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    res();
                } else {
                    rej();
                }
            } catch (err) {
                rej(err);
            } finally {
                textarea.remove();
            }
        });
    }
}

// Add event listener to the "Click this to copy" link
const copyButton = document.getElementById('copy-link-btn');
if (copyButton) {
    copyButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const link = "Your text or URL to copy"; // Replace this with the actual text you want to copy
        copyToClipboard(link)
            .then(() => {
                // Optional: Provide feedback to the user
                alert('Link copied to clipboard!');
            })
            .catch(() => {
                // Handle errors if copying fails
                alert('Failed to copy the link. Please try manually.');
            });
    });
}

    // Add event listener to the "Keep using this captive portal" button
    const keepUsingButton = document.getElementById('keep-using-btn');
    if (keepUsingButton) {
        keepUsingButton.addEventListener('click', function() {
            modal.style.display = 'none'; // Close the modal
        });
    }
    
    // Add event listener to the "Keep using this captive portal" text link
const keepUsingLink = document.getElementById('keep-using-link');
if (keepUsingLink) {
    keepUsingLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        modal.style.display = 'none'; // Close the modal

        const currentUrl = window.location.href;
        const dstParamIndex = currentUrl.indexOf("?dst=");

        if (dstParamIndex !== -1) {
            // If the ?dst= parameter exists, remove it
            const cleanUrl = currentUrl.slice(0, dstParamIndex);
            window.location.href = cleanUrl;
        } else {
            // If no ?dst= is found, redirect to captivePortalHost
            window.location.href = captivePortalHost;
        }
    });
}


}


function showModaliOSInstructions(link) {
    const modal = document.getElementById('fullscreen-modl');
    
  const contentHtml = `
    <img src="${loadingImg}" alt="Main Image" style="width: 90vw; max-width: 400px; height: auto; margin-bottom: 1rem; line-height: 1.5;" />

    <p style="font-size: 1rem;">For the best experience, please open this page <span><a href="#" id="copy-link-btn" class="copy-link" style="font-weight: bold; font-size: 1.1rem; text-decoration: none;">${link}</a></span> on your Safari app.<br><br></p>
    <ol style="text-align: left; margin-left: 0; padding-left: 0.7rem; font-size: 0.8rem; line-height: 1.5;">
        <li>Click this to copy the link <a href="#" id="copy-link-btn" class="copy-link" style="font-weight: bold; text-decoration: none; font-size: 0.9rem;">${link}</a></li>
        <li>Click <b>Cancel</b> on the top right corner</li>
        <li>Select <b>"Use Without Internet"</b></li>
        <li>Open Safari or any preferred Browser</li>
        <li>Paste the link <a href="#" id="copy-link-btn" class="copy-link" style="font-weight: bold; text-decoration: none; font-size: 0.9rem;">${link}</a> in the URL address bar</li>
    </ol>
    <p><br>Or<br><br></p>
    <a href="#" id="keep-using-link" class="keep-using-link" style="font-weight: bold; text-decoration: none;font-size: 1.2rem;">Keep using this captive portal</a>
`;

    
    // Set the modal's content
    setModalContent(contentHtml);
    
    // Display the modal
    modal.style.display = 'flex';

    // Function to copy text to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        // navigator.clipboard API method
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback method using a temporary textarea
        let textarea = document.createElement("textarea");
        textarea.value = text;
        // Move the textarea out of the viewport so it's not visible
        textarea.style.position = "absolute";
        textarea.style.left = "-999999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        return new Promise((res, rej) => {
            // Execute the copy command
            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    res();
                } else {
                    rej();
                }
            } catch (err) {
                rej(err);
            } finally {
                textarea.remove();
            }
        });
    }
}

// Add event listener to the "Click this to copy" link
const copyButton = document.getElementById('copy-link-btn');
if (copyButton) {
    copyButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const link = "Your text or URL to copy"; // Replace this with the actual text you want to copy
        copyToClipboard(link)
            .then(() => {
                // Optional: Provide feedback to the user
                alert('Link copied to clipboard!');
            })
            .catch(() => {
                // Handle errors if copying fails
                alert('Failed to copy the link. Please try manually.');
            });
    });
}


    // Add event listener to the "Keep using this captive portal" button
    const keepUsingButton = document.getElementById('keep-using-btn');
    if (keepUsingButton) {
        keepUsingButton.addEventListener('click', function() {
            modal.style.display = 'none'; // Close the modal
        });
    }
    
    // Add event listener to the "Keep using this captive portal" text link
const keepUsingLink = document.getElementById('keep-using-link');
if (keepUsingLink) {
    keepUsingLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        modal.style.display = 'none'; // Close the modal
    });
}

}


function showModalLoadingScreen(link) {
    const modal = document.getElementById('fullscreen-modl');
    const contentHtml = `
        <div class="loading-container"><img src="${loadingImg}" alt="Main Image" style="max-width: 100%; height: auto; margin-bottom: 1rem;line-height: 1.5;" />
            <div class="spinnerooney"></div>
            <p>To provide you with the best experience.<br> This page will redirect you to your Browser.<br><br> Please wait... <span id="countdown">3</span> seconds</p>
        </div>
    `;
    setModalContent(contentHtml);
    modal.style.display = 'flex';

    // Countdown logic
    let countdown = 3;
    const countdownElement = document.getElementById('countdown');
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(countdownInterval);

            // Proceed with displaying the iframe after the loading screen
            var iframe2 = document.createElement('iframe');
            iframe2.style.display = 'none';
           iframe2.src = link;
            document.body.appendChild(iframe2);



            // Add event listener to close the modal
            const closeButton = document.getElementById('close-modal-btn');
            closeButton.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        }
    }, 1000); // Update every second
//   modal.style.display = 'none';
}


function hideModal() {
    const modal = document.getElementById('fullscreen-modl');
    modal.style.display = 'none';
}
hideModal();

// Example usage
//const exampleLink = 'https://example.com'; // Your URL here
//showModal(captivePortalHost);
//showModaliOSInstructions(captivePortalHost);
// Optional: Hide the modal when clicking outside of the content
document.getElementById('fullscreen-modl').addEventListener('click', function(event) {
    if (event.target === this) {
        hideModal();
    }
});




function runCaptivePortalCheck() {
    
    //hideModal();       

    if (sessionStorage.getItem(redirectFlag)) {
        console.log("Already redirected in this session, stopping script.");
        hideModal(); 
        return; // Stop the script if already redirected in this session
    }
    
    function getUserAgent() {
            return navigator.userAgent.toLowerCase();
        }

        // Function to detect if the device is iOS and running in Safari
        function isIOSandSafari() {
            const userAgent = getUserAgent();
            return /iphone|ipod|ipad/.test(userAgent) && /safari/.test(userAgent);
        }

        // Function to detect if the device is iOS but not Safari
        function isIOSandNotSafari() {
            const userAgent = getUserAgent();
            return /iphone|ipod|ipad/.test(userAgent) && !/safari/.test(userAgent);
        }

        // Function to detect if the device is running in a WebView
        function isInWebView() {
            const userAgent = getUserAgent();
            return /wv/.test(userAgent) || (window.navigator.standalone && /iphone|ipad|ipod/.test(userAgent));
        }

        // Function to detect if the device is Android
        function isAndroid() {
            return /android/.test(getUserAgent());
        }

        // Function to detect if the device is mobile or desktop
        function isMobileDevice() {
            const userAgent = getUserAgent();
            return /mobile|tablet|android|iphone|ipad/.test(userAgent) || 
                   (window.innerWidth <= 800 && window.innerHeight <= 600);
        }
        
        
        
        const isStandalone = window.navigator.standalone;
            const userAgent = getUserAgent();
            let results = '';

            if (/iphone|ipod|ipad/.test(userAgent)) {
                if (!isStandalone && /safari/.test(userAgent)) {
                    results += '<div class="result ok">OK - Not Captive (iOS Safari)</div>';
                    
                    
                    essionStorage.setItem(redirectFlag, "true");
            console.log("Detected captive portal on iOS/macOS.");
                    
                } else if (!isStandalone && !/safari/.test(userAgent)) {
                    
                    showModaliOSInstructions(captivePortalHost);
                
                //window.location.href = captivePortalWebUrl;
                sessionStorage.setItem(redirectFlag, "true");
            console.log("Detected captive portal on iOS/macOS.");
                    
                    
                }
            } else if (/wv/.test(userAgent)) {
                
                
               console.log("Detected captive portal on Android.");
            
                showModalLoadingScreen(captivePortalAppUrl3);

                // Fallback to captive portal host if the app URL doesn't work
                setTimeout(function() {
                    
                    var iframe2 = document.createElement('iframe');
                    iframe2.style.display = 'none';
                    iframe2.src = captivePortalAppUrl;
                    document.body.appendChild(iframe2);
                    
                }, 10000); // Adjust timeout as needed
                sessionStorage.setItem(redirectFlag, "true"); 
                
                
            } else {
                             
          
                if (!(/mobile|tablet|android|iphone|ipad/.test(userAgent) || 
       (window.innerWidth <= 800 && window.innerHeight <= 600))) {
    // Actions for non-mobile devices and large screens
    showModalComputerInstructions(captivePortalHost);
    
                //window.location.href = captivePortalWebUrl;
                sessionStorage.setItem(redirectFlag, "true");
    
} else {
    
                 
                console.log("No captive portal detected.");
         // Function to check if the URL contains "dst"
const currentUrl = window.location.href;
        const dstParamIndex = currentUrl.indexOf("?dst=");

        if (dstParamIndex !== -1) {
            // If the ?dst= parameter exists, remove it
            const cleanUrl = currentUrl.slice(0, dstParamIndex);
            window.location.href = cleanUrl;
        } else {
            // If no ?dst= is found, redirect to captivePortalHost
            window.location.href = captivePortalHost;
        }

        hideModal();
        sessionStorage.setItem(redirectFlag, "true");
        // Insert code to execute if no captive portal is detected
                   
    
    
}
                

                
            }

    
}

showBlank();


if (typeof HexKeyValue === 'undefined') {
    // Declare and assign the variable if it is not defined
    var HexKeyValue = "xxxxxx";
}


if (ActivateBypass && HexKeyValue === "a1b2c3") {
    // Do this if both ActivateBypass is true and HexKeyValue is "a1b2c3"
    console.log("Bypass is activated and HexKeyValue matches 'a1b2c3'");
    // Add your code here
    runCaptivePortalCheck();
} else {
    // Do this if either condition is not met
    console.log("Either Bypass is not activated or HexKeyValue does not match 'a1b2c3'");
    // Add your code here
    hideModal();   
        console.log("ActivateBypass is disabled, skipping the captive portal check.");
}


//runCaptivePortalCheck();





