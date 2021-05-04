import { TestBed } from '@angular/core/testing';

import { Experimental523Service } from './experimental523.service';

describe('Experimental523Service', () => {
  let service: Experimental523Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental523Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
