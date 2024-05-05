import Block from "../components/Block";
import Card from "../components/Card";
import Grid from "../components/Grid";
import HeroIcon from "../components/Icon";
import Image from "../components/Image";
import Heart from "../assets/heart.png";
import Etherum from "../assets/eth.png";
import Binance from "../assets/binance.png";
import { DropDown } from "../components/DropDown";
import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import BBC from "../assets/icons/bbc.png";
import BNC from "../assets/icons/bnc.png";
import BTC from "../assets/icons/btc.png";
import DOLLAR from "../assets/icons/dollar.png";
import ETHERUM from "../assets/icons/eth.png";
import GRAPH from "../assets/icons/graph.png";
import TCOIN from "../assets/icons/tcoin.png";


const Stepper = () => {
    return (
        <ol className="relative text-gray-500 border-s border-gray-500 dark:border-gray-700 dark:text-gray-400">

            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-[33px] h-[33px] bg-primary rounded-full -start-4 ring-1 ring-slate-600">
                    <h2>1</h2>
                </span>
                <h3 className="font-[600] lg:text-[20px] text-sm text-black">Starting Bridge Transaction</h3>
            </li>
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-[33px] h-[33px] bg-primary rounded-full -start-4 ring-1 ring-slate-600">
                    <h2>2</h2>
                </span>
                <h3 className="font-[600] text-[20px] text-black">Crossing Bridge</h3>
            </li>
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-[33px] h-[33px] bg-primary rounded-full -start-4 ring-1 ring-slate-600">
                    <h2>3</h2>
                </span>
                <h3 className="font-[600] text-[20px] text-black">Approving Transfer</h3>
            </li>
            <li className="ms-6">
                <span className="absolute flex items-center justify-center w-[33px] h-[33px] bg-primary rounded-full -start-4 ring-1 ring-slate-600">
                    <h2>4</h2>
                </span>
                <h3 className="font-[600] text-[20px] text-black">Complete</h3>
            </li>
        </ol>
    )
}

const coins = [
    { name: "BSC", icon: Binance, label: "BSC" },
    { name: "ETH", icon: Etherum, label: "Etherium" },
    { name: "ETH", icon: Etherum, label: "Etherium" },
    { name: "ETH", icon: Etherum, label: "Etherium" },
    { name: "BSC", icon: Binance, label: "BSC" },
    { name: "BSC", icon: Binance, label: "BSC" }
]

const Wallet = (props: { item: typeof coins[0] }) => {
    const { icon } = props.item;
    return (
        <Grid className="items-center cursor-pointer">
            <Image src={icon} classname="md:h-[57px] md:w-[57px] h-[35px] w-[35px]" />
            <h2 className="text-[12px] font-[600] text-center">Binance Wallet</h2>
        </Grid>
    )
}

