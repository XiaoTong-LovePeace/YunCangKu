<template>
	<view>
		<view class="login">
			<view class="uni-common-box">
				<view class="login-title">
					<text class="title1">绑定用户</text>
					<text class="title2">如无账号请阅读下面的 "账号来源说明"</text>

				</view>
			</view>
			<!-- 登录盒子 -->
			<view class="iput-box">
				<van-cell-group>
					<van-field error-message="{{usernameempty}}" required v-model:="username" type="username" icon="question-o" label="用户名"
						placeholder="请输入用户名" />

						
					<van-field error-message="{{passwordempty}}" required v-model:="password" type="password" icon="closed-eye" label="密码"
						placeholder="请输入密码" />

				</van-cell-group>
			</view>
			<view class="">
				<van-button type="primary" size="large" @click="butlogin">登录绑定</van-button>
			</view>


		</view>
	</view>
</template>

<script>
	import http from '../../baseservices/http.js'
	import common from '../../baseservices/common.js'
	const app = getApp(); // 取得全局App

	export default {
		name: 'login',
		data() {
			return {
				// 唯一标识
				openid: "",
				username: '',
				password: '',
				usernameempty: "",
				passwordempty: "",
				isAuthorization: true,



			}
		},
		methods: {
			
			async butlogin() {
				await uni.request({
					url: 'baseUrl',
					method: 'POST',
					data: {
						'username': this.username,
						'password': this.password
					},
					success: (res) => {
						if (res.statusCode !== 200 && res.statusCode !== 201) {
							return uni.showToast({
								icon: "none",
								title: "请求失败"
							})
						} else {
							uni.showToast({
								title: "登录成功"
							})
							uni.setStorageSync('user', data.data)
							uni.switchTab({
								url: '/pages/index/index'
							})
						}

					}

				})


			},
		},
		onLoad(options) {

		},
		onShow() {

		},


	}
</script>

<style lang="less">
	.uni-common-box {
		width: 100%;
		height: 150rpx;
		// background-color: aquamarine;
		border-top: 1rpx solid #999;
		border-bottom: 1rpx solid #999;
		display: flex;
		justify-content: center;
		align-items: center;

		.login-title {
			width: 90%;
			height: 90rpx;

			.title1 {
				display: block;
				font-size: 33rpx;
			}

			.title2 {
				font-size: 29rpx;
				font-weight: 520;
				color: red;
			}

		}

	}
</style>
