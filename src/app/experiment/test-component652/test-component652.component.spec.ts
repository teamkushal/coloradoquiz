import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent652Component } from './test-component652.component';

describe('TestComponent652Component', () => {
  let component: TestComponent652Component;
  let fixture: ComponentFixture<TestComponent652Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent652Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
