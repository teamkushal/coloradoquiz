import { TestBed } from '@angular/core/testing';

import { Experimental453Service } from './experimental453.service';

describe('Experimental453Service', () => {
  let service: Experimental453Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental453Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
