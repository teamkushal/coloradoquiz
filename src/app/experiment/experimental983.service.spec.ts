import { TestBed } from '@angular/core/testing';

import { Experimental983Service } from './experimental983.service';

describe('Experimental983Service', () => {
  let service: Experimental983Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental983Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
