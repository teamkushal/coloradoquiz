import { TestBed } from '@angular/core/testing';

import { Experimental98Service } from './experimental98.service';

describe('Experimental98Service', () => {
  let service: Experimental98Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental98Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
