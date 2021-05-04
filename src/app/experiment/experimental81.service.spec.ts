import { TestBed } from '@angular/core/testing';

import { Experimental81Service } from './experimental81.service';

describe('Experimental81Service', () => {
  let service: Experimental81Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental81Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
