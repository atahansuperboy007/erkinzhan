import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/navbar.css";
import "./css/korzina.css";
import "./css/catalog.css";
import Navbar from "./components/layout/Navbar";
import First from "./pages/First";
import DetailProduct from "./pages/DetailProduct";
import { UserProvider } from "./components/User";
import Catalog from "./pages/Catalog";
import Korzina from "./pages/Korzina";
import Shop from "./pages/tipa-shop";
import Block from "./components/layout/block-bottom";
import Click from "./pages/click-button";
import Clicknext from "./pages/filtr";
import Computer from "./pages/computer";
import Phone from "./pages/Phone";
import Camera from "./pages/Camera";
import TV from "./pages/televizor";
import Catalog2 from "./pages/Catalog2";
import Namber from "./pages/namber";
import Catalog3 from "./pages/Catalog3";
import Catalog4 from "./pages/Catalog4";
import Payment from "./pages/payment";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Company from "./pages/Сompany";
import Idadres from "./search/idadres";
import ColorPurple from "./фильтр/Purple";
import ColorBlack from "./фильтр/Black";
import ColorWhite from "./фильтр/White";
import ColorBlue from "./фильтр/Blue";
import ColorGray from "./фильтр/Gray";
import ColorSilver from "./фильтр/Silver";
import Older from "./фильтр/older";
import Older2 from "./фильтр/older2";
import Older3 from "./фильтр/older3";
import Older4 from "./фильтр/older4";
import Samsung from "./фильтр/Samsung";
import LG from "./фильтр/LG";
import OPPO from "./фильтр/OPPO";
import Huawei from "./фильтр/Huawei";
import Apple from "./фильтр/Apple";
import Sony from "./фильтр/Sony";
import Dell from "./фильтр/Dell";
import HP from "./фильтр/HP";
import Xiaomi from "./фильтр/XIAOMI";
import Canon from "./фильтр/CANON";
import Nokia from "./фильтр/NOKIA";
import Nikon from "./фильтр/NIKON";
import Acer from "./фильтр/Acer";
import PersonalArea from "./pages/PersonalArea";
import Glavnyi from "./pages/Glavnyi";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <First />
        <div className="Internet" >
          <Switch>
            <Route path="/index" >
              <Shop />
            </Route>
            <Route exact path="/catalog">
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Catalog />
                <Namber />
              </div>
            </Route>
            <Route exact path="/">
              <Glavnyi />
            </Route>
            <Route path="/korzina">
              <Korzina />
            </Route>
            <Route exact path="/p/:id">
              <DetailProduct />
            </Route>
            <Route exact path="/adres/:id">
              <Idadres />
            </Route>
            <Route path="/computer" >
              <div>
                <Click />
                <Clicknext />
              </div>
              <Computer />
            </Route>
            <Route path="/tv" >
              <div>
                <Click />
                <Clicknext />
              </div>
              <TV />
            </Route>
            <Route path="/camera" >
              <div>
                <Click />
                <Clicknext />
              </div>
              <Camera />
            </Route>
            <Route path="/phone" >
              <div>
                <Click />
                <Clicknext />
              </div>
              <Phone />
            </Route>
            <Route path="/oplata" >
              <Payment />
            </Route>
            <Route path="/Delivery" >
              <Delivery />
            </Route>
            <Route path="/Company" >
              <Company />
            </Route>
            <Route path="/contacts" >
              <Contacts />
            </Route>
            <Route path="/PersonalArea" >
              <PersonalArea />
            </Route>
            <Route path="/2" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Catalog2 />
                <Namber />
              </div>
            </Route>
            <Route path="/3" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Catalog3 />
                <Namber />
              </div>
            </Route>
            <Route path="/4" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Catalog4 />
                <Namber />
              </div>
            </Route>
            <Route path="/color_purple" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <ColorPurple />
              </div>
            </Route>
            <Route path="/color_black" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
              <ColorBlack />
              </div>
            </Route>
            <Route path="/color_white" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
              <ColorWhite />
              </div>
            </Route>
            <Route path="/color_blue" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
              <ColorBlue />
              </div>
            </Route>
            <Route path="/color_gray" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
              <ColorGray />
              </div>
            </Route>
            <Route path="/color_silver" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
              <ColorSilver />
              </div>
            </Route>
            <Route path="/color_" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
              <Older />
              </div>
            </Route>
            <Route path="/color_2" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Older2 />
              </div>
            </Route>
            <Route path="/color_3" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Older3 />
              </div>
            </Route>
            <Route path="/color_4" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Older4 />
              </div>
            </Route>
            <Route path="/brand_samsung" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Samsung />
              </div>
            </Route>
            <Route path="/brand_lg" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <LG />
              </div>
            </Route>
            <Route path="/brand_oppo" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <OPPO />
              </div>
            </Route>
            <Route path="/brand_huawei" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Huawei />
              </div>
            </Route>
            <Route path="/brand_apple" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Apple />                
              </div>
            </Route>
            <Route path="/brand_sony" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Sony />
              </div>
            </Route>
            <Route path="/brand_DELL" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Dell />
              </div>
            </Route>
            <Route path="/brand_HP" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <HP />
              </div>
            </Route>
            <Route path="/brand_XIAOMI" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Xiaomi />
              </div>
            </Route>
            <Route path="/brand_CANON" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Canon />
              </div>
            </Route>
            <Route path="/brand_NOKIA" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Nokia />
              </div>
            </Route>
            <Route path="/brand_NIRON" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Nikon />
              </div>
            </Route>
            <Route path="/brand_ACER" >
              <div className="Shop" >
                <Click />
                <Clicknext />
              </div>
              <div>
                <Acer />
              </div>
            </Route>

          </Switch>
        </div>
        <Block />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
