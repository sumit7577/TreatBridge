import { SetStateAction, useState } from "react";
import Grid from "./Grid";
import Block from "./Block";
import HeroIcon from "./Icon";
import Image from "./Image";
import Modal from "./Modal";
import InputComponent from "./Input";

interface DropDownProps<K> extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
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

export const DropDown = <T, K>(props: DropDownProps<K>) => {
    const { item, checkbox, left, right, selected, setSelected, textClass, onPress } = props;
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <Grid className="w-full">
            <Block className="w-full gap-1">
                <Image src={selected?.icon} classname="h-8 w-8" />
                <h2 className="font-black">{selected?.name}</h2>
                <HeroIcon iconName={!openModal ? "ChevronDownIcon" : "ChevronUpIcon"} className="h-4 w-4" onClick={() => {
                    setOpenModal(() => !openModal)
                }} />
            </Block>
            <Modal title={"Select Token"} open={openModal} setModal={setOpenModal} onSuccess={() => { setOpenModal(false) }}>
                <InputComponent left={
                    <HeroIcon iconName="MagnifyingGlassIcon" />
                } classname="border-2 border-red-100" placeholder="Search token name" />
                <Grid className="w-full">
                    <ul className="bg-white mt-4">
                        {item.map((item, index) => (
                            <li className="hover:border-red-100 hover:border-2 rounded-xl" onClick={() => {
                                setSelected(() => item)
                                setOpenModal(()=>false)
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
                <Image src={item.icon} classname="h-8 w-8" />
            </Grid>
            <Grid>
                <h2 className="font-black">{item.name}</h2>
                <h2 className="text-gray-400 text-sm">{item.label}</h2>
            </Grid>
            <Grid className="items-end w-full">
                <h2 className="font-black text-gray-500">8.50</h2>
            </Grid>
        </Block>
    )
}