//Tue Apr 08 2025 08:30:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
var zs = "/*\n\n* 加密工具已经升级了一个版本，目前为 jsjiami.com.v7 ，更新了加密算法，缩减了体积;\n\n* 另外 jsjiami.com.v7 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v7 不能去掉，其他都没有任何绑定。\n\n* 誓死不会加入任何后门，JsJiami.com  加密的使命就是为了保护你们的Javascript 。\n\n*/\n\n",
  _mm = k_message,
  _vip_info = {},
  new_version = "jsjiami.com.v7";
layui.config({
  "base": "/",
  "version": 3
}).use(["model"], function () {
  element = layui.element;
  form = layui.form;
  laytpl = layui.laytpl;
  so(".layui-inline  .layui-checkbox-disbaled").on("click", function () {
    return layer.msg(_mm.m4, so.defn), !1;
  });
  var _0x52b361 = so("[name=encodeVersion]").val();
  so("[name=encodeVersion]").on("blur", function () {
    var _0x20d2a = this.value;
    if (!/^[0-9A-Za-z\\.]{1,15}$/.test(_0x20d2a)) return this.value = _0x52b361, layer.alert(_mm.m8, {
      "title": "版本号格式提醒"
    }), !1;
    so.configObj.encodeVersion = _0x20d2a;
    _0x52b361 = _0x20d2a;
    out_config();
  });
  form.on("select(index)", function (_0x32f327) {
    batch_config();
  });
  form.on("select(updated)", function (_0x2a05c7) {
    batch_config();
  });
  form.on("select(basicName)", function (_0x4c6d77) {
    if (_0x4c6d77.value == 2) {
      layer.msg(_mm.m9);
    } else _0x4c6d77.value > 1 && layer.msg(_mm.m10);
    batch_config();
  });
  form.on("checkbox(updated)", function (_0x3f48cf) {
    batch_config();
  });
  form.on("checkbox(vip)", function (_0x1bbedf) {
    _0x1bbedf.elem.name == "allRename" && _0x1bbedf.elem.checked && layer.msg(_mm.m5);
    batch_config();
  });
  form.on("checkbox(basic)", function (_0x5ba557) {
    batch_config();
  });
  form.on("checkbox(bconfig)", function (_0x27c686) {
    so("[lay-filter=\"bconfig\"]").removeAttr("checked");
    _0x27c686.elem.checked = !0;
    var _0x167bd4 = _0x27c686.elem.name;
    so.configObj = js_data[_0x167bd4];
    init_config(so.configObj);
    if (_0x167bd4 === "best") layer.msg(_mm.m6);else {
      if (_0x167bd4 === "niub") layer.msg(_mm.m7);else _0x167bd4 === "autojs" && layer.alert(_mm.m12);
    }
    batch_config();
    form.render();
  });
  var _0xa6c522 = function (_0x714d5d) {
    var _0x3ada27 = 0,
      _0xd2bbf8 = 0,
      _0x47dfc4 = setInterval(function () {
        if (_0x3ada27 === 0) {
          _0x3ada27 = 1;
          so.post("/auth_v_1_0/js/js_defecate/v7/load.json", {
            "key": _0x714d5d,
            "type": $("[enType]").val()
          }).done(function (_0x3e583a) {
            element.tabChange("box", "result");
            if (_0x3e583a && _0x3e583a.status === 200) {
              clearInterval(_0x47dfc4);
              _0x3e583a.downUrl && (so("[unfinished-tips]").addClass("layui-hide"), so("[success-tips]").attr("href", _0x3e583a.downUrl).removeClass("layui-hide"));
              so("[statusText]").val(_0x3e583a.statusText);
              console.log(so("[statusText]").length, so("[statusText]"));
              layer.close(load);
              layer.alert("加密完成，请点击【下载加密结果 zip压缩包】");
            }
            _0xd2bbf8++;
            _0x3ada27 = 0;
          });
          _0xd2bbf8 > 60 && layer.alert("如果等待时间超过了预计时间很久，请刷新页面，重新加密。");
          if (_0xd2bbf8 > 200) {
            layer.alert("已经停止获取状态，请刷新后再使用");
            clearInterval(_0x47dfc4);
          }
        }
      }, 1888);
  };
  so(".execute").on("click", function () {
    var _0x40fdd5 = so.trim(so("#source").val());
    batch_config();
    if ("" == _0x40fdd5) return layer.msg("请粘贴 JavaScript 代码。<br>也可以选择‘JS’文件加密。", so.defn), !1;else {
      if (_0x40fdd5.indexOf("<script") === 0) return layer.alert(_mm.m11, {
        "title": "Javascript 脚本加密错误提示"
      }), !1;else {
        if (_0x40fdd5.indexOf("alert(") === 0) return layer.alert("这么简单的代码，没加密的必要吧。", {
          "title": "Javascript 脚本加密错误提示"
        }), !1;else {
          if (_0x40fdd5.indexOf("<") === 0) return layer.alert("只可以纯JS加密，检测到了HTML代码<br>请先把HTML转换为Javascript代码。", {
            "title": "Javascript 脚本加密错误提示",
            "btn": ["HTML转换Javascript", "取消"]
          }, function () {
            so.refresh(+"/jsxhtml.html");
          }), !1;
        }
      }
    }
    var _0x349459 = function () {
        btn_load();
        var _0x58b14a = (Math.random() * 100).toString(32);
        so.post("/auth_v_1_0/v7/js/js_obfuscator.json?v=" + _0x58b14a, so.extend({
          "source": _0x40fdd5
        }, so.configObj), function (_0x438cbd) {
          btn_init();
          if (_0x438cbd.status == 500) {
            return layer.msg(_0x438cbd.message, so.defn), !1;
          }
          if (_0x438cbd.status == 204) return layer.alert(_0x438cbd.message), !1;
          var _0x343cea = _0x438cbd.code;
          if (_0x343cea === "sys") $("[single]").removeClass("layui-hide"), $("[batch]").addClass("layui-hide"), laytpl(singleTeamplate.innerHTML).render(_0x438cbd, function (_0x1ea3dc) {
            $("[single]").html(_0x1ea3dc);
            element.tabChange("box", "result");
            _0xa6c522(_0x438cbd.key);
          });else {
            so("#resultSource").val(zs + _0x343cea);
            so("#copySource").val(_0x343cea);
            $("[single]").addClass("layui-hide");
            $("[batch]").removeClass("layui-hide");
            element.tabChange("box", "result");
          }
        }, {
          "sojsonData": so.sf.en("js|" + _0x58b14a + "|" + _0x40fdd5.length)
        });
      },
      _0x26e253 = so.configObj.domains;
    if (_0x26e253 && _0x26e253.length > 0) {
      _0x26e253 = _0x26e253.split(",");
      if (_0x26e253.length > 5 && _vip_info.status !== 200) layer.msg("免费用户，安全域名不能超过5个。");else {
        var _0x182c90 = "<code>" + _0x26e253.join("</code><br><code>") + "</code>";
        layer.confirm("您配置了：<br>{%d}，<br>不在这些域名下运行会导致浏览器卡死，<br>敬请注意！！".fmt({
          "d": _0x182c90
        }), {
          "icon": 7,
          "title": "安全域名配置提醒"
        }, function (_0x2506b4) {
          layer.close(_0x2506b4);
          _0x349459();
        });
      }
    } else {
      _0x349459();
    }
  });
  init_config();
  so.user.vipLazy(1, function (_0x6d23c8) {
    _vip_info = _0x6d23c8;
    var _0x3bb3cd = "组件加载完毕，开始使用吧。",
      _0x1e92db = so("[name=selenium]"),
      _0x8327b3 = 0;
    if (_vip_info && _vip_info.status === 200) {
      _0x3bb3cd = "您好，尊敬的【{%levelName}】用户<br>有效期:{%etime}".fmt(_vip_info);
      so("[name=\"encodeVersion\"]").removeAttr("disabled");
      so("[name=\"levelStart\"]").val(1).removeAttr("disabled");
      if (_vip_info.level === 1) so("[name=\"levelEnd\"]").val(30).removeAttr("disabled").removeClass("layui-hide");else {
        if (_vip_info.level === 2) {
          so("[name=\"levelEnd\"]").val(100).removeAttr("disabled").removeClass("layui-hide");
        } else {
          if (_vip_info.level === 3) {
            so("[name=\"levelEnd\"]").val(1000).removeAttr("disabled").removeClass("layui-hide");
          }
        }
      }
      so("[name=\"gang\"]").removeClass("layui-hide");
      so.configObj.stringArrayStorageItemNum = [1, so("[name=\"levelEnd\"]").val()];
      _0x1e92db.find("option").removeAttr("disabled");
      _0x8327b3 = 1;
    } else {
      if (_vip_info && _vip_info.status === 404) {
        _0x3bb3cd = _vip_info.message;
      }
    }
    if (_0x8327b3 === 0) {
      so("[name=\"encodeVersion\"]").val(new_version).v("disabled", !0);
      so("[name=\"levelStart\"]").val(3).v("disabled", !0);
      so("[name=\"levelEnd\"]").v("disabled", !0);
      _0x1e92db.val(0);
      _0x1e92db.find("option[value=1]").v("disabled", "");
    }
    form.render();
    layer.msg(_0x3bb3cd);
    batch_config();
  });
  so("[name=\"levelStart\"]").blur(function () {
    if (parseInt(so("[name=\"levelStart\"]").val()) < 1) return so("[name=\"levelStart\"]").val(1), layer.alert("最小值不能小于1哦");
    let _0x563b9c = parseInt(so("[name=\"levelEnd\"]").val());
    if (parseInt(so("[name=\"levelStart\"]").val()) > _0x563b9c) return so("[name=\"levelStart\"]").val(1), layer.alert("最小值不能超过最大值哦");
    so.configObj.stringArrayStorageItemNum = [so("[name=\"levelStart\"]").val(), so("[name=\"levelEnd\"]").val()];
    out_config();
  });
  so("[name=\"levelEnd\"]").blur(function () {
    let _0x5819d4 = parseInt(so("[name=\"levelEnd\"]").val());
    if (_vip_info.level === 1) {
      if (_0x5819d4 > 30) {
        return so("[name=\"levelEnd\"]").val(30), layer.alert("白银会员最大值不能超过30哦");
      }
      resteEndv(_0x5819d4, 30);
    } else {
      if (_vip_info.level === 2) {
        if (_0x5819d4 > 50) return so("[name=\"levelEnd\"]").val(50), layer.alert("黄金会员最大值不能超过50哦");
        resteEndv(_0x5819d4, 50);
      } else {
        if (_vip_info.level === 3) {
          if (_0x5819d4 > 1000) return so("[name=\"levelEnd\"]").val(1000), layer.alert("钻石会员最大值不能超过1000哦");
          resteEndv(_0x5819d4, 1000);
        }
      }
    }
    so.configObj.stringArrayStorageItemNum = [so("[name=\"levelStart\"]").val(), so("[name=\"levelEnd\"]").val()];
    out_config();
  });
});
so.w.resteEndv = function (_0x127064, _0x4bd06e) {
  if (_0x127064 < parseInt(so("[name=\"levelStart\"]").val())) return so("[name=\"levelEnd\"]").val(_0x4bd06e), layer.alert("最大值不能小于最小值哦");
};
$(document).on("click", "[unfinished-tips]", function () {
  layer.msg("请稍等，正在加密...");
});
so.w.batch_config = function () {
  so("input[lay-filter],select[lay-filter],.tagsinput").each(function () {
    var _0x414fe2 = this.checked,
      _0x34b2a7 = this.name,
      _0x31428e = $(this).attr("type");
    if (_0x31428e == "text" || _0x414fe2 == undefined) {
      so.play("so.configObj." + _0x34b2a7 + "='" + this.value + "'");
    } else (_0x414fe2 === true || _0x414fe2 === false) && so.play("so.configObj." + _0x34b2a7 + "='" + _0x414fe2 + "'");
  });
  so.configObj.stringArrayStorageItemNum = [so("[name=\"levelStart\"]").val(), so("[name=\"levelEnd\"]").val()];
  out_config();
};
so.w.out_config = function () {
  so.utils.setItem("JSJIAMI7", so.configObj);
};
so.w.init_config = function (_0x3afdef) {
  var _0x57030d = _0x3afdef || so.utils.getItem("JSJIAMI7");
  console.log("init_config", _0x57030d);
  if (_0x57030d) {
    so.configObj = _0x57030d;
    if (so.configObj.autojs && so.configObj.autojs === "true") so("[advanced]").addClass("layui-hide"), so("[advanced-disable]").v("disabled", true), so.configObj.domains = "";else {
      so("[advanced]").removeClass("layui-hide");
      so("[advanced-disable]").v("disabled", false);
    }
    for (var _0x24e584 in so.configObj) {
      var _0x4bd199 = so.configObj[_0x24e584];
      _0x4bd199 === "false" || _0x4bd199 === "true" ? (_0x4bd199 = _0x4bd199 === "true" ? true : false, so("[name=\"" + _0x24e584 + "\"]").prop("checked", _0x4bd199)) : so("[name=\"" + _0x24e584 + "\"]").val(_0x4bd199);
    }
    form.render();
  } else {
    so.configObj = js_data.best;
  }
  so(".tagsinput").sojson_box();
};
var btn_load = function () {
    so(".execute > i").addClass("layui-anim layui-anim-rotate layui-anim-loop");
    so(".execute").addClass("layui-btn-disabled");
    load = layer.load();
  },
  btn_init = function () {
    so(".execute > i").removeClass("layui-anim layui-anim-rotate layui-anim-loop");
    so(".execute").removeClass("layui-btn-disabled");
    layer.close(load);
  },
  element,
  form,
  load;
