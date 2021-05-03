import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1868Component } from './test-component1868.component';

describe('TestComponent1868Component', () => {
  let component: TestComponent1868Component;
  let fixture: ComponentFixture<TestComponent1868Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1868Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
