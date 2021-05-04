import { TestBed } from '@angular/core/testing';

import { Experimental505Service } from './experimental505.service';

describe('Experimental505Service', () => {
  let service: Experimental505Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental505Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
