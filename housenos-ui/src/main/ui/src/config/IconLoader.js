import { library } from '@fortawesome/fontawesome-svg-core';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faCity} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faUniversity} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faStreetView} from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
import {faIdCard} from '@fortawesome/free-solid-svg-icons';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

export const LoadIcons = () => {
    library.add(
        faUser,
        faLock,
        faPhone,
        faEnvelope,
        faAddressCard,
        faCity,
        faBriefcase,
        faHome,
        faUniversity,
        faSearch,
        faStreetView,
        faCog,
        faPowerOff,
        faIdCard,
        faSignInAlt,
        faUserPlus,
        faCheckCircle,
        faExclamationCircle
    );
};