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


const coins = [
    { name: "BSC", icon: Binance, label: "BSC" },
    { name: "ETH", icon: Etherum, label: "Etherium" }
]

const Home = () => {
    const [fromNetwork, setFromNetwork] = useState<typeof coins[0]>(coins[0]);
    const [toNetwork, setToNetwork] = useState<typeof coins[0]>(coins[1]);
    return (
        <Grid className={`bg-red-100 w-[100vw] h-[100vh] justify-center`}>
            <Block className="w-full justify-center">
                <Card className="w-[25%] gap-4">
                    <Block className="justify-between w-full">
                        <h2 className="bold-text">Treat Bridge</h2>
                        <Block className="gap-2">
                            <HeroIcon iconName="Cog6ToothIcon" className="h-5 w-5" />
                            <HeroIcon iconName="ArrowPathIcon" className="h-5 w-5" />
                        </Block>

                    </Block>
                    <Grid className="border border-red-200 rounded-md p-3 w-full gap-3">
                        <h2 className="bold-text !text-xs">Bridge Asset</h2>
                        <Block className="bg-red-100 rounded-md shadow-sm p-3 gap-4">
                            <Image src={Heart} classname="h-6 w-6" />
                            <h2 className="bold-text !font-black">Treat Token</h2>
                        </Block>
                    </Grid>
                    <Grid className="border border-red-200 rounded-md p-3 w-full gap-3">
                        <Block className="gap-4">
                            <h2 className="font-semibold text-xs">Select Network</h2>
                            <h2 className="border-2 border-red-200 rounded-md shadow-md px-8 font-bold text-metatitle text-red-200">{fromNetwork.label}</h2>
                        </Block>
                        <Block className="bg-red-100 rounded-md shadow-sm p-3 gap-1">
                            <DropDown item={coins} selected={fromNetwork} />
                        </Block>
                    </Grid>
                    <Grid className="border border-red-200 rounded-md p-3 w-full gap-3">
                        <Block className="gap-4">
                            <h2 className="font-semibold text-xs">To</h2>
                            <h2 className="border-2 border-red-200 rounded-md shadow-md px-3 font-bold text-metatitle text-red-200">{toNetwork.label}</h2>
                        </Block>

                        <Block className="bg-red-100 rounded-md shadow-sm p-3 gap-1">
                            <DropDown item={coins} selected={toNetwork} />
                        </Block>
                    </Grid>
                </Card>
            </Block>

        </Grid>
    )
}

export default Home;