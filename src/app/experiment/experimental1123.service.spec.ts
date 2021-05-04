import { TestBed } from '@angular/core/testing';

import { Experimental1123Service } from './experimental1123.service';

describe('Experimental1123Service', () => {
  let service: Experimental1123Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1123Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
