// NAVBARS
import NavbarDesign1 from '../components/PrebuiltComponents/Navbars/NavbarDesign1';
import NavbarDesign2 from '../components/PrebuiltComponents/Navbars/NavbarDesign2';
import NavbarDesign3 from '../components/PrebuiltComponents/Navbars/NavbarDesign3';

// HEROES
import HeroDesign1 from '../components/PrebuiltComponents/Heroes/HeroDesign1';
import HeroDesign2 from '../components/PrebuiltComponents/Heroes/HeroDesign2';

// BANNERS
import BannerDesign1 from '../components/PrebuiltComponents/Banners/BannerDesign1';
import BannerDesign2 from '../components/PrebuiltComponents/Banners/BannerDesign2';
import BannerDesign3 from '../components/PrebuiltComponents/Banners/BannerDesign3';

// CARTS
import CartDesign1 from '../components/PrebuiltComponents/Carts/CartDesign1';
import CartDesign2 from '../components/PrebuiltComponents/Carts/CartDesign2';
import CartDesign3 from '../components/PrebuiltComponents/Carts/CartDesign3';

// COURSES
import NewCourseDesign1 from '../components/PrebuiltComponents/Courses/NewCourseDesign1';
import NewCourseDesign2 from '../components/PrebuiltComponents/Courses/NewCourseDesign2';
import NewCourseDesign3 from '../components/PrebuiltComponents/Courses/NewCourseDesign3';

// AVAILABLE COURSES
import AvailableCourseDesign1 from '../components/PrebuiltComponents/AvailableCourse/AvailableCourseDesign1';
import AvailableCourseDesign2 from '../components/PrebuiltComponents/AvailableCourse/AvailableCourseDesign2';

// FOOTERS
import FooterDesign1 from '../components/PrebuiltComponents/Footers/FooterDesign1';
import FooterDesign2 from '../components/PrebuiltComponents/Footers/FooterDesign2';
import FooterDesign3 from '../components/PrebuiltComponents/Footers/FooterDesign3';

export const componentMap = {
    // NAVBARS
    'NavbarDesign1': NavbarDesign1,
    'NavbarDesign2': NavbarDesign2,
    'NavbarDesign3': NavbarDesign3,

    // HEROES
    'HeroDesign1': HeroDesign1,
    'HeroDesign2': HeroDesign2,

    // BANNERS
    'BannerDesign1': BannerDesign1,
    'BannerDesign2': BannerDesign2,
    'BannerDesign3': BannerDesign3,

    // CARTS
    'CartDesign1': CartDesign1,
    'CartDesign2': CartDesign2,
    'CartDesign3': CartDesign3,

    // COURSES
    'NewCourseDesign1': NewCourseDesign1,
    'NewCourseDesign2': NewCourseDesign2,
    'NewCourseDesign3': NewCourseDesign3,

    // AVAILABLE COURSES
    'AvailableCourseDesign1': AvailableCourseDesign1,
    'AvailableCourseDesign2': AvailableCourseDesign2,

    // FOOTERS
    'FooterDesign1': FooterDesign1,
    'FooterDesign2': FooterDesign2,
    'FooterDesign3': FooterDesign3
};

export const getComponentByType = (type) => {
    return componentMap[type] || null;
};