so.configObj = new Object();
Dropzone.autoDiscover = false;
var myDropzone = new Dropzone("#mydropzone", {
  "url": "/url",
  "maxFiles": 1,
  "maxFilesize": 0.5,
  "addRemoveLinks": false,
  "acceptedFiles": ".js",
  "uploadMultiple": false,
  "autoProcessQueue": false,
  "parallelUploads": 1,
  "dictFallbackMessage": "浏览器不受支持",
  "dictDefaultMessage": "拖拽JavaScript文件 或者 点击读取JavaScript文件",
  "dictFileTooBig": "JavaScript文件最大为512kb",
  "dictInvalidFileType": "只能上传JavaScript文件",
  "init": function () {
    this.on("addedfile", function (_0x466735) {
      var _0x1e255b = new FileReader();
      _0x1e255b.readAsText(_0x466735);
      var _0x4cd21d = layer.load();
      _0x1e255b.onload = function () {
        layer.close(_0x4cd21d);
        var _0x5b62ff = so.trim(this.result);
        if ("" == _0x5b62ff) {
          return layer.msg("您上传的文件内容为空！", so.defn), !1;
        }
        so("#source").val(_0x5b62ff);
        var _0xa2599b = "<i class=\"layui-icon\">&#xe61d;</i> {%name} （{%size}Kb）";
        so("#_size").html(_0xa2599b.fmt({
          "name": _0x466735.name,
          "size": parseInt(_0x466735.size / 1024)
        }));
        myDropzone.removeAllFiles();
        layer.msg("文件读取成功。");
        element.tabChange("box", "copyFile");
      };
    });
  }
});