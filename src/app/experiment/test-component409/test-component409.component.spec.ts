import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent409Component } from './test-component409.component';

describe('TestComponent409Component', () => {
  let component: TestComponent409Component;
  let fixture: ComponentFixture<TestComponent409Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent409Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
