import { TestBed } from '@angular/core/testing';

import { Experimental874Service } from './experimental874.service';

describe('Experimental874Service', () => {
  let service: Experimental874Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental874Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
