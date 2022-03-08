import { Test, TestingModule } from '@nestjs/testing';
import { FilekitaService } from './filekita.service';

describe('FilekitaService', () => {
  let service: FilekitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilekitaService],
    }).compile();

    service = module.get<FilekitaService>(FilekitaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
