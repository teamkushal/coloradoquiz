import { TestBed } from '@angular/core/testing';

import { Experimental723Service } from './experimental723.service';

describe('Experimental723Service', () => {
  let service: Experimental723Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental723Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
