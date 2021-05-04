import { TestBed } from '@angular/core/testing';

import { Experimental1363Service } from './experimental1363.service';

describe('Experimental1363Service', () => {
  let service: Experimental1363Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1363Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
