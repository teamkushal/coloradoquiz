import { TestBed } from '@angular/core/testing';

import { Experimental883Service } from './experimental883.service';

describe('Experimental883Service', () => {
  let service: Experimental883Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental883Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
