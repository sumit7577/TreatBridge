import React from "react";
import styled from "styled-components";

type ImageProps = {
    classname?: string
} & React.ImgHTMLAttributes<HTMLImageElement>


const Image = (props: ImageProps) => {
    const { classname } = props;
    return (
        <ImageComp {...props} className={`object-contain m-1 ${classname}`} decoding="async" />
    )
}

const ImageComp = styled.img`
    max-height:100%;
    max-width:100%;
`


export default Image;