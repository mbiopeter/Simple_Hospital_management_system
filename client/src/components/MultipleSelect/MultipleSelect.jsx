import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelectChip({ names, placeholder, handleOnChange, name, user, setUser }) {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState(user[name] || []);

    React.useEffect(() => {
        setPersonName(user[name] || []);
    }, [user, name]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        const newValues = typeof value === 'string' ? value.split(',') : value;
        setPersonName(newValues);
        setUser((prevState) => ({
            ...prevState,
            [name]: newValues,
        }));
        handleOnChange({ target: { name, value: newValues } });
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 'calc(100%)' }}>
                <InputLabel id="demo-multiple-chip-label">{placeholder}</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                            style={getStyles(item, personName, theme)}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}