import { TestBed } from '@angular/core/testing';

import { MobyApiService } from './moby-api.service';

describe('MobyApiService', () => {
  let service: MobyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
