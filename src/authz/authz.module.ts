import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthzGuard } from './authz.guard';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  exports: [PassportModule, JwtStrategy],
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [JwtStrategy, AuthzGuard],
})
export class AuthzModule {}
