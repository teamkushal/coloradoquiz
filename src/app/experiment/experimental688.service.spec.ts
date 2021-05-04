import { TestBed } from '@angular/core/testing';

import { Experimental688Service } from './experimental688.service';

describe('Experimental688Service', () => {
  let service: Experimental688Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental688Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
