import PhotosPage from '../features/photos-page';
import CreateUserPage from '../features/users/create-user-page';
import UsersPage from '../features/users/users-page';
import UpdateUserPage from '../features/users/update-user-page';

const routesConfig = {
    photos: {
        path: '/',
        component: PhotosPage
    },
    createUser: {
        path: '/users/create',
        component: CreateUserPage
    },    
    updateUser: {
        path: '/users/update/:id',
        component: UpdateUserPage
    },
    users: {
        path: '/users',
        component: UsersPage
    }
}

export default routesConfig;