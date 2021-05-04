import { TestBed } from '@angular/core/testing';

import { Experimental870Service } from './experimental870.service';

describe('Experimental870Service', () => {
  let service: Experimental870Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental870Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
