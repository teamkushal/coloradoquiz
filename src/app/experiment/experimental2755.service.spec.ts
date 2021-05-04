import { TestBed } from '@angular/core/testing';

import { Experimental2755Service } from './experimental2755.service';

describe('Experimental2755Service', () => {
  let service: Experimental2755Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2755Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
