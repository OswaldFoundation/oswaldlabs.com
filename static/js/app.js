"use strict";var loadJS=function(e,t,a){var n,r=window,o=r.document.getElementsByTagName("script")[0],c=r.document.createElement("script");return"boolean"==typeof t&&(n=a,a=t,t=n),c.src=e,c.async=!a,o.parentNode.insertBefore(c,o),t&&"function"==typeof t&&(c.onload=t),c};function ready(e){"loading"!==document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"loading"!==document.readyState&&e()})}var agastyaTrackLink=function(e){var t=e.target||e.toElement||e.srcElement;t&&window.agastya&&"function"==typeof window.agastya.secureTrack&&window.agastya.secureTrack({className:t.className,href:t.href,innerText:t.innerText})};ready(function(){function n(e){e&&e.querySelector(".page-meta .page-slug")&&(document.body.className="page-"+e.querySelector(".page-meta .page-slug").innerHTML);var t=function(e){if(e&&void 0!==e.toLowerCase)return e.toLowerCase().replace(/\//g,"")};document.querySelectorAll("a").forEach(function(e){e.classList.remove("active"),e.classList.remove("subactive"),e.removeEventListener("click",agastyaTrackLink),t(e.getAttribute("href"))===t(location.pathname)?e.classList.add("active"):"/"!==e.getAttribute("href")&&t(location.pathname).includes(t(e.getAttribute("href")))&&e.classList.add("subactive"),location.hostname!==e.hostname&&(e.addEventListener("click",agastyaTrackLink),e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer"),e.getAttribute("href").includes("mailto:")||e.getAttribute("href").includes("tel:")||(e.classList.add("has-external-link"),e.getAttribute("href").includes("?")?e.setAttribute("href",e.getAttribute("href")+"&"):e.setAttribute("href",e.getAttribute("href")+"?"),e.setAttribute("href",e.getAttribute("href")+"utm_source=oswald_labs&utm_medium=website&utm_campaign=external_link&utm_content=oswaldlabs.com")))});var a=document.querySelector(".subnav-menu nav, .subnav nav");a&&!a.querySelector(".active")&&a.querySelector(".subactive")&&(a.querySelectorAll(".subactive")[a.querySelectorAll(".subactive").length-1].classList.add("active"),a.querySelectorAll(".subactive")[a.querySelectorAll(".subactive").length-1].classList.remove("subactive"));var n=document.querySelector(".agastya-pricing-selector"),r=document.querySelector(".agastya-calculated-price"),o=document.querySelector(".btn-request"),c={"100k":99,"250k":249,"500k":499,"1m":749,"5m":999,"10m":"custom"};n&&n.addEventListener("change",function(){r&&("custom"===c[n.value]?(document.querySelector(".agastya-no-custom").style.display="none",document.querySelector(".agastya-has-custom").style.display="inline-block"):(document.querySelector(".agastya-no-custom").style.display="inline-block",document.querySelector(".agastya-has-custom").style.display="none",r.innerHTML=c[n.value])),o&&o.setAttribute("href","/platform/agastya/register/?pageviews="+n.value)});var i=document.querySelector(".contribute-amount"),s=document.querySelector(".contribute-form");i&&s&&s.addEventListener("submit",function(e){loadJS("https://checkout.stripe.com/checkout.js",function(){var e=StripeCheckout.configure({key:"pk_live_2khUYvJReOob9xJ2QG4l1UoQ",image:"https://stripe.com/img/documentation/checkout/marketplace.png",locale:"auto",token:function(){alert("Thank you for your contribution!")}});e.open({name:"Research Fund",description:"Oswald Labs",currency:"eur",amount:100*i.value}),window.addEventListener("popstate",function(){e.close()})}),e.preventDefault()}),document.querySelector(".calendly-button")&&loadJS("https://assets.calendly.com/assets/external/widget.js");var u=document.querySelector(".ip-address-fill");u&&fetch("https://ipinfo.io/json").then(function(e){return e.json()}).then(function(t){t.ip&&(u.value=t.ip),["city","country","org","region","postal","loc"].forEach(function(e){t[e]&&document.querySelector(".".concat(e,"-fill"))&&(document.querySelector(".".concat(e,"-fill")).value=t[e])})});var l=document.querySelector(".department-select");if(l){var d=new URLSearchParams(window.location.search).get("department");d&&(l.value=d)}var m=document.querySelector(".agastya-pricing-prefill");if(m){var y=new URLSearchParams(window.location.search).get("pageviews");y&&(m.value=y)}}n();var e=e||window.Barba;if(e){var t=e.BaseTransition.extend({start:function(){Promise.all([this.newContainerLoading,this.fadeOut()]).then(this.fadeIn.bind(this))},fadeOut:function(){return document.body.classList.add("fade-out"),new Promise(function(e){window.scrollTo(0,0),e()})},fadeIn:function(){document.body.classList.remove("fade-out"),this.newContainer.classList.toggle("fade-in"),this.done()}});e.Pjax.getTransition=function(){return t},e.Pjax.start(),e.Dispatcher.on("newPageReady",function(e,t,a){n(a)})}});