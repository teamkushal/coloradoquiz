import { TestBed } from '@angular/core/testing';

import { Experimental847Service } from './experimental847.service';

describe('Experimental847Service', () => {
  let service: Experimental847Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental847Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
