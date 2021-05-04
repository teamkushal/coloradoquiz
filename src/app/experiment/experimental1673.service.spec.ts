import { TestBed } from '@angular/core/testing';

import { Experimental1673Service } from './experimental1673.service';

describe('Experimental1673Service', () => {
  let service: Experimental1673Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1673Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
