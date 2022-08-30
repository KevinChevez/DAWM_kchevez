import { TestBed } from '@angular/core/testing';

import { FuenteService } from './fuente.service';

describe('FuenteService', () => {
  let service: FuenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
