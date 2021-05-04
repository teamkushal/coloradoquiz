import { TestBed } from '@angular/core/testing';

import { Experimental721Service } from './experimental721.service';

describe('Experimental721Service', () => {
  let service: Experimental721Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental721Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
