import { TestBed } from '@angular/core/testing';

import { Experimental3978Service } from './experimental3978.service';

describe('Experimental3978Service', () => {
  let service: Experimental3978Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3978Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
