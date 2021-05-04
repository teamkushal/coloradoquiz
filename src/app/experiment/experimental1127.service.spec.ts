import { TestBed } from '@angular/core/testing';

import { Experimental1127Service } from './experimental1127.service';

describe('Experimental1127Service', () => {
  let service: Experimental1127Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1127Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
