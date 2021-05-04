import { TestBed } from '@angular/core/testing';

import { Experimental3106Service } from './experimental3106.service';

describe('Experimental3106Service', () => {
  let service: Experimental3106Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3106Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
