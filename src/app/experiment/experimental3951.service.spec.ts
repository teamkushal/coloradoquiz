import { TestBed } from '@angular/core/testing';

import { Experimental3951Service } from './experimental3951.service';

describe('Experimental3951Service', () => {
  let service: Experimental3951Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3951Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
