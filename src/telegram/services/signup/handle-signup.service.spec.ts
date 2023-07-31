import { Test, TestingModule } from '@nestjs/testing';
import { HandleSignupService } from './handle-signup.service';

describe('HandleSignupService', () => {
  let service: HandleSignupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HandleSignupService],
    }).compile();

    service = module.get<HandleSignupService>(HandleSignupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
