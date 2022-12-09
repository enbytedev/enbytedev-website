import BasicRoutes from './basic/basicRoutes.js';
import AccessRoutes from './basic/accessRoutes.js';

class RoutesAggregate {
    constructor() {
        this.basic = new BasicRoutes();
        this.access = new AccessRoutes();
    }
    public basic;
    public access;
}

export default RoutesAggregate