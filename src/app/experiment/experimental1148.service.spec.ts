import { TestBed } from '@angular/core/testing';

import { Experimental1148Service } from './experimental1148.service';

describe('Experimental1148Service', () => {
  let service: Experimental1148Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1148Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
