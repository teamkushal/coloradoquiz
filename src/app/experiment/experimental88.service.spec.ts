import { TestBed } from '@angular/core/testing';

import { Experimental88Service } from './experimental88.service';

describe('Experimental88Service', () => {
  let service: Experimental88Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental88Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
