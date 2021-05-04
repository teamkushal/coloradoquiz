import { TestBed } from '@angular/core/testing';

import { Experimental997Service } from './experimental997.service';

describe('Experimental997Service', () => {
  let service: Experimental997Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental997Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
