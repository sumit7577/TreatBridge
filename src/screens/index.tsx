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


const Stepper = () => {
    return (
        <ol className="relative text-gray-500 border-s border-gray-500 dark:border-gray-700 dark:text-gray-400">
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-[33px] h-[33px] rounded-full -start-4 ring-1 ring-slate-600">
                    <h2>1</h2>
                </span>
                <h3 className="font-[600] text-[20px] text-black">Starting Bridge Transaction</h3>
            </li>
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-[33px] h-[33px] rounded-full -start-4 ring-1 ring-slate-600">
                    <h2>2</h2>
                </span>
                <h3 className="font-[600] text-[20px] text-black">Crossing Bridge</h3>
            </li>
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-[33px] h-[33px] rounded-full -start-4 ring-1 ring-slate-600">
                    <h2>3</h2>
                </span>
                <h3 className="font-[600] text-[20px] text-black">Approving Transfer</h3>
            </li>
            <li className="ms-6">
                <span className="absolute flex items-center justify-center w-[33px] h-[33px] rounded-full -start-4 ring-1 ring-slate-600">
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
        <Grid className="items-center">
            <Image src={icon} classname="h-[57px] w-[57px]" />
            <h2 className="text-[12px] font-[600] text-center">Binance Wallet</h2>
        </Grid>
    )
}

const Home = () => {
    const [fromNetwork, setFromNetwork] = useState<typeof coins[0]>(coins[0]);
    const [toNetwork, setToNetwork] = useState<typeof coins[0]>(coins[1]);
    const [modal, setModal] = useState<boolean>(false);
    return (
        <Grid className={`bg-gradient-to-r from-primaryho to-primary w-[100vw] h-[100vh] justify-center`}>
            <Block className="absolute right-[100px] top-[122px]">
                <Stepper />
            </Block>

            <Block className="w-full justify-center">
                <Card className="min-w-[644px] gap-4">
                    <Block className="justify-between w-full">
                        <h2 className="bold-text text-[24px]">Treat Bridge</h2>
                        <Block className="gap-2">
                            <HeroIcon iconName="Cog6ToothIcon" className="h-[28px] w-[28px] bg-primaryho rounded-md text-primary" />
                            <HeroIcon iconName="ArrowPathIcon" className="h-[28px] w-[28px] bg-primaryho rounded-md text-primary" />
                        </Block>

                    </Block>
                    <Grid className="border border-primary rounded-md p-3 w-full gap-3">
                        <h2 className="font-[700] !text-[16px]">Bridge Asset</h2>
                        <Block className="bg-primaryho rounded-md shadow-sm p-3 gap-4">
                            <Image src={Heart} classname="h-[43px] w-[42px]" />
                            <h2 className="text-[24px] font-[800]">Treat Token</h2>
                        </Block>
                    </Grid>
                    <Grid className="border border-primary rounded-md p-3 w-full gap-3">
                        <Block className="gap-4">
                            <h2 className="font-[500] text-[15px]">Select Network</h2>
                            <h2 className="border-2 border-primary rounded-md shadow-md px-8 font-[700] text-[12px] text-primary">{fromNetwork.label}</h2>
                        </Block>
                        <Block className="bg-primaryho rounded-md shadow-sm p-3 gap-1">
                            <DropDown item={coins} selected={fromNetwork} setSelected={setFromNetwork} />
                            <Grid>
                                <h2 className="font-[800] text-[24px]">0.00</h2>
                                <h2 className="text-[14px] font-[500] text-gray-500">≈0.00</h2>
                            </Grid>
                        </Block>
                    </Grid>
                    <Grid className="border border-primary rounded-md p-3 w-full gap-3">
                        <Block className="gap-4">
                            <h2 className="font-[500] text-[15px]">To</h2>
                            <h2 className="border-2 border-primary rounded-md shadow-md px-3 font-[700] text-[12px] text-primary">{toNetwork.label}</h2>
                        </Block>

                        <Block className="bg-primaryho rounded-md shadow-sm p-3 gap-1">
                            <DropDown item={coins} selected={toNetwork} setSelected={setToNetwork} />
                            <Grid>
                                <h2 className="font-black text-lg">0.00</h2>
                                <h2 className="text-xs bold-text text-gray-500">≈0.00</h2>
                            </Grid>
                        </Block>
                    </Grid>
                    <Grid className="w-full gap-3">
                        <Block className="justify-between text-[16px] font-[500]">
                            <h2>Treat Brigde Gas Fee: </h2>
                            <h2> 0.00001 ETH</h2>
                        </Block>

                        <Block className="justify-between text-[16px] font-[500]">
                            <h2>Estimated Transaction time: </h2>
                            <h2>≈ 12 mins</h2>
                        </Block>
                        <Button classname="!w-full mt-2" onClick={() => {
                            setModal(() => !modal)
                        }}>
                            <h2 className="text-[20px] font-[800]">Connect Wallet</h2>
                        </Button>
                    </Grid>
                </Card>
            </Block>

            <Modal title={"Connect Wallet"}
                open={modal} setModal={setModal}
                titleclassName="!text-[24px] text-center !font-[600]"
                classname="w-[507px] h-[431px]"
                onSuccess={() => {
                    setModal(() => !modal)
                }}>
                <div className="w-full grid grid-cols-3 justify-between gap-4">
                    {coins.map((item, index) => (
                        <Wallet item={item} key={index} />
                    ))}
                </div>

            </Modal>

        </Grid>
    )
}

export default Home;