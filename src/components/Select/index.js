import { useEffect, useState } from "react";
import { SelectWrapper } from "./select-styled";

function Select({ placeholder, selected, options, onChange }) {
  const [currentOptions, setCurrentOptions] = useState([]);

  useEffect(() => {
    const resultOptions = options.map((item) => {
      return item.name;
    });
    setCurrentOptions(resultOptions);
  }, [options]);

  return (
    <SelectWrapper onChange={onChange}>
      {!selected && (
        <option value="" hidden>
          {placeholder}
        </option>
      )}
      {currentOptions &&
        currentOptions.map((option) => {
          if (option === selected) {
            return (
              <option key={option} selected={selected} value={option}>
                {option}
              </option>
            );
          } else {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          }
        })}
    </SelectWrapper>
  );
}

export default Select;
