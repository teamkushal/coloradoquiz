import { TestBed } from '@angular/core/testing';

import { Experimental1698Service } from './experimental1698.service';

describe('Experimental1698Service', () => {
  let service: Experimental1698Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1698Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
