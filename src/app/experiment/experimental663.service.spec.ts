import { TestBed } from '@angular/core/testing';

import { Experimental663Service } from './experimental663.service';

describe('Experimental663Service', () => {
  let service: Experimental663Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental663Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
