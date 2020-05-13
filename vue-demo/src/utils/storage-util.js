/**
 * 存储localStorage数据
 */

 export default {
    name: 'StorageUtil',

    saveData: function(key, data){
        window.localStorage.setItem(key, JSON.stringify(data));
    },

    getData: function(key){
        return JSON.parse(window.localStorage.getItem(key) || '[]')
    }
 }