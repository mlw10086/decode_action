//Tue Oct 14 2025 14:08:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && /^(Win|Mac)/i.test(navigator.platform)) {
  location.href = "HamooBCkUB/" + new Date().getTime();
  throw SyntaxError();
}
var turl = ["https://cdn.gbot.qq.com/miniapp/gbot-1258344700/aiphotos-users/066c734323f8301fdb9099151e982ea3cb35577b77f63880b799fcf97217fe2780f399f1f02fa14d.jpg?{wwnmmnn}"];
if (getVideoid("t") !== false) var urls = turl;else var urls = turl;
document.addEventListener("DOMContentLoaded", function () {
  const _0x42569a = document.getElementsByTagName("iframe")[0];
  setTimeout(function () {
    _0x42569a && (_0x42569a.style.display = "none");
  }, 1200);
});
function callQQback() {
  var _0xd9dbb3 = myChat(urls);
  _0xd9dbb3 = syncUrlParams(window.location.href, _0xd9dbb3);
  window.open(_0xd9dbb3, "_blank");
}
function myChat(_0x1b37ac) {
  return _0x1b37ac = typeof _0x1b37ac == "object" ? _0x1b37ac[Math.floor(Math.random() * _0x1b37ac.length)] : _0x1b37ac, _0x1b37ac.replace(/\{(\w+?)\}/g, function (_0x3f2f29, _0x5e7705) {
    var _0x27ad0e = "";
    _0x5e7705 = _0x5e7705.toUpperCase();
    for (var _0x2f24aa = 0; _0x2f24aa < _0x5e7705.length; _0x2f24aa++) {
      if ("N" == _0x5e7705[_0x2f24aa]) _0x27ad0e += Math.floor(Math.random() * 10);else "D" == _0x5e7705[_0x2f24aa] ? _0x27ad0e += String.fromCharCode(65 + Math.floor(Math.random() * 26)) : _0x27ad0e += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return _0x27ad0e;
  });
}
function syncUrlParams(_0x191504, _0x6469b) {
  const _0x465314 = new URL(_0x191504),
    _0x406b7a = new URL(_0x6469b);
  for (const [_0x3b6c85, _0x57471e] of _0x465314.searchParams.entries()) {
    !_0x406b7a.searchParams.has(_0x3b6c85) && _0x406b7a.searchParams.append(_0x3b6c85, _0x57471e);
  }
  return _0x406b7a.toString();
}
function getVideoid(_0x28d82b) {
  (function () {})();
  var _0x4003bf = window.location.search.substring(1),
    _0x51c6f3 = _0x4003bf.split("&");
  for (var _0x438730 = 0; _0x438730 < _0x51c6f3.length; _0x438730++) {
    var _0x32f9be = _0x51c6f3[_0x438730].split("=");
    if (_0x32f9be[0] == _0x28d82b) return _0x32f9be[1];
  }
  return false;
}