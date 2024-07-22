import { TestBed } from '@angular/core/testing';

import { MmgCriticBackendService } from './mmg-critic-backend.service';

describe('MmgCriticBackendService', () => {
  let service: MmgCriticBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmgCriticBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
