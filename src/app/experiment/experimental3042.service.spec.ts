import { TestBed } from '@angular/core/testing';

import { Experimental3042Service } from './experimental3042.service';

describe('Experimental3042Service', () => {
  let service: Experimental3042Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3042Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
