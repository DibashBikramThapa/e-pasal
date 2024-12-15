import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

function DefaultAccordion({ title, description }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="accordion-span text-white hover:text-gray-500 bg-gray-900 p-4 flex justify-between"
        >
          <div>{title}</div>
          {open == 1 ? (
            <IoMdArrowDropup className="text-[1.5rem]" />
          ) : (
            <IoMdArrowDropright className="text-[1.5rem]" />
          )}
        </AccordionHeader>
        <AccordionBody className="text-white border-bottom">
          {description}
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default DefaultAccordion;
