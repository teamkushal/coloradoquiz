import { TestBed } from '@angular/core/testing';

import { Experimental3586Service } from './experimental3586.service';

describe('Experimental3586Service', () => {
  let service: Experimental3586Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3586Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
