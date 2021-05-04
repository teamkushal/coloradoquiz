import { TestBed } from '@angular/core/testing';

import { Experimental268Service } from './experimental268.service';

describe('Experimental268Service', () => {
  let service: Experimental268Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental268Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
