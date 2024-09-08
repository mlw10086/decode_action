//Sun Sep 08 2024 06:29:39 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
const _0x7f92a7 = document.getElementById("drop-area"),
  _0x1f655b = document.getElementById("fileElem"),
  _0x5cbf2b = document.getElementById("thumb-container"),
  _0x8dfb25 = document.getElementById("result-container"),
  _0x6d8c8b = document.getElementById("upload-btn"),
  _0x23f97b = document.getElementById("clear-btn");
let _0xbbc6c9 = [];
_0x6d8c8b.addEventListener("click", () => {
  if (_0xbbc6c9.length === 0) {
    weui.topTips("请选择文件后再上传", 500);
    return;
  }
  _0x32105b();
});
_0x23f97b.addEventListener("click", () => {
  _0x5cbf2b.innerHTML = "";
  _0x8dfb25.innerHTML = "";
  _0xbbc6c9 = [];
  weui.toast("已清除", 500);
});
_0x7f92a7.addEventListener("dragover", _0x2a7502 => {
  _0x2a7502.preventDefault();
  _0x7f92a7.classList.add("dragover");
});
_0x7f92a7.addEventListener("dragleave", () => {
  _0x7f92a7.classList.remove("dragover");
});
_0x7f92a7.addEventListener("drop", _0xc88c4f => {
  _0xc88c4f.preventDefault();
  _0x7f92a7.classList.remove("dragover");
  const _0x56a444 = Array.from(_0xc88c4f.dataTransfer.files).filter(_0x11560d => _0x11560d.type.startsWith("image/") || _0x11560d.type === "image/gif");
  if (_0x56a444.length === 0) {
    weui.topTips("只允许图片或GIF文件格式", 500);
  } else _0x1294cf(_0x56a444);
});
_0x7f92a7.addEventListener("click", () => {
  _0x1f655b.click();
});
_0x1f655b.addEventListener("change", () => {
  _0x1294cf(_0x1f655b.files);
});
function _0x1294cf(_0x10b718) {
  for (let _0x4a3865 = 0; _0x4a3865 < _0x10b718.length; _0x4a3865++) {
    const _0x2fdfb4 = _0x10b718[_0x4a3865];
    if (!_0x2fdfb4.type.startsWith("image/") && _0x2fdfb4.type !== "image/gif") {
      weui.topTips("只允许图片或GIF文件格式", 500);
      continue;
    }
    if (_0x2fdfb4.size > 20 * 1024 * 1024) {
      weui.topTips("文件过大，请选择小于20MB的文件", 500);
      continue;
    }
    const _0x5b57cf = new FileReader();
    _0x5b57cf.onloadend = () => {
      const _0x14e034 = document.createElement("img");
      _0x14e034.src = _0x5b57cf.result;
      _0x14e034.classList.add("thumb");
      _0x5cbf2b.appendChild(_0x14e034);
    };
    _0x5b57cf.readAsDataURL(_0x2fdfb4);
    _0xbbc6c9.push(_0x2fdfb4);
  }
}
function _0x32105b() {
  const _0x177028 = _0xbbc6c9.length;
  let _0x4fc961 = 0;
  const _0x5cd409 = document.querySelector("#showPicker .weui-select").textContent === "接口1" ? "1" : document.querySelector("#showPicker .weui-select").textContent === "接口2" ? "2" : "3",
    _0x5e69b2 = weui.loading("准备上传...");
  _0xbbc6c9.forEach((_0xdd5b06, _0x15f12c) => {
    const _0x57f6f9 = new FormData();
    _0x57f6f9.append("file", _0xdd5b06);
    let _0x563f35 = new XMLHttpRequest(),
      _0x2519d4,
      _0x3f3a5d;
    switch (_0x5cd409) {
      case "1":
        _0x2519d4 = "https://api.qst8.cn/api/front/upload/img", _0x3f3a5d = _0x3ec1b3("POST", Date.now().toString(), _0x1827e0());
        break;
      case "2":
        _0x2519d4 = "https://api.da8m.cn/api/upload", _0x3f3a5d = {
          "token": "4ca04a3ff8ca3b8f0f8cfa01899ddf8e",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
        };
        break;
      case "3":
        _0x2519d4 = "https://api.vviptuangou.com/api/upload", _0x3f3a5d = {
          "token": "b3bc3a220db6317d4a08284c6119d136",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
        };
        break;
    }
    _0x563f35.open("POST", _0x2519d4, true);
    for (let _0x170ae9 in _0x3f3a5d) {
      _0x563f35.setRequestHeader(_0x170ae9, _0x3f3a5d[_0x170ae9]);
    }
    _0x563f35.upload.onprogress = _0x270fb2 => {
      if (_0x270fb2.lengthComputable) {
        const _0x1dedfc = _0x270fb2.loaded / _0x270fb2.total * 100;
        _0x5e69b2.update("上传中 " + (_0x15f12c + 1) + "/" + _0x177028 + ": " + _0x1dedfc.toFixed(0) + "%");
      }
    };
    _0x563f35.onload = () => {
      if (_0x563f35.status === 200) {
        const _0x1fc16d = JSON.parse(_0x563f35.responseText);
        let _0x161bde;
        if (_0x5cd409 === "1") _0x161bde = _0x1fc16d.data;else {
          _0x161bde = _0x1fc16d.img;
          if (_0x5cd409 === "2" && !_0x161bde.startsWith("https://assets.da8m.cn/")) {
            _0x161bde = _0x161bde.replace("https://assets.da8m.cn", "https://assets.da8m.cn/");
          } else {
            if (_0x5cd409 === "3" && !_0x161bde.startsWith("https://assets.vviptuangou.com/")) {
              _0x161bde = _0x161bde.replace("https://assets.vviptuangou.com", "https://assets.vviptuangou.com/");
            }
          }
        }
        _0x4a0e1f(_0x161bde);
        _0x4fc961++;
        _0x4fc961 === _0x177028 && (_0x5e69b2.hide(), weui.toast("全部上传完成", 500));
      } else _0x5e69b2.hide(), weui.toast("文件 " + (_0x15f12c + 1) + " 上传失败", 500);
    };
    _0x563f35.onerror = () => {
      _0x5e69b2.hide();
      weui.toast("文件 " + (_0x15f12c + 1) + " 上传失败", 500);
    };
    _0x563f35.send(_0x57f6f9);
  });
}
function _0x3ec1b3(_0x1b3c59, _0x14249c, _0xef4e = "") {
  const _0x102162 = {
      "method": _0x1b3c59,
      "timestamp": _0x14249c,
      "source": "h5",
      "key": "1F2F58F2220096D7E209224F826B6D67"
    },
    _0x5e7a24 = JSON.stringify(_0x102162),
    _0x2923f7 = md5(_0x5e7a24.toUpperCase()),
    _0x25cd06 = {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "Channel": "",
      "Method": "GET",
      "Referer": "",
      "Branchid": "1002",
      "Sign": _0x2923f7,
      "Source": "h5",
      "Tenantid": "3",
      "Timestamp": _0x14249c,
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
    };
  return _0xef4e !== "" && (_0x25cd06.Token = _0xef4e), _0x25cd06;
}
async function _0x1827e0() {
  const _0x22383d = "https://api.qst8.cn/api/front/user/h5Login",
    _0x220125 = Date.now().toString(),
    _0x31e530 = _0x5845f9(),
    _0x25c3b9 = _0x3ec1b3("GET", _0x220125, _0x31e530),
    _0x341d9b = await fetch(_0x22383d, {
      "method": "GET",
      "headers": _0x25c3b9
    }),
    _0x1ec033 = await _0x341d9b.json();
  return _0x1ec033.data.token;
}
function _0x5845f9() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0xc56913) {
    var _0x37f639 = Math.random() * 16 | 0,
      _0x358cd3 = _0xc56913 == "x" ? _0x37f639 : _0x37f639 & 3 | 8;
    return _0x358cd3.toString(16);
  });
}
function _0x4a0e1f(_0x10e4fe) {
  const _0x10756d = document.createElement("div");
  _0x10756d.classList.add("weui-cell");
  const _0x361351 = document.createElement("div");
  _0x361351.classList.add("weui-cell__bd");
  const _0xeb00f = document.createElement("div");
  _0xeb00f.classList.add("code-tabs");
  ["URL", "UBB", "Markdown", "HTML"].forEach((_0x18c8ca, _0xc1ae0) => {
    const _0x4e07ff = document.createElement("div");
    _0x4e07ff.classList.add("code-tab");
    _0x4e07ff.textContent = _0x18c8ca;
    _0x4e07ff.addEventListener("click", () => _0x5785c0(_0x10756d, _0xc1ae0));
    _0xeb00f.appendChild(_0x4e07ff);
  });
  _0x361351.appendChild(_0xeb00f);
  const _0x3eb9cd = [_0x10e4fe, "[img]" + _0x10e4fe + "[/img]", "![image](" + _0x10e4fe + ")", "<img src=\"" + _0x10e4fe + "\" alt=\"image\">"];
  _0x3eb9cd.forEach((_0x177915, _0x5dcf3a) => {
    const _0x302b7a = document.createElement("div");
    _0x302b7a.classList.add("code-content");
    const _0x5ed9e8 = document.createElement("input");
    _0x5ed9e8.type = "text";
    _0x5ed9e8.value = _0x177915;
    _0x5ed9e8.readOnly = true;
    _0x5ed9e8.classList.add("weui-input");
    _0x302b7a.appendChild(_0x5ed9e8);
    _0x361351.appendChild(_0x302b7a);
  });
  const _0x54f73f = document.createElement("a");
  _0x54f73f.classList.add("weui-btn", "weui-btn_mini", "weui-btn_primary");
  _0x54f73f.textContent = "澶嶅埗";
  _0x54f73f.addEventListener("click", () => {
    const _0x4bcc48 = _0x10756d.querySelector(".code-content.active input");
    _0x4bcc48.select();
    document.execCommand("copy");
    weui.toast("已复制", 500);
  });
  const _0x5871bf = document.createElement("div");
  _0x5871bf.classList.add("weui-cell__ft");
  _0x5871bf.appendChild(_0x54f73f);
  _0x10756d.appendChild(_0x361351);
  _0x10756d.appendChild(_0x5871bf);
  _0x8dfb25.appendChild(_0x10756d);
  _0x5785c0(_0x10756d, 0);
}
function _0x5785c0(_0x6e534d, _0x1e94df) {
  const _0x321a04 = _0x6e534d.querySelectorAll(".code-tab"),
    _0x406385 = _0x6e534d.querySelectorAll(".code-content");
  _0x321a04.forEach((_0x1ea795, _0x542576) => {
    if (_0x542576 === _0x1e94df) _0x1ea795.classList.add("active"), _0x406385[_0x542576].classList.add("active");else {
      _0x1ea795.classList.remove("active");
      _0x406385[_0x542576].classList.remove("active");
    }
  });
}
document.addEventListener("paste", _0xaba72 => {
  const _0x4190e8 = _0xaba72.clipboardData.items,
    _0x4909da = [];
  for (let _0x442e1a = 0; _0x442e1a < _0x4190e8.length; _0x442e1a++) {
    if (_0x4190e8[_0x442e1a].type.indexOf("image") !== -1) {
      const _0x161817 = _0x4190e8[_0x442e1a].getAsFile();
      _0x4909da.push(_0x161817);
    }
  }
  if (_0x4909da.length > 0) {
    _0x1294cf(_0x4909da);
  }
});
document.getElementById("showPicker").addEventListener("click", function () {
  weui.picker([{
    "label": "接口1",
    "value": "1"
  }, {
    "label": "接口2",
    "value": "2"
  }, {
    "label": "接口3",
    "value": "3"
  }], {
    "defaultValue": ["3"],
    "onChange": function (_0x2a68c5) {
      console.log(_0x2a68c5);
    },
    "onConfirm": function (_0x1f9e51) {
      document.querySelector("#showPicker .weui-select").textContent = _0x1f9e51[0].label;
      console.log("选择的接口:", _0x1f9e51[0].value);
    },
    "title": "选择接口"
  });
});