import { TestBed } from '@angular/core/testing';

import { Experimental566Service } from './experimental566.service';

describe('Experimental566Service', () => {
  let service: Experimental566Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental566Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
