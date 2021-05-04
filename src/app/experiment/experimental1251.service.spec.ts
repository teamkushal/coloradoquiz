import { TestBed } from '@angular/core/testing';

import { Experimental1251Service } from './experimental1251.service';

describe('Experimental1251Service', () => {
  let service: Experimental1251Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1251Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
