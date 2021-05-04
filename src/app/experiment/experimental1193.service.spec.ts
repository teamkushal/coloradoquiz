import { TestBed } from '@angular/core/testing';

import { Experimental1193Service } from './experimental1193.service';

describe('Experimental1193Service', () => {
  let service: Experimental1193Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1193Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
