import BookOnlineIcon from '@mui/icons-material/BookOnline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
export const dashboard_data = [
    {
        count: 754,
        name: 'Appointment',
        icon: <BookOnlineIcon style={{ color: 'Blue', fontSize: '50px' }} />,
        desc: '25% of target'
    },
    {
        count: 920,
        name: 'Operation',
        icon: <DeveloperBoardIcon style={{ color: 'Orange', fontSize: '50px' }} />,
        desc: '-10% of target'
    },
    {
        count: 112,
        name: 'New Patient',
        icon: <LocalParkingIcon style={{ color: 'SeaGreen', fontSize: '50px' }} />,
        desc: '9% of target'
    },
    {
        count: 12300,
        name: 'Total Income',
        icon: <AccountBalanceWalletIcon style={{ color: 'OrangeRed', fontSize: '50px' }} />,
        desc: '42% of target'
    },
];