import { TestBed } from '@angular/core/testing';

import { Experimental957Service } from './experimental957.service';

describe('Experimental957Service', () => {
  let service: Experimental957Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental957Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
