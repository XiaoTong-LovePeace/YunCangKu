<template>
	<view class="content">
		
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
					<van-field required label="用户名" placeholder="请输入用户名" />
					<van-field required label="密码" placeholder="请输入密码" />
				</van-cell-group>
				<van-button type="primary" size="large">登录绑定</van-button>
		
			</view>
		
		
		
		</view>
		
		<!-- 登录之后显示的内容 -->
		
		<view class="index" v-show="!isAuthorization">
			<!-- 广告图 -->
			<view class="log-imgs">
				<image src="../../static/images/product_62f4765967e4a.jpg"></image>
			</view>
			<!-- 信息提示 -->
			<view class="prompt-messages">
				<text>您有一个新的订单请求，请及时处理!</text>
			</view>

			<!-- 功能列表 -->
			<view class="content-boxs">
				<view class="contents">
					<view class="list1">
						<image src="../../static/images/icon/分销系统.png"></image>
						<text class="">待审核订单</text>
						<text class="numb">0</text>
						<view class="but">
							<button><text>查看</text></button>

						</view>


					</view>
					<view class="list2">
						<image src="../../static/images/icon/分销系统1.png"></image>
						<text class="">待审核分销</text>
						<text class="numb">15</text>
						<view class="but">
							<button><text>查看</text></button>

						</view>


					</view>
					<view class="list3">
						<image src="../../static/images/icon/消息1.png"></image>
						<view class="text-boxs">
							<text class="text1">已有品牌</text>
							<text class="text2">待审核品牌 </text>
						</view>
						<view class="numb-boxs">
							<text class="numb1">15</text>
							<text class="numb2">15</text>
						</view>

						<view class="but">
							<button class="but1"><text>查看</text></button>
							<button class="but2"><text>查看</text></button>
						</view>




					</view>
					<view class="list4">
						<image src="../../static/images/icon/订单1.png"></image>
						<view class="text-boxs">
							<text class="text1">已上架商品</text>
							<text>为上架商品</text>
						</view>
						<view class="numb-boxs">
							<text class="numb1">15</text>
							<text class="numb2">15</text>
						</view>

						<view class="but">
							<button class="but1"><text>查看</text></button>
							<button class="but2"><text>查看</text></button>
						</view>

					</view>
				</view>
			</view>


		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isAuthorization: true

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.log-imgs {
		width: 700rpx;
		height: 300rpx;
		background-color: aqua;
		margin: 0 auto;
		border-radius: 2%;
		overflow: hidden;

	}

	.log-imgs image {
		width: 100%;
		height: 100%;


	}

	.prompt-messages {
		width: 95%;
		height: 60rpx;
		background-color: #E4E4E4;
		margin: 50rpx auto;
		border-radius: 50rpx;
		font-size: 20rpx;
		display: flex;
		align-items: center;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;

	}

	.prompt-messages text {
		margin-left: 70rpx;

	}

	.content-boxs {
		width: 100%;
		/* height: 100%; */
		border-top: 1px solid #999;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
	}

	.contents {
		width: 90%;
		height: 90%;
		/* background-color: aquamarine; */
	}

	.list1 {
		width: 100%;
		height: 80rpx;
		/* background-color: navajowhite; */
		display: flex;
		align-items: center;
		justify-content: space-between;

	}

	.list1 image {
		width: 50rpx;
		height: 50rpx;
	}

	.list1 text {
		font-size: 30rpx;
	}

	.list1 button {
		width: 100%;
		height: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.list1 .numb {
		color: #3669F8;
	}

	.list1 .but text {
		font-size: 20rpx;
	}

	.list2 {
		width: 100%;
		height: 80rpx;
		/* background-color: salmon; */
		margin-top: 50rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.list2 image {
		width: 50rpx;
		height: 50rpx;
	}

	.list2 text {
		font-size: 30rpx;
	}

	.list2 button {
		width: 100%;
		height: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.list2 .numb {
		color: #3669F8;
	}

	.list2 .but text {
		font-size: 20rpx;
	}

	.list3 {
		width: 100%;
		height: 100rpx;
		/* background-color: cadetblue; */
		margin-top: 80rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 30rpx;
	}

	.list3 image {
		width: 50rpx;
		height: 50rpx;
	}

	.text1 {
		font-size: 30rpx;
		margin-bottom: 10rpx;
	}

	.text2 {
		font-size: 30rpx;
		margin-top: 10rpx;
	}

	.list3 button {
		width: 100%;
		height: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.but1 {
		margin-bottom: -5rpx;
	}

	.but2 {
		margin-top: 20rpx;
	}

	.numb1 {
		color: #3669F8;
		display: block;
		margin-bottom: 20rpx;
	}

	.numb2 {
		color: #3669F8;
		display: block;
		margin-top: 20rpx;

	}

	.list3 .but text {
		font-size: 20rpx;
	}

	.text-boxs {
		width: 150rpx;
		display: flex;
		flex-wrap: wrap;
		/* background-color: bisque; */
		justify-content: center;
	}

	.list4 {
		width: 100%;
		height: 100rpx;
		/* background-color: navajowhite; */
		margin-top: 80rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.list4 image {
		width: 50rpx;
		height: 50rpx;
	}

	.list4 text {
		font-size: 30rpx;
	}

	.list4 button {
		width: 100%;
		height: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.list4 .numb1 {
		color: #3669F8;
		display: block;
		font-size: 30rpx;
	}

	.list4 .but text {

		font-size: 20rpx;
	}


</style>
