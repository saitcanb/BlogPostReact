import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchWidget from "./SearchWidget";
import CategoriesWidget from "./CategoriesWidget";
import SideWidget from "./SideWidget";

class SidebarColumn extends Component {

    render() {
        return (
            <div>
                <SearchWidget/>
                <CategoriesWidget/>
                <SideWidget/>
            </div>
        );
    }
}

export default SidebarColumn;
