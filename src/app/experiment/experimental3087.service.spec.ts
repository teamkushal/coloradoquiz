import { TestBed } from '@angular/core/testing';

import { Experimental3087Service } from './experimental3087.service';

describe('Experimental3087Service', () => {
  let service: Experimental3087Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3087Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
