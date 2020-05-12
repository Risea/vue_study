/**
 * Vue插件
 */

 (function(){

    const MyPlugin = {};

    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
            // 逻辑...
            console.log("myGlobalMethod...")
        }
      
        // 2. 添加全局资源  定义一个指令
        Vue.directive('s-upper', {
            bind (el, binding, vnode, oldVnode) {
                // 逻辑...
                const data = binding.value || binding.expression;
                //console.log(data);
                el.textContent = data.toUpperCase();
            }
        })
      
        // 3. 注入组件选项
        Vue.mixin({
            created: function () {
                // 逻辑...
                console.log("created...")
            }
        })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {
            // 逻辑...
            console.log("实例方法myMethod...");
        }
      }

      window.MyPlugin = MyPlugin;
 })()