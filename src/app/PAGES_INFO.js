export const PAGES_INFO = ([

    {
        _id: 1,
        route: "/",
        name: "home",
        title: "Home",
        icon: 'fas fa-home',
        parents: [],
        sideBar: {
            parent_id: '',
            name: 'Home',
        }
    },
    {
        _id: 2,
        route: "/projects",
        name: "Projects",
        title: "Project List",
        icon: 'fas fa-dna',
        parents: [1],
        sideBar: {
            parent_id: '',
            name: 'Projekten',
        }
    },
    {
        _id: 3,
        route: "/project/:id",
        name: "Project",
        title: "Projekt Details",
        icon: 'fas fa-calendar-week',
        parents: [1, 2],
        sideBar: {
            parent_id: '2',
            name: '',
        }
    },
    {
        _id: 4,
        route: "/users",
        name: "Users",
        title: "Benuzern Liste",
        icon: 'fas fa-users',
        parents: [1],
        sideBar: {
            parent_id: '',
            name: 'Benutzern',
        }
    },
    {
        _id: 5,
        route: "/user/:id",
        title: "Benutzer details",
        icon: 'fas fa-users-cog',
        name: "User",
        parents: [1, 4],
        sideBar: {
            parent_id: '',
            name: '',
        }
    },
    {
        _id: 6,
        route: "/instypes",
        title: "Instite Typpen Liste",
        icon: 'fas fa-city',
        name: "InsTypes",
        parents: [1],
        sideBar: {
            parent_id: '',
            name: 'Einrichtung typpen',
        }
    },
    {
        _id: 7,
        route: "/instype/:id",
        title: "Institiute-Type details",
        icon: 'fas fa-city',
        name: "InsType",
        parents: [1, 6],
        sideBar: {
            parent_id: '',
            name: '',
        }
    },
    {
        _id: 8,
        route: "/institutes",
        title: "Institute List",
        icon: 'fas fa-building',
        name: "Institutes",
        parents: [1],
        sideBar: {
            parent_id: '',
            name: 'Einrichtungen',
        }
    },
    {
        _id: 9,
        route: "/institute/:id",
        title: "Institiute details",
        icon: '',
        name: "Institute",
        parents: [1, 8],
        sideBar: {
            parent_id: '',
            name: '',
        }
    },
    {
        _id: 10,
        route: "/apis",
        title: "API List",
        icon: 'fas fa-concierge-bell',
        name: "Apis",
        parents: [1],
        sideBar: {
            parent_id: '',
            name: 'API List',
        }
    },
    {
        _id: 11,
        route: "/api/:id",
        title: "API verwalten",
        icon: 'fas fa-concierge-bell',
        name: "Api",
        parents: [1, 10],
        sideBar: {
            parent_id: '',
            name: '',
        }
    },
    {
        _id: 12,
        route: "/controller/:id",
        title: "Controller verwalten",
        icon: '',
        name: "Controller",
        parents: [1, 10],
        sideBar: {
            parent_id: '',
            name: '',
        }
    },
    {
        _id: 13,
        route: "/permission/:id",
        title: "Permission verwalten",
        icon: '',
        name: "Permission",
        parents: [1, 2, 3],
        sideBar: {
            parent_id: '',
            name: '',
        }
    }
])
export default PAGES_INFO