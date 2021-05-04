import { TestBed } from '@angular/core/testing';

import { Experimental461Service } from './experimental461.service';

describe('Experimental461Service', () => {
  let service: Experimental461Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental461Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
