import Vue from "vue";
import 'ant-design-vue/dist/antd.css'


import {
    Button, Col, Dropdown, Form, Icon, Input, Layout, Menu, Row, Table, Breadcrumb, divider, pagination, tree, Card
    , Avatar, BackTop, Tooltip, Affix, Empty, List, Spin, Drawer
} from "ant-design-vue";
//有些小的组件得单独引
import {PlaceMent} from "ant-design-vue/lib/vc-mentions/src/placement";

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
    tree,
    Card,
    Avatar,
    BackTop,
    Tooltip,
    PlaceMent,
    Affix,
    Empty,
    List,
    Spin,
    Drawer
]


export function setAntDesign() {
    components.forEach(component => {
        Vue.use(component)
    })
}
