import { TestBed } from '@angular/core/testing';

import { Experimental378Service } from './experimental378.service';

describe('Experimental378Service', () => {
  let service: Experimental378Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental378Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
