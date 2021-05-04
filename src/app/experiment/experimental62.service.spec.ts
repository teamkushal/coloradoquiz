import { TestBed } from '@angular/core/testing';

import { Experimental62Service } from './experimental62.service';

describe('Experimental62Service', () => {
  let service: Experimental62Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental62Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
