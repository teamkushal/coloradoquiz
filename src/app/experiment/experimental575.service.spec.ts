import { TestBed } from '@angular/core/testing';

import { Experimental575Service } from './experimental575.service';

describe('Experimental575Service', () => {
  let service: Experimental575Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental575Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
