
import { Link} from "react-router-dom"
import {RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import {AiFillFileText} from "react-icons/ai"
import {IoIosPeople} from "react-icons/io"
import { IconType } from "react-icons";


function AdminSidebar() {
      return (
    <aside>
        <h2>Logo.</h2>
        <div>
            <h5>DashBoard</h5>
        </div>
        <ul>
            <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location} />
            <Li url="/admin/products" text="Products" Icon={RiShoppingBag3Fill} location={location} />
            <Li url="/admin/customers" text="Customers" Icon={IoIosPeople} location={location} />
            <Li url="/admin/transaction" text="Transaction" Icon={AiFillFileText} location={location} />
        </ul>
        <div>
            <h5>Chart</h5>
        </div>
        <ul>
            <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location} />
            <Li url="/admin/products" text="Products" Icon={RiShoppingBag3Fill} location={location} />
            <Li url="/admin/customers" text="Customers" Icon={IoIosPeople} location={location} />
            <Li url="/admin/transaction" text="Transaction" Icon={AiFillFileText} location={location} />
        </ul>
    </aside>
  )
};

interface LiProps{
    url: string;
    text: string;
    location: Location,
    Icon : IconType
};

const Li = ({url, text, location, Icon}: LiProps) => (
    <li style={{backgroundColor:location.pathname.includes(url) ? "rgba(0, 115, 255, 0.1)" : "white"}}>
                <Link to={url} style= {{color:location.pathname.includes(url) ? "rgba(0, 115, 255)" : "black"}}>
                    <Icon/>
                    {text}
                </Link>
            </li>
)




export default AdminSidebar