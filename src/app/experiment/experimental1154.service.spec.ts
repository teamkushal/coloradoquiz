import { TestBed } from '@angular/core/testing';

import { Experimental1154Service } from './experimental1154.service';

describe('Experimental1154Service', () => {
  let service: Experimental1154Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1154Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
