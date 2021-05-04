import { TestBed } from '@angular/core/testing';

import { Experimental392Service } from './experimental392.service';

describe('Experimental392Service', () => {
  let service: Experimental392Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental392Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
