import { TestBed } from '@angular/core/testing';

import { Experimental788Service } from './experimental788.service';

describe('Experimental788Service', () => {
  let service: Experimental788Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental788Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
