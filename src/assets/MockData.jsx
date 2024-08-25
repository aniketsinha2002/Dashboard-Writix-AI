import {
  FaWallet,
  FaUsers,
  FaCalendarDay,
  FaShoppingCart,
  FaDownload,
} from "react-icons/fa";
import ProfitIndicator from "../components/ProfitIndicator";
import LossIndicator from "../components/LossIndicator";

export const mockData = [
  {
    id: 1,
    icon: <FaWallet />,
    title: "Balance",
    value: "$12,345",
    indicator: <ProfitIndicator val={"10.14%"} />,
    btn: "Remove",
    showBtn: "block",
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "Number of Clients",
    value: "-150",
    indicator: <LossIndicator val={"10.54%"} />,
    btn: "Remove",
    showBtn: "block",
  },
  {
    id: 3,
    icon: <FaCalendarDay />,
    title: "Today's Bookings",
    value: "+12",
    indicator: <ProfitIndicator val={"10.54%"} />,
    btn: "Remove",
    showBtn: "block",
  },
  {
    id: 4,
    icon: <FaShoppingCart />,
    title: "Purchases",
    value: "+24",
    indicator: <ProfitIndicator val={"10.54%"} />,
    btn: "Remove",
    showBtn: "block",
  },
  {
    id: 5,
    icon: <FaDownload />,
    title: "Downloads",
    value: "+1,200",
    indicator: <ProfitIndicator val={"11.54%"} />,
    btn: "Remove",
    showBtn: "block",
  },
];
