import { TestBed } from '@angular/core/testing';

import { Experimental202Service } from './experimental202.service';

describe('Experimental202Service', () => {
  let service: Experimental202Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental202Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
