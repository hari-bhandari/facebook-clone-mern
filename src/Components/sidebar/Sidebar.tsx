import React from 'react';
import { ExpandMoreOutlined } from '@material-ui/icons';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import {SidebarContainer} from "./Sidebar.CSS";
import SidebarRow from "./SidebarRow";
function Sidebar() {

    return (
        <SidebarContainer>
            <SidebarRow
                src="Hari"
                title={"Hari Bhandari"}
            />
            <SidebarRow
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="More" />
        </SidebarContainer>
    );
}

export default Sidebar;
