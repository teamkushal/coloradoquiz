import { TestBed } from '@angular/core/testing';

import { Experimental175Service } from './experimental175.service';

describe('Experimental175Service', () => {
  let service: Experimental175Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental175Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
