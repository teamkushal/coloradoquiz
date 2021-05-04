import { TestBed } from '@angular/core/testing';

import { Experimental3938Service } from './experimental3938.service';

describe('Experimental3938Service', () => {
  let service: Experimental3938Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3938Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
