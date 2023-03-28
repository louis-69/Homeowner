/* eslint-disable require-jsdoc */
import React from "react";
import Image from "next/image";
import House1 from "../../assets/House1.png"
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from '@mui/icons-material/MoreVert';


type propertiesProp = {
    propertyName?: string;
    location?: string;
    availability?: string;
    price?: number | string;
    image?: string;
    houseNumber?: string;
    houseType?: string;
};


const propertiesOptions = ["Edit", "Duplicate", "Archive", "Attach file", "Delete"];


const ITEM_HEIGHT = 48;

export default function PropertiesTable(props: propertiesProp) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
        
                                                <td className="w-4 p-4">
                                                    <div className="flex ">
                                                        <input
                                                            id="checkbox-table-1"
                                                            type="checkbox"
                                                            className="h-4 w-4 mb-[72px] border-[#FA790F] rounded-sm bg-[#FAFAFA] text-[#FA790F]"
                                                        />
                                                        <label
                                                            htmlFor="checkbox-table-1"
                                                            className="sr-only"
                                                        >
                                                            checkbox
                                                        </label>
                                                    </div>
                                                </td>
                                                <th className="justify-between mt-4 whitespace-nowrap pl-6 py-6">
                                                    <div>
                                                    <p>Modern Home</p>
                                                    <div className="flex w-">
                                                    
                                                    <Image src={House1} alt={"property image"} className="w-[73px] rounded-lg mt-2 h-[65px]" />
                                                    <div className="ml-3 mt-4">
                                                    <p className="font-normal text-sm leading-[130%]  text-[#2E2D37]"><span className="text-[#818187]">House no:</span> {props.houseNumber}</p>
                                                    <p className="mt-3 font-normal text-sm leading-[130%] text-[#2E2D37]"><span className="text-[#818187]">Type:</span> {props.houseType}</p>
                                                    </div>
                                                    </div>
                                                    </div>
                                                </th>
                                                <td className="px-6 pb-16">
                                                    <p>{props.location}</p>
                                                </td>
                                                <td className="px-6 pb-16">
                                                    {props.availability}
                                                </td>
                                                <td className="px-6 pb-16">
                                                    {props.price}
                                                </td>

                            

                                                <td className="pl-6 pb-16">
                                                <div>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={
                                            open ? "long-menu" : undefined
                                        }
                                        aria-expanded={
                                            open ? "true" : undefined
                                        }
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                            "aria-labelledby": "long-button",
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        disableScrollLock= {true}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: "20ch",
                                                position: "absolute",
                                            },
                                        }}
                                    >
                                        {propertiesOptions.map((option) => (
                                            <MenuItem
                                                key={option}
                                                selected={option === "Pyxis"}
                                                onClick={handleClose}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </div>
                                                </td>
                                               
                                    

                                                </>
    )};





