import { TestBed } from '@angular/core/testing';

import { Experimental3349Service } from './experimental3349.service';

describe('Experimental3349Service', () => {
  let service: Experimental3349Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3349Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
