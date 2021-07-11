<template>
    <div class="zfb-pay" v-if="show">
        <div class="content">
            <!--标题栏-->
            <header class="pay-title">
                <div class="ico-back" @click="cancel"></div>
                <h3>{{ title }}</h3>
            </header>

            <!--密码框-->
            <div class="pass-box">
                <ul class="pass-area">
                    <li class="pass-item"
                        :class="{on: password.length > index}"
                        v-for="(item, index) in digit"
                        :key="index"></li>
                </ul>
            </div>

            <!--忘记密码-->
            <div class="forget-pass">
                <div class="forget-pass-btn" @click="forget">忘记密码</div>
            </div>

            <!--键盘区-->
            <ul class="keyboard">
                <li @click="onKeyboard(1)">
                    <p class="num"><strong>1</strong></p>
                    <p class="character"></p>
                </li>
                <li @click="onKeyboard(2)">
                    <p class="num"><strong>2</strong></p>
                    <p class="character">ABC</p>
                </li>
                <li @click="onKeyboard(3)">
                    <p class="num"><strong>3</strong></p>
                    <p class="character">DEF</p>
                </li>
                <li @click="onKeyboard(4)">
                    <p class="num"><strong>4</strong></p>
                    <p class="character">GHI</p>
                </li>
                <li @click="onKeyboard(5)">
                    <p class="num"><strong>5</strong></p>
                    <p class="character">JKL</p>
                </li>
                <li @click="onKeyboard(6)">
                    <p class="num"><strong>1</strong></p>
                    <p class="character">MNO</p>
                </li>
                <li @click="onKeyboard(7)">
                    <p class="num"><strong>7</strong></p>
                    <p class="character">PQRS</p>
                </li>
                <li @click="onKeyboard(8)">
                    <p class="num"><strong>8</strong></p>
                    <p class="character">TUV</p>
                </li>
                <li @click="onKeyboard(9)">
                    <p class="num"><strong>9</strong></p>
                    <p class="character">WXYZ</p>
                </li>
                <li class="none"></li>
                <li class="zero" @click="onKeyboard(0)"><strong>0</strong></li>
                <li class="delete" @click="deleteKey"> back </li>
            </ul>

            <!--加载中状态-->
            <div class="loading-wrap" v-if="payStatus !== 0">
                <div class="loading">
                    <!--加载图标-->
                    <img src="@/assets/loading.png" class="loading-ico" alt="" v-if="payStatus === 1">
                    <img src="@/assets/success.png" class="success-ico" alt="" v-if="payStatus === 2">
                    <!--加载文字-->
                    <p v-if="payStatus === 1">{{ loadingText }}</p>
                    <p v-if="payStatus === 2">{{ finishedText }}</p>
                </div>
            </div>

            <!--支付失败提示框-->
            <div class="pay-fail" v-if="isShowFail">
                <div class="pay-fail-lay">
                    <h3 class="title">{{ failTip }}</h3>
                    <div class="btns">
                        <div @click="reInput">重新输入</div>
                        <div @click="forget">忘记密码</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "pay",
    // 支付密码框位数
    props: {
        // 支付密码框位数
        digit: {
            type: Number,
            default: 6
        },
        show: {
            type: Boolean,
            required: true,
            default: false
        },
        // 弹窗标题
        title: {
            type: String,
            default: '请输入支付密码'
        },
        // 正在支付的文字提示
        loadingText: {
            type: String,
            default: '正在支付'
        },
        // 支付成功的文字提示
        finishedText: {
            type: String,
            default: '支付成功'
        },
        // 支付成功的提示显示时间
        duration: {
            type: Number,
            default: 500
        }
    },
    model: {
        prop: 'show',
        event: 'change'
    },
    data() {
        return {
            password: '', // 支付密码
            payStatus: 0, // 支付状态，0无状态， 1正在支付，2支付成功
            failTip: '支付密码错误', //
            isShowFail: false
        }
    },
    watch: {
        // 监听支付密码，支付密码输入完成后触发input-end回调
        // 通知父组件的同时会把输入完成的密码作为参数告知父组件，即input-end函数的参数能拿到密码
        password(n, o) {
            if (n.length === this.digit) {
                this.payStatus = 1;
                this.$emit('input-end', this.password)
            }
        }
    },
    methods: {
        // 点击密码操作
        onKeyboard(key) {
            console.log(key);
            // 只截取前六位密码
            this.password = (this.password + key).slice(0, 6);
        },
        // 密码回删
        deleteKey(){
            // 密码已经为空时，不回删
            if (this.password.length === 0) return;
            // 回删一位密码
            this.password = this.password.slice(0, this.password.length - 1);
        },
        // 取消支付
        cancel () {
            // 支付过程中，不允许取消支付
            if (this.payStatus === 1) return;
            // 清空密码
            this.password = '';
            // 恢复支付状态
            this.payStatus = 0;
            // 关闭组件，并触发父子组件数据同步
            this.$emit('change', false);
            // 触发父组件close自定义事件
            this.$emit('close');
        },
        //支付成功
        $success () {
            return new Promise((resolve, reject) => {
                // 支付成功立即显示成功状态
                this.payStatus = 2;
                // 待指定间隔后，隐藏整个支付弹窗，并resolve
                setTimeout(() => {
                    this.cancel();
                    resolve();
                }, this.duration);
            })
        },
        // 支付失败
        // 隐藏加载提示框，显示支付失败确认框
        $fail (tip) {
            tip && typeof tip === 'string' && (this.failTip = tip);
            // 隐藏掉支付状态窗口
            this.payStatus = 0;
            // 显示密码错误弹窗
            this.isShowFail = true;
        },
        // 重新输入
        // 清空之前输入的密码，隐藏支付失败的提示框
        reInput () {
            this.password = '';
            this.isShowFail = false;
        },
        // 忘记密码,触发父组件的forget自定义事件
        forget () {
            this.$emit('forget');
        }
    },
}
</script>

<style scoped>

ul,li {
    list-style-type: none;
}

.pass-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    margin: 20px 0;
}

.pass-area li {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border: solid 1px #ddd;
}
.pass-item.on {
    position: relative;
}
.pass-item.on:before {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 10px;
    height: 10px;
    background: #000;
    border-radius: 50%;
}
.keyboard {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
}
.keyboard li {
    width: 33.33%;
    margin-bottom: 20px;
}
.loading-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
    display: flex;
    justify-content: center;
    padding-top: 60%;
    color: #fff;
}
.loading-wrap img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}
</style>
