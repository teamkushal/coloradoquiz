import { TestBed } from '@angular/core/testing';

import { Experimental686Service } from './experimental686.service';

describe('Experimental686Service', () => {
  let service: Experimental686Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental686Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
