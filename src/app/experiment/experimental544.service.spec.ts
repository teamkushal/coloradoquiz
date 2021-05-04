import { TestBed } from '@angular/core/testing';

import { Experimental544Service } from './experimental544.service';

describe('Experimental544Service', () => {
  let service: Experimental544Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental544Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
