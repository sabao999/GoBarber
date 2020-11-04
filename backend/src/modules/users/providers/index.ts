import { container } from 'tsyringe';
import IHashProvider from './HashProvider/models/IHashPorvider';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
