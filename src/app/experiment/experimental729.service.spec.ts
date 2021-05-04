import { TestBed } from '@angular/core/testing';

import { Experimental729Service } from './experimental729.service';

describe('Experimental729Service', () => {
  let service: Experimental729Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental729Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
