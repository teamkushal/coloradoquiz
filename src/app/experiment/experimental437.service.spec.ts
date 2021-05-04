import { TestBed } from '@angular/core/testing';

import { Experimental437Service } from './experimental437.service';

describe('Experimental437Service', () => {
  let service: Experimental437Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental437Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
