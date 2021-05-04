import { TestBed } from '@angular/core/testing';

import { Experimental3198Service } from './experimental3198.service';

describe('Experimental3198Service', () => {
  let service: Experimental3198Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3198Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
