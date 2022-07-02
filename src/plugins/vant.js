import {
  Button,
  Cell,
  Grid,
  GridItem,
  NavBar,
  Tabbar,
  TabbarItem,
  Icon,
  Search,
  List
} from 'vant'
const elements = [
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Cell,
  Grid,
  GridItem,
  Icon,
  Search,
  List
]
export default function (Vue) {
  elements.forEach((el) => Vue.use(el))
}
