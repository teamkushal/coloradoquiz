import { TestBed } from '@angular/core/testing';

import { Experimental535Service } from './experimental535.service';

describe('Experimental535Service', () => {
  let service: Experimental535Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental535Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
