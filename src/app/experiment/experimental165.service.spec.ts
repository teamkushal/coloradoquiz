import { TestBed } from '@angular/core/testing';

import { Experimental165Service } from './experimental165.service';

describe('Experimental165Service', () => {
  let service: Experimental165Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental165Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
