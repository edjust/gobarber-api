import 'reflect-metadata';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import ListProviderService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;
let listProviders: ListProviderService;

describe('ListProviders', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
        fakeCacheProvider = new FakeCacheProvider();

        listProviders = new ListProviderService(
            fakeUsersRepository,
            fakeCacheProvider,
        );
    });

    it('should be able to list the providers', async () => {
        const user1 = await fakeUsersRepository.create({
            name: 'John Doe',
            email: 'johndoe@hotmail.com',
            password: 'johndoe123',
        });

        const user2 = await fakeUsersRepository.create({
            name: 'John Tre',
            email: 'johntre@hotmail.com',
            password: 'johntre123',
        });

        const loggedUser = await fakeUsersRepository.create({
            name: 'John Qua',
            email: 'johnqua@hotmail.com',
            password: 'johnqua123',
        });

        const providers = await listProviders.execute({
            user_id: loggedUser.id,
        });

        expect(providers).toEqual([user1, user2]);
    });
});
