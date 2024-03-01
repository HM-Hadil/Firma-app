import { TestBed } from '@angular/core/testing';

import { FallahServiceService } from './fallah-service.service';

describe('FallahServiceService', () => {
  let service: FallahServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FallahServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
