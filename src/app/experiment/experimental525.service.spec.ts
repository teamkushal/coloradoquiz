import { TestBed } from '@angular/core/testing';

import { Experimental525Service } from './experimental525.service';

describe('Experimental525Service', () => {
  let service: Experimental525Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental525Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
