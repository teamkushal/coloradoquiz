import { TestBed } from '@angular/core/testing';

import { Experimental821Service } from './experimental821.service';

describe('Experimental821Service', () => {
  let service: Experimental821Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental821Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
