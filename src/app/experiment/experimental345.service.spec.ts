import { TestBed } from '@angular/core/testing';

import { Experimental345Service } from './experimental345.service';

describe('Experimental345Service', () => {
  let service: Experimental345Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental345Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
