import { TestBed } from '@angular/core/testing';

import { Experimental105Service } from './experimental105.service';

describe('Experimental105Service', () => {
  let service: Experimental105Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental105Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
