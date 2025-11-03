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

    // FOOTERS
    'FooterDesign1': FooterDesign1,
    'FooterDesign2': FooterDesign2,
    'FooterDesign3': FooterDesign3
};

export const getComponentByType = (type) => {
    return componentMap[type] || null;
};