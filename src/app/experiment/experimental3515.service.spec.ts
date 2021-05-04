import { TestBed } from '@angular/core/testing';

import { Experimental3515Service } from './experimental3515.service';

describe('Experimental3515Service', () => {
  let service: Experimental3515Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3515Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
