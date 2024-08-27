//Tue Aug 27 2024 12:59:39 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
const _0x33f2b8 = document.getElementById("drop-area"),
  _0x868b7e = document.getElementById("fileElem"),
  _0x223500 = document.getElementById("thumb-container"),
  _0x507682 = document.getElementById("result-container"),
  _0xc37e6c = document.getElementById("single-upload-btn");
const _0x4631a3 = document.getElementById("multi-upload-btn"),
  _0x42e3c2 = document.getElementById("clear-btn");
let _0x3249c3 = true;
_0xc37e6c.addEventListener("click", () => {
  _0x3249c3 = true;
  _0xc37e6c.disabled = true;
  _0x4631a3.disabled = false;
  _0x223500.innerHTML = "";
  _0x507682.innerHTML = "";
});
_0x4631a3.addEventListener("click", () => {
  _0x3249c3 = false;
  _0xc37e6c.disabled = false;
  _0x4631a3.disabled = true;
});
_0x42e3c2.addEventListener("click", () => {
  _0x223500.innerHTML = "";
  _0x507682.innerHTML = "";
  _0xc37e6c.disabled = false;
  _0x4631a3.disabled = false;
  _0x3249c3 = true;
});
_0x33f2b8.addEventListener("dragover", _0x2c6b21 => {
  _0x2c6b21.preventDefault();
  _0x33f2b8.classList.add("dragover");
});
_0x33f2b8.addEventListener("dragleave", () => {
  _0x33f2b8.classList.remove("dragover");
});
_0x33f2b8.addEventListener("drop", _0x2a943c => {
  _0x2a943c.preventDefault();
  _0x33f2b8.classList.remove("dragover");
  _0x52220c(_0x2a943c.dataTransfer.files);
});
_0x33f2b8.addEventListener("click", () => {
  _0x868b7e.click();
});
_0x868b7e.addEventListener("change", () => {
  _0x52220c(_0x868b7e.files);
});
function _0x52220c(_0x139920) {
  if (_0x3249c3 && _0x139920.length > 1) {
    alert("默认单图只能上传一张图片！");
    return;
  }
  for (let _0x59c187 = 0; _0x59c187 < _0x139920.length; _0x59c187++) {
    const _0xdd5993 = _0x139920[_0x59c187];
    if (_0xdd5993.size > 10 * 1024 * 1024) {
      alert("最大10MB！");
      continue;
    }
    const _0x5448d3 = new FileReader();
    _0x5448d3.onloadend = () => {
      const _0x2bbcaa = document.createElement("img");
      _0x2bbcaa.src = _0x5448d3.result;
      _0x2bbcaa.classList.add("thumb");
      _0x223500.appendChild(_0x2bbcaa);
      _0x1bd86c(_0xdd5993);
    };
    _0x5448d3.readAsDataURL(_0xdd5993);
  }
}
function _0x1bd86c(_0x42cf48) {
  const _0x28e8ec = new FormData();
  _0x28e8ec.append("file", _0x42cf48);
  fetch("https://api.vviptuangou.com/api/upload", {
    "method": "POST",
    "headers": {
      "token": "b3bc3a220db6317d4a08284c6119d136",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
    },
    "body": _0x28e8ec
  }).then(_0x558760 => _0x558760.json()).then(_0x4cb687 => {
    let _0x583865 = _0x4cb687.img;
    if (!_0x583865.startsWith("https://assets.vviptuangou.com/")) {
      _0x583865 = _0x583865.replace("https://assets.vviptuangou.com", "https://assets.vviptuangou.com/");
    }
    _0x3fa600(_0x583865);
  }).catch(_0x581bf3 => {
    console.error("Error:", _0x581bf3);
  });
}
function _0x3fa600(_0x48581b) {
  const _0x16d019 = document.createElement("div");
  _0x16d019.classList.add("result-item");
  const _0x534079 = document.createElement("input");
  _0x534079.type = "text";
  _0x534079.value = _0x48581b;
  _0x534079.readOnly = true;
  const _0x820823 = document.createElement("button");
  _0x820823.classList.add("btn", "btn-secondary");
  _0x820823.textContent = "Copy";
  _0x820823.addEventListener("click", () => {
    _0x534079.select();
    document.execCommand("copy");
  });
  _0x16d019.appendChild(_0x534079);
  _0x16d019.appendChild(_0x820823);
  _0x507682.appendChild(_0x16d019);
}