import { TestBed } from '@angular/core/testing';

import { Experimental3927Service } from './experimental3927.service';

describe('Experimental3927Service', () => {
  let service: Experimental3927Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3927Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
