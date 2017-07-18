import axios from 'axios'
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post = {
	'Content-Type': 'application/json;charset=UTF-8',
	"fr": "6"
};
axios.defaults.headers.get = {
	'Content-Type': 'application/json;charset=UTF-8',
	"fr": "6"
};
axios.defaults.baseURL = 'http://localhost:8099/';

//获取baseURL地址
export const baseURL = function () {
	return axios.defaults.baseURL;
}

export const post = (url, params = {}, isTk = false) => {
	if (isTk) {
		let tk = window.sessionStorage.getItem("token");
		if(!tk){
            alert("请先登录");
        }
		axios.defaults.headers.post['tk'] = "" + tk;
	} else {
		delete axios.defaults.headers.post['tk']
	}
	return axios.post(url, JSON.stringify(params)).catch(err => {
		console.log(err)
	});
};
export const get = (url, params = {}, isTk = false) => {
	var _url = "";
	for (let i in params) {
		_url += `${i}=${params[i]}&`
	}
	if (_url.length) {
		_url = _url.substring(0, _url.length - 1);
	}
	if (isTk) {
		let tk = window.sessionStorage.getItem("token");
		if(!tk){
            alert("请先登录");
        }
		axios.defaults.headers.get['tk'] = "" + tk;
	} else {
		delete axios.defaults.headers.get['tk'];
	}
	return axios.get(url + "?" + _url, JSON.stringify(params)).catch(err => {
		console.log(err)
	});
};