import { TestBed } from '@angular/core/testing';

import { Experimental3695Service } from './experimental3695.service';

describe('Experimental3695Service', () => {
  let service: Experimental3695Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3695Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
