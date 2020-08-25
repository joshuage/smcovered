// @yuchen

import axios from 'axios'

const yuchenAxios = axios.create({baseURL: 'http://localhost:5000'})
yuchenAxios.defaults.headers.common['x-auth-token']=''        // 等会用 _token_default 后端判断逻辑不明确

export default yuchenAxios