import { TestBed } from '@angular/core/testing';

import { Experimental1681Service } from './experimental1681.service';

describe('Experimental1681Service', () => {
  let service: Experimental1681Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1681Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
