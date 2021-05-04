import { TestBed } from '@angular/core/testing';

import { Experimental832Service } from './experimental832.service';

describe('Experimental832Service', () => {
  let service: Experimental832Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental832Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
