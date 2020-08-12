// @yuchen

import axios from 'axios'

const a = axios.create({baseURL: 'http://localhost:5000'})
a.defaults.headers.common['x-auth-token']=''        // 等会用 _token_default 后端判断逻辑不明确

export default a