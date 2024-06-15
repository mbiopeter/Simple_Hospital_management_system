import React, { useMemo } from 'react';
import './List.css';
import { Link } from 'react-router-dom';
import Datatable from '../../Datatable/Datatable';
const List = ({title,path,button,data,columns }) => {

    return (
        <div className="list">
            <div className="list-title">
                <span>{title}</span>
                <Link to={path} style={{textDecoration:'none'}}>
                    {button && (<button>{button}</button>)}
                </Link>
            </div>
            <Datatable data={data} columns={columns} />
        </div>
    );
};

export default List;
