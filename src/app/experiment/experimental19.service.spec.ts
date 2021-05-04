import { TestBed } from '@angular/core/testing';

import { Experimental19Service } from './experimental19.service';

describe('Experimental19Service', () => {
  let service: Experimental19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
