import { TestBed } from '@angular/core/testing';

import { Experimental3679Service } from './experimental3679.service';

describe('Experimental3679Service', () => {
  let service: Experimental3679Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3679Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
