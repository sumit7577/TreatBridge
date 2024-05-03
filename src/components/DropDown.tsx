import { useState } from "react";
import Grid from "./Grid";
import Block from "./Block";
import HeroIcon from "./Icon";
import Image from "./Image";
import Modal from "./Modal";
import InputComponent from "./Input";

interface DropDownProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    item: Array<{ name: string, icon: string, label: string }>,
    checkbox?: boolean,
    right?: boolean,
    left?: boolean,
    selected?: { name: string, icon: string, label: string },
    setSelected: React.Dispatch<React.SetStateAction<{
        name: string;
        icon: string;
        label: string;
    }>>,
    textClass?: string,
    onPress?: (item: string) => void
}

export const DropDown = (props: DropDownProps) => {
    const { item, selected, setSelected } = props;
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <Grid className="w-full">
            <Block className="w-full gap-1">
                <Image src={selected?.icon} classname="h-[57px] w-[57px]" />
                <h2 className="font-[800] text-[24px]">{selected?.name}</h2>
                <HeroIcon iconName={!openModal ? "ChevronDownIcon" : "ChevronUpIcon"} className="h-[6.5px] w-[13px]" onClick={() => {
                    setOpenModal(() => !openModal)
                }} />
            </Block>
            <Modal title={"Select Token"}
            classname="w-[444px] h-[652px]"
             open={openModal} setModal={setOpenModal} onSuccess={() => { setOpenModal(false) }}>
                <InputComponent left={
                    <HeroIcon iconName="MagnifyingGlassIcon" className="text-[#A47989] w-[16px] h-[16px]" />
                } classname="border-2 border-red-100" placeholder="Search token name" />
                <Grid className="w-full">
                    <ul className="bg-white mt-4">
                        {item.map((item, index) => (
                            <li className="hover:border-red-100 hover:border-2 rounded-xl" onClick={() => {
                                setSelected(() => item)
                                setOpenModal(() => false)
                            }}>
                                <List item={item} key={index} />
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Modal>
        </Grid>
    )
}


interface ListProps {
    item: { name: string, icon: string, label: string },
}

const List = (props: ListProps) => {
    const { item } = props;
    return (
        <Block className="w-full gap-4 justify-items-stretch p-2">
            <Grid>
                <Image src={item.icon} classname="h-[57px] w-[57px]" />
            </Grid>
            <Grid>
                <h2 className="text-[20px] font-[700]">{item.name}</h2>
                <h2 className="text-gray-400 text-[16px] font-[400]">{item.label}</h2>
            </Grid>
            <Grid className="items-end w-full">
                <h2 className="font-[800] text-[16px] text-gray-500">8.50</h2>
            </Grid>
        </Block>
    )
}