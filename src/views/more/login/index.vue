<template>
  <div id="js-wrapper">
    <header class="common-header">
		<a href="#"><span>后退</span></a>
		<img src="https://passport.hupu.com/m/2/images/shihuo.png">
	</header>
    <div class="home-wrapper" style="width: 340px;">
        <p class="error-tip">帐号或密码不能为空</p>
	    <form action="" class="index-form" id="J_loginForm">
            <input type="hidden" id="checkStr" name="checkStr" value="">
            <input type="hidden" id="checkList" name="checkList" value="">
            <input type="hidden" id="verified" value="false">
		    <div class="input-box name-ipt">
			    <label class="text-label text-label-user" for="login-username"></label>
			    <input type="text" data-text="账号" name="account" placeholder="登录名/手机号/邮箱" class="hasIcon" id="login-username">
                <em class="error-icon" style="display: none;"></em>
		    </div>
		    <div class="input-box pwd-ipt">
			    <label class="text-label text-label-pwd" for="login-pwd"></label>
			    <input type="password" data-text="密码" name="password" placeholder="密码" class="hasIcon" onpaste="return false;" id="login-pwd">
                <em class="error-icon"></em>
            </div>

		    <div class="form-item-btn ">
			    <a href="/m/2/nregister" dace-node="8000_reg">注册</a>
			    <input type="submit" value="登录" class="login-btn" dace-node="8000_login">
		    </div>
		    <input type="hidden" name="captcha[client_public_key]" id="captcha_client_public_key" value="4ac8b099a1e05c3e56bed3d84555a45e">
		    <input type="hidden" name="captcha[client_token]" id="client_token" value="">
		    <input type="hidden" name="msg" id="msg" value="登录成功">
	    </form>
    </div>
    <div class="other-login">
        <i id="wx_login_display_i" style="display:none"></i>
        <a id="wx_login_display_a" style="display:none" href="#"><span>微信登录</span></a>
        <i></i><a href="#" class="qq-login" dace-node="8000_qq"><span>QQ登录</span></a>
        <i></i><a href="#" dace-node="8000_mobile" class="phone-login"><span>手机登录</span></a><i></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  
};
</script>

<style lang="scss" scoped>

</style>
