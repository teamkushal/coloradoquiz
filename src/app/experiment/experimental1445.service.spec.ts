import { TestBed } from '@angular/core/testing';

import { Experimental1445Service } from './experimental1445.service';

describe('Experimental1445Service', () => {
  let service: Experimental1445Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1445Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
