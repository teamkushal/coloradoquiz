import { TestBed } from '@angular/core/testing';

import { Experimental2417Service } from './experimental2417.service';

describe('Experimental2417Service', () => {
  let service: Experimental2417Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2417Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
