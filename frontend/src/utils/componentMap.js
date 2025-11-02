// Navbars
import NavbarDesign1 from '../components/PrebuiltComponents/Navbars/NavbarDesign1';
import NavbarDesign2 from '../components/PrebuiltComponents/Navbars/NavbarDesign2';
import NavbarDesign3 from '../components/PrebuiltComponents/Navbars/NavbarDesign3';

// Heroes
import HeroDesign1 from '../components/PrebuiltComponents/Heroes/HeroDesign1';
import HeroDesign2 from '../components/PrebuiltComponents/Heroes/HeroDesign2';

// Banners
import BannerDesign1 from '../components/PrebuiltComponents/Banners/BannerDesign1';
import BannerDesign2 from '../components/PrebuiltComponents/Banners/BannerDesign2';
import BannerDesign3 from '../components/PrebuiltComponents/Banners/BannerDesign3';

export const componentMap = {
    // Navbars
    'NavbarDesign1': NavbarDesign1,
    'NavbarDesign2': NavbarDesign2,
    'NavbarDesign3': NavbarDesign3,

    // Heroes
    'HeroDesign1': HeroDesign1,
    'HeroDesign2': HeroDesign2,

    // Banners
    'BannerDesign1': BannerDesign1,
    'BannerDesign2': BannerDesign2,
    'BannerDesign3': BannerDesign3,
};

export const getComponentByType = (type) => {
    return componentMap[type] || null;
};