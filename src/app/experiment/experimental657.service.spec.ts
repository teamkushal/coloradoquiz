import { TestBed } from '@angular/core/testing';

import { Experimental657Service } from './experimental657.service';

describe('Experimental657Service', () => {
  let service: Experimental657Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental657Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
