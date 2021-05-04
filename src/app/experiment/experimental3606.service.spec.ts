import { TestBed } from '@angular/core/testing';

import { Experimental3606Service } from './experimental3606.service';

describe('Experimental3606Service', () => {
  let service: Experimental3606Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3606Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
