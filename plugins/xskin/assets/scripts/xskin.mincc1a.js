"use strict";$(document).ready(function(){xskin.afterReady()});var xskin=new function(){this.afterReady=function(){this.elastic=$("body.xelastic").length;if(!this.elastic){$("#xshortcut-skins select").on("mouseup",function(event){event.stopPropagation()})}if(!rcmail.env.rcp_skin){return}this.addMailboxClasses();this.fixIdentSwitch();if($("body.xmaterial-design").length){xskin.enableMaterialDesign()}if(!this.elastic){if($("a.iconbutton").length){$("a.iconbutton").html("")}if($("body.skin-icloud #login-form").length){$("#rcmloginpwd").after($("<button/>").attr("id","custom-login-submit").attr("type","submit"));$("#rcmloginuser").attr("placeholder",$("label[for=rcmloginuser]").text());$("#rcmloginpwd").attr("placeholder",$("label[for=rcmloginpwd]").text())}if(rcmail.env.xskin=="droid"){xskin.enableMaterialDesign()}else{xskin.enableSwitchboxes()}if($("#printmessageframe").length){$("body").addClass("print-message")}}if($("body.login-page").length&&!$("#logo").length){var title=$("<div>").attr("id","login-title").text(rcmail.gettext("login"));if(this.elastic){title.insertBefore("#login-form")}else{title.prependTo("#login-form .box-inner")}}};this.applySetting=function(element,key,container,value){element=$(element);if(value!==undefined){element.val(value)}else{if(element.is(":checkbox")){value=element.is(":checked")?"yes":"no"}else{value=element.val()}}$(container).alterClass(key+"-*",key+"-"+value);$(container,window.parent.document).alterClass(key+"-*",key+"-"+value);$(".xsave-hint").fadeIn()};this.updateIFrameClasses=function(){$.each($("html").attr("class").split(/\s+/),function(index,item){if(item.indexOf("x")==0){$("html").removeClass(item)}});$.each($("body").attr("class").split(/\s+/),function(index,item){if(item.indexOf("x")==0){$("body").removeClass(item)}});$.each($("html",window.parent.document).attr("class").split(/\s+/),function(index,item){if(item.indexOf("x")==0){$("html").addClass(item)}});$.each($("body",window.parent.document).attr("class").split(/\s+/),function(index,item){if(item.indexOf("x")==0){$("body").addClass(item)}})};this.quickSkinChange=function(){var skin=$("#xshortcut-skins select").val();if(skin){location.replace("//"+location.host+location.pathname+xframework.replaceUrlParam("skin",skin))}};this.quickLanguageChange=function(){var language=$("#quick-language-change select").val();language&&(location.href=xframework.replaceUrlParam("language",language))};this.addMailboxClasses=function(){var classes=["sent","drafts","trash","archive","junk","spam"];$("#mailboxlist li.mailbox a").each(function(){var rel=$(this).attr("rel");if(rel!==undefined){rel=rel.toLowerCase();for(var i=0;i<classes.length;i++){if(rel.indexOf(classes[i])!=-1){$(this).parent("li.mailbox").addClass(classes[i])}}}})};this.disableMobileSkin=function(){var expires=new Date;expires.setFullYear(expires.getFullYear()+10);rcmail.set_cookie("rcs_disable_mobile_skin",1,expires);location.reload()};this.enableMobileSkin=function(){var expires=new Date;expires.setFullYear(expires.getFullYear()-10);rcmail.set_cookie("rcs_disable_mobile_skin","",expires);location.reload()};this.enableSwitchboxes=function(){var index=0;$("input[type='checkbox']").not(".no-switchbox").each(function(){var checkbox=$(this);var position=checkbox.css("position");var id=checkbox.attr("id");if(!id){id="switchbox-"+index;checkbox.attr("id",id);index++}var switchbox=$("<label/>").addClass("switchbox").attr("for",id).css("margin",checkbox.css("margin"));if(position=="absolute"||position=="fixed"){switchbox.css({position:position,left:checkbox.css("left"),right:checkbox.css("right"),top:checkbox.css("top"),bottom:checkbox.css("bottom"),"z-index":checkbox.css("z-index")})}switchbox.on("click",function(e){e.stopPropagation()});checkbox.addClass("switchbox-input").after(switchbox)})};this.enableMaterialDesign=function(){$(".listing td.name, .listing td.section, .listing li.listitem, #directorylist li.addressbook, "+".listing li.mailbox a, .toolbar a.button, .xmobile #taskbar > a").addClass("wave-container").on("click",function(event){var container=$(this);var size=Math.ceil(Math.max(container.outerWidth(),container.outerHeight())*2/100);var wave=$("<span/>").addClass("wave").css({height:size,width:size,left:event.offsetX+"px",top:event.offsetY+"px"});container.append(wave);setTimeout(function(){wave.remove()},600)})};this.fixIdentSwitch=function(){if(!rcmail.env["rcp_skin"]){return}var select=$("#plugin-ident_switch-account");if(!select.length||typeof plugin_switchIdent_addCbElastic!=="function"){return}if(plugin_switchIdent_addCbElastic(select)){select.show()}}};