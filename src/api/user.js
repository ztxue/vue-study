import { get, post } from '/src/plugins/request'

export let getList = params => get("/emp/emplist", params)
export let login = loginInfo => post("/emp/adminlogin", loginInfo)
export let del = id => post("/emp/delemp", id)
export let add = empInfo => post("/emp/saveemp", empInfo)

