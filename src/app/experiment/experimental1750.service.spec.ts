import { TestBed } from '@angular/core/testing';

import { Experimental1750Service } from './experimental1750.service';

describe('Experimental1750Service', () => {
  let service: Experimental1750Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1750Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