const Home = () => {
    const [fromNetwork, setFromNetwork] = useState<typeof coins[0]>(coins[0]);
    const [toNetwork, setToNetwork] = useState<typeof coins[0]>(coins[1]);
    const [modal, setModal] = useState<boolean>(false);
    return (
        <Grid className={`bg-gradient-to-b from-[#F2C2D3] to-[#A47989] w-[100vw] h-screen justify-center`}>

            <Block className="w-full justify-center">
                <Card className="lg:w-[644px] w-[85%] md:w-[50%] gap-4">
                    <Block className="justify-between w-full">
                        <h2 className="bold-text text-[24px]">Treat Bridge</h2>
                        <Block className="gap-2">
                            <HeroIcon iconName="Cog6ToothIcon" className="h-[28px] w-[28px] bg-primaryho rounded-md text-primary cursor-pointer" />
                            <HeroIcon iconName="ArrowPathIcon" className="h-[28px] w-[28px] bg-primaryho rounded-md text-primary cursor-pointer" />
                        </Block>

                    </Block>
                    <Grid className="border border-primary rounded-md p-3 w-full gap-3">
                        <h2 className="font-[700] !text-[16px]">Bridge Asset</h2>
                        <Block className="bg-primaryho rounded-md shadow-sm p-3 gap-4">
                            <Image src={Heart} classname="md:h-[43px] md:w-[42px] w-[30px] h-[30px]" />
                            <h2 className="md:text-[24px] text-lg font-[800]">Treat Token</h2>
                        </Block>
                    </Grid>
                    <Grid className="border border-primary rounded-md p-3 w-full gap-3">
                        <Block className="gap-4">
                            <h2 className="font-[500] text-xs md:text-[15px]">Select Network</h2>
                            <h2 className="border-2 border-primary rounded-md shadow-md px-8 font-[700] text-[12px] text-primary">{fromNetwork.label}</h2>
                        </Block>
                        <Block className="bg-primaryho rounded-md shadow-sm p-3 gap-1 justify-between">
                            <DropDown item={coins} selected={fromNetwork} setSelected={setFromNetwork} />
                            <Grid>
                                <h2 className="font-[800]  text-base md:text-[24px]">0.00</h2>
                                <h2 className="text-xs md:text-[14px] font-[500] text-gray-500">≈0.00</h2>
                            </Grid>
                        </Block>
                    </Grid>
                    <Grid className="border border-primary rounded-md p-3 w-full gap-3">
                        <Block className="gap-4">
                            <h2 className="font-[500] text-xs md:text-[15px]">To</h2>
                            <h2 className="border-2 border-primary rounded-md shadow-md px-3 font-[700] text-[12px] text-primary">{toNetwork.label}</h2>
                        </Block>

                        <Block className="bg-primaryho rounded-md shadow-sm p-3 gap-1 justify-between">
                            <DropDown item={coins} selected={toNetwork} setSelected={setToNetwork} />
                            <Grid>
                                <h2 className="font-black text-base md:text-lg">0.00</h2>
                                <h2 className="text-xs bold-text text-gray-500">≈0.00</h2>
                            </Grid>
                        </Block>
                    </Grid>
                    <Grid className="w-full gap-3">
                        <Block className="justify-between text-sm md:text-[16px] font-[500]">
                            <h2>Treat Brigde Gas Fee: </h2>
                            <h2> 0.00001 ETH</h2>
                        </Block>

                        <Block className="justify-between text-sm md:text-[16px] font-[500]">
                            <h2>Estimated Transaction time: </h2>
                            <h2>≈ 12 mins</h2>
                        </Block>
                        <Button classname="!w-full mt-2" onClick={() => {
                            setModal(() => !modal)
                        }}>
                            <h2 className="text-base md:text-[20px] font-[800]">Connect Wallet</h2>
                        </Button>
                    </Grid>
                </Card>
            </Block>

            <Modal title={"Connect Wallet"}
                open={modal} setModal={setModal}
                titleClass="md:!text-[24px] !text-lg !text-center !font-[600]"
                classname="lg:w-[507px] lg:h-[431px]"
                onSuccess={() => {
                    setModal(() => !modal)
                }}>
                <div className="w-full grid grid-cols-3 justify-between gap-4">
                    {coins.map((item, index) => (
                        <Wallet item={item} key={index} />
                    ))}
                </div>

            </Modal>

            <Block className="absolute left-[4%] top-[1%] bg-[rgba(131,189,103,0.2)] rounded-full w-[80px] h-[80px] lg:w-[186px] lg:h-[186px] justify-center">
                <Image src={DOLLAR} classname="lg:w-[55px] lg:h-[88px] w-[25px] h-[44px]" />
            </Block>


            <Block className="absolute left-[49%] top-[2%] bg-[rgba(247,147,26,0.2)] rounded-full w-[60px] h-[60px] lg:w-[105px] lg:h-[105px] justify-center">
                <Image src={BTC} classname="lg:w-[34px] lg:h-[45px] w-[16px] h-[22px]" />
            </Block>

            <Block className="absolute left-[0] md:left-[6%] top-[63%] bg-[rgba(255,255,255,0.2)] rounded-full w-[65px] h-[65px] lg:w-[168px] lg:h-[168px] justify-center">
                <Image src={ETHERUM} classname="lg:w-[47px] lg:h-[80px] h-[40px] w-[22px]" />
            </Block>

            <Block className="absolute left-[79%] top-[47%] bg-[rgb(243,186,47,0.2)] rounded-full w-[60px] h-[60px] lg:w-[171px] lg:h-[171px] justify-center">
                <Image src={BNC} classname="lg:w-[92px] lg:h-[92px] h-[45px] w-[45px]" />
            </Block>

            <Block className="absolute left-[66%] top-[60%] bg-[rgba(60,200,200,0.2)] rounded-full  w-[65px] h-[65px] lg:w-[122px] lg:h-[122px] justify-center">
                <Image src={GRAPH} classname="lg:w-[70px] lg:h-[66px] h-[32px] w-[35px]" />
            </Block>

            <Block className="absolute left-[43%] top-[90%] bg-[rgba(0,164,120,0.2)] rounded-full w-[65px] h-[65px] lg:w-[110px] lg:h-[110px] justify-center">
                <Image src={TCOIN} classname="lg:w-[47px] lg:h-[42px] w-[22px] h-[20px]" />
            </Block>

            <Block className="absolute left-[79%] top-[85%] bg-[rgba(240,64,134,0.2)] rounded-full w-[65px] h-[65px] lg:w-[76px] lg:h-[76px] justify-center">
                <Image src={BBC} classname="lg:w-[38px] lg:h-[35px] w-[16px] h-[16px]" />

            </Block>

            <div className="absolute right-[5%] top-[10%] hidden lg:flex items-center">
                <Stepper />
            </div>
        </Grid>
    )
}

export default Home;