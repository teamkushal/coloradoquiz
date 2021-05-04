import { TestBed } from '@angular/core/testing';

import { Experimental3485Service } from './experimental3485.service';

describe('Experimental3485Service', () => {
  let service: Experimental3485Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3485Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
