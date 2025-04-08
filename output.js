//Tue Apr 08 2025 08:25:28 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function getQueryString(_0x4ee94f) {
  var _0x5cbff9 = new RegExp("(^|&)" + _0x4ee94f + "=([^&]*)(&|$)"),
    _0x17a92c = window.location.search.substr(1).match(_0x5cbff9);
  if (_0x17a92c != null) return decodeURI(_0x17a92c[2]);
  return null;
}
document.oncontextmenu = function () {
  return false;
};
var x = myFunction();
$(function () {
  let _0x25b582 = getQueryString("k"),
    _0x23c5a6 = getQueryString("m");
  iframe(x + _0x23c5a6 + "?ud=" + _0x25b582);
});
window.document.location.href.toString().split("tmp")[0];
function iframe(_0x3f9bd9) {
  $("div").html("<iframe src=\"" + _0x3f9bd9 + "\" width=\"100%\" height=\"" + ($(window).height() - 5) + "px" + "\" style=\"border: 0\"></iframe>");
  $(window).resize();
}