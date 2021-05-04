import { TestBed } from '@angular/core/testing';

import { Experimental799Service } from './experimental799.service';

describe('Experimental799Service', () => {
  let service: Experimental799Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental799Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
