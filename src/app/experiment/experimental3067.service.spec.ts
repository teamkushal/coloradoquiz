import { TestBed } from '@angular/core/testing';

import { Experimental3067Service } from './experimental3067.service';

describe('Experimental3067Service', () => {
  let service: Experimental3067Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3067Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
