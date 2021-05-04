import { TestBed } from '@angular/core/testing';

import { Experimental3563Service } from './experimental3563.service';

describe('Experimental3563Service', () => {
  let service: Experimental3563Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3563Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
