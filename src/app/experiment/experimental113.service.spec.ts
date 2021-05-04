import { TestBed } from '@angular/core/testing';

import { Experimental113Service } from './experimental113.service';

describe('Experimental113Service', () => {
  let service: Experimental113Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental113Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
