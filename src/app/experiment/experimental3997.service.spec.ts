import { TestBed } from '@angular/core/testing';

import { Experimental3997Service } from './experimental3997.service';

describe('Experimental3997Service', () => {
  let service: Experimental3997Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3997Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
