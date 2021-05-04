import { TestBed } from '@angular/core/testing';

import { Experimental752Service } from './experimental752.service';

describe('Experimental752Service', () => {
  let service: Experimental752Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental752Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
