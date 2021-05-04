import { TestBed } from '@angular/core/testing';

import { Experimental1652Service } from './experimental1652.service';

describe('Experimental1652Service', () => {
  let service: Experimental1652Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1652Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
