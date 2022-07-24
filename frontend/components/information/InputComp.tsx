import { Button, Tooltip } from "@mui/material";
import React, { ChangeEventHandler } from "react";
import { Fieldset } from "./formStyled";
import HelpIcon from "@mui/icons-material/Help";

type inputTypes = {
  label: string;
  tootip?: {
    title: string;
    placement?:
      | "bottom-end"
      | "bottom-start"
      | "bottom"
      | "left-end"
      | "left-start"
      | "left"
      | "right-end"
      | "right-start"
      | "right"
      | "top-end"
      | "top-start"
      | "top";
  };
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const InputComp = ({ label, tootip, onChange, name }: inputTypes) => {
  return (
    <Fieldset>
      <div className="field field--required">
        <div className="field__input-wrapper">
          <input
            placeholder={label}
            className="field__input"
            type={label === "Email" ? "email" : "text"}
            name={name}
            onChange={onChange}
          />
          <label
            className="field__label field__label--visible"
            htmlFor="checkout"
          >
            {label}
          </label>
        </div>

        {tootip && (
          <Tooltip
            sx={{ width: "15px" }}
            placement={tootip.placement}
            title={tootip.title}
            arrow
          >
            <HelpIcon
              sx={{
                position: "relative",
                left: "520px",
                bottom: "35px",
                cursor: "pointer",
                width: "25px",
                height: "21px",
                color: "#919191",
              }}
            />
          </Tooltip>
        )}
      </div>
    </Fieldset>
  );
};

export default InputComp;
