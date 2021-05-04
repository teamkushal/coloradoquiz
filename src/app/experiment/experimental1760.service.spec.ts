import { TestBed } from '@angular/core/testing';

import { Experimental1760Service } from './experimental1760.service';

describe('Experimental1760Service', () => {
  let service: Experimental1760Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1760Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
