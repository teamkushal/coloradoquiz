import { TestBed } from '@angular/core/testing';

import { Experimental398Service } from './experimental398.service';

describe('Experimental398Service', () => {
  let service: Experimental398Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental398Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
