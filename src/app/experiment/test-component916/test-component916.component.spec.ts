import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent916Component } from './test-component916.component';

describe('TestComponent916Component', () => {
  let component: TestComponent916Component;
  let fixture: ComponentFixture<TestComponent916Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent916Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
