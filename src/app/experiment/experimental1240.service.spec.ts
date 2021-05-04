import { TestBed } from '@angular/core/testing';

import { Experimental1240Service } from './experimental1240.service';

describe('Experimental1240Service', () => {
  let service: Experimental1240Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1240Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
