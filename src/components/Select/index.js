import {SelectWrapper} from './select-styled';

function Select({placeholder, selected, options, onChange}) {
  return <SelectWrapper onChange={onChange}>
    {!selected && <option value='' hidden>{placeholder}</option>}
    {options.map(option => {
      if (option === selected) {
        return <option key={option} selected={selected} value={option}>{option}</option>
      } else {
        return <option key={option} value={option}>{option}</option>
      }
    })}
  </SelectWrapper>
}

export default Select;