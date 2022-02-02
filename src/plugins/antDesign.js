import Vue from "vue";
import 'ant-design-vue/dist/antd.css'


import {

    Button, Col, Dropdown, Form, Icon, Input, Layout, Menu, Row, Table, Breadcrumb, divider, pagination, tree
} from "ant-design-vue";

const components = [
    Icon,
    Button,
    Form,
    Input,
    Col,
    Row,
    Table,
    Layout,
    Menu,
    Dropdown,
    Breadcrumb,
    divider,
    pagination,
    tree
]


export function setAntDesign() {
    components.forEach(component => {
        Vue.use(component)
    })
}
