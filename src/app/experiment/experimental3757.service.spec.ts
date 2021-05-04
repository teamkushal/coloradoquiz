import { TestBed } from '@angular/core/testing';

import { Experimental3757Service } from './experimental3757.service';

describe('Experimental3757Service', () => {
  let service: Experimental3757Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3757Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
