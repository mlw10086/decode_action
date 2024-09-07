//Sat Sep 07 2024 05:53:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
const _0x1e8054 = document.getElementById("uploadArea"),
  _0x118ac4 = document.getElementById("fileInput"),
  _0xb7b797 = document.getElementById("preview"),
  _0x62fd96 = document.getElementById("result"),
  _0x523a19 = document.getElementById("uploadButton"),
  _0x4597ab = document.getElementById("clearCacheButton"),
  _0x4c8b25 = document.getElementById("defaultContent"),
  _0x45659f = document.getElementById("alertDialog"),
  _0x2c777c = document.getElementById("toast"),
  _0x2a0eef = document.getElementById("progressBar"),
  _0x148ae0 = _0x2a0eef.querySelector(".js_progress"),
  _0x5947ec = document.getElementById("linkButtons"),
  _0x557489 = document.getElementById("linkDisplay"),
  _0x4c09db = document.getElementById("currentTime");
let _0x11acf3 = null,
  _0x264380 = "";
const _0x226db9 = ["", "https://qqq.gtimg.cn", "https://os.i.gtimg.cn", "https://vac.gtimg.cn", "https://offline.gtimg.cn"];
function _0x8ccb05(_0x2563cf) {
  const _0x557509 = new FileReader();
  _0x557509.onload = function (_0x39ce92) {
    _0xb7b797.innerHTML = "<img src=\"" + _0x39ce92.target.result + "\" alt=\"预览图片\">";
    _0x4c8b25.style.display = "none";
    _0xb7b797.style.display = "block";
  };
  _0x557509.readAsDataURL(_0x2563cf);
}
function _0x5ac4f0() {
  if (!_0x11acf3) {
    _0x45e8ab();
    return;
  }
  const _0x2749f2 = new FormData();
  _0x2749f2.append("file", _0x11acf3);
  _0x62fd96.textContent = "上传中...";
  _0x2a0eef.style.display = "block";
  _0x148ae0.style.width = "0%";
  const _0x5b9d1e = new XMLHttpRequest();
  _0x5b9d1e.open("POST", "upload.php", true);
  _0x5b9d1e.upload.onprogress = function (_0x276e9f) {
    if (_0x276e9f.lengthComputable) {
      const _0x453c47 = _0x276e9f.loaded / _0x276e9f.total * 100;
      _0x148ae0.style.width = _0x453c47 + "%";
    }
  };
  _0x5b9d1e.onload = function () {
    if (_0x5b9d1e.status === 200) {
      const _0x4d1807 = JSON.parse(_0x5b9d1e.responseText);
      _0x4d1807.code === 200 ? (_0x264380 = _0x4d1807.url, _0x62fd96.innerHTML = "<p class=\"weui-cell__desc\" style=\"color: #1aad19;\">上传成功！</p>", _0x5947ec.style.display = "flex", _0x52f487(0)) : _0x62fd96.textContent = "上传失败: " + JSON.stringify(_0x4d1807);
    } else _0x62fd96.textContent = "上传出错: " + _0x5b9d1e.statusText;
    _0x2a0eef.style.display = "none";
  };
  _0x5b9d1e.onerror = function () {
    _0x62fd96.textContent = "上传出错: 网络错误";
    _0x2a0eef.style.display = "none";
  };
  _0x5b9d1e.send(_0x2749f2);
}
function _0x28381c() {
  _0x11acf3 = null;
  _0xb7b797.innerHTML = "";
  _0x4c8b25.style.display = "block";
  _0xb7b797.style.display = "none";
  _0x62fd96.innerHTML = "";
  _0x118ac4.value = "";
  _0x2a0eef.style.display = "none";
  _0x148ae0.style.width = "0%";
  _0x5947ec.style.display = "none";
  _0x557489.innerHTML = "";
  _0x264380 = "";
  _0x40abbc();
}
function _0x45e8ab() {
  _0x45659f.style.display = "block";
}
function _0x495dd3() {
  _0x45659f.style.display = "none";
}
function _0x40abbc(_0x538a03 = "已清除缓存") {
  const _0x5b01a5 = document.querySelector(".weui-toast__content");
  _0x5b01a5.textContent = _0x538a03;
  _0x2c777c.style.display = "block";
  setTimeout(() => {
    _0x2c777c.style.display = "none";
  }, 2000);
}
function _0x5272e4(_0x3c7f45) {
  navigator.clipboard.writeText(_0x3c7f45).then(() => {
    _0x40abbc("复制成功");
  }, _0x2e5a67 => {
    console.error("无法复制文本: ", _0x2e5a67);
    _0x40abbc("复制失败");
  });
}
function _0xcd2350(_0x7ac7ad, _0x12d777) {
  switch (_0x7ac7ad) {
    case "url":
      return _0x12d777;
    case "html":
      return "<img src=\"" + _0x12d777 + "\" alt=\"上传的图片\">";
    case "ubb":
      return "[img]" + _0x12d777 + "[/img]";
    case "markdown":
      return "![上传的图片](" + _0x12d777 + ")";
    default:
      return "";
  }
}
function _0x52f487(_0x9fc479) {
  const _0x2bdf0b = _0x226db9[_0x9fc479],
    _0x458e5e = _0x2bdf0b ? _0x264380.replace(/^https?:\/\/[^/]+/, _0x2bdf0b) : _0x264380;
  _0x557489.innerHTML = "\n            <div class=\"link-item\">\n                <div class=\"link-content\">" + _0x458e5e + "</div>\n                <div class=\"copy-buttons\">\n                    <a href=\"javascript:;\" class=\"weui-btn weui-btn_mini weui-btn_primary\" data-type=\"url\" data-link=\"" + _0x458e5e + "\">复制URL</a>\n                    <a href=\"javascript:;\" class=\"weui-btn weui-btn_mini weui-btn_primary\" data-type=\"html\" data-link=\"" + _0x458e5e + "\">复制HTML</a>\n                    <a href=\"javascript:;\" class=\"weui-btn weui-btn_mini weui-btn_primary\" data-type=\"ubb\" data-link=\"" + _0x458e5e + "\">复制UBB</a>\n                    <a href=\"javascript:;\" class=\"weui-btn weui-btn_mini weui-btn_primary\" data-type=\"markdown\" data-link=\"" + _0x458e5e + "\">复制Markdown</a>\n                </div>\n            </div>\n        ";
}
function _0x1d3ec1() {
  const _0x1b9dfd = new Date(),
    _0x465286 = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit",
      "hour": "2-digit",
      "minute": "2-digit",
      "second": "2-digit",
      "hour12": false
    };
  _0x4c09db.textContent = _0x1b9dfd.toLocaleString("zh-CN", _0x465286);
}
setInterval(_0x1d3ec1, 1000);
_0x1d3ec1();
_0x1e8054.addEventListener("click", () => _0x118ac4.click());
_0x118ac4.addEventListener("change", _0x421429 => {
  if (_0x421429.target.files.length > 0) {
    _0x11acf3 = _0x421429.target.files[0];
    _0x8ccb05(_0x11acf3);
  }
});
_0x1e8054.addEventListener("dragover", _0x11dcd2 => {
  _0x11dcd2.preventDefault();
  _0x1e8054.classList.add("dragover");
});
_0x1e8054.addEventListener("dragleave", () => {
  _0x1e8054.classList.remove("dragover");
});
_0x1e8054.addEventListener("drop", _0x1c5a37 => {
  _0x1c5a37.preventDefault();
  _0x1e8054.classList.remove("dragover");
  _0x1c5a37.dataTransfer.files.length > 0 && (_0x11acf3 = _0x1c5a37.dataTransfer.files[0], _0x8ccb05(_0x11acf3));
});
document.addEventListener("paste", _0x695ffb => {
  const _0x58b4c5 = _0x695ffb.clipboardData.items;
  for (let _0x5d2ddc = 0; _0x5d2ddc < _0x58b4c5.length; _0x5d2ddc++) {
    if (_0x58b4c5[_0x5d2ddc].type.indexOf("image") !== -1) {
      _0x11acf3 = _0x58b4c5[_0x5d2ddc].getAsFile();
      _0x8ccb05(_0x11acf3);
      break;
    }
  }
});
_0x523a19.addEventListener("click", _0x5ac4f0);
_0x4597ab.addEventListener("click", _0x28381c);
_0x5947ec.addEventListener("click", _0x115476 => {
  if (_0x115476.target.classList.contains("weui-btn")) {
    const _0x2656bf = parseInt(_0x115476.target.dataset.index);
    _0x52f487(_0x2656bf);
  }
});
_0x557489.addEventListener("click", _0x1e3a55 => {
  if (_0x1e3a55.target.classList.contains("weui-btn")) {
    const _0x1d71d9 = _0x1e3a55.target.dataset.type,
      _0x1bbab3 = _0x1e3a55.target.dataset.link,
      _0x506fc7 = _0xcd2350(_0x1d71d9, _0x1bbab3);
    _0x5272e4(_0x506fc7);
  }
});
_0x45659f.querySelector(".weui-dialog__btn").addEventListener("click", _0x495dd3);