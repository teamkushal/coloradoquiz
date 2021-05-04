import { TestBed } from '@angular/core/testing';

import { Experimental1159Service } from './experimental1159.service';

describe('Experimental1159Service', () => {
  let service: Experimental1159Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1159Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
