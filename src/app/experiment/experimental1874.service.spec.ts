import { TestBed } from '@angular/core/testing';

import { Experimental1874Service } from './experimental1874.service';

describe('Experimental1874Service', () => {
  let service: Experimental1874Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1874Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
