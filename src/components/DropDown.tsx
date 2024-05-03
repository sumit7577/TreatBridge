import { SetStateAction, useState } from "react";
import Grid from "./Grid";
import Block from "./Block";
import HeroIcon from "./Icon";
import Image from "./Image";
import Modal from "./Modal";
import InputComponent from "./Input";
import List from "./List";

interface DropDownProps<K> extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    item: Array<{ name: string, icon: string }>,
    checkbox?: boolean,
    right?: boolean,
    left?: boolean,
    selected?: { name: string, icon: string },
    setSelected?: (item: string) => void,
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
                } classname="border border-red-100" placeholder="Search token name" />
                <List />
            </Modal>
        </Grid>
    )
}


const List = (item: { name: string, icon: string, label: string }) => {
    return (
        <Block>
            <Grid>
                <Image src={item?.icon} classname="h-8 w-8" />
            </Grid>
            <Grid>
                <h2>{item.name}</h2>
                <h2>{item.label}</h2>
            </Grid>
            <Grid>
                <h2>8.50</h2>
            </Grid>
        </Block>
    )
}